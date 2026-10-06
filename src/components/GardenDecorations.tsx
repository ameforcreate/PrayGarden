interface DecorationSpec {
  x: number;
  y: number;
  scale: number;
  type: 'grass-tuft' | 'small-fern' | 'wildflower' | 'stone' | 'sprout';
  delay?: number;
  rotate?: number;
}

const DECORATIONS: DecorationSpec[] = [
  { x: 8, y: 78, scale: 1.0, type: 'grass-tuft', delay: 0 },
  { x: 15, y: 85, scale: 0.8, type: 'grass-tuft', delay: 1.5 },
  { x: 22, y: 72, scale: 0.9, type: 'small-fern', delay: 0.8 },
  { x: 30, y: 88, scale: 1.1, type: 'stone', rotate: 15 },
  { x: 38, y: 75, scale: 0.7, type: 'sprout', delay: 2 },
  { x: 45, y: 82, scale: 0.85, type: 'grass-tuft', delay: 0.3 },
  { x: 52, y: 90, scale: 0.7, type: 'wildflower', delay: 1.2 },
  { x: 58, y: 76, scale: 0.95, type: 'small-fern', delay: 2.5 },
  { x: 65, y: 84, scale: 0.8, type: 'grass-tuft', delay: 0.6 },
  { x: 72, y: 88, scale: 0.6, type: 'stone', rotate: -20 },
  { x: 78, y: 73, scale: 0.75, type: 'sprout', delay: 1.8 },
  { x: 85, y: 80, scale: 1.0, type: 'grass-tuft', delay: 0.9 },
  { x: 92, y: 86, scale: 0.85, type: 'wildflower', delay: 0.4 },
  { x: 12, y: 68, scale: 0.65, type: 'sprout', delay: 1.4 },
  { x: 48, y: 70, scale: 0.6, type: 'wildflower', delay: 2.2 },
  { x: 68, y: 69, scale: 0.55, type: 'sprout', delay: 0.7 },
  { x: 88, y: 72, scale: 0.7, type: 'small-fern', delay: 1.1 },
  { x: 25, y: 92, scale: 0.5, type: 'stone' },
  { x: 55, y: 93, scale: 0.6, type: 'grass-tuft', delay: 1.7 },
  { x: 80, y: 92, scale: 0.55, type: 'wildflower', delay: 0.2 },
];

function GrassTuft({ scale }: { scale: number }) {
  return (
    <g transform={`scale(${scale})`}>
      <path d="M 0 0 Q -2 -10 -3 -16" stroke="#8B9C6B" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.6" />
      <path d="M 0 0 Q 0 -12 0 -18" stroke="#94A671" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.65" />
      <path d="M 0 0 Q 3 -10 4 -15" stroke="#8B9C6B" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.55" />
      <path d="M 0 0 Q -5 -8 -7 -13" stroke="#7A8C59" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.45" />
    </g>
  );
}

function SmallFern({ scale }: { scale: number }) {
  return (
    <g transform={`scale(${scale})`}>
      <path d="M 0 0 Q 1 -10 0 -20" stroke="#7A8C59" strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.5" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <ellipse cx={-3 + i * 0.5} cy={-6 - i * 4} rx="3" ry="1.5" fill="#94A671" opacity="0.45" transform={`rotate(-30 ${-3 + i * 0.5} ${-6 - i * 4})`} />
          <ellipse cx={3 - i * 0.5} cy={-6 - i * 4} rx="3" ry="1.5" fill="#8B9C6B" opacity="0.4" transform={`rotate(30 ${3 - i * 0.5} ${-6 - i * 4})`} />
        </g>
      ))}
    </g>
  );
}

function Wildflower({ scale }: { scale: number }) {
  const colors = ['#E8C9A0', '#E8B0C4', '#F0E8D5'];
  const c = colors[Math.floor(Math.random() * colors.length)];
  return (
    <g transform={`scale(${scale})`}>
      <path d="M 0 0 Q 0 -6 0 -12" stroke="#7A8C59" strokeWidth="0.7" fill="none" opacity="0.5" />
      <circle cx="0" cy="-12" r="1.8" fill={c} opacity="0.7" />
      <circle cx="0" cy="-12" r="0.8" fill="#D4B070" opacity="0.5" />
    </g>
  );
}

function Stone({ scale, rotate }: { scale: number; rotate?: number }) {
  return (
    <g transform={`scale(${scale}) ${rotate ? `rotate(${rotate})` : ''}`}>
      <ellipse cx="0" cy="2" rx="7" ry="2" fill="#000" opacity="0.06" />
      <ellipse cx="0" cy="0" rx="6" ry="4" fill="#C4A884" opacity="0.5" />
      <ellipse cx="-1" cy="-1" rx="4" ry="2.5" fill="#B0926A" opacity="0.4" />
    </g>
  );
}

function Sprout({ scale }: { scale: number }) {
  return (
    <g transform={`scale(${scale})`}>
      <path d="M 0 0 Q 0 -4 0 -8" stroke="#7A8C59" strokeWidth="0.8" fill="none" opacity="0.5" />
      <ellipse cx="-2" cy="-7" rx="2.5" ry="1.5" fill="#94A671" opacity="0.55" transform="rotate(-30 -2 -7)" />
      <ellipse cx="2" cy="-8" rx="2.5" ry="1.5" fill="#8B9C6B" opacity="0.5" transform="rotate(30 2 -8)" />
    </g>
  );
}

const RENDERERS = {
  'grass-tuft': GrassTuft,
  'small-fern': SmallFern,
  'wildflower': Wildflower,
  'stone': Stone,
  'sprout': Sprout,
};

export function GardenDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Soft sky gradient at top */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory-100 via-ivory-50 to-transparent" style={{ height: '35%' }} />

      {/* Floating dust motes / light particles */}
      {[
        { left: '20%', top: '25%', delay: '0s', size: 3 },
        { left: '45%', top: '15%', delay: '3s', size: 2 },
        { left: '70%', top: '30%', delay: '6s', size: 2.5 },
        { left: '35%', top: '40%', delay: '1.5s', size: 2 },
        { left: '85%', top: '20%', delay: '4.5s', size: 3 },
        { left: '10%', top: '35%', delay: '7s', size: 2 },
      ].map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-sage-200 animate-float-dust"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            opacity: 0.4,
          }}
        />
      ))}

      {/* Ground — soft curved hills */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        style={{ height: '60%' }}
        viewBox="0 0 400 300"
        preserveAspectRatio="none"
      >
        {/* Back hill */}
        <path
          d="M 0 120 Q 100 80 200 100 Q 300 120 400 90 L 400 300 L 0 300 Z"
          fill="#E3E8D5"
          opacity="0.6"
        />
        {/* Mid hill */}
        <path
          d="M 0 160 Q 120 130 250 145 Q 350 155 400 140 L 400 300 L 0 300 Z"
          fill="#C7D1B0"
          opacity="0.55"
        />
        {/* Front ground */}
        <path
          d="M 0 190 Q 80 170 180 180 Q 280 190 400 175 L 400 300 L 0 300 Z"
          fill="#A8B68A"
          opacity="0.4"
        />
      </svg>

      {/* Subtle ground texture — scattered tiny dots */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 500" preserveAspectRatio="none">
        {Array.from({ length: 30 }, (_, i) => {
          const x = (i * 37) % 400;
          const y = 220 + ((i * 53) % 260);
          return <circle key={i} cx={x} cy={y} r="0.8" fill="#6E8052" opacity="0.15" />;
        })}
      </svg>

      {/* Foreground decorations */}
      {DECORATIONS.map((dec, i) => {
        const Renderer = RENDERERS[dec.type];
        return (
          <div
            key={i}
            className={`absolute ${dec.type !== 'stone' ? 'animate-sway-slower' : ''}`}
            style={{
              left: `${dec.x}%`,
              top: `${dec.y}%`,
              transform: 'translate(-50%, -50%)',
              animationDelay: `${dec.delay ?? 0}s`,
            }}
          >
            <svg width="30" height="30" viewBox="-10 -20 20 25" className="overflow-visible">
              <Renderer scale={dec.scale} rotate={dec.rotate} />
            </svg>
          </div>
        );
      })}
    </div>
  );
}
