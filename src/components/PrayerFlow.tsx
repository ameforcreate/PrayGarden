import { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import type { Prayer } from '@/types/plant';
import { PLANT_CATALOG } from '@/types/plant';

interface PrayerFlowProps {
  prayers: Prayer[];
  initialPrayer?: Prayer | null;
  onClose: () => void;
  onComplete: (prayer: Prayer) => void;
}

type Step = 'select' | 'prepare' | 'praying' | 'complete';

export function PrayerFlow({ prayers, initialPrayer = null, onClose, onComplete }: PrayerFlowProps) {
  const [selectedPrayer, setSelectedPrayer] = useState<Prayer | null>(initialPrayer);
  const [step, setStep] = useState<Step>(initialPrayer ? 'prepare' : 'select');
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (step !== 'praying') return;
    const timer = window.setInterval(() => setSeconds((v) => v + 1), 1000);
    return () => window.clearInterval(timer);
  }, [step]);

  const formatTime = (n: number) => `${String(Math.floor(n / 60)).padStart(2, '0')}:${String(n % 60).padStart(2, '0')}`;
  const page: React.CSSProperties = { minHeight: '100vh', maxWidth: '480px', margin: '0 auto', padding: '32px 24px 56px', background: 'linear-gradient(180deg,#FBF8F1 0%,#F3F5EE 100%)', color: '#536044' };
  const button: React.CSSProperties = { width: '100%', border: 0, borderRadius: '18px', padding: '15px 20px', background: 'linear-gradient(135deg,#6E8052,#566641)', color: '#FBF8F1', fontSize: '16px', fontWeight: 500 };

  if (step === 'select') return <main style={page}>
    <button onClick={onClose} style={{border:0,background:'none',color:'#6E8052',padding:0,marginBottom:28}}><ArrowLeft size={22}/></button>
    <h1 className="font-serif" style={{fontSize:26,marginBottom:8}}>어떤 기도로 기도할까요?</h1>
    <p style={{fontSize:14,color:'#899477',marginBottom:26}}>지금 마음에 머무는 기도를 골라주세요.</p>
    {prayers.length === 0 ? <p style={{textAlign:'center',marginTop:80,color:'#9AA58B'}}>자라고 있는 기도가 없어요.</p> : prayers.map((p) => {
      const info = PLANT_CATALOG[p.category];
      return <button key={p.id} onClick={() => {setSelectedPrayer(p);setStep('prepare')}} style={{width:'100%',textAlign:'left',border:'1px solid rgba(110,128,82,.18)',background:'rgba(255,255,255,.45)',borderRadius:18,padding:'16px 18px',marginBottom:10,color:'#536044'}}>
        <div style={{fontSize:12,color:'#8B9879',marginBottom:5}}>{info.label} · {info.flowerName}</div><div style={{fontSize:16}}>{p.title}</div>
      </button>
    })}
  </main>;

  if (step === 'prepare' && selectedPrayer) return <main style={{...page,display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center'}}>
    <p style={{fontSize:14,color:'#899477'}}>잠시 마음을 가다듬고,<br/>준비되었을 때 시작해주세요.</p>
    <h1 className="font-serif" style={{fontSize:27,lineHeight:1.6,margin:'28px 0 48px'}}>{selectedPrayer.title}</h1>
    <button onClick={() => {setSeconds(0);setStep('praying')}} style={button}>🙏 기도 시작</button>
    <button onClick={() => setStep('select')} style={{border:0,background:'none',marginTop:18,color:'#8B9879'}}>다른 기도 고르기</button>
  </main>;

  if (step === 'praying' && selectedPrayer) return <main style={{...page,display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center'}}>
    <p style={{fontSize:14,color:'#899477'}}>지금 이 기도를 마음에 담고 있어요</p>
    <h1 className="font-serif" style={{fontSize:25,lineHeight:1.55,margin:'18px auto 28px',maxWidth:330}}>{selectedPrayer.title}</h1>
    <div style={{fontSize:46,letterSpacing:4,fontVariantNumeric:'tabular-nums',marginBottom:18}}>{formatTime(seconds)}</div>
    <p style={{fontSize:14,color:'#9AA58B',marginBottom:38}}>서두르지 않아도 괜찮아요.</p>
    <button onClick={() => {onComplete(selectedPrayer);setStep('complete')}} style={button}>기도를 마쳤어요</button>
  </main>;

  return <main style={{...page,display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center'}}>
    <div style={{fontSize:48,marginBottom:22}}>🌱</div>
    <h1 className="font-serif" style={{fontSize:26,marginBottom:12}}>오늘도 마음을 보탰어요.</h1>
    <p style={{fontSize:14,lineHeight:1.8,color:'#899477',marginBottom:42}}>기도는 조용히 쌓이고,<br/>정원의 식물도 조금씩 자라요.</p>
    <button onClick={onClose} style={button}>정원으로 돌아가기</button>
  </main>;
}
