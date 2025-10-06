# Product Data Explorer — Submission Notes

This repository contains the Product Data Explorer full-stack project.

Contents to include for submission:

- frontend/ — Next.js + TypeScript frontend
- backend/ — NestJS + TypeScript backend
- .env.example — environment variables example
- README_SUBMISSION.md — this file

Cleanup performed:
- Added `.env.example` with required env vars.
- Updated `.gitignore` to ignore build artifacts and the `backend_backup/` folder.

How to run locally (dev):

1. Install dependencies for both projects:

```powershell
cd frontend; npm install
cd ../backend; npm install
```

2. Start backend:

```powershell
cd backend; npm run start:dev
```

3. Start frontend (it will try 3000 and use 3001 if busy):

```powershell
cd frontend; npm run dev
```

Notes:
- The backend currently uses an in-memory sqlite DB for quick local testing. For production, update `DATABASE_URL` and use a persistent database.
- If you want the full scraping and seeded data included, I can add a small seed script to populate example products.

Contact:
- If anything is missing for your assignment requirements, tell me what files/folders you must include and I will prepare them exactly.
