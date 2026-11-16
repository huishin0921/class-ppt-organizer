# 極簡課堂 PPT 整理網站 (Minimal Class PPT Organizer)

這是一個以純靜態 HTML / CSS / JavaScript 打造的極簡課堂簡報整理網站，並透過 `AGENTS.md` 定義完整的設計規範與擴充流程，讓 AI 代理人能夠持續依照統一標準新增課程與筆記頁面。

## 功能特色
- **簡報總覽與即時篩選**：依課程分類或關鍵字快速搜尋課堂 PPT。
- **拖曳上傳自動分類**：將 `.ppt` / `.pptx` / `.pdf` 拖曳至頁面，系統會依檔名（如 `統計學_W06_機率分佈.pptx`）自動解析課程、週次並儲存於瀏覽器 `localStorage`。
- **結構化筆記子頁**：每份重要簡報皆可對應獨立整理頁面，呈現核心觀念、英文專有名詞對照與投影片頁碼索引。

## 如何在 GitHub Pages 上線
1. 將整個資料夾上傳至 GitHub Repository。
2. 進入 Repository 的 **Settings** → **Pages**。
3. 在 **Source** 選擇 `Deploy from a branch`，Branch 選擇 `main`、資料夾選擇 `/ (root)`，點擊 **Save**。
4. 等待約 1 分鐘後，即可透過產生的網址公開瀏覽。
