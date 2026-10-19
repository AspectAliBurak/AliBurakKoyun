export interface Project {
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

export const projects: Project[] = [
  {
    id: "hastane-otomasyonu",
    title: "Hastane Otomasyon Sistemi",
    category: "Masaüstü & Veritabanı Mimarisi",
    description: "C#, Windows Forms ve Microsoft SQL Server kullanarak hasta kayıt, poliklinik yönetimi, randevu oluşturma ve veri doğrulama süreçlerini kapsayan kurumsal otomasyon sistemi.",
    fullStory: {
      problem: "Sağlık merkezlerinde klinik yönetim süreçlerinin, poliklinik atamalarının, doktor/hasta işlemlerinin ve randevuların manuel veya dağınık takibi sonucu oluşan veri çelişkileri ve operasyonel aksaklıklar.",
      approach: "SQL Server ile ilişkisel veritabanı tasarımı ve bağlantı yönetimi kuruldu. Kullanıcı yetkilendirme ve güvenlik mekanizmaları, dinamik filtreleme ve listeleme özellikleri, randevu planlama algoritmaları ve Windows Forms arayüz mimarisi uygulandı.",
      tools: ["C#", "Windows Forms", "Microsoft SQL Server", "OOP", "T-SQL", "Veri Doğrulama", "Güvenlik & Yetkilendirme"],
      results: "Klinik yönetim süreçleri hızlandırıldı; poliklinik, doktor, hasta ve randevu işlemleri tek bir çatı altında toplanarak sağlık hizmetlerinin verimli ve düzenli yürütülmesi sağlandı."
    },
    tech: ["C#", "Windows Forms", "Microsoft SQL Server", "OOP", "LINQ", "T-SQL"],
    imgSrc: "/projects/hastane/hastane_1.jpg",
    gallery: [
      "/projects/hastane/hastane_1.jpg",
      "/projects/hastane/hastane_2.jpg",
      "/projects/hastane/hastane_3.jpg",
      "/projects/hastane/hastane_4.jpg",
      "/projects/hastane/hastane_5.jpg",
      "/projects/hastane/hastane_6.jpg",
      "/projects/hastane/hastane_7.jpg"
    ],
    github: "https://github.com/AspectAliBurak",
    highlights: [
      "SQL Server İlişkisel Veritabanı Tasarımı",
      "Kullanıcı Yetkilendirme & Güvenlik",
      "Dinamik Filtreleme & Listeleme",
      "Randevu Planlama & Veri Doğrulama"
    ]
  },
  {
    id: "hobim-staj-projeleri",
    title: "Kurumsal Masaüstü İş Uygulamaları",
    category: "Masaüstü Yazılım Geliştirme",
    description: "Hobim bünyesindeki yazılım stajında C# ve Windows Forms ile geliştirilen kurumsal masaüstü programları ve veri tabanı entegrasyonları.",
    fullStory: {
      problem: "Şirket içi operasyonel süreçlerin masaüstü arayüzleriyle SQL Server üzerinde hızlı, hatasız ve güvenli biçimde yürütülmesi gereksinimi.",
      approach: "C# ile form tasarımları yapıldı, SQL Server üzerinde veri tabanı sorguları ve prosedürler optimize edilerek uygulama-veritabanı iletişimi sağlandı.",
      tools: ["C#", ".NET", "SQL Server", "Windows Forms", "OOP"],
      results: "Veri erişim hızında artış, kullanıcı dostu arayüz ve stabil çalışan kurumsal masaüstü çözümü sağlandı."
    },
    tech: ["C#", "Windows Forms", ".NET", "SQL Server", "OOP"],
    imgSrc: "/projects/hastane/hastane_3.jpg",
    gallery: [
      "/projects/hastane/hastane_3.jpg",
      "/projects/hastane/hastane_5.jpg",
      "/projects/hastane/hastane_6.jpg"
    ],
    github: "https://github.com/AspectAliBurak",
    highlights: ["Masaüstü İş Akışları", "Microsoft SQL Server Entegrasyonu", "Nesne Tabanlı Kodlama"]
  },
  {
    id: "freelance-yazilim",
    title: "Freelance Web & Mobil Süreç Geliştirme",
    category: "Full-Stack & Uygulama Geliştirme",
    description: "Farklı sektörlerdeki müşteriler için ihtiyaç analizi, kullanıcı arayüzü tasarımı, web/mobil geliştirme ve veri akışı takibi.",
    fullStory: {
      problem: "Müşterilerin dijital varlıklarını modernize etme ve özel yazılım ihtiyaçlarına hızlı ve esnek yanıt verme gereksinimi.",
      approach: "Proje gereksinimleri analiz edildi; içerik planlama, modern UI kurgusu ve arka plan süreçleri koordine edilerek teslim edildi.",
      tools: ["Python", "SQL", "Web Geliştirme", "İhtiyaç Analizi"],
      results: "Müşteri süreçlerinin dijitalleştirilmesi, görsel raporlama ve sürdürülebilir altyapı oluşturulması."
    },
    tech: ["Python", "SQL", "İhtiyaç Analizi", "Görsel Raporlama"],
    imgSrc: "/projects/hastane/hastane_2.jpg",
    gallery: [
      "/projects/hastane/hastane_2.jpg",
      "/projects/hastane/hastane_4.jpg"
    ],
    github: "https://github.com/AspectAliBurak",
    highlights: ["İhtiyaç Analizi", "Süreç Takibi & Dijitalleşme", "Görsel Raporlama"]
  }
];
