export type Locale = 'en' | 'tr';

export type CommanderRole = 'Infantry' | 'Archer' | 'Cavalry' | 'Siege/Leadership' | 'Support' | 'Nuker' | 'Piyade' | 'Okçu' | 'Süvari' | 'Kuşatma';
export type CommanderType = 'Legendary' | 'Epic' | 'Elite' | 'Efsanevi' | 'Epik';

export interface Commander {
  name: string;
  role: CommanderRole;
  type: CommanderType;
  note: string;
}

export type TierKey = 'S+' | 'S' | 'A+' | 'A' | 'B+' | 'B' | 'C' | 'A-2' | 'A-';
export type KvKKey = 'kvk1' | 'kvk2' | 'kvk3';

export interface TierDataEntry {
  label: string;
  colorClass: string;
  bgClass: string;
  commanders: Commander[];
}

export type KvKTierData = Record<TierKey, TierDataEntry>;

export interface NavLink {
  label: string;
  href: string;
}

export interface CommandersDropdown {
  title: string;
  kvkCategories: NavLink[];
}

export interface HeaderContent {
  logo: string;
  navLinks: NavLink[];
  commandersDropdown: CommandersDropdown;
  searchPlaceholder: string;
  searchButton: string;
  startReading: string;
  languageLabel: string;
  menuToggleLabel: string;
}

export interface TranslationsContent {
  header: HeaderContent;
  footer: any;
  hero: any;
  tierList: {
    sectionLabel: string;
    title: string;
    description: string;
    fullTierList: string;
    tierLegend: string;
    lastUpdated: string;
    tierData: Record<KvKKey, KvKTierData>;
  };
  featuredGuides: any;
  beginnerPath: any;
  community: any;
  about: any;
  contact: any;
}

export const localeOptions = [
  { code: 'en', label: 'English' },
  { code: 'tr', label: 'Türkçe' },
] as const;

export const translations: Record<Locale, TranslationsContent> = {
  en: {
    header: {
      logo: 'RoKGuides',
      navLinks: [
        { label: 'Commanders', href: '/commanders' },
        { label: 'Battle', href: '/guide-article?category=battle' },
        { label: 'Beginners', href: '/guide-article?category=beginner' },
        { label: 'Alliance', href: '/guide-article?category=alliance' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
      ],
      commandersDropdown: {
        title: 'Commanders',
        kvkCategories: [
          { label: 'KvK 1', href: '/commanders?kvk=kvk1' },
          { label: 'KvK 2', href: '/commanders?kvk=kvk2' },
          { label: 'KvK 3', href: '/commanders?kvk=kvk3' },
        ],
      },
      searchPlaceholder: 'Search guides...',
      searchButton: 'Search',
      startReading: 'Start Reading',
      languageLabel: 'Language',
      menuToggleLabel: 'Toggle menu',
    },
    footer: {
      navLinks: [
        { label: 'Commanders', href: '/guide-article?category=commanders' },
        { label: 'Battle', href: '/guide-article?category=battle' },
        { label: 'Beginners', href: '/guide-article?category=beginner' },
        { label: 'Alliance', href: '/guide-article?category=alliance' },
        { label: 'Search', href: '/search-results' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
      ],
      privacy: 'Privacy',
      terms: 'Terms',
      copyright: '© 2026 RoKGuides',
    },
    hero: {
      label: 'Rise of Kingdoms Strategy Hub',
      titleLine1: 'Master',
      titleLine2: 'Rise of',
      titleLine3: 'Kingdoms.',
      subhead: 'Commander tier lists, battle strategies, beginner tutorials, and alliance event guides — everything you need to dominate your kingdom.',
      searchPlaceholder: 'Search commanders, strategies...',
      searchButton: 'Search',
      categoryLinks: [
        { label: 'Commander Guides', icon: 'UserGroupIcon', href: '/guide-article?category=commanders', color: 'text-primary' },
        { label: 'Battle Strategies', icon: 'BoltIcon', href: '/guide-article?category=battle', color: 'text-primary' },
        { label: 'Beginner Tips', icon: 'AcademicCapIcon', href: '/guide-article?category=beginner', color: 'text-primary' },
        { label: 'Alliance Guides', icon: 'UsersIcon', href: '/guide-article?category=alliance', color: 'text-primary' },
      ],
      featuredStats: [
        { value: '200+', label: 'Guides' },
        { value: '50+', label: 'Commanders' },
        { value: '12', label: 'Civilizations' },
        { value: '10K+', label: 'Players Helped' },
      ],
      featuredLabel: '★ Featured',
      featuredTitle: 'Best Commanders Tier List 2026',
      featuredExcerpt: 'Complete ranking of all Legendary and Epic commanders from S+ to C tier, with talent builds and pairing recommendations.',
      scroll: 'Scroll',
    },
    tierList: {
      sectionLabel: 'Commander Rankings',
      title: 'Tier List 2026',
      description: 'Ranked by KvK phase — from S+ (meta-defining) to C (avoid). Updated monthly.',
      fullTierList: 'Full Tier List',
      tierLegend: 'Tier',
      lastUpdated: 'Last updated: May 2026',
      tierData: {
        kvk1: {
          'S+': {
            label: 'S+',
            colorClass: 'tier-s-plus',
            bgClass: 'bg-tier-s-plus',
            commanders: [
              { name: 'Yi Seong-Gye', role: 'Archer', type: 'Legendary', note: 'The most future-oriented investment in the game during this first and most critical phase of the Kingdom War. Its key strength is the massive 360-degree circular area damage gained once its expertise skill is completed, along with an incredible rage regeneration rate that allows repeated skill triggers. Its greatest weakness is paper-thin defense stats — once spotted in the open field, it instantly becomes the top focus target and can melt within seconds. Best paired with tank infantry like Alexander the Great or Richard I in front, or with Edward of Woodstock for pure archer damage. Skill tree: rage generation nodes in the Skill tree, remaining points into Archer tree.' },
            ],
          },
          S: {
            label: 'S',
            colorClass: 'tier-s',
            bgClass: 'bg-tier-s',
            commanders: [
              { name: 'Richard I', role: 'Infantry', type: 'Legendary', note: 'The unshakable shield of early-phase battles, built entirely around defense and survivability. Strength: extraordinary instant healing and damage reduction via active skill, turning his army into a near-indestructible fortress in the open field. Weakness: the overly high healing mechanic returns lightly wounded troops to battle, inflating severely-wounded hospital counts and resource costs; also falls off hard in damage output in later seasons. Best paired with Charles Martel for an unbreakable defensive wall, or YSG/Sun Tzu behind him for offense. Skill tree: Defense and Infantry survival nodes maxed out.' },
            ],
          },
          'A+': {
            label: 'A+',
            colorClass: 'tier-a',
            bgClass: 'bg-tier-a',
            commanders: [
              { name: 'Charles Martel', role: 'Infantry', type: 'Legendary', note: 'Freely farmable from gold chests, Martel is one of the safest harbors for infantry players throughout KvK 1 and KvK 2. Strength: a massive shield from his active skill plus a passive 30% damage boost while shielded, and excellent garrison defense. Weakness: low raw damage multiplier and poor mobility, just like Richard. Best paired with Richard I for total defense, or Alexander for a balanced offense-defense line. Skill tree: Infantry and Defense trees prioritized, Garrison tree if defending cities/banners.' },
            ],
          },
          A: {
            label: 'A',
            colorClass: 'tier-a',
            bgClass: 'bg-tier-a',
            commanders: [
              { name: 'Sun Tzu (Epic)', role: 'Infantry', type: 'Epic', note: 'The sacred commander for F2P players who refuse to fall behind. Despite being epic, his rage-fill mechanic and area damage are so massive he outclasses most legendaries. Strength: hits up to 5 targets with area damage and gains extra rage per hit for insane skill cycling, plus 20% skill damage boost passive. Weakness: low base stats due to epic rarity, weak against legendary armies in raw defense. Best paired with Bjorn Ironside as primary, Sun Tzu secondary, or behind Charles Martel. Skill tree: base health from Infantry, all remaining points into Skill rage generation.' },
            ],
          },
          'B+': {
            label: 'B+',
            colorClass: 'tier-b',
            bgClass: 'bg-tier-b',
            commanders: [
              { name: 'Bjorn Ironside (Epic)', role: 'Infantry', type: 'Epic', note: "Sun Tzu's most loyal complement, offering an aggressive early playstyle for infantry players. Strength: active skill deals direct damage while also increasing the target's received skill damage by 10%, multiplying whoever attacks after him. Weakness: no area damage, purely single-target focused. Best paired with Sun Tzu placed behind him. Skill tree: Infantry and Attack trees since he'll be primary." },
            ],
          },
          'A-2': {
            label: 'A',
            colorClass: 'tier-a',
            bgClass: 'bg-tier-a',
            commanders: [
              { name: 'Minamoto no Yoshitsune', role: 'Cavalry', type: 'Legendary', note: "Easiest to fully max via VIP packages, making him the biggest weapon for paying players in KvK 1. Strength: enormous single-target burst (nuke) damage and high movement speed for cavalry units. Weakness: completely lacks area damage and has fragile defense stats — melts fast if caught in a crowd in the open field. Best paired with Cao Cao for pure cavalry speed and damage, or behind Saladin in KvK 2 for more protection. Skill tree: Cavalry and Skill damage nodes prioritized." },
            ],
          },
          B: {
            label: 'B',
            colorClass: 'tier-b',
            bgClass: 'bg-tier-b',
            commanders: [
              { name: 'Baibars (Epic)', role: 'Cavalry', type: 'Epic', note: "The most important epic option covering cavalry's lack of area damage. Strength: hits up to 5 targets with area damage plus slow effects when disengaging or chasing enemies. Weakness: extremely weak defensively with poor survivability. Best paired with Pelagius or Minamoto. As an unusual meta pick, works even at the front of infantry armies purely for the slow + AoE synergy with Sun Tzu Prime. Skill tree: Cavalry and Skill focused." },
            ],
          },
          'A-': {
            label: 'A-',
            colorClass: 'tier-a',
            bgClass: 'bg-tier-a',
            commanders: [
              { name: 'Aethelflaed', role: 'Siege/Leadership', type: 'Legendary', note: "Collected entirely free from the Expedition mode, this legendary leader is a full strategic support character. Strength: reduces attack, defense, and health of up to 5 enemy units in a wide half-circle by a massive 30% in a single debuff. Weakness: very low raw damage on her own and fragile defense. Best paired behind Sun Tzu or Joan of Arc. Skill tree: Leadership and Support trees prioritized. Use in mixed-troop armies (all 3 troop types) during major field battles to weaken enemy forces collectively." },
            ],
          },
          C: {
            label: 'C',
            colorClass: 'tier-c',
            bgClass: 'bg-tier-c',
            commanders: [],
          },
        },
        kvk2: {
          'S+': {
            label: 'S+',
            colorClass: 'tier-s-plus',
            bgClass: 'bg-tier-s-plus',
            commanders: [
              { name: 'Alexander the Great', role: 'Infantry', type: 'Legendary', note: "Dominates the infantry meta the moment KvK 2 begins, and stands as one of the game's most iconic characters. Strength: his active skill grants himself a massive shield while simultaneously protecting the lowest-health nearby ally unit. While shielded, the huge attack bonus and high map movement speed he gains erase infantry's usual clunkiness. Weakness: no direct area damage (AoE) skill, working entirely on a single-target basis. Best paired with YSG — the Alexander + YSG combo is the gold standard of KvK 2 open-field battles, combining shield protection with YSG's circular damage. Charles Martel + Alexander is also a strong defensive alternative. Skill tree: combine speed and defense nodes in the Infantry tree with flat-damage nodes in the Attack tree. Use to charge into enemy archer lines with high mobility in the open field, and to hand shields to allies during chaotic battles to keep the front line from breaking." },
            ],
          },
          S: {
            label: 'S',
            colorClass: 'tier-s',
            bgClass: 'bg-tier-s',
            commanders: [
              { name: 'Saladin', role: 'Cavalry', type: 'Legendary', note: "A rock-solid leader who fundamentally changes cavalry's usual fragile, glass-cannon nature, finally giving it the tankiness it deserves. Strength: extraordinary defense stats for cavalry units and strong counter-attack resistance. His active skill also cuts enemy movement speed by 30% while blocking 40% of healing received, making him the direct antithesis of constantly self-healing commanders like Richard or Cao Cao. Weakness: a 5-5-5-1 skill level is plenty, but he's not a pure burst (nuke) monster — more control and sabotage than raw damage. Best paired with YSG (balanced area damage and high survivability) or Minamoto (aggressive single-target damage). Skill tree: prioritize defensive nodes in the Cavalry tree and rage-speed nodes in the Support tree. Use to slow down and catch high-priority targets trying to flee the open field, and to lock down enemy tanks' healing cycles." },
            ],
          },
          'A+': {
            label: 'A+',
            colorClass: 'tier-a',
            bgClass: 'bg-tier-a',
            commanders: [],
          },
          A: {
            label: 'A',
            colorClass: 'tier-a',
            bgClass: 'bg-tier-a',
            commanders: [
              { name: 'Edward of Woodstock', role: 'Archer', type: 'Legendary', note: "The number-one rally and open-field weapon for high-spending (P2W) archer players during KvK 2. Strength: one of the highest single-target skill damage multipliers available at this stage of the game, and a massive boost to archer troops' health and damage. Weakness: his active skill needs a very high 1350 rage to trigger, which slows his skill cadence and makes him easy prey for enemy cavalry once spotted in the open field. Best paired with a specialized YSG placed behind him — Edward hits the single target up front while YSG clears the surroundings from the back. Skill tree: max out anything that boosts rage generation in the Archer and Skill trees. Use to run devastating rallies against enemy banners and cities, or to melt single targets from a safe position in the back line during open-field battles." },
            ],
          },
          'B+': {
            label: 'B+',
            colorClass: 'tier-b',
            bgClass: 'bg-tier-b',
            commanders: [
              { name: 'Tomyris', role: 'Archer', type: 'Legendary', note: "A helper legendary designed to back up Edward and drop sinister poison stacks on the enemy. Strength: passively stacks poison loads on the enemy up to 10 times; when the active skill triggers, it massively amplifies the skill damage the enemy receives. Weakness: has zero presence as a standalone primary commander, entirely doomed to secondary use. Best paired with Edward + Tomyris or YSG + Tomyris." },
            ],
          },
          B: {
            label: 'B',
            colorClass: 'tier-b',
            bgClass: 'bg-tier-b',
            commanders: [],
          },
          C: {
            label: 'C',
            colorClass: 'tier-c',
            bgClass: 'bg-tier-c',
            commanders: [],
          },
          'A-2': {
            label: 'A',
            colorClass: 'tier-a',
            bgClass: 'bg-tier-a',
            commanders: [],
          },
          'A-': {
            label: 'A-',
            colorClass: 'tier-a',
            bgClass: 'bg-tier-a',
            commanders: [
              { name: 'Constantine I', role: 'Infantry', type: 'Legendary', note: "A completely selfless support tank focused entirely on kingdom defense and banner protection. Strength: a massive defense bonus triggers when his army's health drops below 50%, plus an active area support that reduces skill damage taken by allies. Weakness: extremely low map movement speed and almost no damage output — wandering alone in the open field is just a waste of time for enemies. Best paired with Charles Martel for garrison defense, or Joan of Arc for open-field support. Skill tree: Garrison or Defense trees prioritized. Use to stubbornly hold strategically important passes and kingdom banners against enemy rallies throughout KvK 2." },
            ],
          },
        },
        kvk3: {
          'S+': {
            label: 'S+',
            colorClass: 'tier-s-plus',
            bgClass: 'bg-tier-s-plus',
            commanders: [
              { name: 'Sun Tzu (Prime)', role: 'Infantry', type: 'Legendary', note: "The state-of-the-art legendary evolution of the classic rage-monster Sun Tzu build, now a devastating force in the legendary league. Strength: fast rage cycling in the open field with wide area damage; his real edge comes from the Smite mechanic and True Damage bonuses that bypass armor entirely. Weakness: focused so heavily on damage output that he lacks the raw defense of old-school tank infantry — poor positioning can lead to heavy losses. Best paired with Bai Qi (Bai Qu) for the most elite, unstoppable damage machine in the open field; also works flawlessly with Liu Che or William Wallace. Skill tree: lock basic defense nodes in Infantry tree, put all remaining points into Skill tree rage-generation nodes. Use at the front of murderball formations in massive field battles to collectively melt enemy armies with True Damage bursts." },
              { name: 'Alexander Nevsky', role: 'Cavalry', type: 'Legendary', note: "The undisputed peak of the cavalry class and the most feared assassin in the open field. Strength: extraordinary single-target burst damage, a passive that breaks enemy defense by 15%, and massive health/defense stats for cavalry units; also gains a damage-reduction bonus when surrounded by enemies, making him unusually tanky for a cavalry unit. Weakness: has zero area damage, entirely designed to lock onto and erase a single target. Best paired with Joan of Arc (Prime) — currently the strongest open-field cavalry meta combo — or alternatively with Huatut. Skill tree: Cavalry attack nodes plus fast rage-regeneration paths in the Skill tree, taken in full. Use to spot high-priority but fragile targets (archers or glass cannons like YSG) and erase them from the map in an instant." },
            ],
          },
          S: {
            label: 'S',
            colorClass: 'tier-s',
            bgClass: 'bg-tier-s',
            commanders: [
              { name: 'Bai Qi (Bai Qu)', role: 'Infantry', type: 'Legendary', note: "Descends on the enemy like a nightmare, one of the most cunning executioners on the battlefield. Strength: a high damage multiplier plus Malice stacks left on the enemy — as the battle drags on, these stacks sabotage the enemy's defense mechanisms, leaving them exposed and vulnerable. Weakness: great on his own, but he needs a fast, high-rage-cycle partner to instantly convert the weaknesses he opens up into raw damage. Best paired with Sun Tzu (Prime) as primary and Bai Qi as secondary. Skill tree: focus on the synergy between the Leadership and Skill trees to balance durability and damage when leading the army. Use in long open-field wars of attrition to break down the enemy front's defensive resistance and punch through the line." },
              { name: 'Guan Yu', role: 'Infantry', type: 'Legendary', note: "One of the oldest yet still-relevant open-field leaders from the Conquest season. Strength: an active skill hitting up to 3 targets in a wide arc in front of him, with a silence effect and exceptionally high skill damage. The silence delays the skill rotation of anyone hit, disrupting their timing. Weakness: to get the most out of this skill he absolutely must be used as the primary commander, and his passive damage boost requires an external shield to trigger since he can't shield himself. Best paired with Alexander or Leonidas for shield support; Guan Yu + Liu Che is also very popular in the current meta. Skill tree: balance the Infantry and Skill trees, and be sure to unlock the top nodes that directly boost active skill damage. Use at the front line of large alliance battles to silence enemy groups en masse and paralyze their skill rotations." },
            ],
          },
          'A+': {
            label: 'A+',
            colorClass: 'tier-a',
            bgClass: 'bg-tier-a',
            commanders: [],
          },
          A: {
            label: 'A',
            colorClass: 'tier-a',
            bgClass: 'bg-tier-a',
            commanders: [],
          },
          'B+': {
            label: 'B+',
            colorClass: 'tier-b',
            bgClass: 'bg-tier-b',
            commanders: [],
          },
          B: {
            label: 'B',
            colorClass: 'tier-b',
            bgClass: 'bg-tier-b',
            commanders: [],
          },
          C: {
            label: 'C',
            colorClass: 'tier-c',
            bgClass: 'bg-tier-c',
            commanders: [],
          },
          'A-2': {
            label: 'A',
            colorClass: 'tier-a',
            bgClass: 'bg-tier-a',
            commanders: [],
          },
          'A-': {
            label: 'A-',
            colorClass: 'tier-a',
            bgClass: 'bg-tier-a',
            commanders: [],
          },
        },
      },
    },
    featuredGuides: {
      sectionLabel: 'Featured Guides',
      title: 'Top Strategies',
      browseAll: 'Browse All',
      featured: {
        title: 'Complete Commander Pairing Guide: Maximize Your March Power',
        excerpt: 'Learn how to pair commanders effectively — from Guan Yu + Sun Tzu infantry to YSG + Osman archer combos. Every top pairing explained with talent builds.',
        category: 'Commanders',
        image: 'https://img.rocket.new/generatedImages/featured_commander_pairing_2026.png',
        imageAlt: 'Strategic commander pairing artwork showing two generals and a battlefield map',
      },
      guides: [
        {
          id: '2',
          title: 'Open-Field Battle Tactics: How to Win KvK',
          excerpt: 'Advanced strategies for Kingdom vs Kingdom battles including rally mechanics, march formation, and when to fight vs retreat.',
          category: 'Battle',
          image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1669a92ca-1773009479222.png',
          imageAlt: 'Epic medieval castle siege scene with armies marching at dawn, dramatic low-angle lighting, dark stone fortifications',
        },
        {
          id: '3',
          title: 'Beginner Guide: First 30 Days in a New Kingdom',
          excerpt: 'Exactly what to do from day 1 to day 30 — which civilization to pick, which commanders to focus, and how to join a strong alliance.',
          category: 'Beginner',
          image: 'https://img.rocket.new/generatedImages/rocket_gen_img_167a7d59f-1772151443676.png',
          imageAlt: 'Bright tutorial interface with glowing progress path, clean dark background with golden light rays and achievement icons',
        },
        {
          id: '4',
          title: 'Alliance Events Calendar: Maximize Event Rewards',
          excerpt: 'Complete breakdown of Mightiest Governor, Sun Never Sets, and Ark of Osiris events with optimal strategies for F2P players.',
          category: 'Alliance',
          image: 'https://img.rocket.new/generatedImages/rocket_gen_img_11c4ae552-1772474344172.png',
          imageAlt: 'Group of people planning strategy around a glowing table map in a dimly lit war room, collaborative tactical atmosphere',
        },
        {
          id: '5',
          title: 'F2P Gem Spending Guide: Where Every Gem Counts',
          excerpt: 'The definitive guide for free-to-play players on spending gems efficiently — VIP, chests, speedups, or events?',
          category: 'Beginner',
          image: 'https://images.unsplash.com/photo-1707758967860-19106a5e9ab7',
          imageAlt: 'Dark code editor screen with glowing amber and green highlights on dark background, developer workspace',
        },
      ],
    },
    beginnerPath: {
      sectionLabel: 'New Player Guide',
      title: 'Your First 30 Days',
      description: 'The exact steps every beginner should follow to build a strong foundation.',
      allBeginnerGuides: 'All Beginner Guides',
      ctaTitle: 'Ready to dive deeper?',
      ctaDescription: 'Read our complete beginner guide — 8 minutes, zero fluff.',
      ctaButton: 'Read Full Guide',
      steps: [
        {
          number: '01',
          title: 'Pick Your Civilization',
          description: 'Start with China for 5% construction speed, or Britain for strong early troops. Avoid switching early.',
          tip: 'China & Britain are top picks for new players',
          icon: 'GlobeAltIcon',
          color: 'text-primary',
          bgColor: 'rgba(200,150,90,0.12)',
        },
        {
          number: '02',
          title: 'Upgrade Your Castle First',
          description: 'The Castle is the hardest building to upgrade. Prioritize it from day 1 to avoid late-game bottlenecks.',
          tip: 'Castle upgrades unlock everything else',
          icon: 'HomeModernIcon',
          color: 'tier-s',
          bgColor: 'rgba(232,168,56,0.12)',
        },
        {
          number: '03',
          title: 'Max 2 Commanders First',
          description: 'Focus gems and sculptures on Sun Tzu + Joan of Arc (F2P). Spreading resources thin loses fights.',
          tip: 'Sun Tzu + Joan is the best F2P pair',
          icon: 'UserGroupIcon',
          color: 'tier-a',
          bgColor: 'rgba(107,170,117,0.12)',
        },
        {
          number: '04',
          title: 'Join an Active Alliance',
          description: 'Alliance technology buffs, help requests, and event participation are essential for fast growth.',
          tip: 'Alliance tech alone gives massive buffs',
          icon: 'UsersIcon',
          color: 'tier-b',
          bgColor: 'rgba(91,143,212,0.12)',
        },
        {
          number: '05',
          title: 'Save Speedups for Events',
          description: 'Mightiest Governor and other timed events give huge rewards. Burn speedups during these windows.',
          tip: 'Never waste speedups outside events',
          icon: 'BoltIcon',
          color: 'tier-s-plus',
          bgColor: 'rgba(255,107,53,0.12)',
        },
      ],
    },
    community: {
      sectionLabel: 'Community',
      title: 'Recent Discussions',
      activityStats: [
        { value: '84', label: 'Comments today', icon: 'ChatBubbleLeftIcon' },
        { value: '1.2K', label: 'Active readers', icon: 'UsersIcon' },
        { value: '6', label: 'Guides updated', icon: 'DocumentTextIcon' },
      ],
      recentComments: [
        {
          id: 1,
          author: 'Marcus T.',
          avatar: 'MT',
          guide: 'Best Commanders Tier List 2026',
          comment: 'Finally someone who explains WHY Guan Yu is S+ instead of just listing him. The talent build breakdown is exactly what I needed.',
          likes: 14,
          guideHref: '/guide-article',
        },
        {
          id: 2,
          author: 'Priya S.',
          avatar: 'PS',
          guide: 'F2P Gem Spending Guide',
          comment: 'This changed my whole approach. Saved 20K gems by following the VIP section advice. Already noticed a huge difference in my city growth.',
          likes: 31,
          guideHref: '/guide-article',
        },
        {
          id: 3,
          author: 'Kenji H.',
          avatar: 'KH',
          guide: 'Open-Field Battle Tactics',
          comment: 'The KvK rally section is gold. My alliance used the formation tips during last week\'s KvK and we took the pass for the first time ever.',
          likes: 47,
          guideHref: '/guide-article',
        },
        {
          id: 4,
          author: 'Amara O.',
          avatar: 'AO',
          guide: 'Alliance Events Calendar',
          comment: 'Can you add a section on Ark of Osiris scoring? Our alliance struggles with positioning during the final phase.',
          likes: 8,
          guideHref: '/guide-article',
        },
      ],
      ctaText: 'Have insights to share? Every guide has a comment section.',
      ctaButton: 'Join the Discussion',
      helpfulText: 'helpful',
    },
    about: {
      heroLabel: 'About RoKGuides',
      heroTitle: 'Your go-to resource for Rise of Kingdoms',
      heroDescription: 'RoKGuides was built by players, for players. We got tired of scattered Reddit threads and outdated YouTube videos — so we built a single place where everything is organized, up to date, and actually useful.',
      sectionTitle: "What you'll find here",
      features: [
        {
          icon: 'UserGroupIcon',
          title: 'Commander Guides',
          description: 'In-depth breakdowns of every commander in Rise of Kingdoms — skills, talent trees, pairings, and which ones are worth investing in at each stage of the game.',
        },
        {
          icon: 'ShieldExclamationIcon',
          title: 'Battle Strategies',
          description: 'From open-field combat to KvK warfare, we cover the tactics that separate average players from top-ranked governors. Learn formations, march setups, and counter-strategies.',
        },
        {
          icon: 'AcademicCapIcon',
          title: 'Beginner Path',
          description: 'New to Rise of Kingdoms? Our structured beginner guides walk you through your first city, choosing a civilization, early research priorities, and avoiding the mistakes that slow most players down.',
        },
        {
          icon: 'BuildingLibraryIcon',
          title: 'Alliance & Politics',
          description: 'Understand how alliances work, how to climb the rankings, and how to navigate the political side of the game — diplomacy, wars, and territory control.',
        },
        {
          icon: 'MagnifyingGlassIcon',
          title: 'Searchable Content',
          description: 'Every guide is indexed and searchable. Find exactly what you need — whether it\'s a specific commander, a mechanic, or a strategy — in seconds.',
        },
        {
          icon: 'ChatBubbleLeftRightIcon',
          title: 'Community Discussion',
          description: 'Each guide has a comments section where players share tips, ask questions, and debate strategies. Real feedback from real players.',
        },
      ],
      missionTitle: 'Our mission',
      missionLines: [
        'Rise of Kingdoms is a deep, complex game. The gap between a new player and a veteran isn\'t just time — it\'s knowledge. We exist to close that gap.',
        'Every guide on this site is written with one goal: give you the information you need to make better decisions in the game. No fluff, no filler — just practical strategy you can apply immediately.',
        'Whether you\'re picking your first civilization or preparing for a KvK season, RoKGuides has something for you.',
      ],
      ctaTitle: 'Ready to level up?',
      ctaDescription: 'Browse our guides and start improving your game today.',
      ctaPrimary: 'Browse Guides',
      ctaSecondary: 'Search Content',
    },
    contact: {
      tag: 'Contact',
      title: 'Get in touch',
      description: "Have a question, spotted an error, or want to suggest a guide? We'd love to hear from you.",
      reachUsDirectly: 'Reach us directly',
      emailLabel: 'Email',
      emailDescription: "Send us an email and we'll get back to you as soon as possible.",
      responseTimeNote: 'We typically respond within',
      responseTimeDays: '1–3 business days',
      responseTimeSuffix: '. For faster answers, check if your question is already covered in our guides.',
      whatToContactUsAbout: 'What to contact us about',
      topicCorrections: 'Guide corrections or outdated information',
      topicSuggestGuide: 'Suggesting a new guide topic',
      topicReportBug: 'Reporting a bug or broken page',
      topicPartnership: 'Partnership or collaboration inquiries',
      topicGeneralQuestions: 'General questions about the site',
      beforeYouWriteTitle: 'Before you write',
      beforeYouWriteDescription: 'Many common questions are already answered in our guides. Try the',
      searchPage: 'search page',
      beforeYouWriteDescriptionSuffix: 'first — you might find your answer instantly.',
    },
  },
  tr: {
    header: {
      logo: 'RoKGuides',
      navLinks: [
        { label: 'Komutanlar', href: '/commanders' },
        { label: 'Savaş', href: '/guide-article?category=battle' },
        { label: 'Yeni Başlayanlar', href: '/guide-article?category=beginner' },
        { label: 'İttifak', href: '/guide-article?category=alliance' },
        { label: 'Hakkında', href: '/about' },
        { label: 'İletişim', href: '/contact' },
      ],
      commandersDropdown: {
        title: 'Komutanlar',
        kvkCategories: [
          { label: 'KvK 1', href: '/commanders?kvk=kvk1' },
          { label: 'KvK 2', href: '/commanders?kvk=kvk2' },
          { label: 'KvK 3', href: '/commanders?kvk=kvk3' },
        ],
      },
      searchPlaceholder: 'Rehberlerde ara...',
      searchButton: 'Ara',
      startReading: 'Okumaya Başla',
      languageLabel: 'Dil',
      menuToggleLabel: 'Menüyü aç/kapat',
    },
    footer: {
      navLinks: [
        { label: 'Komutanlar', href: '/guide-article?category=commanders' },
        { label: 'Savaş', href: '/guide-article?category=battle' },
        { label: 'Yeni Başlayanlar', href: '/guide-article?category=beginner' },
        { label: 'İttifak', href: '/guide-article?category=alliance' },
        { label: 'Ara', href: '/search-results' },
        { label: 'Hakkında', href: '/about' },
        { label: 'İletişim', href: '/contact' },
      ],
      privacy: 'Gizlilik',
      terms: 'Şartlar',
      copyright: '© 2026 RoKGuides',
    },
    hero: {
      label: 'Rise of Kingdoms Strateji Merkezi',
      titleLine1: 'Usta Ol',
      titleLine2: 'Rise of',
      titleLine3: 'Kingdoms.',
      subhead: 'Komutan sıralamaları, savaş stratejileri, yeni başlayan rehberleri ve ittifak etkinlik kılavuzları — krallığınızı domine etmek için ihtiyacınız olan her şey.',
      searchPlaceholder: 'Komutanlarda, stratejilerde ara...',
      searchButton: 'Ara',
      categoryLinks: [
        { label: 'Komutan Rehberleri', icon: 'UserGroupIcon', href: '/guide-article?category=commanders', color: 'text-primary' },
        { label: 'Savaş Stratejileri', icon: 'BoltIcon', href: '/guide-article?category=battle', color: 'text-primary' },
        { label: 'Yeni Başlayan İpuçları', icon: 'AcademicCapIcon', href: '/guide-article?category=beginner', color: 'text-primary' },
        { label: 'İttifak Rehberleri', icon: 'UsersIcon', href: '/guide-article?category=alliance', color: 'text-primary' },
      ],
      featuredStats: [
        { value: '200+', label: 'Rehber' },
        { value: '50+', label: 'Komutan' },
        { value: '12', label: 'Uygarlık' },
        { value: '10K+', label: 'Yardım Edilen Oyuncu' },
      ],
      featuredLabel: '★ Öne Çıkan',
      featuredTitle: 'En İyi Komutan Sıralaması 2026',
      featuredExcerpt: 'Tüm Efsanevi ve Epik komutanları S+ ile C arası sıralayarak, yetenek ağaçları ve eşleşme önerileriyle birlikte sunar.',
      scroll: 'Aşağı Kaydır',
    },
    tierList: {
      sectionLabel: 'Komutan Sıralamaları',
      title: 'Tier List 2026',
      description: 'KvK dönemine göre sıralandı — S+ (meta belirleyici) den C (kaçın) seviyesine kadar. Aylık güncellenir.',
      fullTierList: 'Tüm Tier Listesi',
      tierLegend: 'Tier',
      lastUpdated: 'Son güncelleme: Mayıs 2026',
      tierData: {
        kvk1: {
          'S+': {
            label: 'S+',
            colorClass: 'tier-s-plus',
            bgClass: 'bg-tier-s-plus',
            commanders: [
              { name: 'Yi Seong-Gye (YSG)', role: 'Okçu', type: 'Efsanevi', note: "Krallıklar Savaşı'nın bu ilk ve en kritik evresinde YSG, oyundaki en geleceğe yönelik yatırımdır. Güçlü yönlerinin başında, uzmanlık becerisi tamamlandığında kazandığı üç yüz altmış derecelik dairesel alan hasarı (AoE) ve ardı ardına yetenek tetiklemesini sağlayan muazzam öfke yenileme hızı gelir. Bu sayede hem açık sahada harika raporlar almanızı sağlar hem de barbar zincirleme mekaniğinde rakipsizdir. En büyük zayıf yönü ise savunma istatistiklerinin adeta kağıt gibi olmasıdır. Açık alanda düşman oyuncular tarafından fark edildiği an ilk hedef (focus) haline gelir ve saniyeler içinde eriyebilir. En iyi eşleşmelerine bakacak olursak, savunma açığını kapatmak adına Büyük İskender veya Richard I gibi tank piyade komutanlarının arkasında ikincil olarak kullanılmalıdır. Saf okçu hasarı için ise Edward of Woodstock ile yıkıcı bir sinerji yakalar. Yetenek ağacı tarafında, genellikle ikincil komutan olarak tercih edildiği için ağacın bir işlevi kalmaz ancak birincil sahaya sürülecekse Beceri ağacındaki tüm öfke üreten yetenekler alınmalı, kalan puanlar Okçu ağacına dağıtılmalıdır. En ideal kullanım senaryosu, açık alan savaşlarında kaosun tam ortasına girmeden, tank müttefiklerin arkasına saklanarak düşman gruplarına alan hasarı püskürtmektir." },
            ],
          },
          S: {
            label: 'S',
            colorClass: 'tier-s',
            bgClass: 'bg-tier-s',
            commanders: [
              { name: 'Richard I', role: 'Piyade', type: 'Efsanevi', note: "Erken safha savaşlarının sarsılmaz kalkanı olan Richard, tamamen savunma ve hayatta kalma üzerine kuruludur. Güçlü yönü, aktif becerisiyle sağladığı olağanüstü yüksek anlık iyileştirme ve aldığı hasarı azaltma yeteneğidir. Kendi ordusunu açık alanda yok edilmesi neredeyse imkansız bir kaleye dönüştürür. Ancak bu durum en büyük zayıf yönünü doğurur; aşırı yüksek iyileştirme mekanizması, hafif yaralıları tekrar savaşa soktuğu için savaş sonunda hastane raporlarındaki ağır yaralı (severely wounded) sayısını ve dolayısıyla kaynak maliyetini fırlatır. Ayrıca oyunun ilerleyen sezonlarında hasar potansiyeli çok zayıf kaldığı için tamamen gözden düşer. En iyi eşleşmelerinde Charles Martel ile yan yana geldiğinde aşılması imkansız bir defansif duvar oluşturur. Ofansif eksikliğini kapatmak için ise arkasına YSG veya Sun Tzu yerleştirilmelidir. Yetenek ağacında Savunma ve Piyade ağaçlarındaki hayatta kalma odaklı tüm düğümler sonuna kadar zorlanmalıdır. Kullanım senaryoları arasında, açık sahada düşman hatlarının dikkatini ve saldırılarını üzerine çekmek (tanklık yapmak) ve kanyon etkinliklerinde ön hattı korumak yer alır." },
            ],
          },
          'A+': {
            label: 'A+',
            colorClass: 'tier-a',
            bgClass: 'bg-tier-a',
            commanders: [
              { name: 'Charles Martel', role: 'Piyade', type: 'Efsanevi', note: "Altın sandıklardan ücretsiz olarak biriktirilebilen Martel, KvK 1 ve KvK 2 boyunca piyade oyuncularının en güvenli limanlarından biridir. Güçlü yönü, aktif yeteneğiyle açtığı devasa kalkan ve bu kalkan etkinken ordusunun hasarını yüzde otuz artıran pasif yeteneğidir. Ayrıca garnizon savunmasında da harika işler çıkarır. Zayıf yönü, tıpkı Richard gibi saf hasar çarpanının düşük olması ve mobilite eksikliğidir. En iyi eşleşmelerinde Richard I ile tam defans, Büyük İskender ile ise dengeli bir ofans-defans hattı kurar. Yetenek ağacında Piyade ve Savunma ağaçları öncelikli olmalıdır, eğer şehir veya sancak savunulacaksa Garnizon ağacına puan ayrılabilir. Kullanım senaryosu olarak, açık sahada kalkan avantajıyla ön hatları tutmak veya krallık sancaklarına düzenlenen mitingleri (rally) göğüslemektir." },
            ],
          },
          A: {
            label: 'A',
            colorClass: 'tier-a',
            bgClass: 'bg-tier-a',
            commanders: [
              { name: 'Sun Tzu (Epik)', role: 'Piyade', type: 'Epik', note: "Efsanevi komutanlara kafa tutan ve oyundaki tüm epik karakterlerin açık ara en iyisi olan Sun Tzu, F2P oyuncularının göz bebeğidir. Güçlü yönü, aktif becerisiyle aynı anda beş hedefe kadar alan hasarı vurabilmesi ve isabet ettirdiği hedef başına kazandığı ekstra öfke ile yetenek döngüsünü çılgın bir hıza ulaştırmasıdır. Ayrıca pasifinde barındırdığı yüzde yirmi beceri hasarı artışı muazzam bir verim sağlar. Zayıf yönü ise epik bir karakter olmasından kaynaklı düşük temel istatistikleridir; efsanevi ordular karşısında saf savunma anlamında zayıf kalır. En iyi eşleşmelerinde Bjorn Ironside birincil, Sun Tzu ikincil olarak harika bir KvK 1 başlangıç ordusudur. Ayrıca Charles Martel arkasında da harikalar yaratır. Yetenek ağacında Piyade ağacından temel sağlık puanları toplanmalı, geri kalan tüm stratejik puanlar Beceri ağacındaki öfke üretimini maksimize etmek için harcanmalıdır. Kullanım senaryosu, düşük bütçeli hesapların KvK 1 açık alan savaşlarında maksimum verimle rapor puanı toplamasını sağlamaktır." },
            ],
          },
          'B+': {
            label: 'B+',
            colorClass: 'tier-b',
            bgClass: 'bg-tier-b',
            commanders: [
              { name: 'Bjorn Ironside (Epik)', role: 'Piyade', type: 'Epik', note: "Sun Tzu'nun en sadık tamamlayıcısı olan Bjorn, erken aşamada piyade oyuncularına agresif bir oyun tarzı sunar. Güçlü yönü, aktif yeteneğinin düşmana doğrudan hasar vururken aynı zamanda hedef aldığı birliğin aldığı beceri hasarını yüzde on artırmasıdır. Bu debuff etkisi arkasından gelen komutanın hasarını katlar. Zayıf yönü ise alan hasarının olmaması ve tamamen tek hedefe odaklanmasıdır. En iyi eşleşmesi kesinlikle arkasına Sun Tzu yerleştirilerek yapılan kombinasyondur. Yetenek ağacında Beceri ağacı yerine birincil komutan olacağı için Piyade ve Saldırı ağaçlarına ağırlık verilmelidir. Kullanım senaryosu, KvK 1 açık alanında Sun Tzu'ya liderlik ederek düşman hedeflerini tek tek eritmektir." },
            ],
          },
          'A-2': {
            label: 'A',
            colorClass: 'tier-a',
            bgClass: 'bg-tier-a',
            commanders: [
              { name: 'Minamoto no Yoshitsune', role: 'Süvari', type: 'Efsanevi', note: "VIP paketleriyle hızlıca fullemesi (maximum yetenek seviyesi) en kolay olan bu komutan, özellikle para yatıran oyuncuların KvK 1'deki en büyük silahıdır. Güçlü yönü, muazzam derecede yüksek tek hedef anlık hasarı (nuke) ve süvari birliklerine kazandırdığı yüksek hareket hızıdır. Zayıf yönü ise alan hasarından tamamen yoksun olması ve savunma istatistiklerinin kırılganlığıdır; açık sahada kalabalığın ortasında kaldığında çok hızlı erir. En iyi eşleşmelerinde Cao Cao ile saf süvari hızı ve hasarı yakalarken, KvK 2 döneminde Saladin arkasında daha korunaklı bir şekilde çalışabilir. Yetenek ağacında Süvari ve Beceri ağaçlarındaki hasar düğümleri öncelikli olmalıdır. Kullanım senaryosu, açık sahada tek başına gezen zayıf hedefleri avlamak, kaçan okçuları yakalamak ve barbar kalelerine (fort) hızlı mitingler düzenlemektir." },
            ],
          },
          B: {
            label: 'B',
            colorClass: 'tier-b',
            bgClass: 'bg-tier-b',
            commanders: [
              { name: 'Baibars (Epik)', role: 'Süvari', type: 'Epik', note: "Süvari sınıfının alan hasarı eksikliğini kapatan en önemli epik seçenektir. Güçlü yönü, beş hedefe kadar vurabilen alan hasarı yeteneği ve savaştan çıkarken veya düşmanı kovalarken kazandırdığı yavaşlatma (slow) etkileridir. Zayıf yönü, defansif olarak son derece zayıf olması ve hayatta kalma kabiliyetinin düşüklüğüdür. En iyi eşleşmelerinde Pelagius veya Minamoto ile kullanılabilir. Sıradışı bir meta olarak, tamamen piyade ordusunun başında bile sadece yavaşlatma ve alan hasarı avantajı için Sun Tzu Prime ile şaşırtıcı sinerjiler üretebilir. Yetenek ağacında Süvari ve Beceri tercih edilmelidir. Kullanım senaryosu, büyük meydan savaşlarında süvari ordularıyla vur-kaç taktiği uygulayarak düşman hatlarını arkadan taciz etmektir." },
            ],
          },
          C: {
            label: 'C',
            colorClass: 'tier-c',
            bgClass: 'bg-tier-c',
            commanders: [
              { name: 'Centurion', role: 'Piyade', type: 'Epik', note: 'Oyunun erken evresinde işe yarayan bir tank ama ilerleyen evrelerde hızla geride kalıyor.' },
              { name: 'Lancelot', role: 'Süvari', type: 'Epik', note: 'Hızlı ama zayıf, sadece kaynak toplama amaçlı kullanılabilir.' },
            ],
          },
          'A-': {
            label: 'A-',
            colorClass: 'tier-a',
            bgClass: 'bg-tier-a',
            commanders: [
              { name: 'Aethelflaed', role: 'Kuşatma', type: 'Efsanevi', note: "Sefer (Expedition) modundan tamamen ücretsiz olarak toplanan bu efsanevi lider, tam bir stratejik destek karakteridir. Güçlü yönü, önündeki geniş yarım daire alandaki beş düşman birliğinin saldırı, savunma ve sağlık değerlerini tek seferde yüzde otuz gibi devasa bir oranda düşürmesidir (debuff). Zayıf yönü, tek başına saf hasar gücünün çok düşük olması ve savunmasının kırılgandır olmasıdır. En iyi eşleşmelerinde arkasına Sun Tzu veya Joan of Arc yerleştirildiğinde harika iş yapar. Yetenek ağacında Liderlik ve Destek ağaçları ön planda tutulmalıdır. Kullanım senaryosu, bu karakterin yeteneklerini tetiklemek adına üç birim tipinden de barındıran karışık ordularla (mixed troops) büyük meydan savaşlarına katılarak düşman ordularını topluca zayıflatmaktır." },
            ],
          },
        },
        kvk2: {
          'S+': {
            label: 'S+',
            colorClass: 'tier-s-plus',
            bgClass: 'bg-tier-s-plus',
            commanders: [
              { name: 'Alexander the Great (Büyük İskender)', role: 'Piyade', type: 'Efsanevi', note: "KvK 2 sahnesine adım atar atmaz piyade metasını tamamen domine eden Büyük İskender, oyunun en ikonik karakterlerinden biridir. Güçlü yönlerinin başında, aktif becerisiyle hem kendine devasa bir kalkan açması hem de eş zamanlı olarak çevresindeki canı en az olan müttefik birliği koruma altına alması gelir. Kalkan etkinken kazandığı muazzam saldırı bonusları ve yüksek harita hareket hızı, piyadelerin hantal yapısını tamamen ortadan kaldırır. Zayıf yönü ise doğrudan bir alan hasarı (AoE) yeteneğinin bulunmaması, tamamen tek hedef odaklı çalışmasıdır. En iyi eşleşmelerinde Alexander + YSG kombinasyonu, KvK 2 açık alan savaşlarının altın standardıdır; hem kalkan koruması hem de YSG'nin dairesel hasarı birleşir. Defansif amaçlar için Charles Martel + Alexander da çok güçlü bir alternatiftir. Yetenek ağacında Piyade ağacındaki hız ve savunma düğümleri ile Saldırı ağacındaki düz hasar artıran yollar birleştirilmelidir. Kullanım senaryoları, açık sahada yüksek hareket kabiliyetiyle düşman okçularının üzerine çökmek ve kalabalık savaşlarda müttefiklere kalkan dağıtarak cephe hattının kırılmasını önlemektir." },
            ],
          },
          S: {
            label: 'S',
            colorClass: 'tier-s',
            bgClass: 'bg-tier-s',
            commanders: [
              { name: 'Saladin (Selahaddin Eyyubi)', role: 'Süvari', type: 'Efsanevi', note: "Süvarilerin kırılgan ve hassas yapısını kökten değiştiren, onlara hak ettikleri tanklığı sunan sarsılmaz bir liderdir. Güçlü yönü, süvari birliklerine sağladığı olağanüstü yüksek savunma istatistikleri ve karşı atağa karşı dirençtir. Ayrıca aktif becerisi düşmanın hareket hızını yüzde otuz keserken, aldığı iyileştirme (healing) etkisini de yüzde kırk oranında bloke eder. Bu sayede sahada Richard veya Cao Cao gibi sürekli iyileşen komutanların tam antitezidir. Zayıf yönü, yetenek seviyesini beş beş beş bir (5-5-5-1) yapmak fazlasıyla yeterli olsa da, saf bir anlık hasar (nuke) canavarı olmamasıdır; daha çok kontrol ve sabote odaklıdır. En iyi eşleşmelerinde Saladin + YSG (dengeli alan hasarı ve yüksek hayatta kalma) veya Saladin + Minamoto (agresif tek hedef hasarı) öne çıkar. Yetenek ağacında Süvari ağacındaki defansif yollar seçilmeli ve Destek ağacındaki beceri hızlandırma düğümleri alınmalıdır. Kullanım senaryosu, açık sahada kaçmaya çalışan yüksek öncelikli hedefleri yavaşlatarak yakalamak ve düşman tanklarının iyileştirme döngülerini kilitlemektir." },
            ],
          },
          'A+': {
            label: 'A+',
            colorClass: 'tier-a',
            bgClass: 'bg-tier-a',
            commanders: [],
          },
          A: {
            label: 'A',
            colorClass: 'tier-a',
            bgClass: 'bg-tier-a',
            commanders: [
              { name: 'Edward of Woodstock', role: 'Okçu', type: 'Efsanevi', note: "KvK 2 döneminde yüksek ödeme yapan (P2W) okçu oyuncularının bir numaralı miting ve açık alan silahıdır. Güçlü yönü, oyunun bu aşamasındaki en yüksek tek hedef beceri hasarı çarpanlarından birine sahip olması ve okçu birliklerinin can ile hasar değerlerini uçurmasıdır. Zayıf yönü, aktif yeteneğini tetiklemek için bin üç yüz elli (1350) gibi çok yüksek bir öfke (rage) miktarına ihtiyaç duymasıdır. Bu durum yetenek atma hızını yavaşlatır ve açık sahada düşman süvarileri tarafından çok çabuk hedef alınıp cezalandırılmasına yol açar. En iyi eşleşmesi kesinlikle arkasına yerleştirilecek uzmanlaşmış bir YSG'dir; Edward önden tek hedefe vururken YSG arkadan etrafı temizler. Yetenek ağacında Okçu ve Beceri ağaçlarındaki öfke üretimi artıran ne varsa alınmalıdır. Kullanım senaryosu, düşman sancaklarına ve şehirlerine karşı yıkıcı mitingler düzenlemek veya açık sahada arkada güvenli bir konumdan tekil hedefleri eritmektir." },
            ],
          },
          'B+': {
            label: 'B+',
            colorClass: 'tier-b',
            bgClass: 'bg-tier-b',
            commanders: [
              { name: 'Tomyris', role: 'Okçu', type: 'Efsanevi', note: "Edward'ı desteklemek ve düşmana sinsi zehir yükleri bırakmak için tasarlanmış yardımcı bir efsanevi komutandır. Güçlü yönü, pasif olarak düşmana on kata kadar zehir yükü biriktirmesi; aktif yetenek tetiklendiğinde düşmanın aldığı beceri hasarını muazzam oranda artırmasıdır. Zayıf yönü, tek başına birincil komutan olarak neredeyse hiçbir varlık göstermemesi, tamamen ikincil kullanıma mahkum olmasıdır. En iyi eşleşmeleri Edward + Tomyris veya YSG + Tomyris kombinasyonlarıdır." },
            ],
          },
          B: {
            label: 'B',
            colorClass: 'tier-b',
            bgClass: 'bg-tier-b',
            commanders: [],
          },
          C: {
            label: 'C',
            colorClass: 'tier-c',
            bgClass: 'bg-tier-c',
            commanders: [],
          },
          'A-2': {
            label: 'A',
            colorClass: 'tier-a',
            bgClass: 'bg-tier-a',
            commanders: [],
          },
          'A-': {
            label: 'A-',
            colorClass: 'tier-a',
            bgClass: 'bg-tier-a',
            commanders: [
              { name: 'Constantine I', role: 'Piyade', type: 'Efsanevi', note: "Tamamen krallık savunmasına ve sancak korumasına odaklanmış, tümüyle özverili bir destek tankıdır. Güçlü yönü, ordusunun canı yüzde ellinin altına düştüğünde tetiklenen devasa bir savunma bonusu ve müttefiklerin aldığı beceri hasarını azaltan aktif alan desteğidir. Zayıf yönü, harita hareket hızının son derece düşük olması ve neredeyse hiç hasar üretmemesidir; açık sahada tek başına dolaşmak düşman için zaman kaybından ibarettir. En iyi eşleşmeleri, garnizon savunması için Charles Martel veya açık alan desteği için Jeanne d'Arc'tır. Yetenek ağacında Garnizon veya Savunma ağaçları öncelikli olmalıdır. Kullanım senaryosu, KvK 2 boyunca stratejik açıdan önemli geçitleri ve krallık sancaklarını düşman mitinglerine karşı inatla elde tutmaktır." },
            ],
          },
        },
        kvk3: {
          'S+': {
            label: 'S+',
            colorClass: 'tier-s-plus',
            bgClass: 'bg-tier-s-plus',
            commanders: [
              { name: 'Sun Tzu (Prime)', role: 'Piyade', type: 'Efsanevi', note: "Klasik Sun Tzu'nun o bilinen öfke canavarı yapısının, efsanevi ligde yıkıcı bir güce dönüşmüş son teknoloji halidir. Güçlü yönlerinin başında, açık alanda hızlı öfke döngüsü sunması ve geniş alan hasarı vurması gelir. Ancak asıl farkı, oyuna getirdiği Smite (Darbe) hasarı mekaniği ve doğrudan zırhları hiçe sayan True Damage (Gerçek Hasar) bonuslarıdır. Zayıf yönü, yüksek hasar potansiyeline odaklandığı için eski klasik tank piyadeler kadar saf savunma barındırmamasıdır; doğru konumlandırılmazsa ağır hasar alabilir. En iyi eşleşmelerinde Bai Qi (Bai Qu) ile yan yana geldiğinde açık sahanın en elit ve durdurulamaz hasar makinesine dönüşür. Ayrıca Liu Che veya William Wallace ile de kusursuz çalışır. Yetenek ağacında bütün gücünü becerilerinden aldığı için Piyade ağacındaki temel savunma unsurları kilitlenmeli, kalan tüm puanlar Beceri ağacındaki öfke üretimini hızlandıran düğümlere verilmelidir. Kullanım senaryosu, büyük meydan savaşlarında (murderball) en ön safta yer alarak düşman ordularını gerçek hasar patlamalarıyla topluca eritmektir." },
              { name: 'Alexander Nevsky', role: 'Süvari', type: 'Efsanevi', note: "Süvari sınıfının tartışmasız zirvesi ve açık alanın en korkulan suikastçısıdır. Güçlü yönü, olağanüstü yüksek tek hedef anlık hasarı, düşmanın savunmasını yüzde on beş kıran pasif etkisi ve süvari birimlerine sağladığı devasa sağlık ve savunma istatistikleridir. Ayrıca açık alanda etrafı düşmanlar tarafından çevrelendiğinde (surrounded) aldığı hasar azaltma bonusu onu bir süvariye göre inanılmaz tank yapar. Zayıf yönü, hiçbir şekilde alan hasarının (AoE) olmaması, tamamen tek bir hedefe kilitlenip onu haritadan silmek üzere tasarlanmış olmasıdır. En iyi Eşleşmelerinde Nevsky + Joan of Arc (Prime) kombinasyonu süvarilerin şu anki en güçlü açık alan meta eşleşmesidir. Alternatif olarak Nevsky + Huatut da tercih edilebilir. Yetenek ağacında Süvari ağacındaki saldırı düğümleri ve Beceri ağacındaki hızlı öfke yenileyen tüm stratejik yollar eksiksiz alınmalıdır. Kullanım senaryosu, açık sahada düşmanın yüksek öncelikli ancak kırılgan hedeflerini (okçuları veya YSG gibi camdan kaleleri) gözüne kestirip yıldırım hızıyla haritadan silmektir." },
            ],
          },
          S: {
            label: 'S',
            colorClass: 'tier-s',
            bgClass: 'bg-tier-s',
            commanders: [
              { name: 'Bai Qi (Bai Qu)', role: 'Piyade', type: 'Efsanevi', note: "Düşmanın üzerine kabus gibi çöken, meydanın en sinsi cellatlarından biridir. Güçlü yönü, yüksek hasar çarpanının yanı sıra düşmana bıraktığı Malice (Kin) yükleridir. Bu yükler sayesinde savaş uzadıkça rakibin defans mekanizmalarını sabote eder, onları kırılganlaştırır ve savunmasız bırakır. Zayıf yönü, tek başına harika işler çıkarsa da sahnede onun açtığı bu zayıflıkları anında saf hasara dönüştürecek hızlı ve öfke döngüsü yüksek bir partnere ihtiyaç duymasıdır. En iyi eşleşmesi kesinlikle Sun Tzu (Prime) birincil, Bai Qi ikincil şeklindeki kurulumdur. Yetenek ağacında ordunun başında duracağı durumlarda dayanıklılık ve hasar dengesini korumak adına Liderlik ve Beceri ağaçlarının sinerjisine odaklanılmalıdır. Kullanım senaryosu, açık sahada uzun süren yıpratma savaşlarında düşman cephesinin savunma direncini kırarak hattı yarmaktır." },
              { name: 'Guan Yu', role: 'Piyade', type: 'Efsanevi', note: "Fetih sezonunun en eski ama eskimeyen açık alan liderlerinden biridir. Güçlü yönü, önündeki geniş bir yelpazede üç hedefe kadar vurabilen, susturma (silence) etkili ve olağanüstü yüksek beceri hasarına sahip aktif yeteneğidir. Susturma etkisi, isabet alan düşmanların aktif yetenek atma sürelerini geciktirerek rotasyonlarını bozar. Zayıf yönü, bu yetenekten maksimum verim almak için kesinlikle birinci komutan olarak kullanılması şartıdır ve pasifinden gelen hasar artışını tetiklemek için harici bir kalkan desteğine ihtiyaç duyar; kendi kendine kalkan üretemez. En iyi eşleşmelerinde kalkan desteği sağlaması için İskender (Alex) veya Leonidas ile kullanılır. Güncel metada Guan Yu + Liu Che kombinasyonu da çok popülerdir. Yetenek ağacında Piyade ve Beceri ağaçları dengeli kullanılmalı, aktif beceri hasarını doğrudan artıran üst yetenekler mutlaka açılmalıdır. Kullanım senaryosu, büyük ittifak savaşlarında en ön safta yer alarak düşman gruplarını topluca susturmak ve yetenek döngülerini felç etmektir." },
            ],
          },
          'A+': {
            label: 'A+',
            colorClass: 'tier-a',
            bgClass: 'bg-tier-a',
            commanders: [],
          },
          A: {
            label: 'A',
            colorClass: 'tier-a',
            bgClass: 'bg-tier-a',
            commanders: [],
          },
          'B+': {
            label: 'B+',
            colorClass: 'tier-b',
            bgClass: 'bg-tier-b',
            commanders: [],
          },
          B: {
            label: 'B',
            colorClass: 'tier-b',
            bgClass: 'bg-tier-b',
            commanders: [],
          },
          C: {
            label: 'C',
            colorClass: 'tier-c',
            bgClass: 'bg-tier-c',
            commanders: [],
          },
          'A-2': {
            label: 'A',
            colorClass: 'tier-a',
            bgClass: 'bg-tier-a',
            commanders: [],
          },
          'A-': {
            label: 'A-',
            colorClass: 'tier-a',
            bgClass: 'bg-tier-a',
            commanders: [],
          },
        },
      },
    },
    featuredGuides: {
      sectionLabel: 'Öne Çıkan Rehberler',
      title: 'En İyi Stratejiler',
      browseAll: 'Hepsini Gör',
      featured: {
        title: 'Komutan Eşleştirme Rehberi: Kıta Gücünü Maksimize Et',
        excerpt: 'Komutanları nasıl etkili bir şekilde eşleştireceğinizi öğrenin — Guan Yu + Sun Tzu piyade kombinasyonundan YSG + Osman okçu kombinasyonlarına kadar. En iyi eşleşmeler yetenek ağaçlarıyla açıklandı.',
        category: 'Komutanlar',
        image: 'https://img.rocket.new/generatedImages/featured_commander_pairing_2026.png',
        imageAlt: 'Stratejik komutan eşleştirme görseli, iki general ve bir savaş haritası gösteriyor',
      },
      guides: [
        {
          id: '2',
          title: 'Açık Alan Savaş Taktikleri: KvK Nasıl Kazanılır',
          excerpt: 'Krallık vs Krallık savaşları için ileri stratejiler: baskın mekanikleri, ordu düzeni ve ne zaman savaş veya çekilme.',
          category: 'Savaş',
          image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1669a92ca-1773009479222.png',
          imageAlt: 'Epik ortaçağ kale kuşatması sahnesi, şafakta yürüyen ordular ve karanlık taş tahkimatlar',
        },
        {
          id: '3',
          title: 'Yeni Başlayan Rehberi: Yeni Krallıkta İlk 30 Gün',
          excerpt: '1. günden 30. güne kadar ne yapmanız gerektiği — hangi uygarlığı seçmeli, hangi komutanlara odaklanmalı ve güçlü bir ittifaka nasıl katılmalısınız.',
          category: 'Yeni Başlayanlar',
          image: 'https://img.rocket.new/generatedImages/rocket_gen_img_167a7d59f-1772151443676.png',
          imageAlt: 'Parlak ilerleme yolu ile parlak eğitim arayüzü, temiz koyu arka plan ve altın ışık ışınları',
        },
        {
          id: '4',
          title: 'İttifak Etkinlik Takvimi: Ödülleri Maksimize Edin',
          excerpt: 'Mightiest Governor, Sun Never Sets ve Ark of Osiris etkinlikleri için F2P oyunculara optimal stratejilerle tam döküm.',
          category: 'İttifak',
          image: 'https://img.rocket.new/generatedImages/rocket_gen_img_11c4ae552-1772474344172.png',
          imageAlt: 'Loş ışıklı bir savaş odasında parlayan masa haritası etrafında strateji planlayan insanlar',
        },
        {
          id: '5',
          title: 'F2P Mücevher Harcama Rehberi: Her Mücevher Önemlidir',
          excerpt: 'Ücretsiz oyuncular için VIP, sandıklar, hızlandırıcılar veya etkinlikler arasında mücevherleri verimli harcamanın kesin rehberi.',
          category: 'Yeni Başlayanlar',
          image: 'https://images.unsplash.com/photo-1707758967860-19106a5e9ab7',
          imageAlt: 'Karanlık arka planda parlak kehribar ve yeşil vurgulara sahip kod düzenleyici ekran',
        },
      ],
    },
    beginnerPath: {
      sectionLabel: 'Yeni Oyuncu Rehberi',
      title: 'İlk 30 Gününüz',
      description: 'Her yeni oyuncunun güçlü bir temel kurmak için takip etmesi gereken adımlar.',
      allBeginnerGuides: 'Tüm Yeni Başlayan Rehberleri',
      ctaTitle: 'Daha derine dalmaya hazır mısın?',
      ctaDescription: 'Tam yeni başlayan rehberimizi oku — 8 dakika, sıfır gereksiz bilgi.',
      ctaButton: 'Tam Rehberi Oku',
      steps: [
        {
          number: '01',
          title: 'Uygarlığını Seç',
          description: '5% inşaat hızı için Çin veya erken güçlü birlikler için Britanya ile başla. Erken değişiklikten kaçın.',
          tip: 'Çin ve Britanya yeni oyuncular için en iyi seçimlerdir',
          icon: 'GlobeAltIcon',
          color: 'text-primary',
          bgColor: 'rgba(200,150,90,0.12)',
        },
        {
          number: '02',
          title: 'Kaleyi İlk Sırada Yükselt',
          description: 'Kale yükseltmesi en zor olandır. İlk günden itibaren öncelik ver, böylece geç oyunda darboğaz yaşamazsın.',
          tip: 'Kale yükseltmeleri her şeyi açar',
          icon: 'HomeModernIcon',
          color: 'tier-s',
          bgColor: 'rgba(232,168,56,0.12)',
        },
        {
          number: '03',
          title: 'İlk Önce 2 Komutanı Maxle',
          description: 'Sun Tzu + Joan of Arc (F2P) üzerinde elmas ve heykelleri yoğunlaştır. Kaynakları dağıtmak savaşı kaybettirir.',
          tip: 'Sun Tzu + Joan en iyi F2P çifti',
          icon: 'UserGroupIcon',
          color: 'tier-a',
          bgColor: 'rgba(107,170,117,0.12)',
        },
        {
          number: '04',
          title: 'Aktif Bir İttifaka Katıl',
          description: 'İttifak teknolojisi, yardım talepleri ve etkinlik katılımı hızlı büyüme için vazgeçilmezdir.',
          tip: 'Sadece ittifak teknolojisi bile büyük bonuslar sağlar',
          icon: 'UsersIcon',
          color: 'tier-b',
          bgColor: 'rgba(91,143,212,0.12)',
        },
        {
          number: '05',
          title: 'Hızlandırıcıları Etkinlikler İçin Sakla',
          description: 'Mightiest Governor ve diğer zamanlı etkinlikler büyük ödüller verir. Bu pencere dışındaki hızlandırıcıları israf etmeyin.',
          tip: 'Hızlandırıcıları etkinlik dışı harcama',
          icon: 'BoltIcon',
          color: 'tier-s-plus',
          bgColor: 'rgba(255,107,53,0.12)',
        },
      ],
    },
    community: {
      sectionLabel: 'Topluluk',
      title: 'Son Tartışmalar',
      activityStats: [
        { value: '84', label: 'Bugün yorum', icon: 'ChatBubbleLeftIcon' },
        { value: '1.2K', label: 'Aktif okur', icon: 'UsersIcon' },
        { value: '6', label: 'Güncellenen rehber', icon: 'DocumentTextIcon' },
      ],
      recentComments: [
        {
          id: 1,
          author: 'Marcus T.',
          avatar: 'MT',
          guide: 'En İyi Komutan Sıralaması 2026',
          comment: 'Nihayet Guan Yu neden S+ olduğunu açıklayan biri. Yetenek ağacı açıklaması tam ihtiyacım olan şeydi.',
          likes: 14,
          guideHref: '/guide-article',
        },
        {
          id: 2,
          author: 'Priya S.',
          avatar: 'PS',
          guide: 'F2P Mücevher Harcama Rehberi',
          comment: 'Bu yaklaşımımı tamamen değiştirdi. VIP önerilerini takip ederek 20K elmas biriktirdim. Şehir büyümemde büyük fark gördüm.',
          likes: 31,
          guideHref: '/guide-article',
        },
        {
          id: 3,
          author: 'Kenji H.',
          avatar: 'KH',
          guide: 'Açık Alan Savaş Taktikleri',
          comment: 'KvK baskın bölümü tam bir hazine. İttifakım geçen hafta önerilen formasyonları kullandı ve geçidi ilk kez aldık.',
          likes: 47,
          guideHref: '/guide-article',
        },
        {
          id: 4,
          author: 'Amara O.',
          avatar: 'AO',
          guide: 'İttifak Etkinlik Takvimi',
          comment: 'Ark of Osiris puanlama bölümü ekler misiniz? İttifakım son aşamada yerleşimde zorlanıyor.',
          likes: 8,
          guideHref: '/guide-article',
        },
      ],
      ctaText: 'Paylaşacak fikriniz mi var? Her rehberin yorum bölümü var.',
      ctaButton: 'Tartışmaya Katıl',
      helpfulText: 'yararlı',
    },
    about: {
      heroLabel: 'RoKGuides Hakkında',
      heroTitle: 'Rise of Kingdoms için başvurulacak kaynağınız',
      heroDescription: 'RoKGuides oyuncular tarafından oyuncular için oluşturuldu. Dağınık Reddit gönderilerinden ve güncellenmemiş YouTube videolarından sıkıldık — bu yüzden her şeyin organize, güncel ve gerçekten faydalı olduğu tek bir yer kurduk.',
      sectionTitle: 'Burada neler bulacaksınız',
      features: [
        {
          icon: 'UserGroupIcon',
          title: 'Komutan Rehberleri',
          description: "Rise of Kingdoms'daki her komutanın yetenekleri, talent ağaçları, eşleşmeleri ve oyun evresine göre hangilerine yatırım yapılması gerektiğine dair derinlemesine analizler.",
        },
        {
          icon: 'ShieldExclamationIcon',
          title: 'Savaş Stratejileri',
          description: 'Açık alan savaşı ve KvK muharebelerine kadar, ortalama oyuncuları üst düzey valilerden ayıran taktikleri ele alıyoruz. Formasyonlar, ordu düzenleri ve karşı stratejiler öğrenin.',
        },
        {
          icon: 'AcademicCapIcon',
          title: 'Yeni Başlayan Yolu',
          description: "Rise of Kingdoms'a yeni misiniz? Yapılandırılmış yeni başlayan rehberlerimiz, ilk şehriniz, uygarlık seçimi, erken araştırma öncelikleri ve çoğu oyuncuyu yavaşlatan hatalardan kaçınma konusunda size rehberlik eder.",
        },
        {
          icon: 'BuildingLibraryIcon',
          title: 'İttifak & Politika',
          description: 'İttifakların nasıl çalıştığını, sıralamalarda nasıl ilerleyeceğini ve oyunun diplomasi, savaşlar ve bölge kontrolü gibi siyasi tarafını nasıl yöneteceğini öğrenin.',
        },
        {
          icon: 'MagnifyingGlassIcon',
          title: 'Aranabilir İçerik',
          description: "Her rehber indekslendi ve aranabilir. İster belirli bir komutan, ister bir mekanik ya da bir strateji olsun, ihtiyacınız olanı saniyeler içinde bulun.",
        },
        {
          icon: 'ChatBubbleLeftRightIcon',
          title: 'Topluluk Tartışması',
          description: 'Her rehber, oyuncuların ipuçları paylaştığı, sorular sorduğu ve stratejileri tartıştığı bir yorum bölümüne sahiptir. Gerçek oyunculardan gerçek geri bildirim.',
        },
      ],
      missionTitle: 'Misyonumuz',
      missionLines: [
        "Rise of Kingdoms derin ve karmaşık bir oyun. Yeni bir oyuncu ile veteran arasındaki fark sadece zaman değil — bilgi. Biz bu boşluğu kapatmak için varız.",
        'Bu sitedeki her rehber tek bir hedefle yazıldı: oyunda daha iyi kararlar vermek için ihtiyaç duyduğunuz bilgiyi sağlamak. Gereksiz bilgi yok, dolgu yok — sadece hemen uygulayabileceğiniz pratik strateji.',
        'İlk uygarlığınızı seçiyor olun veya bir KvK sezonuna hazırlanıyor olun, RoKGuides sizin için bir şeyler sunuyor.',
      ],
      ctaTitle: 'Seviyeyi yükseltmeye hazır mısın?',
      ctaDescription: 'Rehberlerimizi incele ve oyununuzu bugün geliştirmeye başla.',
      ctaPrimary: 'Rehberlere Göz At',
      ctaSecondary: 'İçerikte Ara',
    },
    contact: {
      tag: 'İletişim',
      title: 'Bize Ulaşın',
      description: 'Bir sorunuz mu var, bir hata mı fark ettiniz veya bir rehber mi önermek istiyorsunuz? Sizden haber almaktan mutluluk duyarız.',
      reachUsDirectly: 'Doğrudan bize ulaşın',
      emailLabel: 'E-posta',
      emailDescription: 'Bize bir e-posta gönderin, mümkün olan en kısa sürede size geri döneceğiz.',
      responseTimeNote: 'Genellikle',
      responseTimeDays: '1-3 iş günü',
      responseTimeSuffix: ' içinde yanıt veririz. Daha hızlı yanıtlar için, sorunuzun rehberlerimizde zaten ele alınıp alınmadığını kontrol edin.',
      whatToContactUsAbout: 'Bize ne hakkında ulaşabilirsiniz',
      topicCorrections: 'Rehber düzeltmeleri veya güncel olmayan bilgiler',
      topicSuggestGuide: 'Yeni bir rehber konusu önerme',
      topicReportBug: 'Bir hata veya bozuk sayfa bildirme',
      topicPartnership: 'Ortaklık veya işbirliği talepleri',
      topicGeneralQuestions: 'Site hakkında genel sorular',
      beforeYouWriteTitle: 'Yazmadan önce',
      beforeYouWriteDescription: 'Birçok yaygın soru rehberlerimizde zaten yanıtlanmıştır. Önce',
      searchPage: 'arama sayfasını',
      beforeYouWriteDescriptionSuffix: ' deneyin — cevabınızı anında bulabilirsiniz.',
    },
  },
} as const;

export type Translations = TranslationsContent;

export function getTranslations(locale: string): Translations {
  return translations[locale as Locale] ?? translations.en;
}
