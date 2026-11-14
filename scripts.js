var lang = "en";

// ==========================================
// ISTRAIN MULTI-SEASON TEAM DATABASE & SCRIPT
// ==========================================

// 1. PHOTO PATHS & LINKEDIN PER SEASON / MEMBER
var TEAM_DATA = {
  "2026": {
    label: { en: "2026/2027", pt: "2026/2027" },
    photos: {
      "Manuel Barreiras": "About us/Board/Manuel Barreiras.png",
      "Daniel Ferreira": "About us/Board/Daniel Ferreira.png",
      "Diego Araújo": "About us/Board/Diego Araújo.png",
      "Catarina Santos": "About us/Electronics & Software/Catarina Santos.png",
      "Inês Gonçalves": "About us/Electronics & Software/Inês Gonçalves.png",
      "Mateus Pinto": "About us/Electronics & Software/Mateus.png",
      "Sara Viegas": "About us/Electronics & Software/Sara Viegas.png",
      "Sofia Dias": "About us/Electronics & Software/Sofia.png",
      "Martim Caetano": "About us/Marketing, Operations & Logistics/Martim Alves Caetano.png",
      "Miguel Bom": "About us/Marketing, Operations & Logistics/Miguel Bom.png",
      "Leonor Mira": "About us/Marketing, Operations & Logistics/Mira Leonor.png",
      "Rodrigo Oliveira": "About us/Marketing, Operations & Logistics/Rodrigo Oliveira.png",
      "Stijn Meij": "About us/Marketing, Operations & Logistics/Stijn Meij.png",
      "Teresa de Brito": "About us/Marketing, Operations & Logistics/Teresa de Brito.png",
      "Francisco Teixeira": "About us/Powertrain & Energy Systems/Francisco Teixeira.png",
      "Miguel Martins": "About us/Powertrain & Energy Systems/Miguel Martins.png",
      "Lourenço Próspero": "About us/Structures & Aerodynamics/Lourenço Próspero.png",
      "Daniel Pereira": "About us/Structures & Aerodynamics/Daniel.png",
      "Guilherme Marques": "About us/Structures & Aerodynamics/Guilherme Marques.png",
      "Gustavo Sardinha": "About us/Structures & Aerodynamics/Gustavo Sardinha.png",
      "Joana Pedro": "About us/Structures & Aerodynamics/Joana.png",
      "Miguel Gouveia": "About us/Structures & Aerodynamics/Miguel Gouveia.png",
      "Lourenço Vieira": "About us/Vehicle Dynamics/Lourenço Vieira.png",
      "Duarte Soares": "About us/Vehicle Dynamics/Duarte Soares.png",
      "João Basílio": "About us/Vehicle Dynamics/João Basílio.png",
      "Rita Brígido": "About us/Vehicle Dynamics/Rita Brígido.png",
      "Gonçalo Tome": "About us/Vehicle Dynamics/Tome.png"
    },
    linkedin: {
      "Daniel Ferreira": "https://www.linkedin.com/in/daniel-ferreira-386036278/",
      "Diego Araújo": "https://www.linkedin.com/in/diego-arsenio-araujo/",
      "Manuel Barreiras": "https://www.linkedin.com/in/manuel-barreiras-5aa17423b/",
      "Catarina Santos": "https://www.linkedin.com/in/catarina-santos-a26b923a4/",
      "Inês Gonçalves": "https://www.linkedin.com/in/in%C3%AAs-gon%C3%A7alves-39684b427/",
      "Sara Viegas": "https://www.linkedin.com/in/sara-viegas-ab2736322/",
      "Martim Caetano": "https://www.linkedin.com/in/martim-alves-caetano/",
      "Miguel Bom": "https://www.linkedin.com/in/miguelbom/",
      "Leonor Mira": "https://www.linkedin.com/in/leonor-mira-411336406/",
      "Stijn Meij": "https://www.linkedin.com/in/stijn-meij-0935041b8/",
      "Teresa de Brito": "https://www.linkedin.com/in/teresa-de-brito-0b8a67398/",
      "Francisco Teixeira": "https://www.linkedin.com/in/francisco-teixeira-7763a1327/",
      "Miguel Martins": "https://www.linkedin.com/in/miguel-fontes-martins-961ab82a0/",
      "Guilherme Marques": "https://www.linkedin.com/in/guilherme-marques-1a600a343/",
      "Gustavo Sardinha": "https://www.linkedin.com/in/gustavo-sardinha-850946412/",
      "Lourenço Próspero": "https://www.linkedin.com/in/louren%C3%A7o-pr%C3%B3spero-25b925266/",
      "Miguel Gouveia": "https://www.linkedin.com/in/miguel-gouveia-aa8a773b2/",
      "Duarte Soares": "https://www.linkedin.com/in/duarte-soares-239a1a268/",
      "João Basílio": "https://www.linkedin.com/in/jo%C3%A3obas%C3%ADlio2424/",
      "Lourenço Vieira": "https://www.linkedin.com/in/lourenco-vieira-65578a224/"
    },
    departments: [
      {
        name: { en: "Board", pt: "Direcção" },
        members: [
          { name: "Manuel Barreiras", role: { en: "Team Leader", pt: "Líder da Equipa" } },
          { name: "Daniel Ferreira", role: { en: "Vice President", pt: "Vice-Presidente" } },
          { name: "Diego Araújo", role: { en: "Technical Director", pt: "Diretor Técnico" } }
        ]
      },
      {
        name: { en: "Electronics & Software", pt: "Eletrónica e Software" },
        members: [
          { name: "Catarina Santos", role: { en: "Department Leader", pt: "Líder de Departamento" } },
          { name: "Inês Gonçalves", role: { en: "Member", pt: "Membro" } },
          { name: "Mateus Pinto", role: { en: "Member", pt: "Membro" } },
          { name: "Sara Viegas", role: { en: "Member", pt: "Membro" } },
          { name: "Sofia Dias", role: { en: "Member", pt: "Membro" } }
        ]
      },
      {
        name: { en: "Marketing & Operations", pt: "Marketing, Operações e Logística" },
        members: [
          { name: "Martim Caetano", role: { en: "Department Leader Marketing", pt: "Líder de Marketing" } },
          { name: "Miguel Bom", role: { en: "Department Leader Operations", pt: "Líder de Operações" } },
          { name: "Leonor Mira", role: { en: "Member", pt: "Membro" } },
          { name: "Rodrigo Oliveira", role: { en: "Member", pt: "Membro" } },
          { name: "Stijn Meij", role: { en: "Member", pt: "Membro" } },
          { name: "Teresa de Brito", role: { en: "Member", pt: "Membro" } }
        ]
      },
      {
        name: { en: "Powertrain & Energy Systems", pt: "Propulsão e Sistemas de Energia" },
        members: [
          { name: "Francisco Teixeira", role: { en: "Department Leader", pt: "Líder de Departamento" } },
          { name: "Miguel Martins", role: { en: "Member", pt: "Membro" } }
        ]
      },
      {
        name: { en: "Structures & Aerodynamics", pt: "Estruturas e Aerodinâmica" },
        members: [
          { name: "Lourenço Próspero", role: { en: "Department Leader", pt: "Líder de Departamento" } },
          { name: "Daniel Pereira", role: { en: "Member", pt: "Membro" } },
          { name: "Guilherme Marques", role: { en: "Member", pt: "Membro" } },
          { name: "Gustavo Sardinha", role: { en: "Member", pt: "Membro" } },
          { name: "Joana Pedro", role: { en: "Member", pt: "Membro" } },
          { name: "Miguel Gouveia", role: { en: "Member", pt: "Membro" } }
        ]
      },
      {
        name: { en: "Vehicle Dynamics", pt: "Dinâmica do Veículo" },
        members: [
          { name: "Lourenço Vieira", role: { en: "Department Leader", pt: "Líder de Departamento" } },
          { name: "Duarte Soares", role: { en: "Member", pt: "Membro" } },
          { name: "João Basílio", role: { en: "Member", pt: "Membro" } },
          { name: "Rita Brígido", role: { en: "Member", pt: "Membro" } },
          { name: "Gonçalo Tome", role: { en: "Member", pt: "Membro" } }
        ]
      }
    ]
  },

  // Season 25/26 - add departments/members here when you have them.
  "2025": {
    label: { en: "2025/2026", pt: "2025/2026" },
    photos: {
      "Aliya Ibrahimo": "About us/Board/AliyaIbrahimo.png"
    },
    linkedin: {},
    departments: []
  }
};

// Fallback photo used when a member has no picture (or the file is missing)
var TEAM_FALLBACK_PHOTO = "About us/Team Picture.jpg";

// Season currently shown in the "Meet Our Team" block
var currentTeamYear = "2026";


// 2. TEAM RENDERING
// ------------------------------------------------------------------
// The year buttons in index.html send "2026/2027" / "2025/2026",
// while TEAM_DATA is keyed on the first year only ("2026" / "2025").
// normalizeTeamYear() accepts either form.
function normalizeTeamYear(year) {
  var match = String(year || "").match(/\d{4}/);
  return match ? match[0] : String(year || "");
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, function (ch) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
  });
}

var LINKEDIN_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>';

function renderTeam(year, useLang) {
  var container = document.getElementById("team-members-container");
  if (!container) return;

  var key = normalizeTeamYear(year);
  var l = useLang || lang || "en";
  var season = TEAM_DATA[key];

  if (!season) {
    container.innerHTML = "";
    return;
  }

  var departments = season.departments || [];

  if (!departments.length) {
    var soon = (l === "pt")
      ? "Os membros desta temporada serão publicados em breve."
      : "The members of this season will be published soon.";
    container.innerHTML = '<p style="color:var(--grey); font-family:\'Space Mono\',monospace; font-size:.8rem; letter-spacing:.1em; text-transform:uppercase;">' + soon + "</p>";
    return;
  }

  var html = "";

  departments.forEach(function (dept) {
    var deptName = (dept.name && (dept.name[l] || dept.name.en)) || "";

    html += '<div class="dept-section">';
    html += '<h3 class="dept-header-title">' + escapeHtml(deptName) + "</h3>";
    html += '<div class="members-grid">';

    (dept.members || []).forEach(function (member) {
      var photo = (season.photos && season.photos[member.name]) || TEAM_FALLBACK_PHOTO;
      var linkedin = season.linkedin && season.linkedin[member.name];
      var role = (member.role && (member.role[l] || member.role.en)) || "";
      var safeName = escapeHtml(member.name);

      var img = '<img src="' + encodeURI(photo) + '" alt="' + safeName +
        '" loading="lazy" onerror="this.onerror=null;this.src=\'' + encodeURI(TEAM_FALLBACK_PHOTO) + '\'">';

      html += '<div class="member-card">';
      html += linkedin
        ? '<a href="' + escapeHtml(linkedin) + '" target="_blank" rel="noopener" class="member-photo-wrap">' + img + "</a>"
        : '<div class="member-photo-wrap">' + img + "</div>";

      html += '<div class="member-header">';
      html += '<div class="member-name">' + safeName + "</div>";
      if (linkedin) {
        html += '<a href="' + escapeHtml(linkedin) + '" target="_blank" rel="noopener" class="member-linkedin-icon" title="LinkedIn profile">' + LINKEDIN_SVG + "</a>";
      }
      html += "</div>";
      html += '<div class="member-role">' + escapeHtml(role) + "</div>";
      html += "</div>";
    });

    html += "</div></div>";
  });

  container.innerHTML = html;
}

// Kept for backwards compatibility: re-renders the season currently selected.
function renderAllTeamMembers() {
  renderTeam(currentTeamYear, lang);
}

// Year buttons in the About Us page
function switchTeamYear(year, btnElement) {
  currentTeamYear = normalizeTeamYear(year);

  document.querySelectorAll(".year-tab-btn").forEach(function (b) {
    b.classList.remove("active");
    b.style.opacity = "0.4";
  });

  if (btnElement) {
    btnElement.classList.add("active");
    btnElement.style.opacity = "1";
  }

  renderTeam(currentTeamYear, lang);
}


// 3. LANGUAGE SWITCH (EN / PT)
function applyLang() {
  document.querySelectorAll("[data-en],[data-pt]").forEach(function (el) {
    var val = lang === "pt" ? el.dataset.pt : el.dataset.en;
    if (val !== undefined) el.innerHTML = val;
  });
  document.querySelectorAll("[data-placeholder-en],[data-placeholder-pt]").forEach(function (el) {
    var val = lang === "pt" ? el.dataset.placeholderPt : el.dataset.placeholderEn;
    if (val) el.placeholder = val;
  });

  var fi = (lang === "en" ? " PT" : " EN");
  ["lang-btn", "mob-lang-btn", "foot-lang-btn"].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = fi;
  });

  document.querySelectorAll(".nc[data-lang]").forEach(function (card) {
    card.style.display = (card.getAttribute("data-lang") === lang) ? "flex" : "none";
  });

  renderTeam(currentTeamYear, lang);
}

function toggleLang() {
  lang = lang === "en" ? "pt" : "en";
  applyLang();
}


// 4. PAGE ROUTING & SCROLL ANIMATIONS
function go(page) {
  var mobnav = document.getElementById("mobnav");
  if (mobnav) mobnav.classList.remove("open");

  document.querySelectorAll(".page").forEach(function (p) { p.classList.remove("on"); });
  var el = document.getElementById("page-" + page);
  if (el) el.classList.add("on");

  window.scrollTo({ top: 0, behavior: "smooth" });
  document.querySelectorAll(".nlinks a").forEach(function (a) {
    a.classList.toggle("on", a.dataset.p === page);
  });

  setTimeout(runRev, 120);
}

var revObserver = null;

function runRev() {
  var targets = document.querySelectorAll(".page.on .rv:not(.v), .page.on .rl:not(.v), .page.on .rr:not(.v)");

  // No IntersectionObserver support: just show everything.
  if (typeof IntersectionObserver === "undefined") {
    targets.forEach(function (el) { el.classList.add("v"); });
    return;
  }

  if (!revObserver) {
    revObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("v");
          revObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.06 });
  }

  targets.forEach(function (el) { revObserver.observe(el); });
}


// 5. TABS, SCORING & CAROUSEL
function showTeam(id) {
  document.querySelectorAll(".team-panel").forEach(function (p) { p.classList.remove("on"); });
  document.querySelectorAll(".team-tab").forEach(function (t) { t.classList.remove("on"); });
  var p = document.getElementById("panel-" + id);
  var t = document.getElementById("tab-" + id);
  if (p) p.classList.add("on");
  if (t) t.classList.add("on");
}

// Scoped to the tab block the clicked button belongs to, so the IMechE
// tabs and the European Railway Challenge tabs cannot clear each other.
function showScoring(id) {
  var panel = document.getElementById("sp-" + id);
  var btn = document.getElementById("stab-" + id);
  var root = (btn && btn.closest && btn.closest(".scoring-tabs")) ||
             (panel && panel.closest && panel.closest(".scoring-tabs")) ||
             document;

  root.querySelectorAll(".stab-panel").forEach(function (p) { p.classList.remove("on"); });
  root.querySelectorAll(".stab-btn").forEach(function (b) { b.classList.remove("on"); });

  if (panel) panel.classList.add("on");
  if (btn) btn.classList.add("on");
}

function scrollDepartments(direction, button) {
  var slider = null;

  if (button && button.closest) {
    var container = button.closest(".dept-carousel-container");
    if (container) slider = container.querySelector(".dept-slider");
  }
  if (!slider) {
    var activePage = document.querySelector(".page.on");
    slider = (activePage && activePage.querySelector(".dept-slider")) || document.getElementById("deptSlider");
  }
  if (!slider) return;

  var card = slider.querySelector(".dept-card");
  var step = card ? card.getBoundingClientRect().width + 29 : 320;

  slider.scrollBy({ left: direction * step, behavior: "smooth" });
}


// 6. CUSTOM CURSOR, NAVIGATION & COUNTDOWN
var $c = document.getElementById("cur"), $r = document.getElementById("curR");
var mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener("mousemove", function (e) {
  mx = e.clientX; my = e.clientY;
  if ($c) { $c.style.left = mx + "px"; $c.style.top = my + "px"; }
});

(function L() {
  rx += (mx - rx) * 0.1; ry += (my - ry) * 0.1;
  if ($r) { $r.style.left = rx + "px"; $r.style.top = ry + "px"; }
  requestAnimationFrame(L);
})();

window.addEventListener("scroll", function () {
  var n = document.getElementById("nav");
  if (n) n.classList.toggle("sc", scrollY > 60);
});

function tick() {
  var d = new Date("2027-06-24T09:00:00"), n = new Date(), diff = d - n;
  if (diff <= 0) return;
  var da = Math.floor(diff / 864e5), hr = Math.floor(diff % 864e5 / 36e5), mi = Math.floor(diff % 36e5 / 6e4), se = Math.floor(diff % 6e4 / 1e3);
  var e = document.getElementById("cdd"); if (e) e.textContent = String(da).padStart(3, "0");
  e = document.getElementById("cdh"); if (e) e.textContent = String(hr).padStart(2, "0");
  e = document.getElementById("cdm"); if (e) e.textContent = String(mi).padStart(2, "0");
  e = document.getElementById("cds"); if (e) e.textContent = String(se).padStart(2, "0");
}
setInterval(tick, 1000);
tick();


// 7. TIMELINE (HOME)
(function () {
  var ms = [
    { date: new Date("2026-09-01"), en: "Sep 2026", pt: "Set 2026", ten: "Rollout", tpt: "Rollout" },
    { date: new Date("2026-10-01"), en: "Oct 2026", pt: "Out 2026", ten: "Testing Andorinha", tpt: "Testes Andorinha" },
    { date: new Date("2026-11-01"), en: "Nov 2026", pt: "Nov 2026", ten: "Web Summit", tpt: "Web Summit" },
    { date: new Date("2027-05-01"), en: "May 2027", pt: "Mai 2027", ten: "Portugal Railway Summit", tpt: "Portugal Railway Summit" },
    { date: new Date("2027-06-01"), en: "Jun 2027", pt: "Jun 2027", ten: "European Railway Challenge & IMechE Railway Challenge", tpt: "European Railway Challenge & IMechE Railway Challenge" }
  ];

  var startDate = ms[0].date;
  var endDate = ms[ms.length - 1].date;
  var totalSpan = endDate - startDate;
  var now = new Date();
  var prog = Math.max(0, Math.min(1, (now - startDate) / totalSpan));

  var ge = document.getElementById("tl-glow");
  if (ge) setTimeout(function () { ge.style.left = (prog * 100) + "%"; }, 300);

  var tiesContainer = document.getElementById("tl-ties");
  var milestonesContainer = document.getElementById("tl-milestones");
  if (!tiesContainer || !milestonesContainer) return;

  var msIndices = [];
  var TOTAL_TIES = 65;
  ms.forEach(function (m) {
    var pct = (m.date - startDate) / totalSpan;
    msIndices.push(Math.round(pct * (TOTAL_TIES - 1)));
  });

  var tiesHtml = "";
  for (var i = 0; i < TOTAL_TIES; i++) {
    var pct = (i / (TOTAL_TIES - 1)) * 100;
    var tieRatio = i / (TOTAL_TIES - 1);
    var isPassed = tieRatio <= prog;
    var msIdx = msIndices.indexOf(i);
    var tieClass = "tl-tie ";

    if (msIdx !== -1) {
      var mDate = ms[msIdx].date;
      var isDone = now > mDate;
      var isCur = msIdx === ms.reduce(function (c, x, j) { return now >= x.date ? j : c; }, -1);
      tieClass += isCur ? "milestone-cur" : (isDone ? "milestone-done" : "milestone-future");
    } else {
      tieClass += isPassed ? "done" : "future";
    }
    tiesHtml += '<div class="' + tieClass + '" style="left:' + pct + '%"></div>';
  }
  tiesContainer.innerHTML = tiesHtml;

  var mh = "";
  ms.forEach(function (m, i) {
    var closestTieIdx = msIndices[i];
    var pct = (closestTieIdx / (TOTAL_TIES - 1)) * 100;
    var isDone = now > m.date;
    var isCur = i === ms.reduce(function (c, x, j) { return now >= x.date ? j : c; }, -1);
    var st = isCur ? "cur" : (isDone ? "done" : "future");
    mh += '<div class="tl-ms" style="left:' + pct + '%">' +
            '<div class="tl-ms-date ' + st + '" data-en="' + m.en + '" data-pt="' + m.pt + '">' + m.en + '</div>' +
            '<div class="tl-ms-label ' + st + '" data-en="' + m.ten + '" data-pt="' + m.tpt + '">' + m.ten + '</div>' +
          '</div>';
  });
  milestonesContainer.innerHTML = mh;
})();


// 8. STARTUP
function initSite() {
  // Make sure exactly one page is visible.
  var activePage = document.querySelector(".page.on");
  if (!activePage) {
    go("home");
  } else {
    var id = activePage.id.replace(/^page-/, "");
    document.querySelectorAll(".nlinks a").forEach(function (a) {
      a.classList.toggle("on", a.dataset.p === id);
    });
  }

  // Mark the correct year button as active on load.
  document.querySelectorAll(".year-tab-btn").forEach(function (b) {
    var isActive = normalizeTeamYear(b.getAttribute("data-year")) === currentTeamYear;
    b.classList.toggle("active", isActive);
    b.style.opacity = isActive ? "1" : "0.4";
  });

  applyLang();

  // Start the reveal animations for the page that is visible right now.
  // Without this the .rv / .rl / .rr sections stay at opacity 0 on first load.
  runRev();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSite);
} else {
  initSite();
}

// Mobile menu button
document.addEventListener("click", function (e) {
  var mobnav = document.getElementById("mobnav");
  if (!mobnav) return;
  if (e.target.closest && e.target.closest("#mbb")) mobnav.classList.add("open");
  if (e.target.closest && e.target.closest("#cx")) mobnav.classList.remove("open");
});