import type { GardenPosition } from '@/types/plant';

// 식물이 정원 하단에 잘리지 않고 자연스럽게 보이도록 중앙~하단에 배치합니다.
export const PLANTING_SPOTS: GardenPosition[] = [
  { x: 16, y: 66, scale: 1.00, rotation: -3 },
  { x: 29, y: 72, scale: 0.92, rotation: 4 },
  { x: 42, y: 65, scale: 1.08, rotation: -2 },
  { x: 55, y: 73, scale: 0.96, rotation: 5 },
  { x: 68, y: 64, scale: 1.04, rotation: -4 },
  { x: 82, y: 71, scale: 0.90, rotation: 3 },
  { x: 12, y: 76, scale: 0.88, rotation: 6 },
  { x: 23, y: 60, scale: 0.94, rotation: -5 },
  { x: 36, y: 77, scale: 1.00, rotation: 2 },
  { x: 50, y: 59, scale: 0.92, rotation: -3 },
  { x: 62, y: 76, scale: 0.94, rotation: 4 },
  { x: 75, y: 59, scale: 0.98, rotation: -6 },
  { x: 87, y: 76, scale: 0.88, rotation: 2 },
  { x: 19, y: 69, scale: 0.90, rotation: 5 },
  { x: 48, y: 78, scale: 1.00, rotation: -2 },
  { x: 73, y: 69, scale: 0.94, rotation: 3 },
];
