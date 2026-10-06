export type GrowthStageName = 'seed' | 'sprout' | 'seedling' | 'bud' | 'bloom' | 'full_bloom';

export type PrayerCategory =
  | 'health'
  | 'provision'
  | 'relationship'
  | 'faith'
  | 'career'
  | 'family'
  | 'heart'
  | 'intercession';

export type PrayerStatus = 'growing' | 'answered';

export interface PlantInfo {
  category: PrayerCategory;
  label: string;
  flowerName: string;
  color: string;
  accentColor: string;
}

export const PLANT_CATALOG: Record<PrayerCategory, PlantInfo> = {
  health:       { category: 'health',       label: '건강',     flowerName: '데이지',     color: '#F5E6D3', accentColor: '#E8C9A0' },
  provision:    { category: 'provision',    label: '물질',     flowerName: '해바라기',   color: '#F0D75E', accentColor: '#C9A23E' },
  relationship: { category: 'relationship', label: '교제',     flowerName: '라벤더',     color: '#B8A4D4', accentColor: '#9B86C0' },
  faith:        { category: 'faith',        label: '신앙',     flowerName: '백합',       color: '#F8F5F0', accentColor: '#E0D8C8' },
  career:       { category: 'career',       label: '진로/일',  flowerName: '민들레',     color: '#F5E8B8', accentColor: '#D4C28E' },
  family:       { category: 'family',       label: '가정',     flowerName: '수국',       color: '#A8B8D4', accentColor: '#8A9BC0' },
  heart:        { category: 'heart',        label: '마음',     flowerName: '물망초',     color: '#B8C9E8', accentColor: '#94A8D0' },
  intercession: { category: 'intercession', label: '중보기도', flowerName: '코스모스',   color: '#E8B0C4', accentColor: '#D090A8' },
};

export const CATEGORY_ORDER: PrayerCategory[] = [
  'health', 'provision', 'relationship', 'faith',
  'career', 'family', 'heart', 'intercession',
];

export interface GardenPosition {
  x: number;
  y: number;
  scale: number;
  rotation: number;
}

export interface Prayer {
  id: string;
  title: string;
  category: PrayerCategory;
  flowerType: string;
  createdAt: string;
  growthPoints: number;
  growthStage: GrowthStageName;
  gardenPosition: GardenPosition;
  status: PrayerStatus;
}

export const STAGE_TO_NUMERIC: Record<GrowthStageName, number> = {
  seed: 0,
  sprout: 1,
  seedling: 2,
  bud: 3,
  bloom: 4,
  full_bloom: 5,
};
