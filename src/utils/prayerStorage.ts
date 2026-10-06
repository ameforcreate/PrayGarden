import type { Prayer, GardenPosition } from '@/types/plant';
import { PLANTING_SPOTS } from '@/data/plantingSpots';

const STORAGE_KEY = 'prayer-garden:prayers';

export function loadPrayers(): Prayer[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed as Prayer[];
  } catch {
    return [];
  }
}

export function savePrayers(prayers: Prayer[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prayers));
  } catch {
  }
}

export function getAvailableSpot(usedPositions: GardenPosition[]): GardenPosition {
  const isClose = (a: GardenPosition, b: GardenPosition) =>
    Math.abs(a.x - b.x) < 3 && Math.abs(a.y - b.y) < 3;

  const available = PLANTING_SPOTS.filter(
    (spot) => !usedPositions.some((used) => isClose(spot, used))
  );

  if (available.length === 0) {
    return PLANTING_SPOTS[Math.floor(Math.random() * PLANTING_SPOTS.length)];
  }

  return available[Math.floor(Math.random() * available.length)];
}
