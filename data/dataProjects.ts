export interface DataProject {
  id: string;
  title: string;
  category: string;
  description: string;
  fullStory: {
    problem: string;
    approach: string;
    tools: string[];
    results: string;
  };
  tech: string[];
  imgSrc: string;
  gallery: string[];
  github?: string;
  demo?: string;
  highlights?: string[];
}

export const dataProjects: DataProject[] = [
  {
    id: "kredi-risk-analitigi",
    title: "Kredi Risk Analitiği ve Temerrüt Tahmin Sistemi",
    category: "Makine Öğrenmesi & Risk Analitiği",
    description: "149 bin kredi başvurusundan oluşan veri seti üzerinde Power BI interaktif analitik dashboardu ve Scikit-learn ile makine öğrenmesi temerrüt tahmin modeli.",
    fullStory: {
      problem: "Finansal kurumlarda 149.000 satırlık hacimli veri setinde kredi türü, gelir seviyesi, yaş grupları ve kredi tutarı değişkenleri arasındaki temerrüt risklerinin tespiti ve yüksek sınıf dengesizliğinin çözülmesi.",
      approach: "Veri ön işleme ve eksik veri düzenleme yapıldı. Data leakage oluşturabilecek değişkenler çıkarıldı. SMOTE ile sınıf dengesizliği giderildi. Logistic Regression, Decision Tree ve Random Forest modelleri Scikit-learn ile eğitilerek karşılaştırıldı. Power BI tarafında kredi türü, gelir seviyesi ve yaş gruplarına göre ödeme davranışlarını görselleştiren interaktif analitik dashboard geliştirildi.",
      tools: ["Python", "Pandas", "Matplotlib", "Scikit-Learn", "SMOTE", "Random Forest", "Logistic Regression", "Power BI", "Microsoft Excel", "DAX"],
      results: "Gelir seviyesi ile temerrüt riski arasındaki kritik ilişki ve ödeme davranışları ortaya çıkarıldı; karar alıcılar için interaktif Power BI dashboardu ve yüksek tahmin doğruluğuna sahip modeller üretildi."
    },
    tech: ["Python", "Pandas", "Matplotlib", "Scikit-Learn", "SMOTE", "Random Forest", "Power BI", "Microsoft Excel"],
    imgSrc: "/projects/kredi/kredi_1.jpg",
    gallery: [
      "/projects/kredi/kredi_1.jpg",
      "/projects/kredi/kredi_2.jpg",
      "/projects/kredi/kredi_3.jpg",
      "/projects/kredi/kredi_4.jpg"
    ],
    github: "https://github.com/AspectAliBurak",
    highlights: [
      "149K Kredi Başvuru Verisi",
      "Power BI İnteraktif Analitik Dashboard",
      "Data Leakage Kontrolü & SMOTE Dengeleme",
      "Logistic Regression, Decision Tree & Random Forest"
    ]
  },
  {
    id: "ogrenci-ise-yerlesme",
    title: "Öğrenci İşe Yerleşme Analizi ve Tahmin Projesi",
    category: "Makine Öğrenmesi & Uçtan Uca Analitik",
    description: "Marmara Üniversitesi Veri Analizi Okulu kapsamında; Python, SQL ve Power BI kullanarak geliştirilen uçtan uca veri analizi ve makine öğrenmesi tahmin modeli.",
    fullStory: {
      problem: "Öğrencilerin mezuniyet sonrası işe yerleşme dinamiklerini etkileyen faktörlerin analizi ve istihdam başarısını öngörebilecek analitik bir sistem ihtiyacı.",
      approach: "Python (Pandas, NumPy) ile veri temizleme, veri ön işleme ve dönüştürme gerçekleştirildi. SQL ile keşifsel veri analizi (EDA) yapılarak değişkenler arası ilişkiler saptandı. Scikit-learn ile işe yerleşme tahmin modeli kuruldu; Accuracy ve Confusion Matrix ile performans değerlendirildi ve Feature Importance analizi yapıldı. Power BI ile veri modeli, KPI'lar ve interaktif dashboard hazırlandı.",
      tools: ["Python", "SQL", "Power BI", "Pandas", "NumPy", "Scikit-Learn", "DAX", "Confusion Matrix"],
      results: "İşe yerleşmeyi en çok etkileyen ana değişkenler başarıyla tespit edildi; karar alıcılar için görselleştirilmiş ve tahmin gücü yüksek bir analitik karar destek dashboard'u üretildi."
    },
    tech: ["Python", "SQL", "Power BI", "Pandas", "NumPy", "Scikit-Learn", "DAX"],
    imgSrc: "/projects/kredi/kredi_2.jpg",
    gallery: [
      "/projects/kredi/kredi_2.jpg",
      "/projects/kredi/kredi_1.jpg",
      "/projects/kredi/kredi_4.jpg"
    ],
    github: "https://github.com/AspectAliBurak",
    highlights: ["Uçtan Uca Pipeline", "Feature Importance Analizi", "Accuracy & Confusion Matrix", "Power BI İnteraktif Raporlama"]
  },
  {
    id: "hastane-veri-akisi",
    title: "Hastane Otomasyonu Veritabanı ve Akış Analitiği",
    category: "Veri Tabanı & Veri Yönetimi",
    description: "C#, Windows Forms ve Microsoft SQL Server üzerinde veri erişimi, veri doğruluğu ve iş akışlarının kontrolü üzerine veri yönetimi ve kalite analizi.",
    fullStory: {
      problem: "Uygulama ile veritabanı arasındaki veri akışında doğruluk kaybı riskleri, eksik veri girişleri ve iş akışı kesintileri.",
      approach: "Microsoft SQL Server üzerinde hasta, randevu ve poliklinik veri akışları için ilişkisel şema tasarlandı. T-SQL sorguları optimize edilerek veri doğruluğu ve kontrolleri kurgulandı.",
      tools: ["Microsoft SQL Server", "T-SQL", "Veri Yönetimi", "Veri Kalitesi", "C#"],
      results: "Veri bütünlüğü desteklendi; kurumsal iş akışlarında veri çelişkileri engellenerek stabil veri yönetimi sağlandı."
    },
    tech: ["Microsoft SQL Server", "T-SQL", "Veri Doğrulama", "İlişkisel Veritabanı", "OOP"],
    imgSrc: "/projects/hastane/hastane_4.jpg",
    gallery: [
      "/projects/hastane/hastane_4.jpg",
      "/projects/hastane/hastane_1.jpg",
      "/projects/hastane/hastane_6.jpg"
    ],
    github: "https://github.com/AspectAliBurak",
    highlights: ["SQL Server Veri Tabanı İşlemleri", "Veri Erişimi & Doğruluğu", "İş Akışları Kontrolü"]
  }
];
