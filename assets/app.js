const DEFAULT_SLIDES = [
  {
    id: "network-ch1",
    course: "網路通訊概論",
    week: "Ch.01",
    title: "第一章：網路基本概念",
    filename: "01_網路基本概念(1).pdf",
    pages: 45,
    tags: ["DoD 模型", "OSI 七層", "網路拓樸", "SDN"],
    summary: "介紹 LAN/PAN/WAN 網路類型、DoD 與 OSI 分層架構與封裝概念、四種基本拓樸及 SDN 軟體定義網路。",
    pageUrl: "pages/network-ch1.html"
  },
  {
    id: "network-ch2",
    course: "網路通訊概論",
    week: "Ch.02",
    title: "第二章：數據通訊與傳輸媒介",
    filename: "02.pdf",
    pages: 53,
    tags: ["基頻編碼", "寬頻調變", "雙絞線", "光纖"],
    summary: "涵蓋數位與類比訊號、NRZ/Manchester 等基頻編碼、ASK/FSK/PSK/QAM 調變、多工技術與有線/無線傳輸媒介。",
    pageUrl: "pages/network-ch2.html"
  },
  {
    id: "network-ch3",
    course: "網路通訊概論",
    week: "Ch.03",
    title: "第三章：有線區域網路－以乙太網路為例",
    filename: "03.pdf",
    pages: 55,
    tags: ["CSMA/CD", "乙太網路", "MAC 位址", "VLAN"],
    summary: "說明鏈結層訊框切割與同位元偵錯、CSMA/CD 碰撞領域、乙太網路演進（10M–100G）、VLAN 802.1Q 與 RJ-45 壓接。",
    pageUrl: "pages/network-ch3.html"
  },
  {
    id: "network-ch4",
    course: "網路通訊概論",
    week: "Ch.04",
    title: "第四章：無線區域網路",
    filename: "04.pdf",
    pages: 57,
    tags: ["CSMA/CA", "802.11 / WiFi 6", "藍牙 & ZigBee", "NFC & RFID"],
    summary: "解析展頻技術、CSMA/CA 與 RTS/CTS 機制、802.11a/b/g/n/ac/ax (WiFi 6) 演進，以及藍牙、ZigBee、RFID 與 NFC。",
    pageUrl: "pages/network-ch4.html"
  },
  {
    id: "stats-ch1",
    course: "統計學",
    week: "Ch.01",
    title: "第一章：緒論",
    filename: "第1章 緒論.pdf",
    pages: 20,
    tags: ["母體與樣本", "敘述統計", "推論統計"],
    summary: "建立統計學意義、母體參數與樣本統計量概念，並區分敘述統計、推論統計、歸納法與演繹法。",
    pageUrl: "pages/stats-ch1.html"
  },
  {
    id: "stats-ch2",
    course: "統計學",
    week: "Ch.02",
    title: "第二章：資料的蒐集與衡量",
    filename: "第2章 資料的蒐集與衡量.pdf",
    pages: 28,
    tags: ["衡量尺度", "原始/次級資料", "信度與效度"],
    summary: "整理資料五大分類維度、調查與實驗蒐集方法，以及名目、順序、區間、比例四種衡量尺度。",
    pageUrl: "pages/stats-ch2.html"
  },
  {
    id: "stats-ch3",
    course: "統計學",
    week: "Ch.03",
    title: "第三章：檢視資料的分布－以統計表與統計圖呈現",
    filename: "第3章 檢視資料的分布-以統計表與統計圖呈現.pdf",
    pages: 50,
    tags: ["直方圖", "次數分配", "枝葉圖", "散佈圖"],
    summary: "介紹統計表四大要素、類別資料長條/圓餅圖、數量資料次數分配表、直方圖、肩形圖與散佈圖。",
    pageUrl: "pages/stats-ch3.html"
  },
  {
    id: "stats-ch4",
    course: "統計學",
    week: "Ch.04",
    title: "第四章：分析資料－以統計測量數來呈現",
    filename: "第4章 分析資料-以統計測量數來呈現.pdf",
    pages: 68,
    tags: ["平均數/中位數", "變異數/CV", "柴比氏定理", "盒鬚圖"],
    summary: "涵蓋中心位置與分散度指標、柴比氏定理與經驗法則、Z 值、盒鬚圖極端值檢查及共變數與相關係數。",
    pageUrl: "pages/stats-ch4.html"
  },
  {
    id: "stats-ch5",
    course: "統計學",
    week: "Ch.05",
    title: "第五章：機率論",
    filename: "第5章 機率論.pdf",
    pages: 41,
    tags: ["條件機率", "獨立與互斥", "貝氏定理"],
    summary: "說明隨機實驗與樣本空間、機率三大公理、聯合/邊際/條件機率、分割定理與貝氏定理事後機率推算。",
    pageUrl: "pages/stats-ch5.html"
  },
  {
    id: "stats-ch6",
    course: "統計學",
    week: "Ch.06",
    title: "第六章：間斷隨機變數及其常用的機率分配",
    filename: "第6章 間斷隨機變數及其常用的機率分配.pdf",
    pages: 51,
    tags: ["二項分配", "泊松分配", "超幾何分配"],
    summary: "彙整間斷隨機變數期望值與變異數性質、二元線性組合公式，以及二項、Poisson 與超幾何機率分配。",
    pageUrl: "pages/stats-ch6.html"
  },
  {
    id: "stats-ch7",
    course: "統計學",
    week: "Ch.07",
    title: "第七章：連續隨機變數及其常用的機率分配",
    filename: "第7章 連續隨機變數及其常用的機率分配.pdf",
    pages: 56,
    tags: ["常態分配", "標準常態 Z", "均等與指數分配"],
    summary: "解析機率密度函數（pdf）、常態與標準常態分配查表、均等與指數分配，以及各機率分配間的近似關係。",
    pageUrl: "pages/stats-ch7.html"
  },
  {
    id: "stats-ch8",
    course: "統計學",
    week: "Ch.08",
    title: "第八章：簡單隨機抽樣與抽樣分配",
    filename: "第8章 簡單隨機抽樣與抽樣分配.pdf",
    pages: 59,
    tags: ["簡單隨機抽樣", "中央極限定理", "抽樣方法"],
    summary: "探討抽樣與非抽樣誤差、樣本平均數與樣本比例抽樣分配、中央極限定理（n≥30）及分層/部落/系統抽樣。",
    pageUrl: "pages/stats-ch8.html"
  }
];

const STORAGE_KEY = "minimal_class_ppt_user_slides_v1";

function loadUserSlides() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveUserSlides(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function parseFilename(filename) {
  const cleanName = filename.replace(/\.(pptx?|pdf)$/i, "");
  const parts = cleanName.split(/[_-]+/).filter(Boolean);

  let course = "未分類課程";
  let week = "新上傳";
  let title = cleanName;

  if (parts.length >= 3) {
    course = parts[0];
    week = parts[1];
    title = parts.slice(2).join(" ");
  } else if (parts.length === 2) {
    course = parts[0];
    title = parts[1];
  }

  return {
    id: "user-" + Date.now() + "-" + Math.random().toString(36).slice(2, 6),
    course,
    week,
    title,
    filename,
    pages: Math.floor(Math.random() * 25) + 15,
    tags: ["自動分類", filename.split(".").pop().toUpperCase()],
    summary: `由檔案「${filename}」自動解析歸檔，可依 AGENTS.md 規範進一步生成獨立重點筆記頁。`,
    pageUrl: null,
    isUserUploaded: true
  };
}

let activeCourse = "全部";
let searchQuery = "";

function getAllSlides() {
  return [...loadUserSlides(), ...DEFAULT_SLIDES];
}

function renderFilters() {
  const container = document.getElementById("filterPills");
  const slides = getAllSlides();
  const courses = ["全部", ...new Set(slides.map(s => s.course))];

  container.innerHTML = courses
    .map(c => `<button class="pill ${c === activeCourse ? "active" : ""}" data-course="${c}">${c}</button>`)
    .join("");

  container.querySelectorAll(".pill").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCourse = btn.dataset.course;
      renderFilters();
      renderCards();
    });
  });
}

function renderCards() {
  const grid = document.getElementById("slidesGrid");
  const slides = getAllSlides().filter(item => {
    const matchCourse = activeCourse === "全部" || item.course === activeCourse;
    const q = searchQuery.trim().toLowerCase();
    const matchSearch =
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.course.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q) ||
      item.tags.some(t => t.toLowerCase().includes(q));
    return matchCourse && matchSearch;
  });

  if (slides.length === 0) {
    grid.innerHTML = `<div class="empty-state">找不到符合條件的課堂簡報，試著切換分類或上傳新的 PPT 檔案。</div>`;
    return;
  }

  grid.innerHTML = slides
    .map(item => {
      const actionHtml = item.pageUrl
        ? `<a class="card-link" href="${item.pageUrl}">閱讀重點整理 →</a>`
        : `<span style="color:#9CA3AF">待生成筆記頁</span>`;

      return `
        <article class="card">
          <div>
            <div class="card-meta">
              <span class="course-badge">${item.course}</span>
              <span>${item.week} · ${item.pages} 頁</span>
            </div>
            <h2 class="card-title">${item.title}</h2>
            <p class="card-summary">${item.summary}</p>
            <div class="card-tags">
              ${item.tags.map(t => `<span class="tag">${t}</span>`).join("")}
            </div>
          </div>
          <div class="card-footer">
            <span title="${item.filename}">${item.filename.length > 22 ? item.filename.slice(0, 20) + "…" : item.filename}</span>
            ${actionHtml}
          </div>
        </article>
      `;
    })
    .join("");
}

function handleFiles(files) {
  if (!files || files.length === 0) return;
  const current = loadUserSlides();
  const added = [];
  for (const file of files) {
    if (/\.(pptx?|pdf)$/i.test(file.name)) {
      added.push(parseFilename(file.name));
    }
  }
  if (added.length > 0) {
    saveUserSlides([...added, ...current]);
    activeCourse = "全部";
    renderFilters();
    renderCards();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const dropzone = document.getElementById("dropzone");
  const fileInput = document.getElementById("fileInput");
  const searchInput = document.getElementById("searchInput");
  const clearBtn = document.getElementById("clearUploadsBtn");

  renderFilters();
  renderCards();

  dropzone.addEventListener("click", (e) => {
    if (e.target.id !== "clearUploadsBtn") fileInput.click();
  });

  fileInput.addEventListener("change", (e) => handleFiles(e.target.files));

  dropzone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropzone.classList.add("dragover");
  });

  dropzone.addEventListener("dragleave", () => {
    dropzone.classList.remove("dragover");
  });

  dropzone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropzone.classList.remove("dragover");
    handleFiles(e.dataTransfer.files);
  });

  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderCards();
  });

  clearBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    localStorage.removeItem(STORAGE_KEY);
    activeCourse = "全部";
    renderFilters();
    renderCards();
  });
});
