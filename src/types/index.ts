// src/types/index.ts

export interface Space {
  id: number;
  name: string;
  city: string;
  description: string;
}

export interface Desk {
  id: number;
  spaceId: number;
  name: string;
  type: string;
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