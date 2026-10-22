/* =====================================================================
   故事詳細解說 — 內容檔（stories.js）
   ---------------------------------------------------------------------
   這個檔案只放「文章內容」，版面由 index.html 負責。
   要新增或修改解說，只要改這個檔案、存檔、重新整理網頁就會生效。

   【每一篇的欄位】
     slug     網址用的英文代號（不能重複、不要有空格），例如 'loki-s1'
              → 這一篇的網址會是 index.html#story-loki-s1
     workId   對應 index.html 裡 mcuData 的作品 id
              → 海報、上映日期、類型、你的評分會自動帶入，不用重打
     title    文章標題
     tagline  一句話簡介（顯示在卡片和標題下方）
     accent   這一篇的主題色（卡片光暈、標題線、目錄高亮都用它）
     layout   （可省略）'eggs' = 彩蛋條列版型：沒有章節與目錄，
              改成一個個編號卡片
     status   'draft' = 撰寫中（會顯示「撰寫中」標籤）
              'done'  = 已完成
     sections 文章內容，是一個陣列，每個 { } 是一個區塊，由上到下排列

   【可以用的區塊種類】
     { type: 'h2', text: '章節標題' }
         大章節標題。會自動編號 CH 01、CH 02…，也會出現在左側目錄
     { type: 'h3', text: '小標題' }
     { type: 'p', text: '一段內文。' }
         內文可以用簡單的 HTML：<b>粗體</b>、<i>斜體</i>、<br> 換行、
         <span style="color:#ffd166">有顏色的字</span>
     { type: 'quote', text: '經典台詞', by: '說話的角色' }
     { type: 'callout', icon: '💡', title: '重點', text: '補充說明或彩蛋。' }
     { type: 'list', items: ['第一點', '第二點'], ordered: false }
         ordered: true 會變成 1. 2. 3. 的編號清單
     { type: 'timeline', items: [ { time: '時間或集數', title: '事件', text: '說明' } ] }
         垂直的事件時間軸，適合整理劇情順序
     { type: 'image', src: 'images/stories/xxx.jpg', caption: '圖說（可省略）' }
     { type: 'video', code: 'YouTube影片代碼', caption: '說明（可省略）' }
     { type: 'divider' }
         一條分隔線
     { type: 'egg', title: '彩蛋名稱', text: '說明', image: 'images/stories/xxx.jpg', caption: '圖說' }
         彩蛋卡片（搭配 layout: 'eggs'）。編號自動產生；text、image、caption 都可以省略

   【小提醒】
     · 每個 { } 後面要有逗號，最後一個可有可無。
     · 文字用單引號 '…' 包起來；如果文字裡有單引號，改用雙引號 "…"，
       或寫成 \' 。
     · 想寫很長的段落，可以用反引號 `…` 包起來，裡面就能直接換行。
   ===================================================================== */

/* 還沒寫內容時，先用這組範例區塊顯示版面。
   開始寫某一篇時，把那一篇的 sections: DEMO_SECTIONS 換成你自己的陣列即可。 */
const DEMO_SECTIONS = [
  { type: 'h2', text: '（章節標題一）' },
  { type: 'p', text: '（在這裡輸入內文。可以寫很多段，每個 p 區塊就是一段。）' },
  { type: 'p', text: '（第二段內文。需要強調的字可以用 <b>粗體</b> 標示。）' },
  { type: 'callout', icon: '💡', title: '重點整理', text: '（想特別提醒讀者的內容，例如伏筆、彩蛋、設定。）' },
  { type: 'h2', text: '（章節標題二）' },
  { type: 'h3', text: '（小標題）' },
  { type: 'p', text: '（在這裡輸入內文。）' },
  { type: 'quote', text: '（經典台詞放在這裡）', by: '角色名稱' },
  { type: 'list', items: ['（重點一）', '（重點二）', '（重點三）'] },
  { type: 'h2', text: '（章節標題三：劇情時間線）' },
  {
    type: 'timeline',
    items: [
      { time: '（時間／集數）', title: '（事件一）', text: '（事件說明。）' },
      { time: '（時間／集數）', title: '（事件二）', text: '（事件說明。）' },
      { time: '（時間／集數）', title: '（事件三）', text: '（事件說明。）' }
    ]
  },
  { type: 'divider' },
  { type: 'callout', icon: '✍️', title: '我的看法', text: '（寫下你自己對這個故事的想法與評價。）' }
];

const EGG_SECTIONS = [
  { type: 'egg', title: 'Bye Bye Bye', text: '開場片段，背景音樂為超級男孩的 Bye Bye Bye，伴隨著死侍殺人的畫面，與跳舞致敬。', link: 'https://youtu.be/Eo-KmOd3i7s?si=aE4eWs-gk8QIW3gr' },
  { type: 'egg', title: '多一根骨頭', text: '死侍說人類有 206 根骨頭，但他在看 【花邊教主】時會有 207 根，這是因為死侍演員萊恩雷諾斯的老婆 Blake Lively 正是【花邊教主】的女主角之一。' },
  { type: 'egg', title: '面試復仇者聯盟', text: '死侍穿越到 MCU 主宇宙 (地球 616) 想要加入復仇者聯盟，時間點為 2018 年 3 月 14，著名的復仇者聯盟 3 的薩諾斯事件正是在 2018 年 5 月，可以得知該時間點尚未發生彈指事件。' },
  { type: 'egg', title: '', text: '' }
];

const storyData = [
  {
    slug: 'loki-s1',
    workId: 33,
    title: '洛基 第一季',
    tagline: '（一句話簡介：這一季的故事在講什麼？）',
    accent: '#f0b43c',
    status: 'draft',
    sections: DEMO_SECTIONS
  },
  {
    slug: 'loki-s2',
    workId: 46,
    title: '洛基 第二季',
    tagline: '（一句話簡介：這一季的故事在講什麼？）',
    accent: '#2ecc71',
    status: 'draft',
    sections: DEMO_SECTIONS
  },
  {
    slug: 'deadpool-wolverine',
    workId: 42,
    title: '死侍與金鋼狼',
    tagline: '（一句話簡介：這部片的故事在講什麼？）',
    accent: '#e62429',
    layout: 'eggs',
    status: 'draft',
    sections: EGG_SECTIONS
  }
];
