import { X } from 'lucide-react';
import type { Prayer } from '@/types/plant';
import { PLANT_CATALOG } from '@/types/plant';
interface Props { prayer: Prayer; onClose:()=>void; onPray?:(p:Prayer)=>void; onDelete?:(p:Prayer)=>void; onAnswered?:(p:Prayer)=>void; }
function dateText(s:string){const d=new Date(s);return `${d.getFullYear()}년 ${d.getMonth()+1}월 ${d.getDate()}일`;}
export function PlantDetailSheet({prayer,onClose,onPray,onDelete,onAnswered}:Props){const info=PLANT_CATALOG[prayer.category]; const answered=prayer.status==='answered';
return <><div className="fixed inset-0 z-50" onClick={onClose} style={{background:'rgba(68,82,52,.15)',backdropFilter:'blur(2px)'}}/><div className="fixed bottom-0 left-0 right-0 z-50 mx-auto" style={{maxWidth:480}}><div className="rounded-t-[1.75rem] px-6 pt-5 pb-8" style={{background:'rgba(251,248,241,.98)',boxShadow:'0 -4px 24px rgba(110,128,82,.12)'}}>
<div className="flex justify-center mb-4"><div className="rounded-full" style={{width:36,height:4,background:'rgba(168,182,138,.35)'}}/></div><button onClick={onClose} className="absolute top-4 right-5" style={{color:'#A8B68A'}}><X size={20}/></button>
<div className="text-center"><p style={{fontSize:13,color:'#78856A'}}>{info.label} · {info.flowerName}</p><p className="font-serif" style={{fontSize:24,color:'#536044',margin:'22px 0'}}>{prayer.title}</p><p style={{fontSize:13,color:'#A0AA91',marginBottom:28}}>{dateText(prayer.createdAt)} 심음</p></div>
{!answered && <><button onClick={()=>onPray?.(prayer)} className="w-full rounded-2xl py-3.5" style={{background:'linear-gradient(135deg,#6E8052,#566641)',color:'#FBF8F1',fontSize:16}}>이 기도로 기도하기</button><button onClick={()=>onAnswered?.(prayer)} className="w-full rounded-2xl py-3 mt-3" style={{border:'1px solid rgba(110,128,82,.3)',color:'#6E8052',background:'transparent'}}>응답받은 기도로 옮기기</button></>}
{answered && <p style={{textAlign:'center',color:'#8D8665',fontSize:14,margin:'8px 0 18px'}}>응답 정원에 머물고 있는 기도예요.</p>}
<button onClick={()=>{if(window.confirm('이 기도를 삭제할까요?')) onDelete?.(prayer)}} style={{display:'block',margin:'20px auto 0',border:0,background:'none',color:'#A56F67',fontSize:14}}>기도 삭제</button>
</div></div></>}
