const skills = [
  {
    id: "video-editing", title: "Video Editing", icon: "clapperboard", category: "Creative", demand: "Very High", demandScore: 94, growth: "+38%", income: "$300 - $5,000/mo", incomeScore: 5000, difficulty: "Medium", difficultyScore: 3, time: "4-6 months", timeScore: 5, aiRisk: "Low", aiRiskScore: 22, futureSafety: 88, creativity: 92, device: "Mobile or PC", trend: "Trending", color: "rgba(32, 228, 255, 0.22)",
    summary: "Edit long-form and short-form videos for creators, brands, podcasts, coaches, and agencies.",
    demandAnalysis: "Video remains the dominant content format. Creators and businesses need retention editing, shorts, ads, podcast clips, tutorials, and product videos.",
    futureScope: "2026+ demand should stay strong for editors who combine storytelling, brand taste, AI-assisted speed, and platform-specific content strategy.",
    riskAnalysis: "AI can produce cuts, captions, and drafts, but human pacing, emotion, storytelling, client taste, and creative direction protect strong editors.",
    incomeLevels: { beginner: "$100 - $500/mo", intermediate: "$500 - $2,000/mo", pro: "$2,000 - $5,000+/mo" },
    roadmap: ["Basics: learn CapCut, Premiere, cuts, captions, sound, pacing", "Practice Projects: recreate 20 viral edits and 10 long-form cuts", "Portfolio Building: publish before-after edits in one niche", "Freelancing Start: offer paid test edits to creators and podcasts", "Scaling / Agency: sell retainers, add thumbnails, scripts, and creative strategy"],
    tools: ["CapCut", "Adobe Premiere Pro", "DaVinci Resolve", "After Effects", "Frame.io", "Envato Elements"],
    freeResources: ["YouTube editing breakdowns", "DaVinci Resolve free course", "CapCut creator tutorials", "Retention editing case studies"],
    paidResources: ["Premiere Pro masterclasses", "Motion design courses", "Storytelling for editors", "Creator economy communities"],
    platforms: ["Fiverr", "Upwork", "LinkedIn", "YouTube communities", "Discord creator groups"],
    pricing: "Start with $15-$50 per short or $75-$200 per long-form edit. Move to monthly retainers after proof.",
    portfolio: ["3 short-form edits", "1 talking-head video", "1 podcast clip pack", "Before-after editing reel"],
    firstClient: "Find creators with good ideas but weak edits. Send one short sample clip and offer a paid test edit with 48-hour delivery.",
    mistakes: ["Only learning software", "Overusing effects", "No niche portfolio", "Slow delivery", "Weak project organization"]
  },
  {
    id: "web-development", title: "Web Development", icon: "code-2", category: "Technical", demand: "Very High", demandScore: 92, growth: "+31%", income: "$600 - $12,000/mo", incomeScore: 12000, difficulty: "Hard", difficultyScore: 5, time: "7-10 months", timeScore: 9, aiRisk: "Low", aiRiskScore: 25, futureSafety: 91, creativity: 72, device: "PC required", trend: "High value", color: "rgba(143, 91, 255, 0.25)",
    summary: "Build websites, landing pages, web apps, dashboards, and product interfaces for businesses and startups.",
    demandAnalysis: "Companies need fast digital products, conversion pages, internal tools, and AI-integrated web experiences.",
    futureScope: "2026+ developers who use AI to ship faster, understand UX, and solve business problems will stay highly valuable.",
    riskAnalysis: "AI can generate code, but production quality, debugging, architecture, UX judgment, and client requirements still need skilled humans.",
    incomeLevels: { beginner: "$300 - $1,000/mo", intermediate: "$1,000 - $4,000/mo", pro: "$4,000 - $12,000+/mo" },
    roadmap: ["Basics: HTML, CSS, JavaScript, responsive layouts", "Practice Projects: landing pages, dashboards, forms, APIs", "Portfolio Building: ship 5 polished live projects", "Freelancing Start: sell landing pages and business websites", "Scaling / Agency: specialize in SaaS, e-commerce, or AI integrations"],
    tools: ["VS Code", "GitHub", "Tailwind CSS", "JavaScript", "React optional", "Netlify", "Vercel"],
    freeResources: ["MDN Web Docs", "freeCodeCamp", "Frontend Mentor", "Tailwind docs"],
    paidResources: ["Frontend courses", "JavaScript deep dives", "UI engineering programs", "SaaS design courses"],
    platforms: ["Upwork", "Contra", "LinkedIn", "Indie Hackers", "Local business outreach"],
    pricing: "Start at $150-$500 per landing page, then $1,000-$5,000+ for sites with strategy, copy, and integrations.",
    portfolio: ["SaaS landing page", "Business website", "Dashboard UI", "Booking or lead capture flow"],
    firstClient: "Audit outdated local websites and send a short Loom showing how a faster homepage could increase leads.",
    mistakes: ["Ignoring mobile", "Skipping fundamentals", "No live demos", "Poor communication", "Building features without business goals"]
  },
  {
    id: "ai-automation", title: "AI Automation", icon: "bot", category: "AI", demand: "Exploding", demandScore: 99, growth: "+74%", income: "$1,000 - $20,000/mo", incomeScore: 20000, difficulty: "Medium", difficultyScore: 3, time: "3-6 months", timeScore: 4, aiRisk: "Low", aiRiskScore: 12, futureSafety: 96, creativity: 66, device: "PC preferred", trend: "Trending", color: "rgba(182, 255, 77, 0.18)",
    summary: "Create AI-powered workflows, chatbots, lead systems, CRM automations, and internal business tools.",
    demandAnalysis: "Businesses want lower operational cost, faster response times, better lead handling, and automated reporting.",
    futureScope: "2026+ demand should grow as companies move from AI experiments to real operational systems.",
    riskAnalysis: "This skill grows with AI. Risk comes from tool changes, weak process design, and poor reliability rather than replacement.",
    incomeLevels: { beginner: "$500 - $1,500/mo", intermediate: "$1,500 - $6,000/mo", pro: "$6,000 - $20,000+/mo" },
    roadmap: ["Basics: prompting, workflows, Zapier or Make, data logic", "Practice Projects: lead capture, auto-replies, reporting flows", "Portfolio Building: document automations with screenshots and outcomes", "Freelancing Start: pitch one time-saving workflow to businesses", "Scaling / Agency: sell monthly maintenance and custom AI systems"],
    tools: ["ChatGPT", "Make", "Zapier", "Airtable", "Notion", "Google Sheets", "OpenAI API"],
    freeResources: ["Make Academy", "Zapier tutorials", "OpenAI docs", "No-code workflow videos"],
    paidResources: ["AI automation bootcamps", "API fundamentals", "No-code agency communities", "Operations courses"],
    platforms: ["Upwork", "LinkedIn", "Facebook business groups", "Agency partnerships", "Direct outreach"],
    pricing: "Start at $150-$500 per simple automation, then $1,000-$5,000+ for systems with maintenance.",
    portfolio: ["Lead qualification bot", "CRM update workflow", "AI email triage", "Weekly report generator"],
    firstClient: "Pick a business with repetitive admin work and propose one workflow that saves 5+ hours per week.",
    mistakes: ["Automating broken processes", "No error handling", "Overpromising AI accuracy", "No documentation", "Ignoring privacy"]
  },
  {
    id: "copywriting", title: "Copywriting", icon: "pen-tool", category: "Writing", demand: "High", demandScore: 81, growth: "+19%", income: "$500 - $10,000/mo", incomeScore: 10000, difficulty: "Medium", difficultyScore: 3, time: "3-5 months", timeScore: 4, aiRisk: "Medium", aiRiskScore: 55, futureSafety: 74, creativity: 88, device: "Mobile or PC", trend: "Evergreen", color: "rgba(255, 209, 102, 0.2)",
    summary: "Write emails, landing pages, ads, sales pages, scripts, and product messaging that drive action.",
    demandAnalysis: "Businesses need better offers, clearer messaging, email campaigns, ads, and conversion assets.",
    futureScope: "2026+ copywriters with research, positioning, and conversion strategy will outperform generic AI-assisted writers.",
    riskAnalysis: "AI can create average drafts. Human research, taste, customer insight, persuasion, and offer strategy remain valuable.",
    incomeLevels: { beginner: "$200 - $800/mo", intermediate: "$800 - $3,000/mo", pro: "$3,000 - $10,000+/mo" },
    roadmap: ["Basics: headlines, offers, customer awareness, benefits", "Practice Projects: rewrite ads, emails, and sales pages", "Portfolio Building: create niche copy samples and teardowns", "Freelancing Start: offer email sequences or landing page rewrites", "Scaling / Agency: become a funnel strategist or offer consultant"],
    tools: ["Google Docs", "Notion", "Grammarly", "ChatGPT", "Swipe files", "Ad libraries"],
    freeResources: ["Copywriting examples", "Marketing breakdowns", "Email teardown channels", "Public ad libraries"],
    paidResources: ["Direct response courses", "Email marketing programs", "Positioning workshops", "Funnel strategy training"],
    platforms: ["Upwork", "LinkedIn", "X/Twitter", "Creator communities", "SaaS groups"],
    pricing: "Start with $50-$150 emails or $150-$500 landing page rewrites. Increase with measurable conversion proof.",
    portfolio: ["Welcome email sequence", "Landing page rewrite", "Ad angle library", "Sales page sample"],
    firstClient: "Send a short teardown of a weak landing page or email and include 3 stronger headline options.",
    mistakes: ["Writing clever instead of clear", "Skipping research", "Weak offers", "No proof", "Depending fully on AI"]
  },
  {
    id: "ui-ux-design", title: "UI/UX Design", icon: "layout-dashboard", category: "Design", demand: "High", demandScore: 87, growth: "+26%", income: "$500 - $9,000/mo", incomeScore: 9000, difficulty: "Medium-Hard", difficultyScore: 4, time: "5-8 months", timeScore: 7, aiRisk: "Low-Medium", aiRiskScore: 34, futureSafety: 86, creativity: 90, device: "PC preferred", trend: "Trending", color: "rgba(255, 78, 205, 0.22)",
    summary: "Design apps, dashboards, websites, user flows, wireframes, and product experiences that are easy to use.",
    demandAnalysis: "Startups and businesses need better digital products, clearer onboarding, higher conversion, and polished interfaces.",
    futureScope: "2026+ UI/UX designers who combine research, product thinking, and AI-assisted prototyping will remain in demand.",
    riskAnalysis: "AI can generate screens, but user research, usability, business context, and product decision-making are human-heavy.",
    incomeLevels: { beginner: "$300 - $900/mo", intermediate: "$900 - $3,500/mo", pro: "$3,500 - $9,000+/mo" },
    roadmap: ["Basics: layout, typography, color, UX principles", "Practice Projects: redesign apps, dashboards, landing pages", "Portfolio Building: write case studies with problem, process, result", "Freelancing Start: offer audits and redesign packages", "Scaling / Agency: specialize in SaaS UX or design systems"],
    tools: ["Figma", "FigJam", "Notion", "Framer", "Maze", "Loom"],
    freeResources: ["Figma tutorials", "UX case study libraries", "Laws of UX", "Design system examples"],
    paidResources: ["UX bootcamps", "Product design courses", "Design systems workshops", "Portfolio mentorship"],
    platforms: ["Dribbble", "Behance", "LinkedIn", "Upwork", "Startup communities"],
    pricing: "Start with $100-$300 audits or landing redesigns, then $1,000-$5,000+ for product flows and design systems.",
    portfolio: ["App onboarding redesign", "SaaS dashboard", "Landing page", "UX audit case study"],
    firstClient: "Audit a confusing signup or checkout flow and pitch a cleaner redesign with screenshots.",
    mistakes: ["Only making pretty screens", "No UX reasoning", "Weak case studies", "Ignoring accessibility", "No business outcome"]
  },
  {
    id: "thumbnail-design", title: "Thumbnail Design", icon: "image", category: "Design", demand: "High", demandScore: 84, growth: "+22%", income: "$100 - $3,000/mo", incomeScore: 3000, difficulty: "Easy", difficultyScore: 1, time: "1-2 months", timeScore: 2, aiRisk: "Low-Medium", aiRiskScore: 38, futureSafety: 78, creativity: 94, device: "Mobile or PC", trend: "Popular", color: "rgba(255, 78, 205, 0.22)",
    summary: "Design high-click thumbnails for YouTube channels, creators, educators, gaming channels, and media brands.",
    demandAnalysis: "YouTube competition keeps demand high. Creators need better click-through rates and more visual testing.",
    futureScope: "2026+ thumbnail designers who understand packaging, titles, psychology, and A/B testing should stay valuable.",
    riskAnalysis: "AI can create concepts, but high-performing thumbnails require strategy, emotion, brand fit, and mobile readability.",
    incomeLevels: { beginner: "$50 - $300/mo", intermediate: "$300 - $1,200/mo", pro: "$1,200 - $3,000+/mo" },
    roadmap: ["Basics: Canva, Photoshop, contrast, faces, text hierarchy", "Practice Projects: recreate 30 top niche thumbnails", "Portfolio Building: make before-after redesigns", "Freelancing Start: pitch weak YouTube channels", "Scaling / Agency: sell monthly thumbnail retainers"],
    tools: ["Canva", "Photoshop", "Photopea", "Remove.bg", "Midjourney", "Google Drive"],
    freeResources: ["Canva tutorials", "Thumbnail breakdown videos", "Photopea practice", "CTR case studies"],
    paidResources: ["Photoshop design courses", "YouTube growth programs", "Creator packaging communities", "Design mentorship"],
    platforms: ["Fiverr", "YouTube communities", "Discord groups", "LinkedIn", "Direct outreach"],
    pricing: "Start at $5-$25 per thumbnail, then move to $50-$150+ per design or monthly packs.",
    portfolio: ["10 niche thumbnails", "3 before-after redesigns", "Mobile readability tests", "Title plus thumbnail samples"],
    firstClient: "Find channels with strong content but poor thumbnails and send 2 redesign ideas with your reasoning.",
    mistakes: ["Too much text", "Poor mobile readability", "Copying without strategy", "No title pairing", "Weak contrast"]
  },
  {
    id: "social-media-management", title: "Social Media Management", icon: "share-2", category: "Marketing", demand: "High", demandScore: 86, growth: "+24%", income: "$200 - $4,000/mo", incomeScore: 4000, difficulty: "Easy-Medium", difficultyScore: 2, time: "2-3 months", timeScore: 3, aiRisk: "Medium", aiRiskScore: 52, futureSafety: 72, creativity: 82, device: "Mobile or PC", trend: "Popular", color: "rgba(32, 228, 255, 0.18)",
    summary: "Plan, publish, schedule, repurpose, and analyze content for businesses, creators, and personal brands.",
    demandAnalysis: "Businesses need consistent content but lack time, systems, platform knowledge, and reporting discipline.",
    futureScope: "2026+ managers who combine content systems, analytics, AI workflows, and brand strategy will outperform basic posters.",
    riskAnalysis: "AI can draft posts, but strategy, trend judgment, community management, and brand voice still need humans.",
    incomeLevels: { beginner: "$100 - $500/mo", intermediate: "$500 - $1,800/mo", pro: "$1,800 - $4,000+/mo" },
    roadmap: ["Basics: platform formats, hooks, calendars, analytics", "Practice Projects: create 30 posts for one niche", "Portfolio Building: mock content strategy and sample calendar", "Freelancing Start: offer content packs to local businesses", "Scaling / Agency: add ads, reporting, repurposing, and retainers"],
    tools: ["Canva", "Buffer", "Meta Business Suite", "Notion", "CapCut", "Google Analytics"],
    freeResources: ["Platform creator guides", "Canva tutorials", "Content case studies", "Trend newsletters"],
    paidResources: ["Social strategy courses", "Personal branding programs", "Analytics workshops", "Community management training"],
    platforms: ["LinkedIn", "Instagram", "Facebook groups", "Upwork", "Local business outreach"],
    pricing: "Start at $100-$300/month for basic posting, then $700-$2,000+ for strategy, reporting, and content systems.",
    portfolio: ["30-day content calendar", "10 post carousel pack", "Short-form clip examples", "Monthly report sample"],
    firstClient: "Offer a local business 10 post ideas and a simple 30-day content calendar.",
    mistakes: ["Posting without strategy", "No analytics", "Inconsistent branding", "Chasing every trend", "Weak reports"]
  }
];

const futureJobs = [
  { title: "AI Automation", icon: "workflow", text: "Design systems that save hours and turn AI into business operations." },
  { title: "Web Development", icon: "code-2", text: "Ship websites, apps, dashboards, and AI-powered product interfaces." },
  { title: "Content Creation", icon: "video", text: "Build trust and demand through media, storytelling, and distribution." },
  { title: "Personal Branding", icon: "badge-check", text: "Help experts become visible, trusted, and easier to buy from." },
  { title: "UI/UX Design", icon: "layout-dashboard", text: "Make digital products clear, usable, and profitable." }
];

const faqs = [
  ["Which online skill is best for beginners?", "Thumbnail design, social media management, video editing, and copywriting are easier to start because you can build portfolio samples quickly."],
  ["Can I start with only a mobile phone?", "Yes. Start with thumbnail design, social media management, basic video editing, content creation, or copywriting. Web development and automation become much easier with a PC."],
  ["How fast can I earn online?", "A realistic range is 2-6 months for a focused beginner. Your speed depends on daily practice, portfolio quality, outreach, and choosing one clear niche."],
  ["Will AI replace freelancers?", "AI replaces generic work first. Freelancers who use AI plus taste, client communication, strategy, and reliable delivery become stronger."],
  ["Should I buy a paid course?", "Only after you know the skill fits you. Start free, build 2-3 projects, then buy a course if it gives structure, feedback, or community."]
];

const chatAnswers = {
  "which skill should i learn?": "Start with your constraints. If you only have mobile, choose thumbnail design, social media management, copywriting, or video editing. If you have a PC and enjoy systems, choose web development or AI automation. Pick one skill for 90 days, build proof, then outreach.",
  "how to earn online?": "Choose one skill, learn the basics, build 3-5 portfolio samples, publish your work, then contact clients with a specific improvement. Your first goal is not passive income. It is proof, trust, and one paid project.",
  "best freelancing skill?": "The best freelancing skill is the one you can practice daily and sell clearly. For high income, AI automation and web development are strong. For faster beginner entry, thumbnail design, social media management, and video editing are practical."
};

const state = { filter: "All", query: "", saved: JSON.parse(localStorage.getItem("zguide.saved") || "[]") };
const byId = (id) => document.getElementById(id);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

function init() {
  renderFilters(); renderPopularSlider(); renderSkills(); renderComparison(); renderTrendDashboard(); renderFutureJobs();
  renderFreelanceCards(); renderRoadmapSelect(); renderFaq(); renderSaved(); bindEvents(); initReveal(); initCounters(); initTypingPlaceholder();
  if (window.lucide) lucide.createIcons();
  setTimeout(() => byId("loader").classList.add("is-hidden"), 650);
}

function renderFilters() {
  const filters = ["All", "Creative", "Technical", "AI", "Design", "Writing", "Marketing", "Mobile"];
  byId("filterChips").innerHTML = filters.map((filter) => `<button class="chip ${filter === state.filter ? "is-active" : ""}" data-filter="${filter}">${filter}</button>`).join("");
}

function getFilteredSkills() {
  const sort = byId("sortSelect")?.value || "trend";
  let list = skills.filter((skill) => {
    const q = state.query.trim().toLowerCase();
    const matchesFilter = state.filter === "All" || skill.category === state.filter || (state.filter === "Mobile" && skill.device.includes("Mobile"));
    const matchesQuery = !q || [skill.title, skill.category, skill.demand, skill.aiRisk, skill.summary, skill.device].join(" ").toLowerCase().includes(q);
    return matchesFilter && matchesQuery;
  });
  return [...list].sort((a, b) => {
    if (sort === "income") return b.incomeScore - a.incomeScore;
    if (sort === "time") return a.timeScore - b.timeScore;
    if (sort === "risk") return a.aiRiskScore - b.aiRiskScore;
    if (sort === "future") return b.futureSafety - a.futureSafety;
    return b.demandScore - a.demandScore;
  });
}

function renderSkills() {
  const list = getFilteredSkills();
  byId("skillGrid").innerHTML = list.length ? list.map(skillCardTemplate).join("") : `<div class="skill-card md:col-span-2 xl:col-span-3"><h3>No skills found</h3><p>Try design, AI, video, copywriting, mobile, or web.</p></div>`;
  if (window.lucide) lucide.createIcons();
}

function skillCardTemplate(skill) {
  const saved = state.saved.includes(skill.id);
  return `
    <article class="skill-card reveal is-visible" style="--card-glow:${skill.color}">
      <div class="skill-card-header"><div class="skill-icon"><i data-lucide="${skill.icon}"></i></div><span class="badge">${skill.trend}</span></div>
      <h3>${skill.title}</h3><p>${skill.summary}</p>
      <div class="meter-block"><div><span>AI Risk</span><strong>${skill.aiRisk}</strong></div><div class="meter"><span style="width:${skill.aiRiskScore}%"></span></div></div>
      <div class="meter-block"><div><span>Future Proof</span><strong>${skill.futureSafety}%</strong></div><div class="meter future"><span style="width:${skill.futureSafety}%"></span></div></div>
      <ul class="skill-stats">
        <li><span>Demand score</span><strong>${skill.demandScore}/100</strong></li><li><span>Income</span><strong>${skill.income}</strong></li>
        <li><span>Difficulty</span><strong>${skill.difficulty}</strong></li><li><span>Learning time</span><strong>${skill.time}</strong></li>
      </ul>
      <div class="skill-actions"><button class="primary-button" data-skill-open="${skill.id}">Open Detail Page</button><button class="save-button ${saved ? "is-saved" : ""}" data-save="${skill.id}" aria-label="Save ${skill.title}"><i data-lucide="${saved ? "bookmark-check" : "bookmark"}"></i></button></div>
    </article>`;
}

function renderPopularSlider() {
  byId("popularSlider").innerHTML = skills.map((skill) => `<button class="popular-pill" data-skill-open="${skill.id}"><span>${skill.trend}</span><strong>${skill.title}</strong><i data-lucide="arrow-up-right"></i></button>`).join("");
}

function renderComparison() {
  byId("comparisonBody").innerHTML = skills.map((skill) => `<tr><td>${skill.title}</td><td>${skill.demand} (${skill.demandScore})</td><td>${skill.income}</td><td>${skill.difficulty}</td><td>${skill.aiRisk}</td><td>${skill.time}</td><td>${skill.futureSafety}%</td></tr>`).join("");
}

function renderTrendDashboard() {
  byId("trendDashboard").innerHTML = skills.slice(0, 5).map((skill) => `
    <article class="trend-card reveal" data-skill-open="${skill.id}">
      <div class="trend-top"><i data-lucide="${skill.icon}"></i><span>${skill.trend}</span></div>
      <h3>${skill.title}</h3><p>${skill.income}</p>
      <div class="trend-score"><strong>${skill.demandScore}</strong><span>Demand score</span></div>
      <div class="mini-chart"><span style="height:35%"></span><span style="height:55%"></span><span style="height:45%"></span><span style="height:72%"></span><span style="height:88%"></span></div>
      <small>${skill.growth} growth trend</small>
    </article>`).join("");
}

function renderFutureJobs() {
  const el = document.getElementById("futureJobs");
  if (!el) return;
  el.innerHTML = futureJobs.map((job) => `<article class="future-card reveal"><i data-lucide="${job.icon}"></i><h3>${job.title}</h3><p>${job.text}</p></article>`).join("");
}

function renderFreelanceCards() {
  byId("freelanceCards").innerHTML = skills.slice(0, 4).map((skill) => `
    <article class="freelance-card reveal">
      <i data-lucide="${skill.icon}"></i><h3>${skill.title}</h3>
      <p><strong>Platforms:</strong> ${skill.platforms.slice(0, 3).join(", ")}</p>
      <p><strong>Pricing:</strong> ${skill.pricing}</p>
      <button class="secondary-button" data-skill-open="${skill.id}">View Client Guide</button>
    </article>`).join("");
}

function renderRoadmapSelect() {
  const select = byId("roadmapSelect");
  select.innerHTML = skills.map((skill) => `<option value="${skill.id}">${skill.title}</option>`).join("");
  renderRoadmapOutput(select.value);
}

function renderRoadmapOutput(id) {
  const skill = skills.find((item) => item.id === id) || skills[0];
  byId("roadmapOutput").innerHTML = skill.roadmap.map((phase, index) => {
    const [title, text] = phase.split(": ");
    return `<article class="phase-card"><span>Phase ${index + 1}</span><h3>${title}</h3><p>${text}</p></article>`;
  }).join("");
}

function renderFaq() {
  byId("faqList").innerHTML = faqs.map(([question, answer], index) => `<article class="faq-item reveal ${index === 0 ? "is-open" : ""}"><button class="faq-question" type="button"><span>${question}</span><i data-lucide="chevron-down"></i></button><div class="faq-answer">${answer}</div></article>`).join("");
}

function openSkill(id) {
  const skill = skills.find((item) => item.id === id);
  if (!skill) return;
  history.replaceState(null, "", `#skill/${skill.id}`);
  byId("skillDetail").innerHTML = `
    <div class="detail-hero">
      <div><span class="eyebrow">${skill.category} career detail page</span><h2 id="modalTitle" class="detail-title">${skill.title}</h2><p class="detail-summary">${skill.summary}</p></div>
      <div class="detail-stat-grid">
        <div class="detail-stat"><span>Demand score</span><strong>${skill.demandScore}/100</strong></div><div class="detail-stat"><span>Future scope</span><strong>${skill.futureSafety}% safe</strong></div>
        <div class="detail-stat"><span>AI risk</span><strong>${skill.aiRisk}</strong></div><div class="detail-stat"><span>Human creativity</span><strong>${skill.creativity}%</strong></div><div class="detail-stat"><span>Device</span><strong>${skill.device}</strong></div>
      </div>
    </div>
    <div class="risk-grid">
      ${riskMeter("AI Replacement Risk", skill.aiRiskScore, "Lower is better")}
      ${riskMeter("Future Proof Score", skill.futureSafety, "Higher is better")}
      ${riskMeter("Human Creativity Dependency", skill.creativity, "Higher is better")}
    </div>
    <div class="income-grid">
      <div><span>Beginner</span><strong>${skill.incomeLevels.beginner}</strong></div><div><span>Intermediate</span><strong>${skill.incomeLevels.intermediate}</strong></div><div><span>Pro</span><strong>${skill.incomeLevels.pro}</strong></div>
    </div>
    <div class="detail-sections">
      ${detailBlock("What is the skill?", skill.summary)}${detailBlock("Why it is in demand?", skill.demandAnalysis)}${detailBlock("Future scope (2026+ prediction)", skill.futureScope)}${detailBlock("AI replacement risk analysis", skill.riskAnalysis)}
      ${detailList("Beginner to Pro roadmap", skill.roadmap)}${detailList("Tools required", skill.tools)}${detailList("Free learning resources", skill.freeResources)}${detailList("Paid learning resources", skill.paidResources)}
      ${detailBlock("Time required to learn", skill.time)}${detailBlock("Expected income", `Beginner: ${skill.incomeLevels.beginner}. Intermediate: ${skill.incomeLevels.intermediate}. Pro: ${skill.incomeLevels.pro}.`)}
      ${detailList("Freelance platforms", skill.platforms)}${detailBlock("Pricing strategy", skill.pricing)}${detailList("Portfolio examples", skill.portfolio)}${detailBlock("How to get first client", skill.firstClient)}
      ${detailList("Common mistakes", skill.mistakes)}${detailBlock("Mobile vs PC requirement", skill.device)}
    </div>`;
  openModal("skillModal");
  if (window.lucide) lucide.createIcons();
}

function riskMeter(title, score, caption) {
  return `<div class="risk-card"><div><span>${title}</span><strong>${score}%</strong></div><div class="meter ${score > 70 ? "danger" : "future"}"><span style="width:${score}%"></span></div><small>${caption}</small></div>`;
}
function detailBlock(title, text) { return `<section class="detail-block"><h3>${title}</h3><p>${text}</p></section>`; }
function detailList(title, items) { return `<section class="detail-block"><h3>${title}</h3><ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul></section>`; }

function renderSaved() {
  localStorage.setItem("zguide.saved", JSON.stringify(state.saved));
  byId("savedCount").textContent = state.saved.length;
  byId("xpCount").textContent = 420 + state.saved.length * 80;
  const savedSkills = state.saved.map((id) => skills.find((skill) => skill.id === id)).filter(Boolean);
  byId("savedSkills").innerHTML = savedSkills.length ? savedSkills.map((skill) => `<div class="saved-item"><span>${skill.title}</span><small>${skill.time}</small></div>`).join("") : `<div class="saved-item"><span>No saved skills yet</span><small>Tap a bookmark</small></div>`;
}

function runAdvisor(form) {
  const data = new FormData(form);
  const style = data.get("style"), device = data.get("device"), time = data.get("time"), english = data.get("english");
  const scored = skills.map((skill) => {
    let score = skill.demandScore / 20 + skill.futureSafety / 25 - skill.aiRiskScore / 30;
    if (style === "creative" && ["Creative", "Design", "Writing", "Marketing"].includes(skill.category)) score += 4;
    if (style === "technical" && ["Technical", "AI"].includes(skill.category)) score += 4;
    if (device === "mobile" && skill.device.includes("Mobile")) score += 4;
    if (device === "pc" && skill.device.includes("PC")) score += 3;
    if (time === "low" && skill.timeScore <= 3) score += 3;
    if (time === "medium" && skill.timeScore <= 5) score += 2;
    if (time === "high") score += 2;
    if (english === "basic" && !["Writing", "Marketing"].includes(skill.category)) score += 1;
    if (english === "strong" && ["Writing", "Marketing", "AI"].includes(skill.category)) score += 2;
    return { ...skill, score };
  }).sort((a, b) => b.score - a.score).slice(0, 3);
  byId("advisorResult").innerHTML = scored.map((skill, index) => `<button class="result-card text-left" data-skill-open="${skill.id}"><strong>${index + 1}. ${skill.title}</strong><div class="result-meta"><span>${skill.income}</span><span>${skill.demandScore}/100 demand</span><span>${skill.aiRisk} AI risk</span><span>${skill.time}</span></div><p>${matchReason(skill, style, device, time, english)}</p></button>`).join("");
}

function matchReason(skill, style, device, time, english) {
  const reasons = [];
  reasons.push(`${skill.title} fits because it has ${skill.demand.toLowerCase()} demand and a ${skill.futureSafety}% future-proof score.`);
  if (device === "mobile" && skill.device.includes("Mobile")) reasons.push("You can start with your current mobile setup.");
  if (device === "pc" && skill.device.includes("PC")) reasons.push("A PC gives you the workflow needed for this path.");
  if (time === "low" && skill.timeScore <= 3) reasons.push("It can be practiced in short daily sessions.");
  if (english === "strong" && ["Writing", "Marketing", "AI"].includes(skill.category)) reasons.push("Your English level improves client communication and strategy.");
  return reasons.join(" ");
}

function calculateCareer(form) {
  const data = new FormData(form);
  const hours = Number(byId("studyHours").value), budget = Number(data.get("budget")), experience = data.get("experience");
  const multiplier = experience === "client" ? 0.55 : experience === "some" ? 0.75 : 1;
  const budgetBoost = budget >= 100 ? 0.85 : budget >= 25 ? 0.95 : 1;
  const recommended = skills.filter((s) => (hours <= 2 ? s.timeScore <= 5 : true)).sort((a, b) => b.futureSafety - a.futureSafety)[0];
  const weeks = Math.max(4, Math.round((recommended.timeScore * 5 * multiplier * budgetBoost) / Math.max(1, hours / 2)));
  byId("calculatorResult").innerHTML = `<div class="calc-card"><span>Estimated time to first money</span><strong>${weeks}-${weeks + 4} weeks</strong><p>Suggested path: ${recommended.title}. Difficulty: ${recommended.difficulty}. Budget mode: ${budget === 0 ? "free resources first" : "mix free practice with paid structure"}.</p><button class="secondary-button" data-skill-open="${recommended.id}">Open ${recommended.title} roadmap</button></div>`;
}

function answerChat(message) {
  const key = message.trim().toLowerCase();
  let answer = chatAnswers[key] || "A smart path is: choose one skill, learn basics for 2 weeks, build 3 portfolio projects, publish proof, then send targeted outreach every day. For the fastest recommendation, use the AI Career Advisor above.";
  byId("chatMessages").insertAdjacentHTML("beforeend", `<div class="chat-bubble user">${message}</div><div class="chat-bubble bot">${answer}</div>`);
  byId("chatMessages").scrollTop = byId("chatMessages").scrollHeight;
}

function openModal(id) { const modal = byId(id); modal.classList.add("is-open"); modal.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden"; }
function closeModals() { $$(".modal").forEach((modal) => { modal.classList.remove("is-open"); modal.setAttribute("aria-hidden", "true"); }); document.body.style.overflow = ""; if (location.hash.startsWith("#skill/")) history.replaceState(null, "", "#skills"); }
function toggleSaved(id) { state.saved = state.saved.includes(id) ? state.saved.filter((item) => item !== id) : [...state.saved, id]; renderSaved(); renderSkills(); }

function bindEvents() {
  byId("heroSearch").addEventListener("input", (event) => { state.query = event.target.value; renderSkills(); });
  byId("sortSelect").addEventListener("change", renderSkills);
  byId("roadmapSelect").addEventListener("change", (event) => renderRoadmapOutput(event.target.value));
  byId("menuToggle").addEventListener("click", () => byId("mobileMenu").classList.toggle("is-open"));
  byId("themeToggle").addEventListener("click", () => document.body.classList.toggle("light-mode"));
  byId("themeToggleMobile").addEventListener("click", () => document.body.classList.toggle("light-mode"));
  byId("advisorForm").addEventListener("submit", (event) => { event.preventDefault(); runAdvisor(event.currentTarget); });
  byId("calculatorForm").addEventListener("submit", (event) => { event.preventDefault(); calculateCareer(event.currentTarget); });
  byId("studyHours").addEventListener("input", (event) => byId("studyHoursLabel").textContent = `${event.target.value}h/day`);
  byId("chatForm").addEventListener("submit", (event) => { event.preventDefault(); const input = event.currentTarget.message; if (input.value.trim()) answerChat(input.value); input.value = ""; });

  document.addEventListener("click", (event) => {
    const filter = event.target.closest("[data-filter]"), open = event.target.closest("[data-skill-open]"), save = event.target.closest("[data-save]"), scroll = event.target.closest("[data-scroll]");
    const faq = event.target.closest(".faq-question"), auth = event.target.closest("[data-open-auth]"), close = event.target.closest("[data-close-modal], [data-close-auth]"), chat = event.target.closest("[data-chat]");
    if (filter) { state.filter = filter.dataset.filter; renderFilters(); renderSkills(); if (window.lucide) lucide.createIcons(); }
    if (open) openSkill(open.dataset.skillOpen);
    if (save) toggleSaved(save.dataset.save);
    if (auth) openModal("authModal");
    if (close) closeModals();
    if (scroll) { document.querySelector(scroll.dataset.scroll)?.scrollIntoView({ behavior: "smooth" }); byId("mobileMenu").classList.remove("is-open"); }
    if (faq) faq.closest(".faq-item").classList.toggle("is-open");
    if (chat) answerChat(chat.dataset.chat);
    const button = event.target.closest("button"); if (button) createRipple(event, button);
  });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeModals(); });
  window.addEventListener("scroll", updateScrollEffects, { passive: true });
  window.addEventListener("mousemove", (event) => { const glow = byId("cursorGlow"); glow.style.left = `${event.clientX}px`; glow.style.top = `${event.clientY}px`; }, { passive: true });
  runAdvisor(byId("advisorForm")); calculateCareer(byId("calculatorForm")); answerChat("Which skill should I learn?"); updateScrollEffects();
  if (location.hash.startsWith("#skill/")) openSkill(location.hash.replace("#skill/", ""));
}

function initReveal() { const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("is-visible"); }), { threshold: 0.14 }); $$(".reveal").forEach((item) => observer.observe(item)); }
function initCounters() { const counters = $$("[data-counter]"); const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (!entry.isIntersecting || entry.target.dataset.done) return; entry.target.dataset.done = "true"; const target = Number(entry.target.dataset.counter); let current = 0; const step = Math.max(1, Math.round(target / 42)); const timer = setInterval(() => { current = Math.min(target, current + step); entry.target.textContent = target > 1000 ? current : `${current}+`; if (current === target) clearInterval(timer); }, 24); }), { threshold: 0.6 }); counters.forEach((counter) => observer.observe(counter)); }
function initTypingPlaceholder() { const input = byId("heroSearch"); const words = ["AI Automation", "Web Development", "UI/UX Design", "Video Editing", "Copywriting"]; let word = 0, char = 0; setInterval(() => { if (document.activeElement === input || input.value) return; const text = words[word]; input.placeholder = `Search skills like ${text.slice(0, char)}`; char += 1; if (char > text.length + 8) { word = (word + 1) % words.length; char = 0; } }, 115); }
function createRipple(event, target) { const rect = target.getBoundingClientRect(), diameter = Math.max(rect.width, rect.height); const ripple = document.createElement("span"); ripple.className = "ripple"; ripple.style.width = `${diameter}px`; ripple.style.height = `${diameter}px`; ripple.style.left = `${event.clientX - rect.left - diameter / 2}px`; ripple.style.top = `${event.clientY - rect.top - diameter / 2}px`; target.appendChild(ripple); setTimeout(() => ripple.remove(), 650); }
function updateScrollEffects() { const max = document.documentElement.scrollHeight - window.innerHeight; byId("scrollProgress").style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`; byId("navbar").classList.toggle("is-scrolled", window.scrollY > 24); }

document.addEventListener("DOMContentLoaded", init);
