import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import type { PrayerCategory, Prayer } from '@/types/plant';
import { PLANT_CATALOG, CATEGORY_ORDER } from '@/types/plant';
import { loadPrayers, savePrayers, getAvailableSpot } from '@/utils/prayerStorage';

interface NewPrayerProps {
  onBack: () => void;
  onPlanted: () => void;
}

export function NewPrayer({ onBack, onPlanted }: NewPrayerProps) {
  const [title, setTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<PrayerCategory | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const canSubmit = title.trim().length > 0 && selectedCategory !== null;

  function handlePlant() {
    if (!canSubmit || !selectedCategory) return;

    const existing = loadPrayers();
    const usedPositions = existing.map((p) => p.gardenPosition);
    const position = getAvailableSpot(usedPositions);

    const flowerInfo = PLANT_CATALOG[selectedCategory];

    const newPrayer: Prayer = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      title: title.trim(),
      category: selectedCategory,
      flowerType: flowerInfo.flowerName,
      createdAt: new Date().toISOString(),
      growthPoints: 0,
      growthStage: 'seed',
      gardenPosition: position,
      status: 'growing',
    };

    const updated = [...existing, newPrayer];
    savePrayers(updated);

    setIsSubmitting(true);
    setTimeout(() => {
      onPlanted();
    }, 300);
  }

  return (
    <div
      className="min-h-screen mx-auto flex flex-col"
      style={{
        maxWidth: '480px',
        background: 'linear-gradient(180deg, #FBF8F1 0%, #F7F2E8 50%, #F3F5EE 100%)',
        minHeight: '100vh',
      }}
    >
      {/* Header */}
      <div className="px-5 pt-8 pb-2">
        <button
          onClick={onBack}
          className="mb-6 p-1 -ml-1 transition-opacity active:opacity-60"
          style={{ color: '#6E8052' }}
          aria-label="뒤로가기"
        >
          <ArrowLeft size={22} strokeWidth={1.8} />
        </button>

        <div className="animate-fade-in-up">
          <h1 className="font-serif text-sage-700" style={{ fontSize: '1.5rem' }}>
            새로운 기도
          </h1>
          <p
            className="text-sage-500 mt-2 text-sm leading-relaxed"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", lineHeight: '1.7' }}
          >
            마음에 품고 있는 기도를<br />작은 씨앗으로 심어보세요.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="flex-1 px-5 pt-6 pb-40">
        {/* Title input */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
          <label
            className="block text-sage-600 mb-2"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", fontSize: '0.875rem', fontWeight: 500 }}
          >
            기도제목
          </label>
          <textarea
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="어떤 마음을 기도로 심어볼까요?"
            rows={3}
            className="w-full rounded-2xl px-4 py-3.5 resize-none transition-all duration-200 focus:outline-none"
            style={{
              background: 'rgba(251, 248, 241, 0.8)',
              border: '1.5px solid rgba(199, 209, 176, 0.4)',
              fontFamily: "'Noto Sans KR', sans-serif",
              fontSize: '0.9375rem',
              color: '#445234',
              lineHeight: '1.6',
            }}
          />
        </div>

        {/* Category selection */}
        <div className="mt-7 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <label
            className="block text-sage-600 mb-3"
            style={{ fontFamily: "'Noto Sans KR', sans-serif", fontSize: '0.875rem', fontWeight: 500 }}
          >
            어떤 기도인가요?
          </label>
          <div className="grid grid-cols-2 gap-2.5">
            {CATEGORY_ORDER.map((cat) => {
              const info = PLANT_CATALOG[cat];
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className="rounded-2xl px-4 py-3 transition-all duration-200 text-left active:scale-[0.98]"
                  style={{
                    background: isSelected ? 'rgba(110, 128, 82, 0.12)' : 'rgba(251, 248, 241, 0.6)',
                    border: isSelected ? '1.5px solid rgba(110, 128, 82, 0.4)' : '1.5px solid rgba(199, 209, 176, 0.25)',
                  }}
                >
                  <div
                    className="text-sm"
                    style={{
                      fontFamily: "'Noto Sans KR', sans-serif",
                      fontWeight: 500,
                      color: isSelected ? '#445234' : '#6E8052',
                    }}
                  >
                    {info.label}
                  </div>
                  <div
                    className="text-xs mt-0.5"
                    style={{
                      fontFamily: "'Nanum Myeongjo', serif",
                      color: isSelected ? '#566641' : '#A8B68A',
                      opacity: isSelected ? 0.8 : 0.6,
                    }}
                  >
                    {info.flowerName}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Plant button */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 mx-auto px-5 pb-6 pt-4"
        style={{
          maxWidth: '480px',
          background: 'linear-gradient(180deg, transparent 0%, #F3F5EE 30%)',
        }}
      >
        <button
          onClick={handlePlant}
          disabled={!canSubmit || isSubmitting}
          className="w-full rounded-2xl py-4 px-6 transition-all duration-300 active:scale-[0.98]"
          style={{
            background: canSubmit
              ? 'linear-gradient(135deg, #6E8052 0%, #566641 100%)'
              : 'rgba(168, 182, 138, 0.3)',
            color: canSubmit ? '#FBF8F1' : 'rgba(247, 242, 232, 0.5)',
            fontFamily: "'Noto Sans KR', sans-serif",
            fontSize: '1rem',
            fontWeight: 500,
            boxShadow: canSubmit ? '0 4px 16px rgba(86, 102, 65, 0.25)' : 'none',
            cursor: canSubmit ? 'pointer' : 'not-allowed',
          }}
        >
          씨앗 심기
        </button>
      </div>
    </div>
  );
}
