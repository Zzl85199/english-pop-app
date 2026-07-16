# Google Sheet 欄位格式指南

新增一期 Issue，只要在 Google Sheet 裡新增「一列」，網站會在下次載入時自動讀到。
不需要寫程式、不需要重新部署網站。

## 1. 建立 Sheet

開一個新的 Google Sheet，**第一列**依照下面順序填入欄位標題（英文，大小寫要一致）：

```
IssueID | Title | Level | Tier | Time | Goals | Warmup | CoverStory | ReadingCheck |
WordCandy | SayItNaturally | GrammarBite | SpeakUp | RolePlay | MiniWriting | QuickQuiz | RealLifeMission
```

**第二列開始，一列 = 一期 Issue。** 每個儲存格內可以直接按 Enter 換行（Google Sheet 支援），
下面每個章節都用「換行」和一些簡單符號分隔內容，不需要任何程式碼。

可以直接參考 [`sample-issue-01.csv`](./sample-issue-01.csv)（把原本的 Issue 01 完整內容照這個格式填好），
用 Google Sheet「檔案 → 匯入」把它匯入當作範本，之後複製新的一列繼續改。

## 2. 發布成網站可以讀取的網址

1. 「檔案」→「共用」→「發布到網路」
2. 選擇你放 Issue 資料的那個分頁，格式選 **CSV**
3. 按「發布」，複製產生的網址
4. 把網址貼到 `index.html` 裡的 `CONFIG.sheetCsvUrl`（或設定 Vercel 環境變數，見 README）

之後老師每次「編輯」這個 Sheet，學生下次打開網站就會看到最新內容，**不需要重新部署**。

## 3. 各欄位格式

### IssueID / Title / Level / Tier / Time
簡單的單行文字。
- `Tier`：1、2、3、4，對應網站的四個等級世界（新手村／森林小徑／山谷城鎮／高峰探索）
- `Level`：顯示用的標籤文字，例如 `B1`、`A2`

### Goals（🎯 Today's Goals）
用分號 `;` 分隔多個目標：
```
用英文自然地自我介紹;詢問別人的興趣和生活;使用追問句延續對話
```

### Warmup（🔥 暖身）
第一行是引導語，接下來每一行是一題，格式 `問題|提示`：
```
先不要查單字，試著用英文回答！
Is it easy to make new friends?|用 It is easy for me because... 開頭
Where do you usually meet new people?|例如 at school, online...
```

### CoverStory（📰 文章）
用「空白行」分隔區塊。**第一個區塊**是讀前猜測引導語，**之後每個區塊**是文章的一個段落：
```
看到標題，你猜這篇文章會談什麼？

第一段文章內容...

第二段文章內容...
```

### ReadingCheck（🔍 閱讀理解）
用空白行分隔每一題，每題內容：
```
Q: 題目
A: 選項一
B: 選項二
C: 選項三
ANS: 1
EXPLAIN: 補充說明（選填）
```
`ANS` 是正確選項的編號，從 0 開始算（0=A、1=B、2=C）。開放式問題（無標準答案）可以省略 ANS 或設 `-1`。

### WordCandy（🍭 單字）
每行一個單字，格式：
```
單字|詞性|中文意思|英文定義|例句
```

### SayItNaturally（💬 實用句）
每行一個句型，格式：
```
英文句子|中文意思|使用情境|範例句A|範例句B
```

### GrammarBite（🧩 文法）
```
NAME: 文法點名稱
PATTERN: 句型公式
EXPLAIN: 文法說明
EXAMPLES: 例句1;例句2;例句3
PRACTICE: 題目||選項1;選項2;選項3||正確選項編號
PRACTICE: 可以有第二題...||選項1;選項2||0
```

### SpeakUp（🎤 口說）
```
TOPIC: 口說主題
TALK: 可以聊的重點1;重點2;重點3
STARTERS: 開頭句1;開頭句2
TARGETS: 想聽到的關鍵詞1;關鍵詞2（用來判斷學生有沒有講到重點）
SAMPLE: 示範回答全文
```

### RolePlay（🧑‍🤝‍🧑 情境對話）
```
SITUATION: 情境說明
NPC: 對話角色名字
TURN: 角色說的話||選項A文字:::選項A中文:::分數;選項B文字:::選項B中文:::分數
TURN: 下一輪對話||選項A:::中文:::分數;選項B:::中文:::分數
END_HIGH: 高分結局文字
END_MID: 普通結局文字
END_LOW: 低分結局文字
```
每個 `TURN` 是一輪對話，選項之間用分號 `;` 分隔，每個選項內部用 `:::` 分隔「文字／中文說明／分數」。

### MiniWriting（✍️ 寫作）
```
TOPIC: 寫作題目
GUIDE: 第一段寫什麼;第二段寫什麼;第三段寫什麼
VOCAB: 需要用到的單字1;單字2
EXPR: 需要用到的句型1;句型2
SAMPLE: 範文全文
```

### QuickQuiz（🏆 總測驗）
```
TIME: 90
題目1||選項1;選項2;選項3||正確編號
題目2||選項1;選項2;選項3||正確編號
```
`TIME` 是測驗的倒數秒數（選填，預設 90 秒），其餘每行一題，不用加任何前綴文字。

### RealLifeMission（🌍 真實任務）
```
GOAL: 任務說明
RULES: 規則1;規則2;規則3
REPORT: 回報問題1;回報問題2
```

## 4. 小提醒

- 所有分隔符號（`|`、`;`、`||`、`:::`）都不要跟內容本身的文字重複使用，否則會被誤判切割。
- 儲存格內的換行、中文標點都可以正常使用。
- 如果某一列缺少某個章節的內容，那個章節在網站上就會顯示空白——建議 11 個章節都填齊再發布。
- 想要先在本機測試格式對不對，可以打開瀏覽器的開發者工具（Console），看有沒有出現讀取錯誤訊息。
