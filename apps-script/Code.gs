/**
 * English POP! - 學生進度回收 Web App（選用功能）
 * ------------------------------------------------
 * 這個腳本「不是」用來讓老師新增 Issue 的（新增 Issue 只要在 Google Sheet
 * 貼上一列內容，並用「檔案 → 共用 → 發布到網路」發布成 CSV 即可，完全不需要
 * 寫程式，也不需要這個 Apps Script）。
 *
 * 這個腳本的用途是：當學生在網站上完成一個章節，網站會把一筆記錄
 * POST 到這個 Web App，腳本會把它寫進這份 Google Sheet 的「Progress」分頁，
 * 讓老師可以看到全班的學習紀錄（誰完成了哪個 Issue、哪個章節、拿了幾分）。
 *
 * ===== 部署步驟 =====
 * 1. 開一個新的 Google Sheet，新增一個分頁，命名為 "Progress"，
 *    第一列填入標題：Timestamp | Student | Issue | Section | Score | XP
 * 2. 點選「擴充功能 → Apps Script」，把這個檔案的內容整個貼進去。
 * 3. 點右上角「部署 → 新增部署作業」：
 *    - 類型選「網頁應用程式」
 *    - 執行身分：我（你的帳號）
 *    - 誰可以存取：任何人
 * 4. 部署後會拿到一個網址，例如：
 *    https://script.google.com/macros/s/AKfycb.../exec
 * 5. 把這個網址貼到 index.html 裡的 CONFIG.progressWebhook。
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Progress')
      || SpreadsheetApp.getActiveSpreadsheet().insertSheet('Progress');

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Student', 'Issue', 'Section', 'Score', 'XP']);
    }

    var body = {};
    try {
      body = JSON.parse(e.postData.contents);
    } catch (err) {
      body = {};
    }

    sheet.appendRow([
      new Date(),
      body.student || '',
      body.issue || '',
      body.section || '',
      body.score !== undefined ? body.score : '',
      body.xp !== undefined ? body.xp : ''
    ]);

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ status: 'English POP! progress endpoint is alive' }))
    .setMimeType(ContentService.MimeType.JSON);
}
