var lang = "en";

// 1. FOTO PADEN HUIDIGE LEDEN
var MEMBERS_PHOTOS = {
  // Board / Directie
  "Manuel Barreiras": "About us/Board/Manuel Barreiras.png",
  "Daniel Ferreira": "About us/Board/Daniel Ferreira.png",
  "Diego Araújo": "About us/Board/Diego Araújo.png",
  // Electronics & Software
  "Catarina Santos": "About us/Electronics & Software/Catarina Santos.png",
  "Inês Gonçalves": "About us/Electronics & Software/Inês Gonçalves.png",
  "Mateus Pinto": "About us/Electronics & Software/Mateus.png",
  "Sara Viegas": "About us/Electronics & Software/Sara Viegas.png",
  "Sofia Dias": "About us/Electronics & Software/Sofia.png",
  // Marketing & Operations
  "Martim Caetano": "About us/Marketing, Operations & Logistics/Martim Alves Caetano.png",
  "Miguel Bom": "About us/Marketing, Operations & Logistics/Miguel Bom.png",
  "Leonor Mira": "About us/Marketing, Operations & Logistics/Mira Leonor.png",
  "Rodrigo Oliveira": "About us/Marketing, Operations & Logistics/Rodrigo Oliveira.png",
  "Stijn Meij": "About us/Marketing, Operations & Logistics/Stijn Meij.png",
  "Teresa de Brito": "About us/Marketing, Operations & Logistics/Teresa de Brito.png",
  // Powertrain & Energy Systems
  "Francisco Teixeira": "About us/Powertrain & Energy Systems/Francisco Teixeira.png",
  "Miguel Martins": "About us/Powertrain & Energy Systems/Miguel Martins.png",
  // Structures & Aerodynamics
  "Lourenço Próspero": "About us/Structures & Aerodynamics/Lourenço Próspero.png",
  "Daniel Pereira": "About us/Structures & Aerodynamics/Daniel.png",
  "Guilherme Marques": "About us/Structures & Aerodynamics/Guilherme Marques.png",
  "Gustavo Sardinha": "About us/Structures & Aerodynamics/Gustavo Sardinha.png",
  "Joana Pedro": "About us/Structures & Aerodynamics/Joana.png",
  "Miguel Gouveia": "About us/Structures & Aerodynamics/Miguel Gouveia.png",
  // Vehicle Dynamics
  "Lourenço Vieira": "About us/Vehicle Dynamics/Lourenço Vieira.png",
  "Duarte Soares": "About us/Vehicle Dynamics/Duarte Soares.png",
  "João Basílio": "About us/Vehicle Dynamics/João Basílio.png",
  "Rita Brígido": "About us/Vehicle Dynamics/Rita Brígido.png",
  "Gonçalo Tome": "About us/Vehicle Dynamics/Tome.png"
};

// 2. LINKEDIN REGISTRY (Namen exact gelijk getrokken aan ALL_DEPARTMENTS)
var MEMBERS_LINKEDIN = {
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
};

// 3. COMPLETE TEAM & AFDELINGEN DATABASE (EN + PT)
var ALL_DEPARTMENTS = [
  {
    name: { en: "Board", pt: "Direcção" },
    desc: { en: "Executive leadership and strategy of ISTrain.", pt: "Liderança executiva e estratégia do ISTrain." },
    members: [
      { name: "Manuel Barreiras", role: { en: "Team Leader", pt: "Líder da Equipa" } },
      { name: "Daniel Ferreira", role: { en: "Vice President", pt: "Vice-Presidente" } },
      { name: "Diego Araújo", role: { en: "Technical Director", pt: "Diretor Técnico" } }
    ]
  },
  {
    name: { en: "Electronics & Software", pt: "Eletrónica e Software" },
    desc: { en: "Battery management, motor controllers, firmware, telemetry and control systems.", pt: "Gestão de baterias, controladores de motores, firmware, telemetria e sistemas de controlo." },
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
    desc: { en: "Communications, sponsorship, brand identity, events and team logistics.", pt: "Comunicações, patrocínios, identidade de marca, eventos e logística da equipa." },
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
    desc: { en: "Electric drivetrain, motor selection, energy storage and traction performance.", pt: "Tração elétrica, seleção de motores, armazenamento de energia e desempenho de tração." },
    members: [
      { name: "Francisco Teixeira", role: { en: "Department Leader", pt: "Líder de Departamento" } },
      { name: "Miguel Martins", role: { en: "Member", pt: "Membro" } }
    ]
  },
  {
    name: { en: "Structures & Aerodynamics", pt: "Estruturas e Aerodinâmica" },
    desc: { en: "Chassis, bodyshell, structural analysis and aerodynamic optimisation.", pt: "Chassis, carroçaria, análise estrutural e otimização aerodinâmica." },
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
    desc: { en: "Bogies, suspension, braking systems and ride comfort analysis.", pt: "Bogies, suspensão, sistemas de travagem e análise de conforto." },
    members: [
      { name: "Lourenço Vieira", role: { en: "Department Leader", pt: "Líder de Departamento" } },
      { name: "Duarte Soares", role: { en: "Member", pt: "Membro" } },
      { name: "João Basílio", role: { en: "Member", pt: "Membro" } },
      { name: "Rita Brígido", role: { en: "Member", pt: "Membro" } },
      { name: "Gonçalo Tome", role: { en: "Member", pt: "Membro" } }
    ]
  }
];

// 4. TAALWISSELING (EN / PT)
function applyLang() {
  document.querySelectorAll("[data-en],[data-pt]").forEach(function(el) {
    var val = lang === "pt" ? el.dataset.pt : el.dataset.en;
    if (val !== undefined) el.innerHTML = val;
  });
  document.querySelectorAll("[data-placeholder-en],[data-placeholder-pt]").forEach(function(el) {
    var val = lang === "pt" ? el.dataset.placeholderPt : el.dataset.placeholderEn;
    if (val) el.placeholder = val;
  });
  var fi = (lang === "en" ? " PT" : " EN");
  ["lang-btn", "mob-lang-btn", "foot-lang-btn"].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = fi;
  });

  document.querySelectorAll(".nc[data-lang]").forEach(function(card) {
    var cardLang = card.getAttribute("data-lang");
    card.style.display = (cardLang === lang) ? "flex" : "none";
  });

  renderAllTeamMembers("team-members-container");
}

function toggleLang() {
  lang = lang === "en" ? "pt" : "en";
  applyLang();
}

// 5. TEAM PORTRETTEN RENDEREN
function renderAllTeamMembers(containerId) {
  var container = document.getElementById(containerId);
  if (!container) return;

  var fullHtml = "";
  var linkedinSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>';

  ALL_DEPARTMENTS.forEach(function(dept) {
    var deptName = dept.name[lang] || dept.name.en;
    fullHtml += '<div class="dept-section">';
    fullHtml += '<h3 class="dept-header-title">' + deptName + '</h3>';
    fullHtml += '<div class="members-grid">';
    dept.members.forEach(function(m) {
      var photo = MEMBERS_PHOTOS[m.name] || "About us/default.png";
      var linkedin = MEMBERS_LINKEDIN[m.name];
      var roleText = m.role[lang] || m.role.en;
      fullHtml += '<div class="member-card">';

      if (linkedin) {
        fullHtml += '<a href="' + linkedin + '" target="_blank" class="member-photo-wrap"><img src="' + photo + '" alt="' + m.name + '"></a>';
      } else {
        fullHtml += '<div class="member-photo-wrap"><img src="' + photo + '" alt="' + m.name + '"></div>';
      }
      fullHtml += '<div class="member-header">';
      fullHtml += '<div class="member-name">' + m.name + '</div>';
      if (linkedin) {
        fullHtml += '<a href="' + linkedin + '" target="_blank" class="member-linkedin-icon" title="LinkedIn profile">' + linkedinSvg + '</a>';
      }
      fullHtml += '</div>';
      fullHtml += '<div class="member-role">' + roleText + '</div>';
      fullHtml += '</div>';
    });
    fullHtml += '</div></div>';
  });
  container.innerHTML = fullHtml;
}

// 6. PAGINA ROUTING & ANIMATIES
function go(page) {
  var mobnav = document.getElementById("mobnav");
  if (mobnav) mobnav.classList.remove("open");

  document.querySelectorAll(".page").forEach(function(p) { p.classList.remove("on"); });
  var el = document.getElementById("page-" + page);
  if (el) el.classList.add("on");

  window.scrollTo({ top: 0, behavior: "smooth" });
  document.querySelectorAll(".nlinks a").forEach(function(a) {
    a.classList.toggle("on", a.dataset.p === page);
  });

  setTimeout(runRev, 120);
}

function runRev() {
  var io = new IntersectionObserver(function(en) {
    en.forEach(function(e) {
      if (e.isIntersecting) e.target.classList.add("v");
    });
  }, { threshold: 0.06 });

  document.querySelectorAll(".page.on .rv:not(.v), .page.on .rl:not(.v), .page.on .rr:not(.v)").forEach(function(el) {
    io.observe(el);
  });
}

// 7. TABS, SCORING & CARROUSEL
function showTeam(id) {
  document.querySelectorAll(".team-panel").forEach(function(p) { p.classList.remove("on"); });
  document.querySelectorAll(".team-tab").forEach(function(t) { t.classList.remove("on"); });
  var p = document.getElementById("panel-" + id);
  var t = document.getElementById("tab-" + id);
  if (p) p.classList.add("on");
  if (t) t.classList.add("on");
}

function showScoring(id) {
  document.querySelectorAll(".stab-panel").forEach(function(p) { p.classList.remove("on"); });
  document.querySelectorAll(".stab-btn").forEach(function(b) { b.classList.remove("on"); });
  var p = document.getElementById("sp-" + id);
  var b = document.getElementById("stab-" + id);
  if (p) p.classList.add("on");
  if (b) b.classList.add("on");
}

function showErcScoring(tabId) {
  showScoring(tabId);
}

function scrollDepartments(direction) {
  var activePage = document.querySelector(".page.on");
  var slider = activePage
    ? (activePage.querySelector("#deptSlider") || activePage.querySelector(".dept-slider"))
    : document.getElementById("deptSlider");

  if (!slider) return;

  var card = slider.querySelector(".dept-card") || slider.querySelector(".card") || slider.querySelector(".dc") || slider.firstElementChild;
  var cardWidth = card ? card.offsetWidth + 30 : 320;

  slider.scrollBy({
    left: direction * cardWidth,
    behavior: "smooth"
  });
}

// 8. CUSTOM CURSOR, NAVIGATIE & COUNTDOWN
var $c = document.getElementById("cur"), $r = document.getElementById("curR");
var mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener("mousemove", function(e) {
  mx = e.clientX; my = e.clientY;
  if ($c) { $c.style.left = mx + "px"; $c.style.top = my + "px"; }
});

(function L() {
  rx += (mx - rx) * 0.1; ry += (my - ry) * 0.1;
  if ($r) { $r.style.left = rx + "px"; $r.style.top = ry + "px"; }
  requestAnimationFrame(L);
})();

window.addEventListener("scroll", function() {
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

// 9. TIJDLIJN (HOME)
(function() {
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
  if (ge) setTimeout(function() { ge.style.left = (prog * 100) + "%"; }, 300);

  var tiesContainer = document.getElementById("tl-ties");
  var milestonesContainer = document.getElementById("tl-milestones");
  if (!tiesContainer || !milestonesContainer) return;

  var msIndices = [];
  var TOTAL_TIES = 65;
  ms.forEach(function(m) {
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
      var isCur = msIdx === ms.reduce(function(c, x, j) { return now >= x.date ? j : c; }, -1);
      tieClass += isCur ? "milestone-cur" : (isDone ? "milestone-done" : "milestone-future");
    } else {
      tieClass += isPassed ? "done" : "future";
    }
    tiesHtml += '<div class="' + tieClass + '" style="left:' + pct + '%"></div>';
  }
  tiesContainer.innerHTML = tiesHtml;

  var mh = "";
  ms.forEach(function(m, i) {
    var closestTieIdx = msIndices[i];
    var pct = (closestTieIdx / (TOTAL_TIES - 1)) * 100;
    var isDone = now > m.date;
    var isCur = i === ms.reduce(function(c, x, j) { return now >= x.date ? j : c; }, -1);
    var st = isCur ? "cur" : (isDone ? "done" : "future");
    mh += '<div class="tl-ms" style="left:' + pct + '%">' +
            '<div class="tl-ms-date ' + st + '" data-en="' + m.en + '" data-pt="' + m.pt + '">' + m.en + '</div>' +
            '<div class="tl-ms-label ' + st + '" data-en="' + m.ten + '" data-pt="' + m.tpt + '">' + m.ten + '</div>' +
          '</div>';
  });
  milestonesContainer.innerHTML = mh;
})();

// 10. INITIALISATIE BIJ OPSTARTEN
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll("a,button,.card,.dc,.nc,.mc,.sp-item,.clink,.pf,.cic-card").forEach(function(el) {
    el.addEventListener("mouseenter", function() { if ($r) $r.classList.add("big"); });
    el.addEventListener("mouseleave", function() { if ($r) $r.classList.remove("big"); });
  });

  var mbb = document.getElementById("mbb");
  if (mbb) mbb.addEventListener("click", function() { document.getElementById("mobnav").classList.add("open"); });

  var cx = document.getElementById("cx");
  if (cx) cx.addEventListener("click", function() { document.getElementById("mobnav").classList.remove("open"); });

  var hv = document.getElementById("hvid");
  if (hv) {
    hv.muted = true;
    var _p = function() { hv.play().catch(function() {}); };
    _p();
    document.addEventListener("click", _p, { once: true });
    setTimeout(_p, 500);
  }

  applyLang();
  runRev();
  setTimeout(runRev, 200);

  var activePage = document.querySelector(".page.on") || document.querySelector('.page[style*="display: block"]');
  if (!activePage) {
    go("home");
  }
});