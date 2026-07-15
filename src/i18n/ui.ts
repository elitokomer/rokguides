export type Lang = 'tr' | 'en';

export const ui = {
  tr: {
    nav: {
      home: 'Anasayfa',
      gettingStarted: 'Başlangıç Rehberi',
      commanders: 'Komutanlar',
      equipment: 'Ekipmanlar',
      about: 'Hakkımızda',
      contact: 'İletişim',
      menu: 'Menü',
      logoAlt: 'RoKGuides logosu',
    },
    footer: {
      tagline: 'Rise of Kingdoms için Türkçe rehber, komutan analizleri ve yetenek ağaçları.',
      guides: 'Rehberler',
      corporate: 'Kurumsal',
      privacyPolicy: 'Gizlilik Politikası',
      copyright: (year: number) =>
        `© ${year} RoKGuides. Rise of Kingdoms, Lilith Games'e aittir. Bu site resmi bir Lilith Games ürünü değildir.`,
    },
    common: {
      adLabel: 'Reklam alanı',
      recommendedPairings: 'Önerilen eşleşmeler:',
      talentTree: 'Yetenek Ağacı',
      era: 'Dönemi',
      talentTreeAriaSuffix: 'yetenek ağacı',
    },
    commanders: {
      title: 'Komutanlar — KvK Dönemine Göre Tier Listesi',
      description:
        "Rise of Kingdoms komutanlarının KvK 1, KvK 2 ve KvK 3 dönemlerine göre tier analizleri, güçlü/zayıf yönleri ve yetenek ağaçları.",
      heading: 'Komutan Rehberi',
      intro:
        'Krallıklar Savaşı dönemine göre gruplanmış komutan analizleri. Her komutanın güçlü/zayıf yönlerini, en iyi eşleşmelerini ve yetenek ağacı önceliklerini inceleyin.',
      troopType: 'Birlik Tipi',
      tier: 'Tier',
      all: 'Tümü',
      noMatch: 'Bu filtrelere uyan komutan yok.',
      eraLabels: { kvk1: 'KvK 1 Dönemi', kvk2: 'KvK 2 Dönemi', kvk3: 'KvK 3 Dönemi' },
    },
    equipment: {
      title: 'Ekipmanlar — Birlik Tipine Göre Ekipman Setleri',
      description:
        "Rise of Kingdoms'ta piyade, okçu ve süvari birlikleri için başlangıç, orta ve son seviye ekipman set önerileri.",
      heading: 'Ekipmanlar',
      intro:
        'Birlik tipine ve oyun seviyenize göre önerilen ekipman setleri. Her set 8 parçadan oluşur; parça rengi ekipmanın nadirliğini gösterir.',
      troopType: 'Birlik Tipi',
      level: 'Seviye',
      all: 'Tümü',
      comingSoon: 'Bu set için içerik yakında eklenecek.',
      levels: [
        { id: 'baslangic', label: 'Başlangıç Seviyesi' },
        { id: 'orta', label: 'Orta Seviye' },
        { id: 'son', label: 'Son Seviye' },
      ],
      troopTypeLabels: { Piyade: 'Piyade', Okçu: 'Okçu', Süvari: 'Süvari' } as Record<string, string>,
      variantLabels: { "6'lı Set": "6'lı Set", "4'lü Set": "4'lü Set" } as Record<string, string>,
    },
  },
  en: {
    nav: {
      home: 'Home',
      gettingStarted: 'Getting Started',
      commanders: 'Commanders',
      equipment: 'Equipment',
      about: 'About',
      contact: 'Contact',
      menu: 'Menu',
      logoAlt: 'RoKGuides logo',
    },
    footer: {
      tagline: 'A Rise of Kingdoms guide with commander analyses and talent trees.',
      guides: 'Guides',
      corporate: 'Company',
      privacyPolicy: 'Privacy Policy',
      copyright: (year: number) =>
        `© ${year} RoKGuides. Rise of Kingdoms is owned by Lilith Games. This site is not an official Lilith Games product.`,
    },
    common: {
      adLabel: 'Advertisement',
      recommendedPairings: 'Recommended pairings:',
      talentTree: 'Talent Tree',
      era: 'Era',
      talentTreeAriaSuffix: 'talent tree',
    },
    commanders: {
      title: 'Commanders — Tier List by KvK Era',
      description:
        'Tier analyses, strengths/weaknesses, and talent trees for Rise of Kingdoms commanders across the KvK 1, KvK 2, and KvK 3 eras.',
      heading: 'Commander Guide',
      intro:
        'Commander analyses grouped by Kingdoms vs. Kingdoms era. Explore each commander\'s strengths, weaknesses, best pairings, and talent tree priorities.',
      troopType: 'Troop Type',
      tier: 'Tier',
      all: 'All',
      noMatch: 'No commanders match these filters.',
      eraLabels: { kvk1: 'KvK 1 Era', kvk2: 'KvK 2 Era', kvk3: 'KvK 3 Era' },
    },
    equipment: {
      title: 'Equipment — Gear Sets by Troop Type',
      description:
        'Beginner, intermediate, and endgame equipment set recommendations for infantry, archer, and cavalry troops in Rise of Kingdoms.',
      heading: 'Equipment',
      intro:
        'Recommended equipment sets by troop type and game stage. Each set consists of 8 pieces; piece color indicates equipment rarity.',
      troopType: 'Troop Type',
      level: 'Level',
      all: 'All',
      comingSoon: 'Content for this set is coming soon.',
      levels: [
        { id: 'baslangic', label: 'Beginner Level' },
        { id: 'orta', label: 'Intermediate Level' },
        { id: 'son', label: 'Endgame Level' },
      ],
      troopTypeLabels: { Piyade: 'Infantry', Okçu: 'Archers', Süvari: 'Cavalry' } as Record<string, string>,
      variantLabels: { "6'lı Set": '6-Piece Set', "4'lü Set": '4-Piece Set' } as Record<string, string>,
    },
  },
} as const;

export function t(lang: Lang) {
  return ui[lang];
}

const EN_ROUTE_MAP: Record<string, string> = {
  '/': '/en',
  '/baslangic-rehberi': '/en/getting-started',
  '/komutanlar': '/en/commanders',
  '/ekipmanlar': '/en/equipment',
  '/hakkimizda': '/en/about',
  '/iletisim': '/en/contact',
  '/gizlilik-politikasi': '/en/privacy-policy',
};

export function localizePath(path: string, lang: Lang): string {
  if (lang === 'tr') return path;
  return EN_ROUTE_MAP[path] ?? (path === '/' ? '/en' : `/en${path}`);
}
