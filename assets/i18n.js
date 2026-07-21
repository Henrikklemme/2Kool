// i18n for 2Kool — plain-object dictionary, no build step required.
// Each key maps to the innerHTML used for that element in each language,
// so markup like the italic accent <span> inside headings is preserved.
const translations = {
  'nav-how': { en: 'How we work', da: 'Sådan arbejder vi' },
  'nav-philosophy': { en: 'Design Philosophy', da: 'Designfilosofi' },
  'nav-founders': { en: 'Founders', da: 'Stifterne' },
  'cta-sayhi': { en: 'Say hi', da: 'Sig hej' },

  'hero-eyebrow': { en: 'Copenhagen · Est. 2026', da: 'København · Grundlagt 2026' },
  'hero-h1': {
    en: 'A modern website for your business — <span class="italic text-accent">without the agency price tag.</span>',
    da: 'En moderne hjemmeside til din virksomhed — <span class="italic text-accent">uden bureauprisskiltet.</span>',
  },
  'hero-p': {
    en: "You're busy running a great restaurant, salon, clinic or shop — the website was never going to be top of your list. We get it, and we fix it for you.",
    da: 'Du har nok at se til med at drive en god restaurant, salon, klinik eller butik — hjemmesiden kom aldrig øverst på listen. Det forstår vi, og vi klarer det for dig.',
  },
  'cta-seehowwework': { en: 'See how we work', da: 'Se hvordan vi arbejder' },
  'cta-seehowwework2': { en: 'See how we work', da: 'Se hvordan vi arbejder' },

  'stat1-label': { en: 'years of consulting experience across industries', da: 'års konsulenterfaring på tværs af brancher' },
  'stat2-value': { en: '1 week', da: '1 uge' },
  'stat2-label': { en: 'from first call to live site', da: 'fra første opkald til hjemmesiden er live' },
  'stat3-label': { en: 'costing less than an agency', da: 'billigere end et bureau' },
  'stat4-label': { en: 'yours — no strings attached', da: 'din — helt uden binding' },

  'builtfor-eyebrow': { en: 'Built for', da: 'Bygget til' },
  'tag-restaurants': { en: 'Restaurants', da: 'Restauranter' },
  'tag-cafes': { en: 'Cafés', da: 'Caféer' },
  'tag-salons': { en: 'Salons', da: 'Frisører' },
  'tag-clinics': { en: 'Clinics', da: 'Klinikker' },
  'tag-studios': { en: 'Studios', da: 'Studier' },

  'understand-eyebrow': { en: 'We understand', da: 'Vi forstår' },
  'understand-p1': {
    en: 'As a founder duo, our families ran a bakery and a flower shop. We know the early mornings, the small margins, and how far down the list a website tends to sit.',
    da: 'Som stiftere kommer vi fra familier, der drev et bageri og en blomsterbutik. Vi kender de tidlige morgener, de smalle marginer, og hvor langt nede på listen en hjemmeside plejer at ligge.',
  },
  'understand-h2': {
    en: 'So the site sits there, <span class="italic text-accent">quietly ageing.</span>',
    da: 'Så hjemmesiden bliver liggende, <span class="italic text-accent">og bliver ældet i stilhed.</span>',
  },
  'understand-p2': {
    en: 'We spent years as consultants helping large corporations sharpen how they show up. The businesses we grew up around never got that kind of attention — despite everything the owners pour into them. And a site that looks sharper can quietly shape who people choose.',
    da: 'Vi har brugt år som konsulenter på at hjælpe store virksomheder med at skærpe, hvordan de fremstår. De virksomheder, vi selv voksede op omkring, fik aldrig den samme opmærksomhed — på trods af alt det, ejerne lægger i dem. Og en hjemmeside, der ser skarpere ud, kan stille og roligt påvirke, hvem folk vælger.',
  },
  'understand-p3': {
    en: "So we built this for businesses like our own families' — accessible, and priced so they could actually say yes.",
    da: 'Så vi byggede dette til virksomheder som vores egne familiers — tilgængeligt, og til en pris hvor de rent faktisk kunne sige ja.',
  },

  'whatwedo-eyebrow': { en: 'What we do', da: 'Det vi gør' },
  'whatwedo-h2': {
    en: 'We <span class="italic text-accent">redesign</span> your site.',
    da: 'Vi <span class="italic text-accent">redesigner</span> din hjemmeside.',
  },
  'whatwedo-p1': {
    en: 'Same business, same story — presented so it actually feels like you. Clearer structure, better photos, a site people trust.',
    da: 'Samme virksomhed, samme historie — præsenteret så det rent faktisk føles som dig. Klarere struktur, bedre billeder, en hjemmeside folk stoler på.',
  },
  'whatwedo-p2': {
    en: "We've built and shipped this stuff ourselves — not just presented decks about it.",
    da: 'Vi har selv bygget og lanceret den slags her — ikke bare præsenteret slides om det.',
  },
  'tag-structure': { en: 'Clearer structure', da: 'Klarere struktur' },
  'tag-photos': { en: 'Better photos', da: 'Bedre billeder' },
  'tag-trust': { en: 'A site people trust', da: 'En hjemmeside folk stoler på' },

  'process-eyebrow': { en: 'Process', da: 'Proces' },
  'process-h2': {
    en: 'Four <span class="italic text-accent">simple</span> steps. No endless meetings.',
    da: 'Fire <span class="italic text-accent">enkle</span> trin. Ingen endeløse møder.',
  },
  'step1-title': { en: 'Share your site', da: 'Del din hjemmeside' },
  'step1-desc': { en: "Send us a link. We'll spot what's costing you customers.", da: 'Send os et link. Vi finder ud af, hvad der koster dig kunder.' },
  'step2-title': { en: 'You see a design — free, no strings', da: 'Du ser et design — gratis, uden binding' },
  'step2-desc': { en: 'A real proposal, no cost, no obligation.', da: 'Et rigtigt forslag, uden omkostning, uden forpligtelse.' },
  'step3-title': { en: "You say yes, it's live in days", da: 'Du siger ja, og det er live på få dage' },
  'step3-desc': { en: 'Fast turnaround — days, not weeks.', da: 'Hurtig levering — dage, ikke uger.' },
  'step4-title': { en: "It's yours", da: 'Den er din' },
  'step4-desc': { en: 'Full ownership. No subscriptions, no contracts, no surprises.', da: 'Fuldt ejerskab. Ingen abonnementer, ingen kontrakter, ingen overraskelser.' },

  'pricing-eyebrow': { en: 'Value', da: 'Værdi' },
  'pricing-h2': {
    en: 'A proper website. <span class="italic text-accent">A fair</span> price.',
    da: 'En rigtig hjemmeside. <span class="italic text-accent">En fair</span> pris.',
  },
  'pricing-p': {
    en: 'Most Danish agencies charge 10,000–50,000 DKK for a redesign. We use modern AI tools and skip the heavy overhead — so you get something you\'re proud of, delivered faster, and for <span class="font-medium text-primary">50–80% less</span>. Refresh it when your business changes. Not once a decade.',
    da: 'De fleste danske bureauer tager 10.000–50.000 kr. for et redesign. Vi bruger moderne AI-værktøjer og skærer de tunge omkostninger væk — så du får noget, du er stolt af, leveret hurtigere, og til <span class="font-medium text-primary">50–80% mindre</span>. Opdatér den, når din virksomhed ændrer sig. Ikke bare én gang hvert tiende år.',
  },
  'tag-nosub': { en: 'No subscriptions', da: 'Ingen abonnementer' },
  'tag-nolockin': { en: 'No lock-in', da: 'Ingen binding' },
  'tag-yours': { en: 'The site is yours', da: 'Hjemmesiden er din' },
  'tag-liveweek': { en: 'Live in about a week', da: 'Live på cirka en uge' },
  'cta-chat': { en: 'Have a chat with us', da: 'Tag en snak med os' },

  'founders-eyebrow': { en: 'The duo', da: 'Duoen' },
  'founders-h2': {
    en: 'Meet the <span class="italic text-accent">duo</span> behind 2Kool.',
    da: 'Mød <span class="italic text-accent">duoen</span> bag 2Kool.',
  },
  'founders-p': {
    en: 'A founder duo with small-business roots and a soft spot for calm, well-made things. Say hi below.',
    da: 'En stifter-duo med rødder i små virksomheder og en svaghed for rolige, gennemtænkte ting. Sig hej herunder.',
  },
  'cta-meet': { en: 'Meet Birgit &amp; Henrik', da: 'Mød Birgit &amp; Henrik' },

  'contact-eyebrow': { en: 'Get in touch', da: 'Kom i kontakt' },
  'contact-h2': {
    en: 'Want a website that <span class="italic text-primary-foreground/60">finally</span> feels like you?',
    da: 'Vil du have en hjemmeside, der <span class="italic text-primary-foreground/60">endelig</span> føles som dig?',
  },
  'contact-p1': {
    en: "Send us a link to your current site. We'll come back within a few days with honest thoughts and a simple proposal. No pressure, no sales script.",
    da: 'Send os et link til din nuværende hjemmeside. Vi vender tilbage inden for et par dage med ærlige tanker og et enkelt forslag. Intet pres, ingen salgstale.',
  },
  'contact-p2': { en: 'or write us directly at', da: 'eller skriv direkte til' },

  'placeholder-name': { en: 'Your name', da: 'Dit navn' },
  'placeholder-website': { en: 'Current website', da: 'Nuværende hjemmeside' },
  'cta-submit': { en: 'Send to hello@2kool.dk', da: 'Send til hello@2kool.dk' },

  'footer-tagline': { en: '· Made in Copenhagen · Calm, modern websites', da: '· Lavet i København · Rolige, moderne hjemmesider' },
  'footer-copyright': { en: '© 2026 2Kool. All rights reserved.', da: '© 2026 2Kool. Alle rettigheder forbeholdes.' },
};

const SUPPORTED_LANGS = ['en', 'da'];
const STORAGE_KEY = '2kool-lang';

function applyLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = 'en';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const entry = translations[key];
    if (entry && entry[lang] != null) {
      el.innerHTML = entry[lang];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    const entry = translations[key];
    if (entry && entry[lang] != null) {
      el.setAttribute('placeholder', entry[lang]);
      el.setAttribute('aria-label', entry[lang]);
    }
  });

  const htmlRoot = document.getElementById('html-root');
  if (htmlRoot) htmlRoot.setAttribute('lang', lang);

  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    const isActive = btn.getAttribute('data-lang-btn') === lang;
    btn.setAttribute('aria-pressed', String(isActive));
    btn.classList.toggle('bg-primary', isActive);
    btn.classList.toggle('text-primary-foreground', isActive);
    btn.classList.toggle('text-muted-foreground', !isActive);
  });

  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (e) {
    // localStorage can be unavailable (private mode, disabled storage) — fine to skip persisting.
  }
}

function getInitialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
  } catch (e) {
    // ignore
  }
  return 'en';
}
