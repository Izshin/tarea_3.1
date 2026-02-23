# 🚀 Guía de Despliegue en GitHub Pages

## Pasos para desplegar tu web:

### 1. Crear repositorio en GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```

### 2. Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En **Source** (Fuente), selecciona:
   - **Source**: GitHub Actions
5. Guarda los cambios

### 3. Configurar base path (si es necesario)

Si tu repositorio **NO** usa un dominio personalizado:

En `vite.config.ts`, cambia:
```typescript
base: '/', // ← Cambiar a '/nombre-del-repo/'
```

Por ejemplo, si tu repo se llama `mi-web`:
```typescript
base: '/mi-web/',
```

### 4. Hacer push y desplegar

Cada vez que hagas push a `main`, se desplegará automáticamente:

```bash
git add .
git commit -m "Tu mensaje"
git push
```

### 5. Ver tu sitio

Tu sitio estará disponible en:
- **Con dominio personalizado**: `https://tu-usuario.github.io/`
- **Sin dominio personalizado**: `https://tu-usuario.github.io/nombre-del-repo/`

---

## 📱 Comandos útiles

### Desarrollo local
```bash
npm run dev
```

### Build para producción
```bash
npm run build
```

### Preview del build
```bash
npm run preview
```

### Desarrollo con acceso desde móvil
```bash
npm run dev
# Luego accede desde: http://TU-IP:5173
```

---

## 🔧 Solución de problemas

### El sitio no carga los recursos
- Verifica que el `base` en `vite.config.ts` esté correcto
- Si usas dominio personalizado, debe ser `base: '/'`
- Si es sitio de proyecto, debe ser `base: '/nombre-repo/'`

### El workflow falla
- Verifica que GitHub Pages esté configurado con "GitHub Actions"
- Revisa los logs en la pestaña "Actions" de tu repositorio

### Cambios no se reflejan
- El despliegue tarda 1-2 minutos
- Limpia la caché del navegador (Ctrl + Shift + R)
