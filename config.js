/**
 * English POP! 網站設定
 * ---------------------
 * 這是唯一需要老師手動編輯的檔案。
 *
 * sheetCsvUrl:
 *   Google Sheet「發布到網路」產生的 CSV 網址。
 *   設定完之後，網站每次載入都會自動抓最新的 Issue 內容。
 *   還沒設定時（留空字串），網站會使用內建的 Issue 01 範例。
 *   設定步驟請見 docs/sheet-column-guide.md。
 *
 * progressWebhook:
 *   （選用）Google Apps Script 部署後拿到的 Web App 網址，
 *   用來把學生的學習紀錄回傳到老師的 Google Sheet。
 *   設定步驟請見 apps-script/Code.gs 檔案開頭的說明。
 */
window.ENGLISHPOP_CONFIG = {
  sheetCsvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRlJ1J_WtUax1CWaAZKVGooYoRX9Zxz01lUZTUsOM-Ts7RSgkSTO6qbabdZPtOOCWJKQ75cIMXnIUpW/pub?gid=0&single=true&output=csv",
  progressWebhook: ""
};
