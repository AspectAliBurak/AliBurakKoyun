import React from "react";
import {
  SiCsharp,
  SiPython,
  SiGit,
  SiDotnet,
  SiMicrosoftexcel,
  SiPowerbi,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiMeta,
  SiGoogleads,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiCanva,
  SiInstagram,
} from "react-icons/si";
import { TbSql, TbBrandSpeedtest } from "react-icons/tb";

export interface Skill {
  name: string;
  icon: React.ReactNode;
  categories: ("software" | "data" | "marketing")[];
}

export const skills: Skill[] = [
  // Yazılım Becerileri (CV'den)
  { name: "C#", icon: React.createElement(SiCsharp), categories: ["software", "data"] },
  { name: "Python", icon: React.createElement(SiPython), categories: ["software", "data"] },
  { name: "SQL Server / SQL", icon: React.createElement(TbSql), categories: ["software", "data"] },
  { name: "Windows Forms", icon: React.createElement(SiDotnet), categories: ["software"] },
  { name: "Nesne Tabanlı Programlama", icon: React.createElement(SiDotnet), categories: ["software"] },
  { name: "Git / GitHub", icon: React.createElement(SiGit), categories: ["software", "data"] },
  { name: "Microsoft Excel", icon: React.createElement(SiMicrosoftexcel), categories: ["software", "data", "marketing"] },

  // Veri Analitiği Becerileri (CV'den)
  { name: "Power BI & DAX", icon: React.createElement(SiPowerbi), categories: ["data", "marketing"] },
  { name: "Pandas", icon: React.createElement(SiPandas), categories: ["data"] },
  { name: "NumPy", icon: React.createElement(SiNumpy), categories: ["data"] },
  { name: "Scikit-Learn", icon: React.createElement(SiScikitlearn), categories: ["data"] },
  { name: "SPSS", icon: React.createElement(TbBrandSpeedtest), categories: ["data"] },
  { name: "Veri Temizleme & EDA", icon: React.createElement(TbSql), categories: ["data"] },

  // Sosyal Medya & Dijital Pazarlama Becerileri (CV'den)
  { name: "Meta Ads (FB/IG)", icon: React.createElement(SiMeta), categories: ["marketing"] },
  { name: "Google Ads", icon: React.createElement(SiGoogleads), categories: ["marketing"] },
  { name: "Adobe Photoshop", icon: React.createElement(SiAdobephotoshop), categories: ["marketing"] },
  { name: "Adobe After Effects", icon: React.createElement(SiAdobeaftereffects), categories: ["marketing"] },
  { name: "Canva & CapCut", icon: React.createElement(SiCanva), categories: ["marketing"] },
  { name: "Sosyal Medya & Reels", icon: React.createElement(SiInstagram), categories: ["marketing"] },
];
