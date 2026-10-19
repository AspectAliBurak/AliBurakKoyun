"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CareerKey, careers } from '@/data/careers';

interface CareerContextProps {
  current: CareerKey | null;
  setCareer: (k: CareerKey) => void;
  career: typeof careers[CareerKey] | null;
}

const CareerContext = createContext<CareerContextProps | undefined>(undefined);

export const CareerProvider = ({ children }: { children: ReactNode }) => {
  const [current, setCurrent] = useState<CareerKey | null>(null);
  const setCareer = (k: CareerKey) => setCurrent(k);
  const career = current ? careers[current] : null;
  return (
    <CareerContext.Provider value={{ current, setCareer, career }}>
      {children}
    </CareerContext.Provider>
  );
};

export const useCareer = () => {
  const ctx = useContext(CareerContext);
  if (!ctx) throw new Error('useCareer must be used within CareerProvider');
  return ctx;
};
