# 🚀 Deployment en Vercel - Frontend Tribu

Guía paso a paso para desplegar el frontend React en Vercel.

---

## 📋 Requisitos Previos

- Cuenta en Vercel (gratis)
- Repositorio GitHub actualizado
- Backend desplegado en PythonAnywhere

---

## 🎯 PASO 1: Preparar el Proyecto

### 1. Verificar archivo de configuración API

Asegúrate que `src/services/api/config.ts` tenga la URL correcta del backend:

```typescript
const API_URL = import.meta.env.VITE_API_URL || 'https://tunombre.pythonanywhere.com';

export { API_URL };
```

---

## 🌐 PASO 2: Desplegar en Vercel

### Opción A: Desde el Dashboard de Vercel (Recomendado)

1. **Ve a https://vercel.com/**
2. **Inicia sesión** con tu cuenta de GitHub
3. Click en **"New Project"**
4. **Importa** el repositorio: `pks1312/TribuFrontEnd`
5. **Configura el proyecto:**
   - **Framework Preset:** Vite
   - **Root Directory:** `./` (raíz)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

6. **Agrega Variables de Entorno:**
   Click en "Environment Variables" y agrega:
   ```
   VITE_API_URL = https://tunombre.pythonanywhere.com
   ```
   
7. Click en **"Deploy"**
8. Espera 1-2 minutos

---

### Opción B: Desde la Terminal (CLI)

```bash
# Instalar Vercel CLI
npm install -g vercel

# En el directorio del frontend
cd frontend

# Login en Vercel
vercel login

# Deploy
vercel

# Para producción
vercel --prod
```

---

## ⚙️ PASO 3: Configurar Variables de Entorno

En el Dashboard de Vercel:

1. Ve a tu proyecto → **"Settings"**
2. Click en **"Environment Variables"**
3. Agrega:

```bash
VITE_API_URL = https://tunombre.pythonanywhere.com
```

**IMPORTANTE:** Reemplaza `tunombre` con tu username de PythonAnywhere.

4. Click en **"Save"**
5. Redeploy el proyecto

---

## 🔄 PASO 4: Configurar CORS en el Backend

Para que el frontend pueda comunicarse con el backend:

1. En PythonAnywhere, edita el archivo `.env`:
   ```bash
   CORS_ALLOWED_ORIGINS=https://tu-proyecto.vercel.app
   ```

2. Recarga la aplicación web en PythonAnywhere

---

## ✅ PASO 5: Verificar Deployment

1. **Visita tu URL de Vercel:** `https://tu-proyecto.vercel.app`
2. **Abre la consola del navegador** (F12)
3. **Verifica** que no haya errores de CORS
4. **Prueba** hacer login o consultar servicios

---

## 🔧 Troubleshooting

### Error de CORS

**Síntoma:** `Access to fetch... has been blocked by CORS policy`

**Solución:**
1. Verifica que `CORS_ALLOWED_ORIGINS` en el backend incluya tu URL de Vercel
2. Asegúrate de no tener espacios extras
3. Recarga la aplicación en PythonAnywhere

### API no responde

**Síntoma:** `Network Error` o `Failed to fetch`

**Solución:**
1. Verifica que `VITE_API_URL` esté correcta en Vercel
2. Prueba la URL del backend directamente: `https://tunombre.pythonanywhere.com/health/`
3. Revisa los logs en PythonAnywhere

### Página en blanco

**Síntoma:** La página no muestra nada

**Solución:**
1. Revisa la consola del navegador (F12)
2. Verifica que el build se completó correctamente en Vercel
3. Chequea que todas las rutas de React Router estén bien

---

## 🔄 Actualizar el Deployment

### Automático (Recomendado)

Cada vez que hagas `git push` al repositorio, Vercel redespliegará automáticamente.

### Manual

1. Ve al Dashboard de Vercel
2. Selecciona tu proyecto
3. Click en **"Deployments"**
4. Click en los **3 puntos** del último deployment
5. Click en **"Redeploy"**

---

## 🎨 Dominios Personalizados (Opcional)

1. En Vercel Dashboard → **"Settings"** → **"Domains"**
2. Agrega tu dominio personalizado: `www.midominio.com`
3. Configura los DNS según las instrucciones de Vercel
4. Actualiza `CORS_ALLOWED_ORIGINS` en el backend

---

## 📊 Límites del Plan Gratuito

- ✅ Deployments ilimitados
- ✅ Ancho de banda: 100 GB/mes
- ✅ HTTPS automático
- ✅ Dominio personalizado gratis
- ✅ Preview deployments automáticos

---

## 🎉 ¡Listo!

Tu frontend está desplegado en Vercel.

**URL de producción:** `https://tu-proyecto.vercel.app`

**Conectado a:** `https://tunombre.pythonanywhere.com`

