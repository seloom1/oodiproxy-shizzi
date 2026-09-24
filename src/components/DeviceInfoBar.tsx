import React from 'react';
import { Database, Globe, MapPin, RefreshCw, Radio, Settings2, ShieldCheck } from 'lucide-react';
import { formatBytes } from '../utils/wireguard';

interface DeviceInfoBarProps {
  externalIp: string;
  country?: string;
  countryFlag?: string;
  isConnected: boolean;
  totalBytes: number;
  onRefreshIp?: () => void;
  onOpenHistory?: () => void;
  onOpenShizzi?: () => void;
  isLoadingIp?: boolean;
}

export const DeviceInfoBar: React.FC<DeviceInfoBarProps> = ({
  externalIp,
  country = 'غير محددة',
  countryFlag = '🌐',
  isConnected,
  totalBytes,
  onRefreshIp,
  onOpenHistory,
  onOpenShizzi,
  isLoadingIp = false,
}) => (
  <div className="w-full rounded-xl py-1.5 px-2 bg-[#090d24]/90 backdrop-blur-md border border-slate-800/80 text-right select-none">
    <div className="grid grid-cols-2 divide-x divide-x-reverse divide-slate-800/80">
      <button type="button" onClick={onRefreshIp} title="تحديث عنوان IP الفعلي" className="flex items-center justify-center gap-1.5 min-w-0 px-1 hover:bg-slate-800/30 rounded-lg transition-colors">
        <Globe className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
        <span className="flex flex-col min-w-0 leading-tight">
          <span className="text-[8px] text-slate-500">IP الخارجي {isLoadingIp && <RefreshCw className="inline w-2.5 h-2.5 animate-spin" />}</span>
          <span className="text-[10px] text-slate-200 font-mono truncate">{isConnected ? externalIp : 'غير متصل'}</span>
        </span>
      </button>
      <div className="flex items-center justify-center gap-1.5 min-w-0 px-1" dir="rtl">
        <MapPin className="w-3.5 h-3.5 text-fuchsia-400 shrink-0" />
        <span className="text-[8px] text-slate-500">الدولة</span>
        <span className="text-[10px] font-bold text-slate-200 truncate">{isConnected ? country : 'غير محددة'}</span>
        <span className="text-base leading-none shrink-0" role="img" aria-label="علم الدولة">{isConnected ? countryFlag : '🌐'}</span>
      </div>
    </div>

    <div className="mt-1 pt-1 border-t border-slate-800/80 flex items-center justify-center gap-2" dir="rtl">
      <Database className="w-3.5 h-3.5 text-fuchsia-400 shrink-0" />
      <span className="text-[8px] text-slate-500">إجمالي البيانات</span>
      <span className="text-[11px] font-bold text-fuchsia-300 font-mono">{isConnected ? formatBytes(totalBytes) : '0 B'}</span>
      <button type="button" onClick={onOpenHistory} title="عرض السجلات السابقة" aria-label="عرض السجلات السابقة" className="mr-1 p-1 rounded-md text-slate-400 hover:text-cyan-300 hover:bg-slate-800/70 transition-colors">
        <Settings2 className="w-3.5 h-3.5" />
      </button>
    </div>

    <button type="button" onClick={onOpenShizzi} className="mt-1.5 w-full rounded-xl border border-violet-400/40 bg-violet-500/10 px-3 py-2.5 flex items-center justify-between text-[10px] font-bold text-violet-100 hover:bg-violet-500/20 transition-colors" dir="rtl">
      <span className="flex items-center gap-2"><Radio className="w-4 h-4 text-violet-300" /><span>بث الإنترنت عبر Shizuku</span></span>
      <span className="flex items-center gap-1.5 text-[9px] text-violet-300"><ShieldCheck className="w-3.5 h-3.5" />Shizzi</span>
    </button>
    <p className="mt-1 px-1 text-center text-[8px] text-slate-500" dir="rtl">اضغط لفتح واجهة Shizzi وتشغيل نقطة الاتصال بدون Root</p>
  </div>
);
