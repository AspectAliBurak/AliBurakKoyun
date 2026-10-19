export type CareerKey = 'software' | 'data' | 'marketing';

export interface Career {
  key: CareerKey;
  label: string;
  tagline: string;
  description: string;
  cvPath: string;
  accentColor: string;
  accentHex: string;
}

export const careers: Record<CareerKey, Career> = {
  software: {
    key: 'software',
    label: 'Yazılım Geliştirici',
    tagline: 'C#, Python & Nesne Tabanlı Programlama',
    description:
      'Yönetim Bilişim Sistemleri mezunuyum. C# (Windows Forms, OOP), Python ve SQL Server odaklı kurumsal iş uygulamaları, masaüstü otomasyon sistemleri ve veri odaklı yazılımlar geliştiriyorum.',
    cvPath: '/cv/software-developer-cv.pdf',
    accentColor: 'violet',
    accentHex: '#8B5CF6',
  },
  data: {
    key: 'data',
    label: 'Veri Analisti',
    tagline: 'Python, SQL, Power BI, Excel & Makine Öğrenmesi',
    description:
      'Yönetim Bilişim Sistemleri mezunuyum. Marmara Üniversitesi\'nin 1 yıl süren Veri Analizi Okulu programını başarıyla tamamladım. Özellikle bankacılık, finans ve satış alanlarında uçtan uca veri analitiği projeleri geliştirdim. Python (Pandas, NumPy, Scikit-learn), SQL, Microsoft Excel ve Power BI kullanarak veri temizleme, keşifsel veri analizi, makine öğrenmesi tahmin modelleri ve karar alıcılar için interaktif KPI dashboardları üretiyorum.',
    cvPath: '/cv/data-analyst-cv.pdf',
    accentColor: 'emerald',
    accentHex: '#10B981',
  },
  marketing: {
    key: 'marketing',
    label: 'Sosyal Medya & Dijital Pazarlama',
    tagline: 'Meta Ads, Google Ads & Veri Odaklı Büyüme',
    description:
      'Yönetim Bilişim Sistemleri mezunuyum. Teknoloji ve veri analitiği altyapımı dijital pazarlamayla birleştirerek Meta Ads & Google Ads kampanya yönetimi, Reels video kurgusu, kreatif içerik tasarımı ve ölçülebilir performans odaklı büyüme stratejileri yürütüyorum.',
    cvPath: '/cv/digital-marketing-cv.pdf',
    accentColor: 'amber',
    accentHex: '#F59E0B',
  },
};
