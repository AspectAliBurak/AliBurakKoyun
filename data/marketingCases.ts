export interface MarketingCase {
  id: string;
  title: string;
  category?: string;
  description: string;
  fullStory?: {
    problem: string;
    approach: string;
    tools: string[];
    results: string;
  };
  tech: string[];
  imgSrc: string;
  gallery: string[];
  campaignResultsImg?: string;
  videoReels?: {
    videoSrc: string;
    title: string;
    instagramUrl: string;
  }[];
  storyHighlights?: {
    title: string;
    url: string;
    coverImg?: string;
  }[];
  storyHighlightUrl?: string;
  instagramUrl?: string;
  github?: string;
  demo?: string;
  highlights?: string[];
}

export const marketingCases: MarketingCase[] = [
  {
    id: "cadasoft-sosyal-medya",
    title: "Cadasoft",
    category: "",
    description: "Cadasoft markasının sosyal medya süreçlerinde içerik üretimi, grafik tasarım, öne çıkan hikaye tasarımları ve Instagram Reels video kurgularının hazırlanması.",
    fullStory: {
      problem: "Markanın sosyal medyada statik kalması, video odaklı etkileşim eksikliği ve marka kimliğini yansıtan dinamik kurguların bulunmayışı.",
      approach: "Adobe After Effects, Photoshop, Canva ve CapCut kullanılarak marka renk ve kimliğine uygun dinamik Reels videoları, hikaye öne çıkanları ve yüksek çözünürlüklü kreatif gönderi şablonları üretildi.",
      tools: ["Adobe After Effects", "Adobe Photoshop", "Canva", "CapCut", "İçerik Planlama", "Video Kurgu"],
      results: "Marka kimliğiyle örtüşen profesyonel bir sosyal medya vitrini oluşturuldu; video izlenme ve etkileşim oranlarında belirgin artış kaydedildi."
    },
    tech: ["Adobe After Effects", "Adobe Photoshop", "Canva", "CapCut", "Reels Kurgusu", "Story & Feed Tasarımı"],
    imgSrc: "/projects/cadasoft/cadasoft_logo_cover.png?v=2",
    gallery: [
      "/projects/cadasoft/DW6eB3OiCL9_2026-04-09_14-04-49_UTC.jpg",
      "/projects/cadasoft/DVJEhgRiBnv_2026-02-24_13-07-42_UTC.jpg"
    ],
    videoReels: [
      {
        videoSrc: "/projects/cadasoft/reel_1.mp4",
        title: "Cadasoft Kreatif Reels #1",
        instagramUrl: "https://www.instagram.com/reel/DSxr1uxiBMo/"
      },
      {
        videoSrc: "/projects/cadasoft/reel_2.mp4",
        title: "Cadasoft Kreatif Reels #2",
        instagramUrl: "https://www.instagram.com/reel/DWgbe5kiOcA/"
      }
    ],
    storyHighlightUrl: "https://www.instagram.com/stories/highlights/18069652982111481/",
    storyHighlights: [
      {
        title: "Cadasoft Hikaye & Öne Çıkanlar",
        url: "https://www.instagram.com/stories/highlights/18069652982111481/"
      }
    ],
    instagramUrl: "https://www.instagram.com",
    highlights: ["Dinamik Reels Kurguları", "Öne Çıkan Hikaye Tasarımları", "HD Kreatif Feed Gönderileri"]
  },
  {
    id: "cakir-sondaj",
    title: "Çakır Sondaj",
    category: "",
    description: "Sondaj sektöründe faaliyet gösteren Çakır Sondaj işletmesinin sosyal medya hesap yönetimi, saha çekimlerinin dinamik Reels kurgusu ve reklam çalışmaları.",
    fullStory: {
      problem: "Sondaj ve ağır sanayi sektöründe operasyonel sahanın gücünü yansıtan profesyonel video içeriklerin eksikliği ve hedef B2B kitleye dijital kanallardan erişim ihtiyacı.",
      approach: "Saha ve sondaj çalışmalarını yansıtan dinamik müzik ve kurgularla Reels videoları hazırlandı. CapCut ve Premiere ile dikey formatta dikkat çekici kurgular oluşturularak B2B hedefleme odaklı yayın takvimi yürütüldü.",
      tools: ["CapCut", "Video Kurgu", "Reels Yönetimi", "İçerik Stratejisi", "B2B Pazarlama", "Meta Ads"],
      results: "Hedefli Meta reklam kampanyası ile 65.793 gösterim, 23.967 erişim ve 47 yüksek niyetli doğrudan arama elde edildi."
    },
    tech: ["Instagram Reels", "Video Kurgu", "CapCut", "Sosyal Medya Yönetimi", "B2B İçerik", "Meta Ads"],
    imgSrc: "/projects/cakir/cakir_official_cover.png",
    gallery: [],
    campaignResultsImg: "/projects/cakir/cakir_reklam_sonuc.png",
    videoReels: [
      {
        videoSrc: "/projects/cakir/cakir_1.mp4",
        title: "Çakır Sondaj Saha Reels #1",
        instagramUrl: "https://www.instagram.com/p/DeUKZSgIVZS/"
      },
      {
        videoSrc: "/projects/cakir/cakir_2.mp4",
        title: "Çakır Sondaj Saha Reels #2",
        instagramUrl: "https://www.instagram.com/p/DePFTE7IdzL/"
      },
      {
        videoSrc: "/projects/cakir/cakir_3.mp4",
        title: "Çakır Sondaj Saha Reels #3",
        instagramUrl: "https://www.instagram.com/p/DeJ91haIB71/"
      },
      {
        videoSrc: "/projects/cakir/cakir_4.mp4",
        title: "Çakır Sondaj Saha Reels #4",
        instagramUrl: "https://www.instagram.com/p/DeCCmS6IoUT/"
      }
    ],
    instagramUrl: "https://www.instagram.com/mvcakirsondaj/",
    highlights: ["Meta Reklam Kampanyası: 47 Arama, 65.7K Gösterim", "4 Farklı Dinamik Saha Reels'ı", "B2B Sektörel Video Kurguları"]
  },
  {
    id: "siberatay-dijital-pazarlama",
    title: "SiberAtay",
    category: "",
    description: "Instagram, X (Twitter), Telegram ve Discord kanallarının yönetimi, Reels formatının öncülüğü ve Meta reklam kampanyalarının uçtan uca liderliği.",
    fullStory: {
      problem: "Birden fazla sosyal medya kanalında dağınık içerik yapısı, video içerik trendlerine adapte olamama ve düşük reklam dönüşüm verimliliği.",
      approach: "İçerik ekibinde başlayıp ekip liderliğine ilerlendi. Ekipte Reels video formatının kullanımını ilk kez başlatarak yeni içerik trendlerine uyum sağlandı. Meta reklam kampanyalarında hedef kitle segmentasyonu, bütçe optimizasyonu ve performans takibi gerçekleştirildi.",
      tools: ["Meta Ads Manager", "Instagram Reels", "X (Twitter)", "Telegram", "Discord", "İçerik Planlama", "Hedef Kitle Optimizasyonu"],
      results: "Reels formatı ile rekor organik erişim elde edildi; çok kanallı topluluk yönetimi stabilize edilerek Meta reklamlarında yüksek etkileşim sağlandı."
    },
    tech: ["Meta Ads", "Instagram Reels", "X (Twitter)", "Telegram", "Discord", "Ekip Liderliği"],
    imgSrc: "/projects/siberatay/siberatay_official_cover.png",
    gallery: [
      "/projects/siberatay/siberatay_official_cover.png"
    ],
    instagramUrl: "https://www.instagram.com/siberatay/",
    highlights: ["Reels Trend Öncülüğü", "Meta Reklam Kampanyaları", "4 Ayrı Kanal Yönetimi", "Ekip Koordinasyonu"]
  },
  {
    id: "matematik-akademin",
    title: "Matematik Akademin",
    category: "",
    description: "Matematik Akademin hesabı için dijital pazarlama, sosyal medya stratejisi ve video/kreatif içerik yönetimi.",
    fullStory: {
      problem: "Eğitim ve dijital öğrenim alanında hedef kitleye yönelik yüksek etkileşimli içerik ve sosyal medya görünürlüğü ihtiyacı.",
      approach: "Öğrencilere ve hedef kitleye yönelik video içerikler, kreatif gönderiler ve etkileşim odaklı sosyal medya planlaması.",
      tools: ["Instagram Reels", "Canva", "CapCut", "İçerik Stratejisi"],
      results: "Etkileşim ve kitle erişiminde istikrarlı artış."
    },
    tech: ["Sosyal Medya Yönetimi", "İçerik Üretimi", "Video Kurgu", "Eğitim Pazarlaması"],
    imgSrc: "/projects/matematikakademin/matematik_official_cover.jpg",
    gallery: [
      "/projects/matematikakademin/matematik_official_cover.jpg"
    ],
    instagramUrl: "https://www.instagram.com/matematikakademin/",
    highlights: ["Eğitim İçerik Kurgusu", "Sosyal Medya Büyümesi"]
  },
  {
    id: "gdk-yazilim",
    title: "GDK Yazılım",
    category: "",
    description: "GDK Yazılım hesabı için dijital varlık yönetimi, kurumsal sosyal medya içerikleri ve teknoloji odaklı pazarlama.",
    fullStory: {
      problem: "Yazılım ve bilişim sektöründe kurumsal kimliği ve hizmetleri yansıtan dijital pazarlama kurguları.",
      approach: "B2B ve teknoloji odaklı kreatif tasarım şablonları, proje tanıtım videoları ve marka bilinirliği kampanyaları.",
      tools: ["İçerik Planlama", "Sosyal Medya", "Tasarım", "Teknoloji Pazarlaması"],
      results: "Kurumsal görünürlük ve potansiyel müşteri etkileşiminde artış."
    },
    tech: ["B2B Pazarlama", "Sosyal Medya Yönetimi", "Kreatif Tasarım", "Video Kurgu"],
    imgSrc: "/projects/gdkyazilim/gdk_official_cover.png",
    gallery: [
      "/projects/gdkyazilim/gdk_post_1.jpg",
      "/projects/gdkyazilim/gdk_post_2.jpg",
      "/projects/gdkyazilim/gdk_post_3.jpg"
    ],
    videoReels: [
      {
        videoSrc: "/projects/gdkyazilim/gdk_reel_1.mp4",
        title: "GDK Yazılım Kreatif Reels",
        instagramUrl: "https://www.instagram.com/reel/DYPCP03tlO9/"
      }
    ],
    storyHighlightUrl: "https://www.instagram.com/stories/highlights/17870584773606477/",
    storyHighlights: [
      {
        title: "GDK Yazılım Öne Çıkan Hikayeler (Highlight)",
        url: "https://www.instagram.com/stories/highlights/17870584773606477/"
      }
    ],
    instagramUrl: "https://www.instagram.com/gdkyazilim/",
    highlights: ["Kurumsal Kimlik İletişimi", "B2B Teknoloji İçeriği"]
  }
];
