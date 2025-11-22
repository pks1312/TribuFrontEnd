# 🎨 Tribu Frontend - React + TypeScript

Interfaz de usuario para la plataforma Tribu, construida con React, TypeScript y Vite.

---

## 🚀 Quick Start

### Desarrollo Local

```bash
# Clonar repositorio
git clone https://github.com/pks1312/TribuFrontEnd.git
cd TribuFrontEnd

# Instalar dependencias
npm install

# Configurar variables de entorno
# Crea un archivo .env.local
echo "VITE_API_URL=http://localhost:8000" > .env.local

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará en: `http://localhost:5173`

---

## 📁 Estructura

```
frontend/
├── src/
│   ├── components/       # Componentes reutilizables
│   ├── pages/           # Páginas/Vistas
│   ├── services/        # API clients y configuración
│   │   └── api/         # Clientes de API
│   ├── contexts/        # Context API de React
│   ├── hooks/           # Custom hooks
│   ├── types/           # TypeScript types
│   ├── App.tsx          # Componente principal
│   └── main.tsx         # Punto de entrada
├── public/              # Archivos estáticos
├── package.json         # Dependencias
└── vite.config.ts       # Configuración de Vite
```

---

## 🌐 Páginas Principales

```
/                    # Home
/services            # Lista de servicios
/services/:id        # Detalle de servicio
/professionals       # Profesionales
/booking             # Crear reserva
/my-bookings         # Mis reservas (auth)
/testimonials        # Testimonios
/gallery             # Galería
/login               # Login
/register            # Registro
/admin               # Panel admin (auth)
```

---

## 🔌 Integración con Backend

El frontend se comunica con el backend Django REST API mediante Axios.

### Configuración

Archivo: `src/services/api/config.ts`

```typescript
const API_URL = import.meta.env.VITE_API_URL || 'https://tunombre.pythonanywhere.com';
```

### Variables de Entorno

```bash
# .env.local (desarrollo)
VITE_API_URL=http://localhost:8000

# Vercel (producción)
VITE_API_URL=https://tunombre.pythonanywhere.com
```

---

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo (puerto 5173)

# Build
npm run build        # Compilar para producción

# Preview
npm run preview      # Preview del build de producción

# Linting
npm run lint         # Ejecutar ESLint
```

---

## 🚀 Deployment en Vercel

Ver guía completa: [`VERCEL_DEPLOYMENT.md`](VERCEL_DEPLOYMENT.md)

**Resumen rápido:**

1. Conectar repositorio a Vercel
2. Configurar build settings (Vite preset)
3. Agregar variable `VITE_API_URL`
4. Deploy automático en cada push

---

## 🛠️ Tecnologías

- **React** 19
- **TypeScript** 5.6
- **Vite** 7.2
- **React Router** 7.9
- **Axios** (para API calls)
- **Recharts** (gráficos)

---

## 🔐 Autenticación

El frontend usa **Session Authentication** con el backend Django.

Las sesiones se manejan mediante cookies HTTP-only.

---

## 🎨 Estilo y UI

- CSS Modules / CSS vanilla
- Responsive design
- Componentes modulares

---

## 📝 Convenciones de Código

### Nombres de Archivos
- Componentes: `PascalCase.tsx`
- Hooks: `useCamelCase.ts`
- Utilities: `camelCase.ts`
- Types: `types.ts` o `interfaces.ts`

### Imports
```typescript
// External libraries
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Internal modules
import { API_URL } from '@/services/api/config';
import { Button } from '@/components/Button';

// Types
import type { Service } from '@/types';

// Styles
import styles from './Component.module.css';
```

---

## 🐛 Debugging

### Ver logs de la API

Abre la consola del navegador (F12) → Network tab

### Verificar variables de entorno

```typescript
console.log(import.meta.env.VITE_API_URL);
```

---

## 🔗 Enlaces

- **Repositorio:** https://github.com/pks1312/TribuFrontEnd
- **Backend:** https://github.com/pks1312/TribuBackEnd
- **Producción:** https://tribu-theta.vercel.app

---

## 📄 Licencia

Privado
