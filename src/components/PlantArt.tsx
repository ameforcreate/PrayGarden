import type { PrayerCategory, GrowthStageName } from '@/types/plant';
import { PLANT_CATALOG } from '@/types/plant';
import { SeedlingArt } from '@/components/SeedlingArt';

interface PlantArtProps {
  category: PrayerCategory;
  stage: GrowthStageName;
}

const LEAF_COLOR = '#8B9C6B';
const LEAF_DARK = '#6E8052';
const STEM_COLOR = '#7A8C59';

function Daisy({ stage }: { stage: GrowthStageName }) {
  const info = PLANT_CATALOG.health;
  const petals = 12;
  const petalEls = Array.from({ length: petals }, (_, i) => {
    const angle = (i / petals) * 360;
    return (
      <ellipse
        key={i}
        cx="0" cy="-9" rx="3.5" ry="7"
        fill={info.color}
        stroke={info.accentColor}
        strokeWidth="0.4"
        transform={`rotate(${angle})`}
        opacity="0.92"
      />
    );
  });
  return (
    <g>
      {(stage === 'bloom' || stage === 'full_bloom') && <ellipse cx="-4" cy="-14" rx="3" ry="5" fill={LEAF_COLOR} transform="rotate(-30 -4 -8)" opacity="0.8" />}
      {petalEls}
      <circle cx="0" cy="0" r="4.5" fill="#E8C9A0" />
      <circle cx="0" cy="0" r="3" fill="#D4B070" />
    </g>
  );
}

function Sunflower({ stage }: { stage: GrowthStageName }) {
  const info = PLANT_CATALOG.provision;
  const petals = 14;
  const petalEls = Array.from({ length: petals }, (_, i) => {
    const angle = (i / petals) * 360;
    return (
      <ellipse key={i} cx="0" cy="-10" rx="3" ry="8" fill={info.color} stroke={info.accentColor} strokeWidth="0.3" transform={`rotate(${angle})`} opacity="0.9" />
    );
  });
  return (
    <g>
      {(stage === 'bloom' || stage === 'full_bloom') && <ellipse cx="5" cy="-8" rx="3" ry="4" fill={LEAF_COLOR} transform="rotate(40 5 -6)" opacity="0.8" />}
      {petalEls}
      <circle cx="0" cy="0" r="5.5" fill="#8B6B3A" />
      <circle cx="0" cy="0" r="4" fill="#6B4F2A" opacity="0.7" />
    </g>
  );
}

function Lavender({ stage }: { stage: GrowthStageName }) {
  const info = PLANT_CATALOG.relationship;
  const buds = 5;
  const budEls = Array.from({ length: buds }, (_, i) => (
    <circle key={i} cx="0" cy={-2 - i * 5} r="3" fill={info.color} stroke={info.accentColor} strokeWidth="0.3" opacity={0.85 - i * 0.05} />
  ));
  return <g>{budEls}</g>;
}

function Lily({ stage }: { stage: GrowthStageName }) {
  const info = PLANT_CATALOG.faith;
  const petals = 6;
  const petalEls = Array.from({ length: petals }, (_, i) => {
    const angle = (i / petals) * 360;
    return (
      <path
        key={i}
        d="M 0 -3 Q 4 -10 0 -14 Q -4 -10 0 -3 Z"
        fill={info.color}
        stroke={info.accentColor}
        strokeWidth="0.3"
        transform={`rotate(${angle})`}
        opacity="0.88"
      />
    );
  });
  return (
    <g>
      {petalEls}
      <circle cx="0" cy="0" r="2.5" fill="#E8C9A0" />
      <line x1="0" y1="0" x2="0" y2="-6" stroke="#D4B070" strokeWidth="0.5" opacity="0.6" />
    </g>
  );
}

function Dandelion({ stage }: { stage: GrowthStageName }) {
  const info = PLANT_CATALOG.career;
  const seeds = 18;
  const seedEls = Array.from({ length: seeds }, (_, i) => {
    const angle = (i / seeds) * 360;
    const r = 5 + (i % 3) * 1.5;
    return (
      <g key={i} transform={`rotate(${angle})`}>
        <line x1="0" y1="0" x2="0" y2={-r} stroke={info.accentColor} strokeWidth="0.4" opacity="0.5" />
        <circle cx="0" cy={-r} r="1.2" fill={info.color} opacity="0.7" />
      </g>
    );
  });
  return (
    <g>
      {seedEls}
      <circle cx="0" cy="0" r="2.5" fill={info.accentColor} opacity="0.6" />
    </g>
  );
}

function Hydrangea({ stage }: { stage: GrowthStageName }) {
  const info = PLANT_CATALOG.family;
  const cluster = [
    [0, -5], [-5, -3], [5, -3], [-3, 1], [3, 1], [0, -1],
    [-6, -6], [6, -6], [0, -9],
  ];
  return (
    <g>
      {cluster.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill={info.color} stroke={info.accentColor} strokeWidth="0.25" opacity="0.85" />
      ))}
    </g>
  );
}

function ForgetMeNot({ stage }: { stage: GrowthStageName }) {
  const info = PLANT_CATALOG.heart;
  const positions = [[0, -2], [-4, -1], [4, -1], [-2, -6], [2, -6], [0, -9]];
  return (
    <g>
      {positions.map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="2.5" fill={info.color} opacity="0.85" />
          <circle cx={cx} cy={cy} r="0.8" fill={info.accentColor} />
        </g>
      ))}
    </g>
  );
}

function Cosmos({ stage }: { stage: GrowthStageName }) {
  const info = PLANT_CATALOG.intercession;
  const petals = 8;
  const petalEls = Array.from({ length: petals }, (_, i) => {
    const angle = (i / petals) * 360;
    return (
      <ellipse key={i} cx="0" cy="-8" rx="2.5" ry="7" fill={info.color} stroke={info.accentColor} strokeWidth="0.3" transform={`rotate(${angle})`} opacity="0.88" />
    );
  });
  return (
    <g>
      {petalEls}
      <circle cx="0" cy="0" r="3" fill="#E8C9A0" />
      <circle cx="0" cy="0" r="2" fill="#D4B070" />
    </g>
  );
}

const FLOWER_RENDERERS: Record<PrayerCategory, (props: { stage: GrowthStageName }) => JSX.Element> = {
  health: Daisy,
  provision: Sunflower,
  relationship: Lavender,
  faith: Lily,
  career: Dandelion,
  family: Hydrangea,
  heart: ForgetMeNot,
  intercession: Cosmos,
};

export function PlantArt({ category, stage }: PlantArtProps) {
  // Seed stage: show a botanical seedling emerging from the ground
  if (stage === 'seed') {
    return <SeedlingArt category={category} />;
  }

  const Flower = FLOWER_RENDERERS[category];
  const stageNum = stage === 'sprout' ? 1 : stage === 'seedling' ? 2 : stage === 'bud' ? 3 : stage === 'bloom' ? 4 : 5;

  const flowerScale = 0.45 + stageNum * 0.11;
  const stemHeight = 10 + stageNum * 14;
  const showStem = stageNum >= 1;
  const showLeaves = stageNum >= 2;

  return (
    <g>
      {/* Stem */}
      {showStem && (
        <path
          d={`M 0 0 Q -2 ${-stemHeight * 0.4} 0 ${-stemHeight}`}
          stroke={STEM_COLOR}
          strokeWidth={1.5 + stageNum * 0.3}
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
        />
      )}
      {/* Leaves */}
      {showLeaves && (
        <>
          <ellipse
            cx={-4}
            cy={-stemHeight * 0.4}
            rx="4" ry="2.5"
            fill={LEAF_COLOR}
            transform={`rotate(-35 -4 ${-stemHeight * 0.4})`}
            opacity="0.75"
          />
          {stageNum >= 3 && (
            <ellipse
              cx={5}
              cy={-stemHeight * 0.65}
              rx="3.5" ry="2"
              fill={LEAF_DARK}
              transform={`rotate(40 5 ${-stemHeight * 0.65})`}
              opacity="0.7"
            />
          )}
        </>
      )}
      {/* Flower head */}
      {stageNum >= 3 ? (
        <g transform={`translate(0 ${-stemHeight}) scale(${flowerScale})`}>
          <Flower stage={stage} />
        </g>
      ) : stageNum >= 1 ? (
        // Bud
        <g transform={`translate(0 ${-stemHeight})`}>
          <ellipse cx="0" cy="0" rx={2 + stageNum * 0.5} ry={3 + stageNum} fill={LEAF_COLOR} opacity="0.8" />
          {stageNum >= 2 && <ellipse cx="0" cy="-1" rx={1.5 + stageNum * 0.3} ry={2 + stageNum * 0.5} fill={LEAF_DARK} opacity="0.6" />}
        </g>
      ) : null}
    </g>
  );
}
