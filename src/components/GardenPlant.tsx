import { useState } from 'react';
import { PlantArt } from '@/components/PlantArt';
import type { Prayer } from '@/types/plant';

interface GardenPlantProps {
  plant: Prayer;
  onClick?: (plant: Prayer) => void;
}

export function GardenPlant({ plant, onClick }: GardenPlantProps) {
  const { gardenPosition, category, growthStage } = plant;
  const [wiggle, setWiggle] = useState(false);

  const swayClass = growthStage === 'seed' || growthStage === 'sprout'
    ? 'animate-sway-slower'
    : 'animate-sway-slow';

  function handleClick() {
    setWiggle(true);
    setTimeout(() => setWiggle(false), 500);
    onClick?.(plant);
  }

  const svgWidth = 90;
  const svgHeight = 120;
  const viewBox = '-25 -25 50 30';

  return (
    <div
      className={`absolute ${swayClass}`}
      style={{
        left: `${gardenPosition.x}%`,
        top: `${gardenPosition.y}%`,
        transform: `translate(-50%, -100%) rotate(${gardenPosition.rotation}deg) scale(${gardenPosition.scale})`,
        transformOrigin: 'center bottom',
        zIndex: 10,
      }}
    >
      <button
        onClick={handleClick}
        className={`block cursor-pointer ${wiggle ? 'animate-plant-wiggle' : ''}`}
        style={{
          background: 'transparent',
          border: 'none',
          padding: 0,
          transformOrigin: 'center bottom',
        }}
        aria-label={plant.title}
      >
        {/* Expanded invisible click area around the plant */}
        <div style={{ position: 'relative', padding: '10px' }}>
          <svg
            width={svgWidth}
            height={svgHeight}
            viewBox={viewBox}
            className="overflow-visible block"
            style={{ transformOrigin: 'center bottom' }}
          >
            <PlantArt category={category} stage={growthStage} />
          </svg>
        </div>
      </button>
    </div>
  );
}
