import { GardenDecorations } from '@/components/GardenDecorations';
import { GardenPlant } from '@/components/GardenPlant';
import type { Prayer } from '@/types/plant';

interface Props {
  prayers: Prayer[];
  onPlantClick?: (prayer: Prayer) => void;
}

export function AnsweredGarden({ prayers, onPlantClick }: Props) {
  return (
    <div
      className="relative w-full rounded-[2rem] overflow-hidden mx-auto"
      style={{
        height: 'clamp(430px,62vh,500px)',
        background:
          'linear-gradient(180deg, #FFFDF5 0%, #FAF7DE 30%, #EEF2D1 60%, #D4E2AE 100%)',
        boxShadow:
          'inset 0 2px 20px rgba(160,145,75,.06), 0 4px 24px rgba(110,128,82,.06)',
      }}
    >
      {/* 응답 정원에 들어오는 밝고 따뜻한 햇살 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 24% 12%, rgba(255,255,245,.98) 0%, rgba(255,250,205,.48) 25%, rgba(255,249,215,.16) 45%, transparent 62%)',
        }}
      />

      {/* 정원 전체를 조금 더 환하게 보이게 하는 빛 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, rgba(255,255,255,.18) 0%, transparent 45%, rgba(247,250,215,.10) 100%)',
        }}
      />

      <GardenDecorations />

      {prayers.map((p) => (
        <GardenPlant key={p.id} plant={p} onClick={onPlantClick} />
      ))}

      {prayers.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="text-center"
            style={{ color: '#75805D', marginTop: '8%' }}
          >
            <div style={{ fontSize: 30, marginBottom: 14 }}>☀️</div>
            <p style={{ fontSize: 14, lineHeight: 1.8 }}>
              아직 응답 정원에
              <br />
              옮겨진 기도가 없어요.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
