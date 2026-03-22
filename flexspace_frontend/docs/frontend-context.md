 # FlexSpace Frontend Context

FlexSpace is a coworking desk booking platform.

This repository contains the frontend built with Next.js.

Backend is implemented separately using Spring Boot.

## Purpose

The frontend allows users to:

- browse coworking spaces
- view available desks
- book desks
- manage bookings
- login and manage accounts

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- TypeScript

## Backend API

The backend runs on:

http://localhost:8080

Example endpoints:

GET /api/spaces
GET /api/desks
POST /api/bookings
GET /api/bookings/user

## Main Pages

/ → Landing page

/spaces → Browse coworking spaces

/spaces/[id] → View space details

/bookings → User bookings

/login → Authentication

/dashboard → User dashboard

## Frontend Responsibilities

The frontend will:

- display coworking spaces
- show desk availability
- allow booking creation
- manage user sessions
- call backend APIs

## State Management

Initially:

React state + server actions

Later may add:

- React Query
- Zustand

## UI Goals

The UI should feel similar to:

- WeWork
- Airbnb booking experience

Focus on:

- simple layout
- fast booking flow
- mobile friendly UI