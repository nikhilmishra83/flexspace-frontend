// src/types/index.ts

export interface Space {
  id: number;
  name: string;
  city: string;
  address: string;
  description: string;
  imageUrl: string;
  availableDesksCount: number;
}

export interface Desk {
  id: number;
  name: string;
  type: 'BASIC' | 'PREMIUM';
  isAvailable: boolean;
  features: string[];
}

export interface Subscription {
  planName: string;
  totalHours: number;
  usedHours: number;
  remainingHours: number;
}

export interface SearchFilters {
  city: string;
  date: string;
  startTime: string;
  endTime: string;
  deskType: string;
  includeUnavailable: boolean;
}



export interface Booking {
  id?: number;
  deskId: number;
  startTime: string; // ISO string
  endTime: string;   // ISO string
}

export interface User {
  id: number;
  name: string;
  email: string;
}