/* ============================================================
   Cenen — shared illustration library + behaviour
   All artwork is hand-built SVG. No external images.
   ============================================================ */
const REDUCED = matchMedia('(prefers-reduced-motion:reduce)').matches;
const C = {ink:'#191B2E',tomato:'#FF5C39',sky:'#3E7BFA',grass:'#2FA36B',sun:'#FFC53D',grape:'#8B5CF6',paper:'#fff'};

/* ---------- sticker sprite ---------- */
const SPRITE = `
<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<symbol id="s-coffee" viewBox="0 0 100 100">
  <path d="M22 36h50v28a22 22 0 0 1-22 22H44a22 22 0 0 1-22-22z" fill="#fff" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
  <path d="M72 44h9a11 11 0 0 1 0 22h-9" fill="none" stroke="${C.ink}" stroke-width="5" stroke-linecap="round"/>
  <rect x="22" y="36" width="50" height="11" fill="${C.tomato}" stroke="${C.ink}" stroke-width="5"/>
  <path d="M36 24c0-5 6-5 6-10M52 24c0-5 6-5 6-10" stroke="${C.tomato}" stroke-width="5" stroke-linecap="round" fill="none"/>
</symbol>
<symbol id="s-bat" viewBox="0 0 100 100">
  <rect x="44" y="8" width="12" height="34" rx="6" fill="#fff" stroke="${C.ink}" stroke-width="5"/>
  <path d="M34 44h32v32a16 16 0 0 1-32 0z" fill="${C.sun}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
  <circle cx="81" cy="74" r="11" fill="${C.tomato}" stroke="${C.ink}" stroke-width="5"/>
</symbol>
<symbol id="s-plane" viewBox="0 0 100 100">
  <path d="M12 54 88 20 62 88 50 62z" fill="${C.sky}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
  <path d="M50 62 88 20" stroke="${C.ink}" stroke-width="5" stroke-linecap="round"/>
</symbol>
<symbol id="s-book" viewBox="0 0 100 100">
  <path d="M16 22h30a10 10 0 0 1 10 10v52a10 10 0 0 0-10-8H16z" fill="#fff" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
  <path d="M84 22H54a10 10 0 0 0-10 10v52a10 10 0 0 1 10-8h30z" fill="${C.grass}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
</symbol>
<symbol id="s-code" viewBox="0 0 100 100">
  <rect x="8" y="20" width="84" height="58" rx="10" fill="#fff" stroke="${C.ink}" stroke-width="5"/>
  <path d="M36 42 24 51l12 9M64 42l12 9-12 9M56 36 46 66" stroke="${C.grape}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</symbol>
<symbol id="s-bolt" viewBox="0 0 100 100">
  <path d="M56 6 22 56h22l-8 40 38-52H52z" fill="${C.sun}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
</symbol>
<symbol id="s-star" viewBox="0 0 100 100">
  <path d="M50 8c4 24 18 38 42 42-24 4-38 18-42 42-4-24-18-38-42-42 24-4 38-18 42-42z" fill="${C.tomato}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
</symbol>
<symbol id="s-mango" viewBox="0 0 100 100">
  <path d="M50 18c20 0 32 16 32 34S66 88 50 88 18 70 18 52 30 18 50 18z" fill="${C.sun}" stroke="${C.ink}" stroke-width="5"/>
  <path d="M50 18c2-8 8-11 14-12" stroke="${C.grass}" stroke-width="5" stroke-linecap="round" fill="none"/>
  <path d="M20 82 80 22" stroke="${C.tomato}" stroke-width="7" stroke-linecap="round"/>
</symbol>
<symbol id="s-cart" viewBox="0 0 100 100">
  <path d="M30 28h50l-6 32H36z" fill="${C.grass}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
  <path d="M14 16h10l6 12" stroke="${C.ink}" stroke-width="5" stroke-linecap="round" fill="none"/>
  <circle cx="41" cy="78" r="8" fill="#fff" stroke="${C.ink}" stroke-width="5"/>
  <circle cx="70" cy="78" r="8" fill="#fff" stroke="${C.ink}" stroke-width="5"/>
</symbol>
<symbol id="s-heart" viewBox="0 0 100 100">
  <path d="M50 84C22 66 12 50 12 36a20 20 0 0 1 38-9 20 20 0 0 1 38 9c0 14-10 30-38 48z" fill="${C.tomato}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
</symbol>
<symbol id="s-walk" viewBox="0 0 100 100">
  <circle cx="54" cy="18" r="10" fill="#fff" stroke="${C.ink}" stroke-width="5"/>
  <path d="M54 32v26M54 44 36 36M54 44l16 10M54 58 40 88M54 58l14 30" stroke="${C.sky}" stroke-width="5" stroke-linecap="round" fill="none"/>
</symbol>
<symbol id="s-wrench" viewBox="0 0 100 100">
  <path d="M64 14a20 20 0 0 0-19 26L16 69a8 8 0 0 0 11 11l29-29a20 20 0 0 0 26-19l-14 8-11-6-1-12z" fill="${C.grape}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
</symbol>

<symbol id="s-layers" viewBox="0 0 100 100">
  <path d="M50 10 10 30l40 20 40-20z" fill="#fff" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
  <path d="m10 50 40 20 40-20" fill="none" stroke="${C.sky}" stroke-width="5" stroke-linejoin="round"/>
  <path d="m10 68 40 20 40-20" fill="none" stroke="${C.grass}" stroke-width="5" stroke-linejoin="round"/>
</symbol>

<symbol id="s-compass" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="38" fill="#fff" stroke="${C.ink}" stroke-width="5"/>
  <path d="m67 33-13 30-30 13 13-30z" fill="${C.tomato}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
  <circle cx="50" cy="50" r="5" fill="${C.sun}" stroke="${C.ink}" stroke-width="4"/>
</symbol>

</defs></svg>`;

/* ---------- big scene: the desk ---------- */
function artDesk(){return `
<svg viewBox="0 0 620 470" role="img" aria-label="Illustration of a workspace desk">
  <g class="plx" data-plx="-14">
    <circle cx="512" cy="86" r="54" fill="${C.sun}" stroke="${C.ink}" stroke-width="4"/>
    <path d="M92 120c0-16 13-27 28-25 5-17 30-20 39-5 14-6 28 4 27 18 12 1 19 9 18 18H88z" fill="#fff" stroke="${C.ink}" stroke-width="4" stroke-linejoin="round"/>
  </g>
  <g class="plx" data-plx="8">
    <!-- monitor -->
    <rect x="150" y="96" width="300" height="196" rx="14" fill="#fff" stroke="${C.ink}" stroke-width="5"/>
    <rect x="150" y="96" width="300" height="30" rx="14" fill="${C.sky}" stroke="${C.ink}" stroke-width="5"/>
    <circle cx="170" cy="111" r="4.5" fill="#fff"/><circle cx="185" cy="111" r="4.5" fill="#fff"/><circle cx="200" cy="111" r="4.5" fill="#fff"/>
    <rect x="160" y="130" width="280" height="152" fill="#fff"/>
    <g id="screenLayer"></g>
    <g id="playBtn" class="playbtn" role="button" tabindex="0" aria-label="Play the build sequence">
      <circle class="pb-ring" cx="300" cy="204" r="34" fill="none" stroke="${C.tomato}" stroke-width="3" opacity=".55"/>
      <circle class="pb-bg" cx="300" cy="204" r="26" fill="${C.tomato}" stroke="${C.ink}" stroke-width="4"/>
      <path class="pb-icon" d="M293 193l17 11-17 11z" fill="#fff" stroke="#fff" stroke-width="3" stroke-linejoin="round"/>
    </g>
    <path d="M282 292h36l8 30h-52z" fill="#fff" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
  </g>
  <!-- desk -->
  <rect x="40" y="322" width="540" height="18" rx="9" fill="#fff" stroke="${C.ink}" stroke-width="5"/>
  <path d="M92 340v96M528 340v96" stroke="${C.ink}" stroke-width="5" stroke-linecap="round"/>
  <!-- keyboard -->
  <rect x="216" y="342" width="168" height="26" rx="7" fill="#fff" stroke="${C.ink}" stroke-width="5"/>
  <path d="M232 356h136" stroke="${C.ink}" stroke-width="4" stroke-linecap="round" opacity=".4"/>
  <!-- mug -->
  <g class="plx" data-plx="-6">
    <rect x="432" y="278" width="46" height="44" rx="8" fill="#fff" stroke="${C.ink}" stroke-width="5"/>
    <rect x="432" y="278" width="46" height="12" fill="${C.tomato}" stroke="${C.ink}" stroke-width="5"/>
    <path d="M478 290h10a9 9 0 0 1 0 18h-10" fill="none" stroke="${C.ink}" stroke-width="5"/>
    <path d="M444 268c0-6 6-6 6-12M462 268c0-6 6-6 6-12" stroke="${C.tomato}" stroke-width="4" stroke-linecap="round" fill="none" opacity=".8"/>
  </g>
  <!-- plant -->
  <g class="plx" data-plx="-10">
    <path d="M110 322V266" stroke="${C.grass}" stroke-width="5" stroke-linecap="round"/>
    <path d="M110 288c-22-4-30-22-26-38 18-2 30 14 26 38z" fill="${C.grass}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
    <path d="M110 276c20-8 26-26 20-40-18 2-26 18-20 40z" fill="${C.grass}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
    <path d="M92 300h36l-5 22H97z" fill="${C.tomato}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
  </g>
  <!-- cricket bat leaning -->
  <g class="plx" data-plx="6" transform="rotate(15 556 268)">
    <rect x="550" y="192" width="13" height="46" rx="6.5" fill="#fff" stroke="${C.ink}" stroke-width="4.5"/>
    <path d="M541 238h31v56a15.5 15.5 0 0 1-31 0z" fill="${C.sun}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
  </g>
  <circle cx="142" cy="309" r="11" fill="${C.tomato}" stroke="${C.ink}" stroke-width="4.5"/>
  <!-- papers -->
  <g class="plx" data-plx="-4">
    <rect x="66" y="300" width="46" height="22" rx="4" fill="#fff" stroke="${C.ink}" stroke-width="4" transform="rotate(-7 89 311)"/>
  </g>
</svg>`;}


/* ============================================================
   THE BUILD SEQUENCE — plays inside the monitor on click
   ============================================================ */
const SCENES = [
  {
    id:'idle', label:'Press play to watch a site get built', tint:'#fff', dur:0,
    art:()=>`
      <rect x="168" y="142" width="120" height="12" rx="6" fill="${C.ink}" opacity=".16"/>
      <rect x="168" y="164" width="264" height="72" rx="9" fill="${C.tomato}" opacity=".18" stroke="${C.ink}" stroke-width="4"/>
      <rect x="168" y="248" width="76" height="10" rx="5" fill="${C.ink}" opacity=".16"/>
      <rect x="256" y="248" width="76" height="10" rx="5" fill="${C.ink}" opacity=".16"/>
      <rect x="344" y="248" width="76" height="10" rx="5" fill="${C.ink}" opacity=".16"/>`
  },
  {
    id:'plan', label:'01 — Planning: boxes before pixels', dur:2000,
    art:()=>{
      const boxes=[[168,142,120,12],[168,162,264,58],[168,232,80,44],[260,232,80,44],[352,232,80,44],[168,286,180,8]];
      return boxes.map((b,i)=>`<rect class="pop" style="animation-delay:${i*.18}s" x="${b[0]}" y="${b[1]}" width="${b[2]}" height="${b[3]}" rx="6"
        fill="none" stroke="${C.ink}" stroke-width="3" stroke-dasharray="7 5" opacity=".55"/>`).join('')
        + `<text class="pop" style="animation-delay:1.1s" x="300" y="196" text-anchor="middle" font-family="Plus Jakarta Sans,sans-serif" font-size="13" font-weight="700" fill="${C.ink}" opacity=".4">wireframe</text>`;
    }
  },
  {
    id:'design', label:'02 — Design: colour, type, hierarchy', dur:2200,
    art:()=>`
      <rect class="pop" style="animation-delay:0s"   x="168" y="142" width="120" height="12" rx="6" fill="${C.ink}" opacity=".55"/>
      <rect class="pop" style="animation-delay:.15s" x="168" y="162" width="264" height="58" rx="9" fill="${C.sky}" opacity=".3" stroke="${C.ink}" stroke-width="3.5"/>
      <circle class="pop" style="animation-delay:.35s" cx="210" cy="191" r="16" fill="${C.sky}" opacity=".65"/>
      <rect class="pop" style="animation-delay:.45s" x="238" y="180" width="120" height="10" rx="5" fill="${C.ink}" opacity=".5"/>
      <rect class="pop" style="animation-delay:.55s" x="238" y="196" width="80"  height="8"  rx="4" fill="${C.ink}" opacity=".28"/>
      ${[0,1,2].map(i=>`
        <rect class="pop" style="animation-delay:${.7+i*.14}s" x="${168+i*92}" y="232" width="80" height="44" rx="8"
              fill="${[C.tomato,C.sun,C.grass][i]}" opacity=".4" stroke="${C.ink}" stroke-width="3.5"/>`).join('')}
      <rect class="pop" style="animation-delay:1.2s" x="168" y="286" width="180" height="8" rx="4" fill="${C.ink}" opacity=".22"/>`
  },
  {
    id:'code', label:'03 — Build: clean, maintainable code', dur:2600, tint:'#1B1E33',
    art:()=>{
      const lines=[
        [['<section','#F778BA'],[' class=','#8B5CF6'],['"hero"','#FFC53D'],['>','#F778BA']],
        [['  <h1>','#F778BA'],['Websites that work','#E6EDF3'],['</h1>','#F778BA']],
        [['  <Button','#F778BA'],[' cta','#8B5CF6'],[' />','#F778BA']],
        [['</section>','#F778BA']],
        [['ship','#7EE787'],['(); ','#E6EDF3'],['// 0 errors','#5B5E7A']],
      ];
      return `<rect x="160" y="130" width="280" height="152" fill="#1B1E33"/>` +
        lines.map((ln,i)=>{
          let x=176; 
          const tspans = ln.map(([t,c])=>{const el=`<tspan fill="${c}">${t.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</tspan>`;return el;}).join('');
          return `<text class="typ" style="animation-delay:${i*.34}s" x="${x}" y="${158+i*24}"
                   font-family="ui-monospace,Menlo,monospace" font-size="12.5">${tspans}</text>`;
        }).join('') +
        `<rect class="caret" x="176" y="266" width="8" height="14" fill="${C.grass}" style="animation-delay:1.7s"/>`;
    }
  },
  {
    id:'live', label:'04 — Shipped. Still fast a year later.', dur:2600,
    art:()=>`
      <rect class="pop" style="animation-delay:0s"   x="168" y="142" width="70" height="11" rx="5.5" fill="${C.ink}" opacity=".6"/>
      <rect class="pop" style="animation-delay:.05s" x="356" y="143" width="76" height="18" rx="9" fill="${C.grass}" opacity=".9"/>
      <text class="pop" style="animation-delay:.2s" x="394" y="156" text-anchor="middle" font-family="Plus Jakarta Sans,sans-serif" font-size="10.5" font-weight="700" fill="#fff">● LIVE</text>
      <rect class="pop" style="animation-delay:.15s" x="168" y="166" width="264" height="56" rx="9" fill="${C.sky}" opacity=".28" stroke="${C.ink}" stroke-width="3.5"/>
      <rect class="pop" style="animation-delay:.3s"  x="186" y="182" width="130" height="12" rx="6" fill="${C.ink}" opacity=".6"/>
      <rect class="pop" style="animation-delay:.38s" x="186" y="200" width="86"  height="8"  rx="4" fill="${C.ink}" opacity=".3"/>
      <rect class="pop" style="animation-delay:.46s" x="336" y="184" width="80" height="26" rx="13" fill="${C.tomato}" stroke="${C.ink}" stroke-width="3"/>
      ${[0,1,2].map(i=>`
        <rect class="pop" style="animation-delay:${.6+i*.12}s" x="${168+i*92}" y="234" width="80" height="42" rx="8" fill="#fff" stroke="${C.ink}" stroke-width="3.5"/>
        <circle class="pop" style="animation-delay:${.68+i*.12}s" cx="${186+i*92}" cy="250" r="7" fill="${[C.tomato,C.sun,C.grass][i]}"/>
        <rect class="pop" style="animation-delay:${.74+i*.12}s" x="${178+i*92}" y="262" width="58" height="6" rx="3" fill="${C.ink}" opacity=".25"/>`).join('')}
      ${[[196,120],[300,116],[404,124],[248,300],[356,296]].map((c,i)=>`
        <path class="confetti" style="animation-delay:${.9+i*.1}s" d="M${c[0]} ${c[1]}l4 8-4 8-4-8z" fill="${[C.tomato,C.sun,C.grass,C.sky,C.grape][i]}"/>`).join('')}`
  }
];

function playSequence(){
  const layer = document.getElementById('screenLayer');
  const btn   = document.getElementById('playBtn');
  const cap   = document.getElementById('buildCaption');
  const dots  = document.getElementById('buildDots');
  if(!layer) return;
  let idx = 0, timer = null, playing = false;

  function render(i){
    const sc = SCENES[i];
    layer.innerHTML = sc.art();
    if(cap) cap.textContent = sc.label;
    if(dots) [...dots.children].forEach((d,n)=>d.classList.toggle('on', n === i-1));
  }
  function step(){
    idx++;
    if(idx >= SCENES.length){ stop(); return; }
    render(idx);
    timer = setTimeout(step, SCENES[idx].dur);
  }
  function start(){
    if(playing) return;
    playing = true; idx = 0;
    btn.style.opacity = '0'; btn.style.pointerEvents = 'none';
    step();
  }
  function stop(){
    playing = false;
    btn.style.opacity = ''; btn.style.pointerEvents = '';
    if(cap) cap.textContent = 'Replay the build ↻';
    clearTimeout(timer);
  }

  render(0);
  btn.addEventListener('click', start);
  btn.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); start(); }});
  if(REDUCED){ render(SCENES.length-1); btn.style.display='none'; if(cap) cap.textContent='Design → build → shipped.'; }
}

/* ---------- character bust ---------- */
function artCecen(){return `
<svg viewBox="0 0 320 340" role="img" aria-label="Illustrated portrait">
  <circle cx="160" cy="150" r="118" fill="${C.sky}" opacity=".18"/>
  <path d="M78 340c0-46 37-76 82-76s82 30 82 76z" fill="${C.tomato}" stroke="${C.ink}" stroke-width="6" stroke-linejoin="round"/>
  <path d="M132 236h56v34h-56z" fill="#F2C6A8" stroke="${C.ink}" stroke-width="6"/>
  <ellipse cx="160" cy="168" rx="62" ry="70" fill="#F2C6A8" stroke="${C.ink}" stroke-width="6"/>
  <path d="M98 150c0-42 28-64 62-64s62 22 62 64c-12-16-30-24-62-24s-50 8-62 24z" fill="${C.ink}"/>
  <circle cx="138" cy="170" r="6.5" fill="${C.ink}"/><circle cx="184" cy="170" r="6.5" fill="${C.ink}"/>
  <path d="M144 202c8 8 24 8 32 0" stroke="${C.ink}" stroke-width="6" stroke-linecap="round" fill="none"/>
  <path d="M120 148c8-6 18-6 25-1M175 147c7-5 17-5 25 1" stroke="${C.ink}" stroke-width="6" stroke-linecap="round" fill="none"/>
  <circle cx="112" cy="186" r="9" fill="${C.tomato}" opacity=".5"/><circle cx="208" cy="186" r="9" fill="${C.tomato}" opacity=".5"/>
  <path d="M112 300h96" stroke="#fff" stroke-width="6" stroke-linecap="round" opacity=".7"/>
</svg>`;}

/* ---------- doodles ---------- */
const doodle = {
  arrow:`<svg viewBox="0 0 120 60" width="120"><path d="M6 46c26-34 62-42 106-28" fill="none" stroke="${C.ink}" stroke-width="4" stroke-linecap="round"/><path d="M96 4l16 14-19 8" fill="none" stroke="${C.ink}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  squiggle:`<svg viewBox="0 0 140 24" width="140"><path d="M4 14c14-16 26 12 40-2s26 12 40-2 26 10 52 2" fill="none" stroke="${C.grape}" stroke-width="4" stroke-linecap="round"/></svg>`,
  sparkle:`<svg viewBox="0 0 40 40" width="34"><path d="M20 2c2 12 6 16 18 18-12 2-16 6-18 18-2-12-6-16-18-18 12-2 16-6 18-18z" fill="${C.sun}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/></svg>`
};

/* ---------- project data ---------- */
const KINDS = {
  wordpress:{label:'WordPress',c:C.sky}, woocommerce:{label:'WooCommerce',c:C.grape},
  php:{label:'PHP',c:C.tomato}, shopify:{label:'Shopify',c:C.grass}
};
const PROJECTS = [
  {slug:'paolita',      dom:'paolita.co.uk',            kind:'wordpress',   sector:'Swimwear brand',      year:'2023', layout:'editorial'},
  {slug:'calem',        dom:'calem.pt/en',              kind:'wordpress',   sector:'Port wine house',     year:'2022', layout:'editorial'},
  {slug:'parcours',     dom:'parcourscanada.com',       kind:'wordpress',   sector:'Travel operator',     year:'2022', layout:'grid'},
  {slug:'dsa',          dom:'dsa.clinic',               kind:'wordpress',   sector:'Medical clinic',      year:'2021', layout:'grid'},
  {slug:'galialahav',   dom:'galialahav.com',           kind:'woocommerce', sector:'Bridal couture',      year:'2023', layout:'shop'},
  {slug:'omahabeach',   dom:'omahabeachgolfclub.com',   kind:'woocommerce', sector:'Golf club',           year:'2021', layout:'grid'},
  {slug:'botanopia',    dom:'botanopia.com',            kind:'woocommerce', sector:'Plant accessories',   year:'2022', layout:'shop'},
  {slug:'method',       dom:'method.digital',           kind:'php',         sector:'Digital agency',      year:'2020', layout:'editorial'},
  {slug:'pomerleau',    dom:'pomerleau.ca',             kind:'php',         sector:'Construction group',  year:'2020', layout:'grid'},
  {slug:'mightyroar',   dom:'themightyroar.co.uk',      kind:'php',         sector:'Creative studio',     year:'2019', layout:'editorial'},
  {slug:'homesihave',   dom:'thehomesihavemade.com',    kind:'php',         sector:'Home & lifestyle',    year:'2019', layout:'grid'},
  {slug:'yeshair',      dom:'yeshair.com.au',           kind:'shopify',     sector:'Hair care',           year:'2024', layout:'shop'},
  {slug:'igkhair',      dom:'igkhair.com',              kind:'shopify',     sector:'Hair care',           year:'2024', layout:'shop'},
  {slug:'tens',         dom:'tens.co',                  kind:'shopify',     sector:'Eyewear',             year:'2023', layout:'shop'},
];
const bySlug = s => PROJECTS.find(p=>p.slug===s);
function projectImage(p){
  return `Images/${p.slug}.png`;
}
/* ---------- generated site artwork (three distinct layouts) ---------- */
function artSite(p, w=560, h=360){
  const c = KINDS[p.kind].c, ink = C.ink;
  const chrome = `
    <rect x="0" y="0" width="${w}" height="${h}" fill="#fff"/>
    <rect x="0" y="0" width="${w}" height="34" fill="${c}" opacity=".16"/>
    <circle cx="22" cy="17" r="5" fill="${C.tomato}"/><circle cx="40" cy="17" r="5" fill="${C.sun}"/><circle cx="58" cy="17" r="5" fill="${C.grass}"/>
    <rect x="78" y="9" width="${w-100}" height="16" rx="8" fill="#fff" stroke="${ink}" stroke-width="2" opacity=".55"/>`;
  let body = '';
  if(p.layout === 'editorial'){
    body = `
      <rect x="26" y="52" width="34" height="10" rx="5" fill="${ink}" opacity=".5"/>
      <rect x="${w-150}" y="52" width="30" height="8" rx="4" fill="${ink}" opacity=".2"/>
      <rect x="${w-112}" y="52" width="30" height="8" rx="4" fill="${ink}" opacity=".2"/>
      <rect x="${w-74}" y="52" width="30" height="8" rx="4" fill="${ink}" opacity=".2"/>
      <rect x="26" y="84" width="${w*0.46}" height="${h-124}" rx="10" fill="${c}" opacity=".3" stroke="${ink}" stroke-width="2.5"/>
      <circle cx="${26+w*0.23}" cy="${84+(h-124)/2}" r="30" fill="${c}" opacity=".55"/>
      <rect x="${w*0.53}" y="100" width="${w*0.38}" height="17" rx="8" fill="${ink}" opacity=".72"/>
      <rect x="${w*0.53}" y="126" width="${w*0.30}" height="17" rx="8" fill="${ink}" opacity=".72"/>
      <rect x="${w*0.53}" y="162" width="${w*0.36}" height="7" rx="3.5" fill="${ink}" opacity=".22"/>
      <rect x="${w*0.53}" y="176" width="${w*0.33}" height="7" rx="3.5" fill="${ink}" opacity=".22"/>
      <rect x="${w*0.53}" y="190" width="${w*0.28}" height="7" rx="3.5" fill="${ink}" opacity=".22"/>
      <rect x="${w*0.53}" y="216" width="96" height="30" rx="15" fill="${c}" stroke="${ink}" stroke-width="2.5"/>`;
  } else if(p.layout === 'shop'){
    body = `
      <rect x="26" y="52" width="34" height="10" rx="5" fill="${ink}" opacity=".5"/>
      <circle cx="${w-34}" cy="57" r="9" fill="${c}" opacity=".6"/>
      <rect x="26" y="80" width="${w-52}" height="86" rx="10" fill="${c}" opacity=".28" stroke="${ink}" stroke-width="2.5"/>
      <rect x="46" y="104" width="150" height="15" rx="7" fill="${ink}" opacity=".65"/>
      <rect x="46" y="128" width="104" height="7" rx="3.5" fill="${ink}" opacity=".26"/>
      ${[0,1,2].map(i=>{const bw=(w-52-24)/3, x=26+i*(bw+12);return `
        <rect x="${x}" y="182" width="${bw}" height="${h-206}" rx="9" fill="#fff" stroke="${ink}" stroke-width="2.5"/>
        <rect x="${x+1.5}" y="183.5" width="${bw-3}" height="${(h-206)*0.56}" rx="8" fill="${c}" opacity="${0.24+i*0.13}"/>
        <rect x="${x+12}" y="${182+(h-206)*0.66}" width="${bw-46}" height="8" rx="4" fill="${ink}" opacity=".5"/>
        <rect x="${x+12}" y="${182+(h-206)*0.79}" width="34" height="7" rx="3.5" fill="${ink}" opacity=".24"/>`;}).join('')}`;
  } else {
    body = `
      <rect x="26" y="52" width="34" height="10" rx="5" fill="${ink}" opacity=".5"/>
      <rect x="${w-116}" y="50" width="90" height="16" rx="8" fill="${c}" opacity=".5"/>
      <rect x="26" y="80" width="${w-52}" height="${h*0.30}" rx="10" fill="${c}" opacity=".3" stroke="${ink}" stroke-width="2.5"/>
      <rect x="48" y="${80+h*0.10}" width="${w*0.34}" height="16" rx="8" fill="${ink}" opacity=".68"/>
      <rect x="48" y="${80+h*0.10+24}" width="${w*0.22}" height="8" rx="4" fill="${ink}" opacity=".26"/>
      ${[0,1,2,3].map(i=>{const bw=(w-52-36)/4, x=26+i*(bw+12);return `
        <rect x="${x}" y="${96+h*0.32}" width="${bw}" height="${h-118-h*0.32}" rx="9" fill="#fff" stroke="${ink}" stroke-width="2.5"/>
        <circle cx="${x+bw/2}" cy="${118+h*0.32}" r="13" fill="${c}" opacity="${0.3+i*0.12}"/>
        <rect x="${x+10}" y="${140+h*0.32}" width="${bw-20}" height="7" rx="3.5" fill="${ink}" opacity=".4"/>
        <rect x="${x+10}" y="${152+h*0.32}" width="${bw-34}" height="6" rx="3" fill="${ink}" opacity=".2"/>`;}).join('')}`;
  }
  return `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Illustrated preview of ${p.dom}">${chrome}${body}</svg>`;
}

/* ============================================================
   BEHAVIOUR
   ============================================================ */
document.addEventListener('DOMContentLoaded', ()=>{
  document.body.insertAdjacentHTML('afterbegin', SPRITE);

  /* mark active nav link */
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.top .links a').forEach(a=>{
    if(a.getAttribute('href') === here) a.classList.add('on');
  });

  /* kinetic type: split to letters, fire on view */
  document.querySelectorAll('[data-kin]').forEach(el=>{
    if(REDUCED) return;
    const words = el.textContent.trim().split(' ');
    el.innerHTML = words.map(w=>
      `<span class="kin">${[...w].map(ch=>`<span class="ch">${ch}</span>`).join('')}</span>`
    ).join(' ');
    const chars = el.querySelectorAll('.ch');
    chars.forEach((c,i)=>c.style.animationDelay = (i*0.028).toFixed(3)+'s');
    new IntersectionObserver((en,o)=>{
      en.forEach(x=>{ if(x.isIntersecting){
        el.querySelectorAll('.kin').forEach(k=>k.classList.add('go'));
        o.unobserve(x.target);
      }});
    },{threshold:.35}).observe(el);
  });
  document.querySelectorAll('.hl').forEach(el=>{
    new IntersectionObserver((en,o)=>{en.forEach(x=>{if(x.isIntersecting){el.classList.add('go');o.unobserve(x.target);}})},{threshold:.6}).observe(el);
  });

  /* reveal */
  if('IntersectionObserver' in window && !REDUCED){
    const els = document.querySelectorAll('.rv');
    els.forEach(e=>e.classList.add('pre'));
    const io = new IntersectionObserver(en=>{
      en.forEach(x=>{ if(x.isIntersecting){ x.target.classList.add('in'); io.unobserve(x.target);} });
    },{threshold:.08});
    els.forEach(e=>io.observe(e));
  }

  /* draggable stickers */
  document.querySelectorAll('.sticker').forEach(s=>{
    let ox=0,oy=0,dx=0,dy=0,on=false;
    s.addEventListener('pointerdown',e=>{
      on=true; s.classList.add('held'); s.setPointerCapture(e.pointerId);
      ox = e.clientX - dx; oy = e.clientY - dy;
    });
    s.addEventListener('pointermove',e=>{
      if(!on) return;
      dx=e.clientX-ox; dy=e.clientY-oy;
      s.style.transform=`translate(${dx}px,${dy}px) rotate(var(--r,0deg))`;
    });
    const off=()=>{on=false;s.classList.remove('held');};
    s.addEventListener('pointerup',off); s.addEventListener('pointercancel',off);
  });

  /* parallax + pinned horizontal scene */
  const plx = [...document.querySelectorAll('.plx')];
  const pinOuter = document.querySelector('.pin-outer');
  const pinTrack = document.querySelector('.pin-track');
  let ticking = false;
  function onScroll(){
    if(ticking) return; ticking = true;
    requestAnimationFrame(()=>{
      if(!REDUCED){
        const y = window.scrollY;
        plx.forEach(el=>{
          const sp = parseFloat(el.dataset.plx || 0);
          el.style.transform = `translateY(${(y*sp/100).toFixed(2)}px)`;
        });
        if(pinOuter && pinTrack && window.innerWidth > 900){
          const r = pinOuter.getBoundingClientRect();
          const total = pinOuter.offsetHeight - window.innerHeight;
          const p = Math.min(1, Math.max(0, -r.top / total));
          const dist = pinTrack.scrollWidth - window.innerWidth + 80;
          pinTrack.style.transform = `translateX(${-(p*dist).toFixed(1)}px)`;
        }
      }
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('resize', onScroll);
  onScroll();

  if(document.getElementById('screenLayer')) playSequence();
  function renderLogo() {
  const logo = document.getElementById('siteLogo');
  if (!logo) return;

  logo.innerHTML = `
    <span class="logo-name">CENEN</span>
    <span class="logo-separator">—</span>
    <span class="logo-role"></span>
    <span class="logo-caret">|</span>
  `;

  const role = logo.querySelector('.logo-role');
  const caret = logo.querySelector('.logo-caret');

  const words = ['FULL-STACK', 'DEVELOPER'];
  let wordIndex = 0;

  function typeWord() {
    if (wordIndex >= words.length) {
      setTimeout(() => {
        caret.style.display = 'none';
      }, 1000);
      return;
    }

    const span = document.createElement('span');
    span.className = 'logo-word';
    span.textContent = words[wordIndex];

    role.appendChild(span);

    wordIndex++;
    setTimeout(typeWord, 550);
  }

  setTimeout(typeWord, 300);
}
  const logo = document.getElementById('siteLogo');
  if (!logo) return;

  logo.innerHTML = `
    <span class="logo-name"></span>
    <span class="logo-separator">—</span>
    <span class="logo-role"></span>
  `;

  const name = logo.querySelector('.logo-name');
  const role = logo.querySelector('.logo-role');

  name.textContent = 'CENEN';

  const words = ['FULLSTACK', 'DEVELOPER'];
  let wordIndex = 0;

  function typeWord() {
    if (wordIndex >= words.length) return;

    const word = words[wordIndex];
    const span = document.createElement('span');

    span.className = 'logo-word';
    span.textContent = word;
    role.appendChild(span);

    wordIndex++;
    setTimeout(typeWord, 500);
  }

  setTimeout(typeWord, 250);
}
});
