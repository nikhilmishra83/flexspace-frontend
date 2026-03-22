// src/lib/api.ts
import apiClient from './apiClient';
import { Space, Desk, Booking } from '@/types';

export const api = {
  // --- Spaces ---
  getSpaces: async () => {
    const { data } = await apiClient.get<Space[]>('/spaces');
    return data;
  },
  getSpaceById: async (spaceId: number) => {
    const { data } = await apiClient.get<Space>(`/spaces/${spaceId}`);
    return data;
  },

  // --- Desks ---
  getSpaceDesks: async (spaceId: number) => {
    const { data } = await apiClient.get<Desk[]>(`/spaces/${spaceId}/desks`);
    return data;
  },
  getDeskAvailability: async (deskId: number) => {
    const { data } = await apiClient.get(`/desks/${deskId}/availability`);
    return data;
  },

  // --- Bookings ---
  bookDesk: async (bookingData: Booking) => {
    const { data } = await apiClient.post<Booking>('/bookings', bookingData);
    return data;
  },
  getUserBookings: async () => {
    const { data } = await apiClient.get<Booking[]>('/bookings/user');
    return data;
  },
};