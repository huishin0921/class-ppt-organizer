# AGENTS.md — 極簡課堂 PPT 整理網站開發規範

本文件定義「極簡課堂 PPT 整理網站（Minimal Class PPT Organizer）」的專案目的、設計語言、資料夾結構、頁面規範與 AI 協作規則。任何 AI 代理人或開發者在新增課程、建立新頁面或修改功能時，都必須嚴格遵守本文件。

---

## 1. 專案目的 (Project Purpose)
本專案旨在解決大學課程簡報（PPT / PDF）分散於各章節、難以快速複習的問題。透過極簡、高可讀性的靜態網頁架構：
1. 在首頁集中管理與篩選各章節的課堂簡報。
2. 支援前端拖曳上傳 `.ppt` / `.pptx` / `.pdf` 檔案，依檔名自動辨識科目、章節與標籤，並暫存於瀏覽器 `localStorage`。
3. 為每份簡報建立結構化的「課堂重點整理頁面」，讓 AI 可持續依照固定模板擴充新頁面。

---

## 2. 整體視覺風格 (Design System)
本專案採用「極簡編輯室（Minimal Editorial）」風格，強調留白、清晰層級與低視覺疲勞，適合長時間閱讀筆記：

- **色彩系統 (CSS Variables in `assets/style.css`)**
  - 背景主色：`#FAF9F6`（柔和米白）
  - 卡片底色：`#FFFFFF`（純白，搭配 `1px solid #E5E7EB` 細邊框）
  - 主要文字：`#111827`（深炭黑）
  - 次要文字：`#6B7280`（中性灰）
  - 強調色（Accent）：`#2563EB`（沉穩藍，僅用於按鈕、連結與選中狀態）
  - 標籤底色：`#F3F4F6`（淺灰圓角膠囊）
- **字體與排版**
  - 優先使用系統無襯線字體：`-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans TC", sans-serif`
  - 內文行高 `1.7`，最大內容寬度 `960px` 置中對齊。
- **互動原則**
  - 禁止過度花俏的動畫、漸層或陰影。
  - 所有卡片與按鈕僅使用細微邊框變化（`border-color`）作為 hover 回饋。

---

## 3. 專案目錄結構 (Directory Structure)
```text
class-ppt-organizer/
├── AGENTS.md              # 本規範文件（AI 必讀）
├── README.md              # 專案說明與 GitHub Pages 部署指引
├── index.html             # 首頁：課程總覽、拖曳上傳自動分類區、搜尋與篩選
├── assets/
│   ├── style.css          # 全站共用極簡樣式表（所有頁面必須引入）
│   └── app.js             # 首頁互動邏輯：預設資料、搜尋篩選、拖曳解析與 localStorage
└── pages/
    ├── network-ch1.html   # 第 1 章：網路基本概念
    ├── network-ch2.html   # 第 2 章：數據通訊與傳輸媒介
    ├── network-ch3.html   # 第 3 章：有線區域網路（乙太網路）
    └── network-ch4.html   # 第 4 章：無線區域網路
```

---

## 4. 檔案命名與放置規則 (Naming & Placement Rules)
1. **獨立課程筆記頁面**：一律放在 `pages/` 資料夾下。
2. **命名格式**：使用全小寫英文與連字號（kebab-case），格式為 `<科目簡稱>-<章節或主題>.html`。
   - 正確範例：`pages/network-ch5.html`、`pages/stats-ch4.html`
   - 錯誤範例：`pages/第五章筆記.html`、`pages/Network_Ch5.HTML`
3. **資源檔**：共用 CSS 與 JS 一律放在 `assets/`，禁止將大量 CSS 直接寫在各 HTML 頁面中。

---

## 5. 新增課程頁面與內容格式 (Content Template)
當需要新增一堂課的簡報整理頁面時，AI 必須執行以下兩個步驟：

### 步驟 A：建立 `pages/<科目>-<章節>.html`
每個子頁面必須包含以下 4 個固定區塊（可參考 `pages/network-ch1.html`）：
1. **頂部導覽列 (`<header class="site-header">`)**：包含網站名稱與「← 返回簡報總覽」連結（指向 `../index.html`）。
2. **頁面標頭 (`<section class="page-hero">`)**：顯示科目標籤、章節標題、章節編號、投影片頁數與原始檔名。
3. **結構化重點區 (`<section class="note-section">`)**：
   - **核心觀念摘要**：使用條列式重點（3～6 點）。
   - **關鍵英文專有名詞表**：使用雙欄表格（英文術語 / 中文說明）。
   - **投影片頁數索引**：標註對應的 PPT 頁碼範圍（例如 `P.1–P.10`）。
4. **頁尾 (`<footer class="site-footer">`)**：統一顯示專案名稱與規範來源。

### 步驟 B：同步註冊至 `assets/app.js`
在 `assets/app.js` 的 `DEFAULT_SLIDES` 陣列中新增一筆物件，結構如下：
```js
{
  id: "唯一英文識別碼",
  course: "科目名稱（如：網路通訊概論）",
  week: "章節（如：Ch.05）",
  title: "簡報標題",
  filename: "原始檔名.pdf",
  pages: 45,
  tags: ["標籤1", "標籤2"],
  summary: "一句話說明這份簡報的核心內容。",
  pageUrl: "pages/對應檔名.html" // 若尚未建立獨立頁面可填 null
}
```

---

## 6. AI 修改與擴充規則 (Rules for AI Agents)
1. **先讀後寫**：修改任何檔案前，必須先確認 `AGENTS.md` 與 `assets/style.css` 的變數與 class 命名。
2. **純靜態相容**：不得引入需要後端伺服器或建置工具（如 Node.js build step、React CLI）的依賴，確保專案可直接透過 GitHub Pages 或雙擊 `index.html` 瀏覽。
3. **同步更新原則**：只要在 `pages/` 新增頁面，就必須同步更新 `assets/app.js` 的 `DEFAULT_SLIDES`，確保首頁搜尋與卡片列表能立即顯示該頁面。
4. **檔名自動整理規則（前端解析）**：當使用者上傳新檔名（如 `網路通訊概論_Ch05_網路層.pdf`），前端應自動依底線 `_` 或連字號 `-` 拆解出科目與章節並自動歸類。
5. **驗收檢查清單 (Definition of Done)**：
   - HTML 語意標籤正確且無未閉合標籤。
   - 子頁面引入 `../assets/style.css` 且返回首頁連結正常。
   - 手機與桌機版面皆可正常閱讀（響應式單欄／雙欄切換）。
