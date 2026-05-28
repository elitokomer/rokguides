import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface TipBoxProps {
  type: 'tip' | 'warning' | 'info';
  children: React.ReactNode;
}

function TipBox({ type, children }: TipBoxProps) {
  const config = {
    tip: { icon: 'LightBulbIcon', color: 'text-primary', bg: 'rgba(200,150,90,0.08)', border: 'rgba(200,150,90,0.3)', label: 'Pro Tip' },
    warning: { icon: 'ExclamationTriangleIcon', color: 'tier-s', bg: 'rgba(232,168,56,0.08)', border: 'rgba(232,168,56,0.3)', label: 'Warning' },
    info: { icon: 'InformationCircleIcon', color: 'tier-b', bg: 'rgba(91,143,212,0.08)', border: 'rgba(91,143,212,0.3)', label: 'Note' },
  }[type];

  return (
    <div
      className="flex gap-3 p-4 rounded-lg my-4 border"
      style={{ backgroundColor: config.bg, borderColor: config.border }}
    >
      <Icon name={config.icon as any} size={18} className={`${config.color} flex-shrink-0 mt-0.5`} />
      <div>
        <span className={`text-xs font-semibold uppercase tracking-wider ${config.color} block mb-1`}>
          {config.label}
        </span>
        <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

interface CommanderRowProps {
  name: string;
  tier: string;
  type: string;
  role: string;
  desc: string;
  tierColor: string;
  tierBg: string;
}

function CommanderRow({ name, tier, type, role, desc, tierColor, tierBg }: CommanderRowProps) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card/50 hover:border-primary/30 transition-colors">
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-display font-bold flex-shrink-0 border"
        style={{ backgroundColor: tierBg, color: tierColor, borderColor: tierColor + '60' }}
      >
        {tier}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap mb-0.5">
          <span className="font-semibold text-foreground text-sm">{name}</span>
          <span className="text-xs text-muted-foreground bg-secondary px-1.5 py-0.5 rounded">{type}</span>
          <span className="text-xs text-muted-foreground">{role}</span>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function ArticleContent() {
  return (
    <article className="space-y-8">
      {/* Introduction */}
      <section>
        <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-primary rounded-full flex-shrink-0" />
          Introduction
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          This tier list ranks every Legendary and Epic commander in Rise of Kingdoms for open-field combat in 2026. Commanders are evaluated on their skill kits, talent tree potential, pairing synergy, and real KvK performance data from top alliances.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">S+ tier</strong> commanders define the current meta. <strong className="text-foreground">S tier</strong> are excellent alternatives. <strong className="text-foreground">A tier</strong> are strong F2P choices. B and C are situational or outdated.
        </p>

        <TipBox type="info">
          This list focuses on open-field PvP. Garrison and gathering commanders have separate rankings. If you're F2P, focus entirely on A-tier Epic commanders before chasing Legendaries.
        </TipBox>
      </section>

      {/* S+ Tier */}
      <section>
        <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <span className="w-1 h-6 rounded-full flex-shrink-0" style={{ backgroundColor: '#FF6B35' }} />
          S+ Tier — Meta-Defining
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          These commanders are the strongest in the game right now. If you're P2P or close to maxing one of these, they should be your priority.
        </p>
        <div className="space-y-2">
          <CommanderRow name="Guan Yu" tier="S+" type="Legendary" role="Infantry" desc="The best infantry nuker in the game. His silence + massive AoE damage is unmatched in open-field. Pairs perfectly with Alexander for maximum infantry power." tierColor="#FF6B35" tierBg="rgba(255,107,53,0.12)" />
          <CommanderRow name="Alexander the Great" tier="S+" type="Legendary" role="Infantry" desc="Exceptional defense and damage buff combination. Works as both primary and secondary commander. The gold standard for infantry builds." tierColor="#FF6B35" tierBg="rgba(255,107,53,0.12)" />
          <CommanderRow name="Yi Seong-Gye" tier="S+" type="Legendary" role="Archer" desc="Highest single-march damage output for archers. His Fan of Knives skill can wipe entire marches. Best paired with Edward or Ramesses." tierColor="#FF6B35" tierBg="rgba(255,107,53,0.12)" />
          <CommanderRow name="Nevsky" tier="S+" type="Legendary" role="Cavalry" desc="Dominates cavalry meta with massive troop buffs and a powerful active skill. Best cavalry primary in current KvK season." tierColor="#FF6B35" tierBg="rgba(255,107,53,0.12)" />
        </div>

        <TipBox type="tip">
          Guan Yu + Alexander is the #1 infantry pairing. If you have both maxed, you'll win most open-field encounters against equally-invested opponents.
        </TipBox>
      </section>

      {/* S Tier */}
      <section>
        <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <span className="w-1 h-6 rounded-full flex-shrink-0" style={{ backgroundColor: '#E8A838' }} />
          S Tier — Excellent
        </h2>
        <div className="space-y-2">
          <CommanderRow name="Saladin" tier="S" type="Legendary" role="Cavalry" desc="Strong all-around cavalry commander with great sustained damage. Excellent pairing with Nevsky for cavalry marches." tierColor="#E8A838" tierBg="rgba(232,168,56,0.12)" />
          <CommanderRow name="Constantine I" tier="S" type="Legendary" role="Infantry" desc="The best garrison and defending commander. Pairs well with Aethelflaed for rally defense." tierColor="#E8A838" tierBg="rgba(232,168,56,0.12)" />
          <CommanderRow name="Edward of Woodstock" tier="S" type="Legendary" role="Archer" desc="Solid archer primary with strong troop bonuses. Great budget alternative to YSG for archer builds." tierColor="#E8A838" tierBg="rgba(232,168,56,0.12)" />
          <CommanderRow name="Scipio Africanus" tier="S" type="Legendary" role="Infantry" desc="Exceptional garrison commander and decent field fighter. Good for players focusing on city defense." tierColor="#E8A838" tierBg="rgba(232,168,56,0.12)" />
        </div>
      </section>

      {/* A Tier */}
      <section>
        <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <span className="w-1 h-6 rounded-full flex-shrink-0" style={{ backgroundColor: '#6BAA75' }} />
          A Tier — F2P Picks
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          These Epic commanders are the backbone of every F2P account. Max these before spending on Legendaries.
        </p>
        <div className="space-y-2">
          <CommanderRow name="Sun Tzu" tier="A" type="Epic" role="Infantry" desc="The best F2P infantry commander. AoE skill and strong talent tree make him viable into late game." tierColor="#6BAA75" tierBg="rgba(107,170,117,0.12)" />
          <CommanderRow name="Tomoe Gozen" tier="A" type="Epic" role="Archer" desc="Best F2P archer primary. Her active skill is reliable and her talent tree is straightforward to build." tierColor="#6BAA75" tierBg="rgba(107,170,117,0.12)" />
          <CommanderRow name="Lancelot" tier="A" type="Epic" role="Cavalry" desc="Fast cavalry movement makes him excellent for gathering and quick strikes. Good F2P cavalry option." tierColor="#6BAA75" tierBg="rgba(107,170,117,0.12)" />
          <CommanderRow name="Joan of Arc" tier="A" type="Epic" role="Support" desc="The best support secondary for any march type. Rage generation and buff sharing are invaluable." tierColor="#6BAA75" tierBg="rgba(107,170,117,0.12)" />
        </div>

        <TipBox type="tip">
          Sun Tzu + Joan of Arc is the definitive F2P pairing. Max both to 5-star before anything else. This combo will carry you through most of the early and mid game.
        </TipBox>
      </section>

      {/* Talent Build Tips */}
      <section>
        <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-primary rounded-full flex-shrink-0" />
          Talent Build Principles
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Every commander has three talent trees. The red tree defines troop type, yellow defines role, and blue defines combat style. Specializing in one troop type provides significantly higher effective buffs than spreading across types.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
          {[
            { color: '#FF6B35', label: 'Red Tree', desc: 'Troop type buff (Infantry/Cavalry/Archer)' },
            { color: '#E8A838', label: 'Yellow Tree', desc: 'Combat role (Attack/Garrison/Gathering)' },
            { color: '#5B8FD4', label: 'Blue Tree', desc: 'Combat style (Open-field/Rally/Defense)' },
          ].map((tree) => (
            <div
              key={tree.label}
              className="p-4 rounded-lg border"
              style={{ backgroundColor: tree.color + '10', borderColor: tree.color + '40' }}
            >
              <div className="font-semibold text-sm mb-1" style={{ color: tree.color }}>{tree.label}</div>
              <p className="text-xs text-muted-foreground">{tree.desc}</p>
            </div>
          ))}
        </div>

        <TipBox type="warning">
          A poorly built talent tree can reduce a commander's effectiveness by 30–40%. Always research the optimal build before spending talent points — resetting costs gold.
        </TipBox>
      </section>
    </article>
  );
}