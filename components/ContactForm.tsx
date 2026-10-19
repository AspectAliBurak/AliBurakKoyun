"use client";

import { useState } from "react";
import { useCareer } from "@/app/context/CareerContext";

export const ContactForm = () => {
  const { career } = useCareer();
  const [sent, setSent] = useState(false);

  if (!career) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return sent ? (
    <p style={{ color: career.accentHex }} className="text-center font-medium">
      Teşekkürler! Mesajınız alındı, en kısa sürede dönüş yapacağım.
    </p>
  ) : (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-4 text-left">
      <input name="name" required placeholder="Adınız Soyadınız" className="p-3 border rounded-lg" />
      <input name="email" type="email" required placeholder="E-posta Adresiniz" className="p-3 border rounded-lg" />
      <textarea name="message" rows={4} required placeholder="Mesajınız..." className="p-3 border rounded-lg" />
      <button type="submit" style={{ backgroundColor: career.accentHex }}
        className="px-6 py-3 text-white rounded-lg font-medium hover:opacity-90 transition">
        Mesaj Gönder
      </button>
    </form>
  );
};
