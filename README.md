# eventchi-assesment — Vite + React + TS + Tailwind v4 + React Router

## Quick start
```bash
npm i
npm run dev
```

## Tambah page
1) Buat file di `src/pages/MyNewPage.tsx`
2) Daftarkan di `src/routes/index.tsx`, contoh:
```ts
{ path: 'my-new', element: <MyNewPage /> }
```

## Stack
- Vite
- React + TypeScript
- TailwindCSS v4 (via `@tailwindcss/vite`)
- React Router 7 (routes dipisah dari App, pakai `RootLayout` + `Outlet`)
- ESLint + Prettier
- Alias path `@/*`
