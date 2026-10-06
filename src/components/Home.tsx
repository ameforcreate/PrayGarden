import { useState, useEffect, useCallback } from 'react';
import { PrayerGarden } from '@/components/PrayerGarden';
import { AnsweredGarden } from '@/components/AnsweredGarden';
import { BottomNavigation } from '@/components/BottomNavigation';
import { NewPrayer } from '@/components/NewPrayer';
import { PlantDetailSheet } from '@/components/PlantDetailSheet';
import { PrayerFlow } from '@/components/PrayerFlow';
import type { Prayer, GrowthStageName } from '@/types/plant';
import { loadPrayers, savePrayers } from '@/utils/prayerStorage';

function formatDateKorean(date: Date){const w=['일요일','월요일','화요일','수요일','목요일','금요일','토요일'];return `${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일 ${w[date.getDay()]}`;}
type NavKey='garden'|'pray'|'answered'; type Screen='home'|'new-prayer'|'prayer-flow';
function stageFor(points:number):GrowthStageName{if(points>=15)return'full_bloom';if(points>=10)return'bloom';if(points>=6)return'bud';if(points>=3)return'seedling';if(points>=1)return'sprout';return'seed';}

export function Home(){
 const [activeNav,setActiveNav]=useState<NavKey>('garden'); const [screen,setScreen]=useState<Screen>('home'); const [prayers,setPrayers]=useState<Prayer[]>([]); const [selectedPrayer,setSelectedPrayer]=useState<Prayer|null>(null); const [initialPrayer,setInitialPrayer]=useState<Prayer|null>(null);
 useEffect(()=>setPrayers(loadPrayers()),[]); const refresh=useCallback(()=>setPrayers(loadPrayers()),[]);
 const growing=prayers.filter(p=>p.status!=='answered'); const answered=prayers.filter(p=>p.status==='answered');
 function persist(next:Prayer[]){setPrayers(next);savePrayers(next)}
 function nav(key:NavKey){setActiveNav(key);setSelectedPrayer(null);if(key==='pray'){setInitialPrayer(null);setScreen('prayer-flow')}else setScreen('home')}
 function pray(p:Prayer){setSelectedPrayer(null);setInitialPrayer(p);setActiveNav('pray');setScreen('prayer-flow')}
 function complete(p:Prayer){persist(prayers.map(x=>x.id===p.id?{...x,growthPoints:x.growthPoints+1,growthStage:stageFor(x.growthPoints+1)}:x))}
 function remove(p:Prayer){persist(prayers.filter(x=>x.id!==p.id));setSelectedPrayer(null)}
 function markAnswered(p:Prayer){persist(prayers.map(x=>x.id===p.id?{...x,status:'answered'}:x));setSelectedPrayer(null);setActiveNav('answered')}
 if(screen==='new-prayer')return <NewPrayer onBack={()=>setScreen('home')} onPlanted={()=>{refresh();setScreen('home');setActiveNav('garden')}}/>;
 if(screen==='prayer-flow')return <PrayerFlow prayers={growing} initialPrayer={initialPrayer} onClose={()=>{refresh();setScreen('home');setActiveNav('garden');setInitialPrayer(null)}} onComplete={complete}/>;
 return <div className="min-h-screen mx-auto flex flex-col" style={{maxWidth:480,background:'linear-gradient(180deg,#FBF8F1 0%,#F7F2E8 50%,#F3F5EE 100%)'}}><div className="flex-1 px-5 pt-8 pb-40">
 <header className="text-center mb-8"><p className="font-serif text-sage-600 text-sm tracking-wide opacity-70">{activeNav==='answered'?'응답의 정원':'나의 작은 기도 정원'}</p><p className="text-sage-400 text-xs mt-1.5">{formatDateKorean(new Date())}</p></header>
 <div className="text-center mb-8"><h1 className="font-serif text-sage-700" style={{fontSize:'1.75rem',lineHeight:1.5}}>{activeNav==='answered'?<>기억하고 싶은<br/>응답들이 머물러요.</>:<>오늘도, 잠깐<br/>마음을 놓아요.</>}</h1><p className="text-sage-500 mt-4 text-sm leading-relaxed">{activeNav==='answered'?<>지나온 기도와 응답을<br/>조용히 돌아보세요.</>:<>작은 틈에 심어둔 기도들이<br/>조용히 자라고 있어요.</>}</p></div>
 <div>{activeNav==='answered'?<AnsweredGarden prayers={answered} onPlantClick={setSelectedPrayer}/>:<PrayerGarden plants={growing} onPlantClick={setSelectedPrayer}/>}</div>
 <div className="text-center mt-4"><p className="text-sage-400" style={{fontSize:12,opacity:.7}}>{activeNav==='answered'?`응답 정원 · ${answered.length}개의 기도가 머물고 있어요`:`오늘의 정원 · ${growing.length}개의 기도가 자라고 있어요`}</p></div>
 {activeNav!=='answered'&&<div className="mt-5 flex flex-col items-center gap-3"><button onClick={()=>nav('pray')} className="w-full rounded-2xl py-4 px-6" style={{background:'linear-gradient(135deg,#6E8052,#566641)',color:'#FBF8F1',fontSize:16,maxWidth:320}}>🙏 잠깐 기도하기</button><button onClick={()=>setScreen('new-prayer')} className="rounded-xl py-2.5 px-5" style={{color:'#6E8052'}}>＋ 새로운 기도 심기</button></div>}
 </div><BottomNavigation active={activeNav} onChange={nav}/>{selectedPrayer&&<PlantDetailSheet prayer={selectedPrayer} onClose={()=>setSelectedPrayer(null)} onPray={pray} onDelete={remove} onAnswered={markAnswered}/>}</div>
}
