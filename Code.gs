// =============================================================================
// dadamachines Pre-order System — Google Apps Script Backend
// =============================================================================
//
// SETUP INSTRUCTIONS:
//
// 1. CREATE GOOGLE SHEET
//    - Go to https://sheets.google.com → Create new spreadsheet
//    - Name it "dadamachines Pre-orders"
//    - Add these headers in Row 1:
//      A: Product | B: First Name | C: Email | D: Choice | E: Timestamp
//      F: Batch | G: SKU | H: Price | I: Status
//    - Keep the sheet name as "Sheet1" (or update SHEET_NAME below)
//
// 2. CREATE APPS SCRIPT
//    - In Google Sheets: Extensions → Apps Script
//    - Delete the default code and paste this entire file
//    - Save (Ctrl+S)
//
// 3. ADD SCRIPT PROPERTIES (secure key storage)
//    - In Apps Script editor: Project Settings (gear icon) → Script Properties
//    - Add: KEILA_API_KEY = your-keila-api-key-here
//    - Add: MODE = dev  (change to "production" when going live)
//
// 4. DEPLOY AS WEB APP
//    - Click "Deploy" → "New deployment"
//    - Type: Web app
//    - Execute as: Me
//    - Who has access: Anyone
//    - Click "Deploy" and authorize when prompted
//    - Copy the Web App URL — paste it into your Jekyll _config.yml as preorder_endpoint
//
// 5. TEST
//    - GET: Open the Web App URL in your browser — should return JSON with counts
//    - POST: Use your Jekyll site form (locally or live) to submit a test entry
//
// NOTE: After editing this script, you must create a NEW deployment for changes
// to take effect on the production URL. Test deployments use a separate URL.
//
// =============================================================================

var SHEET_NAME = 'Sheet1';

// ---------------------------------------------------------------------------
// Product configuration — keep in sync with _data/preorder_products.yml
// ---------------------------------------------------------------------------
var PRODUCTS = {
  'tbd-16':          { sku: 'DA-TBD16-001',  batch1: 100, batch2: 200, price: '399' },
  'tbd-core':        { sku: 'DA-TBDC-001',   batch1: 100, batch2: 100, price: '129' },
  'everydiv':        { sku: 'DA-EDIV-001',   batch1: 100, batch2: 100, price: '499' },
  'automat-mk2':     { sku: 'DA-ATMK2-001',  batch1: 100, batch2: 100, price: '949' },
  'automat-modular': { sku: 'DA-ATMOD-001',  batch1: 100, batch2: 100, price: '399' }
};

// ---------------------------------------------------------------------------
// Keila API endpoint
// ---------------------------------------------------------------------------
var KEILA_API_URL = 'https://app.keila.io/api/v1/contacts';

// =============================================================================
// doGet — Return pre-order counts for all or filtered products
// =============================================================================
// Query params:
//   ?products=tbd-16,tbd-core  — return only these products (optional)
//
// Response:
//   { counts: { "tbd-16": { count: 42, batch_size: 100 }, ... } }
// =============================================================================

function doGet(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    var data = sheet.getDataRange().getValues();

    // Parse optional product filter
    var filterProducts = null;
    if (e && e.parameter && e.parameter.products) {
      filterProducts = e.parameter.products.split(',').map(function(p) { return p.trim(); });
    }

    // Count pre-orders per product (skip header row)
    var counts = {};
    for (var i = 1; i < data.length; i++) {
      var product = data[i][0];  // Column A: Product ID
      var choice  = data[i][3];  // Column D: Choice

      if (choice !== 'Pre-order') continue;
      if (filterProducts && filterProducts.indexOf(product) === -1) continue;

      if (!counts[product]) counts[product] = 0;
      counts[product]++;
    }

    // Build response with batch_size info from config
    var response = {};
    var productIds = filterProducts || Object.keys(PRODUCTS);
    for (var j = 0; j < productIds.length; j++) {
      var pid = productIds[j];
      if (PRODUCTS[pid]) {
        response[pid] = {
          count: counts[pid] || 0,
          batch_size: PRODUCTS[pid].batch1
        };
      }
    }

    return buildJsonResponse({ counts: response });
  } catch (err) {
    return buildJsonResponse({ error: err.message }, 500);
  }
}

// =============================================================================
// doPost — Handle form submission: append to sheet + sync to Keila
// =============================================================================
// Expected JSON body:
//   { product: "tbd-16", firstName: "Jane", email: "jane@example.com", choice: "Pre-order" }
//
// Response:
//   { status: "success", batch: 1, unit_number: 43 }
//   { status: "duplicate", message: "..." }
//   { status: "error", message: "..." }
// =============================================================================

function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents);

    var product   = (body.product || '').trim();
    var firstName = (body.firstName || '').trim();
    var email     = (body.email || '').trim().toLowerCase();
    var choice    = (body.choice || '').trim();

    // --- Validation ---
    if (!product || !PRODUCTS[product]) {
      return buildJsonResponse({ status: 'error', message: 'Invalid product.' }, 400);
    }
    if (!firstName || !email) {
      return buildJsonResponse({ status: 'error', message: 'Name and email are required.' }, 400);
    }
    if (!isValidEmail(email)) {
      return buildJsonResponse({ status: 'error', message: 'Invalid email address.' }, 400);
    }
    if (choice !== 'Pre-order' && choice !== 'Updates') {
      return buildJsonResponse({ status: 'error', message: 'Invalid choice.' }, 400);
    }

    var config = PRODUCTS[product];
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    var data = sheet.getDataRange().getValues();

    // --- Duplicate check (same email + same product) ---
    for (var i = 1; i < data.length; i++) {
      if (data[i][0] === product && data[i][2].toString().toLowerCase() === email) {
        return buildJsonResponse({
          status: 'duplicate',
          message: 'You\'ve already signed up for ' + config.sku.split('-')[0] + '. Check your inbox!'
        });
      }
    }

    // --- Count current pre-orders for this product ---
    var preorderCount = 0;
    for (var j = 1; j < data.length; j++) {
      if (data[j][0] === product && data[j][3] === 'Pre-order') {
        preorderCount++;
      }
    }

    // --- Determine batch ---
    var batch = (preorderCount < config.batch1) ? 1 : 2;
    var unitNumber = preorderCount + 1;

    // --- Determine price (batch 1 = early bird price from config) ---
    var price = config.price;

    // --- Set status ---
    var status = (choice === 'Pre-order') ? 'reserved' : 'subscribed';

    // --- Append row to sheet ---
    var timestamp = new Date().toISOString();
    sheet.appendRow([
      product,       // A: Product ID
      firstName,     // B: First Name
      email,         // C: Email
      choice,        // D: Choice (Pre-order or Updates)
      timestamp,     // E: Timestamp
      batch,         // F: Batch number
      config.sku,    // G: SKU
      price,         // H: Price at reservation time
      status         // I: Status
    ]);

    // --- Sync to Keila ---
    syncToKeila(firstName, email, product, config.sku, choice, batch, price);

    // --- Return success ---
    return buildJsonResponse({
      status: 'success',
      batch: batch,
      unit_number: (choice === 'Pre-order') ? unitNumber : null
    });

  } catch (err) {
    return buildJsonResponse({ status: 'error', message: err.message }, 500);
  }
}

// =============================================================================
// Keila API Sync
// =============================================================================

function syncToKeila(firstName, email, product, sku, signupType, batch, price) {
  var apiKey = PropertiesService.getScriptProperties().getProperty('KEILA_API_KEY');

  // Skip Keila sync if no API key is configured (dev mode without Keila)
  if (!apiKey) {
    Logger.log('KEILA_API_KEY not set — skipping Keila sync');
    return;
  }

  var payload = {
    data: {
      email: email,
      first_name: firstName,
      data: {
        product: product,
        product_sku: sku,
        signup_type: signupType === 'Pre-order' ? 'pre-order' : 'updates',
        batch: batch,
        preorder_price: price,
        source: 'website'
      }
    }
  };

  var options = {
    method: 'post',
    contentType: 'application/json',
    headers: {
      'Authorization': 'Bearer ' + apiKey
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  try {
    var response = UrlFetchApp.fetch(KEILA_API_URL, options);
    var code = response.getResponseCode();
    if (code !== 200 && code !== 201) {
      Logger.log('Keila API error (' + code + '): ' + response.getContentText());
    }
  } catch (err) {
    // Log but don't fail the main request if Keila is down
    Logger.log('Keila sync failed: ' + err.message);
  }
}

// =============================================================================
// Helpers
// =============================================================================

/**
 * Build a CORS-enabled JSON response for the Web App.
 */
function buildJsonResponse(data, statusCode) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Basic email validation.
 */
function isValidEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
