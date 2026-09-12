const SPREADSHEET_ID = '151P29ygXWEIRSZfTQDRkXpi7jqh6G2FhmmAbfPJFFEE';
const SHEET_NAME = 'Enrollments';

/**
 * Receives enrollment details from the website and appends them to the Sheet.
 * Deploy this project as a Web app with access set to "Anyone".
 */
function doPost(e) {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Submitted at', 'Full name', 'Phone', 'Email', 'Course', 'Message']);
    sheet.setFrozenRows(1);
  }

  sheet.appendRow([
    e.parameter.submittedAt || new Date().toISOString(),
    e.parameter.fullName || '',
    e.parameter.phone || '',
    e.parameter.email || '',
    e.parameter.course || '',
    e.parameter.message || ''
  ]);

  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
