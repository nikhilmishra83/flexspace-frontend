# FlexSpace API Contract

This document describes how the frontend communicates with the backend.

Backend base URL:

http://localhost:8080

---

# Spaces

GET /api/spaces

Returns a list of coworking spaces.

Example response:

[
 {
  "id": 1,
  "name": "TechHub Workspace",
  "city": "Delhi",
  "description": "Modern coworking space"
 }
]

---

# Space Details

GET /api/spaces/{spaceId}

Returns details of a coworking space.

---

# Desks

GET /api/spaces/{spaceId}/desks

Returns desks available in a space.

---

# Desk Availability

GET /api/desks/{deskId}/availability

Returns available time slots.

---

# Book Desk

POST /api/bookings

Request:

{
 "deskId": 10,
 "startTime": "2026-03-15T09:00",
 "endTime": "2026-03-15T18:00"
}

---

# User Bookings

GET /api/bookings/user

Returns bookings of the current user.