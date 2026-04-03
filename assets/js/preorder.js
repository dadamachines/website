// =============================================================================
// dadamachines Pre-order System — Frontend JavaScript
// =============================================================================
// Handles multiple preorder forms on a single page.
// Each form is identified by data-product-id attribute.
// Fetches counts from Google Apps Script and submits form data.
// =============================================================================

(function () {
  'use strict';

  var CACHE_TTL = 60000; // 60 seconds localStorage cache

  // =========================================================================
  // Initialization
  // =========================================================================

  document.addEventListener('DOMContentLoaded', function () {
    var campaigns = document.querySelectorAll('.preorder-campaign');
    if (!campaigns.length) return;

    // Collect product IDs and endpoint from the page
    var productIds = [];
    var endpoint = '';
    campaigns.forEach(function (el) {
      var pid = el.getAttribute('data-product-id');
      if (pid) productIds.push(pid);
      if (!endpoint) endpoint = el.getAttribute('data-endpoint');
    });

    if (!endpoint || !productIds.length) return;

    // Fetch counts for all products on this page
    fetchCounts(endpoint, productIds, campaigns);

    // Check early-bird expiry client-side
    checkEarlyBirdExpiry(campaigns);

    // Bind form submissions
    campaigns.forEach(function (campaign) {
      var form = campaign.querySelector('.preorder-form');
      if (form) {
        form.addEventListener('submit', function (e) {
          e.preventDefault();
          handleSubmit(campaign, form, endpoint);
        });
      }
    });

    // Bind "Reserve now" / "or just get updates" buttons to reveal form panel
    document.querySelectorAll('.preorder-open-form').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var targetId = btn.getAttribute('data-target');
        var panel = document.getElementById(targetId);
        if (panel) {
          panel.style.display = 'block';
          panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
          var firstInput = panel.querySelector('input[type="text"], input[type="email"]');
          if (firstInput) {
            setTimeout(function () { firstInput.focus(); }, 400);
          }
        }
      });
    });

    // Bind close buttons on form panels
    document.querySelectorAll('.preorder-close-form').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var targetId = btn.getAttribute('data-target');
        var panel = document.getElementById(targetId);
        if (panel) {
          panel.style.display = 'none';
        }
      });
    });
  });

  // =========================================================================
  // Fetch Pre-order Counts
  // =========================================================================

  function fetchCounts(endpoint, productIds, campaigns) {
    // ── DEV MODE: simulated counts when endpoint is not configured ──
    if (endpoint.indexOf('YOUR_DEPLOYMENT_ID') !== -1) {
      var simulated = {
        'tbd-16':          { count: 73 },
        'tbd-core':        { count: 12 },
        'everydiv':        { count: 41 },
        'automat-mk2':     { count: 98 },
        'automat-modular': { count: 7 }
      };
      var devCounts = {};
      productIds.forEach(function (pid) {
        devCounts[pid] = simulated[pid] || { count: 0 };
      });
      updateAllProgress(devCounts, campaigns);
      return;
    }

    // Check localStorage cache first
    var cached = getCachedCounts(productIds);
    if (cached) {
      updateAllProgress(cached, campaigns);
      return;
    }

    var url = endpoint + '?products=' + encodeURIComponent(productIds.join(','));

    fetch(url, { method: 'GET' })
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (data.counts) {
          setCachedCounts(data.counts);
          updateAllProgress(data.counts, campaigns);
        }
      })
      .catch(function (err) {
        console.warn('Pre-order count fetch failed:', err);
        // Show forms anyway — counts will show "–"
      });
  }

  // =========================================================================
  // Update Progress Bars & Counters
  // =========================================================================

  function updateAllProgress(counts, campaigns) {
    campaigns.forEach(function (campaign) {
      var pid = campaign.getAttribute('data-product-id');
      var info = counts[pid];
      if (!info) return;

      var batchSize = parseInt(campaign.getAttribute('data-batch-size'), 10) || 100;
      var count = info.count || 0;
      var remaining = Math.max(0, batchSize - count);
      var isSoldOut = count >= batchSize;

      // Update counter text
      var countEl = campaign.querySelector('.preorder-count');
      if (countEl) countEl.textContent = count;

      // Update progress bar
      var progressEl = campaign.querySelector('.preorder-progress');
      if (progressEl) {
        progressEl.value = Math.min(count, batchSize);
        progressEl.max = batchSize;
      }

      // Handle sold-out state
      if (isSoldOut) {
        showSoldOut(campaign);
      }
    });
  }

  function showSoldOut(campaign) {
    // Show sold-out banner
    var soldOutEl = campaign.querySelector('.preorder-soldout');
    if (soldOutEl) soldOutEl.style.display = '';

    // Update batch label
    var batchLabel = campaign.querySelector('.preorder-batch-label');
    if (batchLabel) {
      batchLabel.textContent = 'Batch 1 — Sold out';
      batchLabel.classList.remove('is-light');
      batchLabel.classList.add('is-warning');
    }

    // Update pre-order radio label to Batch 2
    var preorderRadio = campaign.querySelector('input[type="radio"][value="Pre-order"]');
    if (preorderRadio) {
      var label = preorderRadio.closest('.preorder-radio');
      if (label) {
        var labelText = label.querySelector('.preorder-radio-label');
        if (labelText) {
          labelText.innerHTML = '<strong>Join Batch 2 waitlist</strong>';
        }
      }
    }
  }

  // =========================================================================
  // Form Submission
  // =========================================================================

  function handleSubmit(campaign, form, endpoint) {
    var pid = campaign.getAttribute('data-product-id');

    // Honeypot check
    var honeypot = form.querySelector('input[name="h_url"]');
    if (honeypot && honeypot.value) return;

    // Gather values
    var firstName = form.querySelector('input[name="firstName"]').value.trim();
    var lastName = form.querySelector('input[name="lastName"]').value.trim();
    var email = form.querySelector('input[name="email"]').value.trim();
    var choiceInput = form.querySelector('input[name="choice-' + pid + '"]:checked');
    var choice = choiceInput ? choiceInput.value : 'Updates';

    // Client-side validation
    if (!firstName || !lastName || !email) {
      showError(campaign, 'Please fill in your name and email.');
      return;
    }
    if (!isValidEmail(email)) {
      showError(campaign, 'Please enter a valid email address.');
      return;
    }

    // UI: loading state
    var submitBtn = form.querySelector('.preorder-submit');
    submitBtn.classList.add('is-loading');
    submitBtn.disabled = true;
    hideMessages(campaign);

    var payload = JSON.stringify({
      product: pid,
      firstName: firstName,
      lastName: lastName,
      email: email,
      choice: choice
    });

    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: payload,
      redirect: 'follow'
    })
      .then(function (res) { return res.json(); })
      .then(function (data) {
        submitBtn.classList.remove('is-loading');
        submitBtn.disabled = false;

        if (data.status === 'success') {
          // Build success message
          var msg = '';
          if (choice === 'Pre-order') {
            if (data.batch === 1) {
              msg = 'You\'ve reserved unit #' + data.unit_number + ' of ' +
                    campaign.getAttribute('data-batch-size') + '!';
            } else {
              msg = 'You\'re #' + data.unit_number + ' on the Batch 2 waitlist!';
            }
          } else {
            msg = 'You\'re on the update list! We\'ll keep you posted.';
          }
          showSuccess(campaign, msg);
          form.style.display = 'none';

          // Invalidate cache and re-fetch counter
          if (choice === 'Pre-order') {
            clearCachedCounts();
            var campaigns = document.querySelectorAll('.preorder-campaign');
            var productIds = [];
            campaigns.forEach(function (el) {
              productIds.push(el.getAttribute('data-product-id'));
            });
            fetchCounts(endpoint, productIds, campaigns);
          }
        } else if (data.status === 'duplicate') {
          showError(campaign, data.message || 'You\'ve already signed up for this product.');
        } else {
          showError(campaign, data.message || 'Something went wrong. Please try again.');
        }
      })
      .catch(function (err) {
        submitBtn.classList.remove('is-loading');
        submitBtn.disabled = false;
        showError(campaign, 'Network error. Please check your connection and try again.');
        console.error('Pre-order submit error:', err);
      });
  }

  // =========================================================================
  // Early Bird Expiry (client-side check)
  // =========================================================================

  function checkEarlyBirdExpiry(campaigns) {
    var now = new Date();
    campaigns.forEach(function (campaign) {
      var endStr = campaign.getAttribute('data-early-bird-end');
      if (!endStr) return;

      // Parse date as end of day in local timezone
      var endDate = new Date(endStr + 'T23:59:59');
      if (now > endDate) {
        // Hide early-bird elements
        var earlyBirdEls = campaign.querySelectorAll('.preorder-early-bird-tag, .preorder-price-regular');
        earlyBirdEls.forEach(function (el) { el.style.display = 'none'; });
      }
    });
  }

  // =========================================================================
  // UI Helpers
  // =========================================================================

  function showSuccess(campaign, message) {
    var el = campaign.querySelector('.preorder-success');
    var textEl = campaign.querySelector('.preorder-success-text');
    if (el && textEl) {
      textEl.textContent = message;
      el.style.display = '';
    }
  }

  function showError(campaign, message) {
    var el = campaign.querySelector('.preorder-error');
    var textEl = campaign.querySelector('.preorder-error-text');
    if (el && textEl) {
      textEl.textContent = message;
      el.style.display = '';
    }
  }

  function hideMessages(campaign) {
    var successEl = campaign.querySelector('.preorder-success');
    var errorEl = campaign.querySelector('.preorder-error');
    if (successEl) successEl.style.display = 'none';
    if (errorEl) errorEl.style.display = 'none';
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // =========================================================================
  // localStorage Cache
  // =========================================================================

  function getCachedCounts(productIds) {
    try {
      var raw = localStorage.getItem('preorder_counts');
      if (!raw) return null;
      var cached = JSON.parse(raw);
      if (Date.now() - cached.timestamp > CACHE_TTL) return null;

      // Check all requested products are in cache
      for (var i = 0; i < productIds.length; i++) {
        if (!cached.data[productIds[i]]) return null;
      }
      return cached.data;
    } catch (e) {
      return null;
    }
  }

  function setCachedCounts(counts) {
    try {
      localStorage.setItem('preorder_counts', JSON.stringify({
        timestamp: Date.now(),
        data: counts
      }));
    } catch (e) { /* quota exceeded — no big deal */ }
  }

  function clearCachedCounts() {
    try { localStorage.removeItem('preorder_counts'); } catch (e) {}
  }

})();
