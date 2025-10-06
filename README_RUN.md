# Product Data Explorer — Run & Deploy

Quick steps to run locally for development and to build for production.

Backend (dev):

```powershell
cd backend
npm install
npm run start:dev
```

Backend (prod):

```powershell
cd backend
npm install
npm run build
node dist/main.js
```

Frontend (dev):

```powershell
cd frontend
npm install
npm run dev
# open http://localhost:3000
```

Frontend (prod):

```powershell
cd frontend
npm install
npm run build
npm run start
```

Docker (optional):

```powershell
# Build and run both services
docker-compose up --build
```

Notes:
- Backend uses SQLite by default at `backend/data/database.sqlite` for persistence.
- If you want to enable request throttling in production, re-enable `@nestjs/throttler` in `AppModule` and ensure the module is globally registered before guards are used.
