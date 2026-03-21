# FlexSpace Frontend Context

FlexSpace is a coworking desk booking platform.

This repository contains the frontend application built using Next.js.

The frontend communicates with a backend REST API built using Java Spring Boot.

The goal of the frontend is to allow users to:

- browse coworking spaces
- view desk availability
- book desks
- manage their bookings

The design should feel similar to booking platforms like Airbnb or WeWork.

---

# Tech Stack

Framework: Next.js (App Router)

Language: TypeScript

Styling: Tailwind CSS

State Management: React state initially (later React Query or Zustand)

Backend API: Spring Boot REST API

Backend base URL:

http://localhost:8080

---

# Core Features

Users should be able to:

1. Browse coworking spaces
2. View desks inside a space
3. Check desk availability
4. Book desks
5. View booking history
6. Manage their account

---

# UI Philosophy

Focus on:

- clean layout
- simple booking flow
- fast page loading
- mobile responsiveness

Avoid unnecessary complexity.

---

# Architecture Goals

The frontend should follow a feature-based architecture:

src/
components/
features/
services/
types/

components → reusable UI components  
features → feature-specific UI logic  
services → API communication  
types → shared TypeScript types

---

# Backend Responsibilities

The backend handles:

- authentication
- booking validation
- desk availability
- database storage

The frontend should never enforce booking rules.