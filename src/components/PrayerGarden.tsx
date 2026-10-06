import { GardenDecorations } from '@/components/GardenDecorations';
import { GardenPlant } from '@/components/GardenPlant';
import type { Prayer } from '@/types/plant';

interface PrayerGardenProps {
  plants: Prayer[];
  onPlantClick?: (plant: Prayer) => void;
}

export function PrayerGarden({ plants, onPlantClick }: PrayerGardenProps) {
  const isEmpty = plants.length === 0;

  return (
    <div
      className="relative w-full rounded-[2rem] overflow-hidden mx-auto"
      style={{
        height: 'clamp(430px, 62vh, 500px)',
        background: 'linear-gradient(180deg, #F7F2E8 0%, #E3E8D5 40%, #C7D1B0 75%, #A8B68A 100%)',
        boxShadow: 'inset 0 2px 20px rgba(110, 128, 82, 0.08), 0 4px 24px rgba(110, 128, 82, 0.06)',
      }}
    >
      {/* Soft vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, transparent 50%, rgba(68, 82, 52, 0.06) 100%)',
        }}
      />

      {/* Background scene */}
      <GardenDecorations />

      {/* Prayer plants */}
      {plants.map((plant) => (
        <GardenPlant key={plant.id} plant={plant} onClick={onPlantClick} />
      ))}

      {/* Empty state message */}
      {isEmpty && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="text-center animate-fade-in-up px-8"
            style={{ marginTop: '8%' }}
          >
            <p
              className="font-serif leading-relaxed"
              style={{ color: '#566641', fontSize: '0.875rem', opacity: 0.55 }}
            >
              아직 심어진 기도가 없어요.
            </p>
            <p
              className="font-serif mt-1.5 leading-relaxed"
              style={{ color: '#6E8052', fontSize: '0.8rem', opacity: 0.45 }}
            >
              첫 번째 기도를 심어볼까요?
            </p>
          </div>
        </div>
      )}

      {/* Soft top light overlay */}
      <div
        className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, rgba(247, 242, 232, 0.5) 0%, transparent 100%)' }}
      />
    </div>
  );
}
