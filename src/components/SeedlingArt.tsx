import type { PrayerCategory } from '@/types/plant';

const STEM = '#566641';
const STEM_LIGHT = '#6E8052';
const LEAF = '#7A8C59';
const LEAF_MID = '#6E8052';
const LEAF_DARK = '#4C5836';
const LEAF_HIGHLIGHT = '#94A671';

function DaisySeedling() {
  return (
    <g>
      {/* Main stem — slightly curved */}
      <path d="M 0 0 Q 1.5 -8 -0.5 -18" stroke={STEM} strokeWidth="1.4" fill="none" strokeLinecap="round" />
      {/* Cotyledon pair (first leaves) — rounded, slightly unequal */}
      <path d="M 0.2 -7 Q -7 -9 -10 -6 Q -8 -4 0.2 -7 Z" fill={LEAF_MID} opacity="0.9" />
      <path d="M 0.2 -7 Q -7 -9 -10 -6" stroke={LEAF_DARK} strokeWidth="0.3" fill="none" opacity="0.4" />
      <path d="M -0.2 -8 Q 6 -10 9 -7 Q 7 -5 -0.2 -8 Z" fill={LEAF} opacity="0.85" />
      <path d="M -0.2 -8 Q 6 -10 9 -7" stroke={LEAF_DARK} strokeWidth="0.3" fill="none" opacity="0.35" />
      {/* True leaves — spoon-shaped, daisy-like */}
      <path d="M -0.5 -14 Q -4 -16 -6 -14 Q -4 -11 -0.5 -14 Z" fill={LEAF_MID} opacity="0.88" />
      <path d="M 0 -16 Q 3.5 -18.5 5.5 -16 Q 3.5 -13.5 0 -16 Z" fill={LEAF_HIGHLIGHT} opacity="0.8" />
      {/* Tiny top shoot */}
      <path d="M -0.5 -18 Q 0.5 -20 -0.3 -21" stroke={STEM_LIGHT} strokeWidth="0.9" fill="none" strokeLinecap="round" opacity="0.8" />
    </g>
  );
}

function SunflowerSeedling() {
  return (
    <g>
      {/* Thick, sturdy stem */}
      <path d="M 0 0 Q -1 -9 0.5 -19" stroke={STEM} strokeWidth="1.7" fill="none" strokeLinecap="round" />
      {/* Cotyledons — broad, heart-shaped */}
      <path d="M 0 -6 Q -8 -8 -11 -5 Q -9 -2 0 -6 Z" fill={LEAF_MID} opacity="0.88" />
      <path d="M 0 -6 Q -8 -8 -11 -5" stroke={LEAF_DARK} strokeWidth="0.3" fill="none" opacity="0.4" />
      <path d="M 0 -7 Q 8 -9 11 -6 Q 9 -3 0 -7 Z" fill={LEAF} opacity="0.82" />
      <path d="M 0 -7 Q 8 -9 11 -6" stroke={LEAF_DARK} strokeWidth="0.3" fill="none" opacity="0.35" />
      {/* True leaves — large, broad, sunflower-like */}
      <path d="M 0 -13 Q -5 -16 -9 -14 Q -7 -10 0 -13 Z" fill={LEAF_MID} opacity="0.9" />
      <path d="M 0 -13 Q -5 -16 -9 -14" stroke={LEAF_DARK} strokeWidth="0.3" fill="none" opacity="0.35" />
      <path d="M 0.5 -15 Q 4 -18 7 -15 Q 5 -12 0.5 -15 Z" fill={LEAF_HIGHLIGHT} opacity="0.82" />
      <path d="M 0.5 -15 Q 4 -18 7 -15" stroke={LEAF_DARK} strokeWidth="0.3" fill="none" opacity="0.3" />
      {/* Leaf vein hints */}
      <path d="M 0 -13 L -7 -14" stroke={LEAF_DARK} strokeWidth="0.25" fill="none" opacity="0.3" />
      {/* Top bud */}
      <ellipse cx="0.5" cy="-20" rx="1.5" ry="2" fill={LEAF} opacity="0.7" />
    </g>
  );
}

function LavenderSeedling() {
  return (
    <g>
      {/* Slender, slightly drooping stem */}
      <path d="M 0 0 Q 0.5 -7 -0.8 -16" stroke={STEM_LIGHT} strokeWidth="1.1" fill="none" strokeLinecap="round" />
      {/* Narrow, linear leaves — lavender-like */}
      <path d="M 0 -5 Q -4 -7 -6 -5" stroke={LEAF_MID} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.85" />
      <path d="M 0 -4 Q 4 -6 6 -4" stroke={LEAF} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.8" />
      {/* Upper leaves — narrower, angled up */}
      <path d="M -0.5 -10 Q -3.5 -13 -5 -12" stroke={LEAF_MID} strokeWidth="1.3" fill="none" strokeLinecap="round" opacity="0.8" />
      <path d="M -0.3 -11 Q 3 -14 4.5 -13" stroke={LEAF} strokeWidth="1.3" fill="none" strokeLinecap="round" opacity="0.75" />
      {/* Top pair — very narrow */}
      <path d="M -0.8 -14 Q -2 -17 -3 -17.5" stroke={LEAF_MID} strokeWidth="1.1" fill="none" strokeLinecap="round" opacity="0.7" />
      <path d="M -0.6 -15 Q 0.5 -18 1.5 -18.5" stroke={LEAF} strokeWidth="1.1" fill="none" strokeLinecap="round" opacity="0.65" />
      {/* Tiny tip */}
      <circle cx="-0.8" cy="-16.5" r="0.8" fill={LEAF_HIGHLIGHT} opacity="0.6" />
    </g>
  );
}

function LilySeedling() {
  return (
    <g>
      {/* Straight, elegant stem */}
      <path d="M 0 0 Q 0.8 -7 0 -17" stroke={STEM} strokeWidth="1.3" fill="none" strokeLinecap="round" />
      {/* Long, lance-shaped leaves — lily-like */}
      <path d="M 0 -5 Q -2 -9 -5 -13 Q -3 -10 0 -5 Z" fill={LEAF_MID} opacity="0.88" />
      <path d="M 0 -5 Q -2 -9 -5 -13" stroke={LEAF_DARK} strokeWidth="0.25" fill="none" opacity="0.35" />
      <path d="M 0 -6 Q 2.5 -10 6 -14 Q 3.5 -10 0 -6 Z" fill={LEAF} opacity="0.82" />
      <path d="M 0 -6 Q 2.5 -10 6 -14" stroke={LEAF_DARK} strokeWidth="0.25" fill="none" opacity="0.3" />
      {/* Upper leaves — more upright */}
      <path d="M 0 -12 Q -1.5 -15 -3 -18 Q -1.5 -15 0 -12 Z" fill={LEAF_MID} opacity="0.82" />
      <path d="M 0 -13 Q 1 -16 2.5 -19 Q 1 -16 0 -13 Z" fill={LEAF_HIGHLIGHT} opacity="0.75" />
      {/* Central shoot */}
      <path d="M 0 -17 Q 0.3 -20 0 -21" stroke={STEM_LIGHT} strokeWidth="0.9" fill="none" strokeLinecap="round" opacity="0.7" />
    </g>
  );
}

function DandelionSeedling() {
  return (
    <g>
      {/* Short, sturdy stem — rosette form */}
      <path d="M 0 0 Q -0.5 -4 0 -8" stroke={STEM} strokeWidth="1.3" fill="none" strokeLinecap="round" />
      {/* Serrated, lobed leaves radiating from base — dandelion rosette */}
      <path d="M 0 -3 Q -3 -5 -7 -6 Q -8 -7 -9 -5 Q -6 -3 -3 -3 Z" fill={LEAF_MID} opacity="0.88" />
      <path d="M 0 -3 Q -3 -5 -7 -6 Q -8 -7 -9 -5" stroke={LEAF_DARK} strokeWidth="0.25" fill="none" opacity="0.4" />
      <path d="M 0 -3 Q 3 -5 7 -6 Q 8 -7 9 -5 Q 6 -3 3 -3 Z" fill={LEAF} opacity="0.82" />
      <path d="M 0 -3 Q 3 -5 7 -6 Q 8 -7 9 -5" stroke={LEAF_DARK} strokeWidth="0.25" fill="none" opacity="0.35" />
      {/* Upper leaves — pointing more upward */}
      <path d="M 0 -6 Q -2 -9 -5 -11 Q -6 -12 -6.5 -10 Q -4 -8 0 -6 Z" fill={LEAF_MID} opacity="0.8" />
      <path d="M 0 -7 Q 2 -10 5 -12 Q 6 -13 6.5 -11 Q 4 -9 0 -7 Z" fill={LEAF_HIGHLIGHT} opacity="0.75" />
      {/* Serration hints */}
      <path d="M -5 -5 L -4 -4" stroke={LEAF_DARK} strokeWidth="0.2" opacity="0.3" />
      <path d="M 4 -5 L 5 -4" stroke={LEAF_DARK} strokeWidth="0.2" opacity="0.3" />
      {/* Central bud */}
      <ellipse cx="0" cy="-9" rx="1.2" ry="1.5" fill={LEAF} opacity="0.65" />
    </g>
  );
}

function HydrangeaSeedling() {
  return (
    <g>
      {/* Woody-looking, branching stem */}
      <path d="M 0 0 Q -1 -6 0 -14" stroke={STEM} strokeWidth="1.4" fill="none" strokeLinecap="round" />
      {/* Small side branch */}
      <path d="M -0.5 -8 Q -2 -9 -3.5 -10" stroke={STEM_LIGHT} strokeWidth="0.9" fill="none" strokeLinecap="round" opacity="0.7" />
      {/* Broad, ovate leaves with serrated edges — hydrangea-like */}
      <path d="M 0 -5 Q -4 -7 -8 -6 Q -9 -4 -7 -3 Q -3 -3 0 -5 Z" fill={LEAF_MID} opacity="0.88" />
      <path d="M 0 -5 Q -4 -7 -8 -6 Q -9 -4 -7 -3 Q -3 -3 0 -5" stroke={LEAF_DARK} strokeWidth="0.3" fill="none" opacity="0.35" />
      <path d="M 0 -6 Q 4 -8 8 -7 Q 9 -5 7 -4 Q 3 -4 0 -6 Z" fill={LEAF} opacity="0.82" />
      <path d="M 0 -6 Q 4 -8 8 -7 Q 9 -5 7 -4 Q 3 -4 0 -6" stroke={LEAF_DARK} strokeWidth="0.3" fill="none" opacity="0.3" />
      {/* Vein details */}
      <path d="M 0 -5 L -6 -5" stroke={LEAF_DARK} strokeWidth="0.25" fill="none" opacity="0.3" />
      <path d="M 0 -6 L 6 -6" stroke={LEAF_DARK} strokeWidth="0.25" fill="none" opacity="0.28" />
      {/* Upper leaves — smaller pair */}
      <path d="M 0 -11 Q -2.5 -13 -5 -12 Q -4 -10 0 -11 Z" fill={LEAF_MID} opacity="0.8" />
      <path d="M 0 -12 Q 2.5 -14 5 -13 Q 4 -11 0 -12 Z" fill={LEAF_HIGHLIGHT} opacity="0.72" />
      {/* Top cluster hint */}
      <circle cx="0" cy="-15" r="1.3" fill={LEAF} opacity="0.6" />
    </g>
  );
}

function ForgetMeNotSeedling() {
  return (
    <g>
      {/* Thin, delicate, slightly sprawling stem */}
      <path d="M 0 0 Q 1.5 -6 0.5 -15" stroke={STEM_LIGHT} strokeWidth="1.0" fill="none" strokeLinecap="round" />
      {/* Small, rounded hairy leaves — forget-me-not-like */}
      <ellipse cx="-3.5" cy="-5" rx="3" ry="2.5" fill={LEAF_MID} opacity="0.85" transform="rotate(-20 -3.5 -5)" />
      <ellipse cx="3.5" cy="-6" rx="3" ry="2.5" fill={LEAF} opacity="0.8" transform="rotate(25 3.5 -6)" />
      {/* Upper leaves — smaller, alternate */}
      <ellipse cx="-2.5" cy="-10" rx="2.5" ry="2" fill={LEAF_MID} opacity="0.8" transform="rotate(-15 -2.5 -10)" />
      <ellipse cx="2.8" cy="-12" rx="2.2" ry="1.8" fill={LEAF_HIGHLIGHT} opacity="0.72" transform="rotate(20 2.8 -12)" />
      {/* Topmost tiny leaf */}
      <ellipse cx="-0.5" cy="-15" rx="1.5" ry="1.2" fill={LEAF} opacity="0.68" transform="rotate(-10 -0.5 -15)" />
      {/* Stem detail — slight curve at top */}
      <path d="M 0.5 -15 Q 1 -17 0.2 -18" stroke={STEM_LIGHT} strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.6" />
    </g>
  );
}

function CosmosSeedling() {
  return (
    <g>
      {/* Tall, slender stem with gentle S-curve */}
      <path d="M 0 0 Q 1.5 -6 -1 -12 Q 0.5 -16 -0.5 -19" stroke={STEM} strokeWidth="1.2" fill="none" strokeLinecap="round" />
      {/* Feathery, pinnate leaves — cosmos-like */}
      <path d="M 0.5 -4 Q -3 -6 -6 -5" stroke={LEAF_MID} strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.8" />
      <path d="M -6 -5 Q -5 -4 -6 -5" stroke={LEAF_MID} strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.7" />
      <path d="M 0.5 -5 Q 3.5 -7 7 -6" stroke={LEAF} strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.75" />
      <path d="M 7 -6 Q 6 -5 7 -6" stroke={LEAF} strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.65" />
      {/* Leaflets on stem */}
      <ellipse cx="-4" cy="-5" rx="1.8" ry="1" fill={LEAF_MID} opacity="0.75" transform="rotate(-15 -4 -5)" />
      <ellipse cx="5" cy="-6" rx="1.8" ry="1" fill={LEAF} opacity="0.7" transform="rotate(15 5 -6)" />
      {/* Upper compound leaf */}
      <path d="M -0.5 -10 Q -2.5 -13 -4 -14" stroke={LEAF_MID} strokeWidth="0.7" fill="none" strokeLinecap="round" opacity="0.7" />
      <ellipse cx="-3" cy="-12.5" rx="1.5" ry="0.8" fill={LEAF_MID} opacity="0.68" transform="rotate(-20 -3 -12.5)" />
      <path d="M -1 -11 Q 1 -14 2.5 -15" stroke={LEAF} strokeWidth="0.7" fill="none" strokeLinecap="round" opacity="0.65" />
      <ellipse cx="2" cy="-13.5" rx="1.3" ry="0.7" fill={LEAF_HIGHLIGHT} opacity="0.62" transform="rotate(18 2 -13.5)" />
      {/* Top shoot */}
      <path d="M -0.5 -19 Q 0 -20.5 -0.3 -21" stroke={STEM_LIGHT} strokeWidth="0.85" fill="none" strokeLinecap="round" opacity="0.7" />
    </g>
  );
}

const SEEDLING_RENDERERS: Record<PrayerCategory, () => JSX.Element> = {
  health: DaisySeedling,
  provision: SunflowerSeedling,
  relationship: LavenderSeedling,
  faith: LilySeedling,
  career: DandelionSeedling,
  family: HydrangeaSeedling,
  heart: ForgetMeNotSeedling,
  intercession: CosmosSeedling,
};

export function SeedlingArt({ category }: { category: PrayerCategory }) {
  const Renderer = SEEDLING_RENDERERS[category];
  return <Renderer />;
}
