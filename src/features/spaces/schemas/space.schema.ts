// src/features/spaces/schemas/space.schema.ts
import { z } from "zod";

export const createSpaceSchema = z.object({
  name: z.string().min(1, "Space name is required").max(200, "Name too long"),
  address: z.string().min(1, "Address is required").max(255, "Address too long"),
  city: z.string().min(1, "City is required").max(100, "City too long"),
  state: z.string().min(1, "State is required").max(100, "State too long"),
});

export type CreateSpaceData = z.infer<typeof createSpaceSchema>;

export interface SpaceResponse {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  ownerId: number;
}