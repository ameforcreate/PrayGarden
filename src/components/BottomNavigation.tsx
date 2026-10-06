import { Sprout, HandHeart, Flower2 } from 'lucide-react';

type NavKey = 'garden' | 'pray' | 'answered';

interface BottomNavigationProps {
  active: NavKey;
  onChange?: (key: NavKey) => void;
}

const ITEMS: { key: NavKey; label: string; icon: typeof Sprout }[] = [
  { key: 'garden', label: '정원', icon: Sprout },
  { key: 'pray', label: '기도하기', icon: HandHeart },
  { key: 'answered', label: '응답 정원', icon: Flower2 },
];

export function BottomNavigation({ active, onChange }: BottomNavigationProps) {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 mx-auto"
      style={{ maxWidth: '480px' }}
    >
      <div
        className="mx-3 mb-3 rounded-2xl flex items-stretch justify-around"
        style={{
          background: 'rgba(251, 248, 241, 0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: '0 -2px 20px rgba(110, 128, 82, 0.08), 0 4px 12px rgba(110, 128, 82, 0.04)',
          border: '1px solid rgba(199, 209, 176, 0.3)',
        }}
      >
        {ITEMS.map((item) => {
          const isActive = item.key === active;
          const Icon = item.icon;
          return (
            <button
              key={item.key}
              onClick={() => onChange?.(item.key)}
              className="flex-1 flex flex-col items-center justify-center py-3 gap-1 transition-all duration-300"
              style={{
                color: isActive ? '#566641' : '#A8B68A',
              }}
            >
              <div
                className="rounded-xl p-1.5 transition-all duration-300"
                style={{
                  background: isActive ? 'rgba(199, 209, 176, 0.45)' : 'transparent',
                  transform: isActive ? 'translateY(-1px)' : 'none',
                }}
              >
                <Icon
                  size={20}
                  strokeWidth={isActive ? 2.2 : 1.8}
                  style={{
                    transition: 'all 0.3s ease',
                  }}
                />
              </div>
              <span
                className="text-[11px] font-medium"
                style={{
                  fontFamily: "'Noto Sans KR', sans-serif",
                  opacity: isActive ? 1 : 0.7,
                }}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
