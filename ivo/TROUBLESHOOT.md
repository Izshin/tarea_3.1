# 🔧 SOLUCIÓN DE PROBLEMAS - Despliegue en GitHub Pages

## ✅ CHECKLIST RÁPIDO

### 1. Verificar rama actual
```bash
git branch
# Debe mostrar * main o * master
```

Si estás en otra rama, cambia a main:
```bash
git checkout main
# o
git checkout master
```

### 2. Verificar que todos los archivos están en el repo

```bash
# Ver archivos no guardados
git status

# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Fix: Add workflow and nojekyll"

# Subir a GitHub
git push
```

### 3. Configurar GitHub Pages

Ve a tu repo: https://github.com/Izshin/tarea_3.1

1. Click en **Settings** (⚙️ Configuración)
2. En el menú izquierdo, click en **Pages**
3. En **Source**, selecciona: **GitHub Actions**
4. ¡Guarda!

### 4. Activar el workflow manualmente

1. Ve a la pestaña **Actions** en tu repo
2. Si hay workflows fallidos, click en el último
3. Click en **Re-run all jobs**

O actívalo manualmente:
1. En **Actions** → Click en "Deploy to GitHub Pages"
2. Click en **Run workflow** (botón derecho)
3. Click en el botón verde **Run workflow**

### 5. Esperar el despliegue

- El proceso tarda **1-3 minutos**
- Ve a **Actions** y verás un círculo amarillo 🟡 (en progreso)
- Cuando salga ✅ verde, ¡listo!

### 6. Acceder al sitio

Tu sitio estará en:
**https://izshin.github.io/tarea_3.1/**

---

## 🆘 SI SIGUE SIN FUNCIONAR

### Verificar que el workflow existe
```bash
# Desde tu carpeta del proyecto
ls .github/workflows/
# Debe mostrar: deploy.yml
```

### Ver errores en Actions
1. Ve a https://github.com/Izshin/tarea_3.1/actions
2. Click en el workflow fallido (❌ rojo)
3. Click en el job que falló
4. Lee el error y compártelo

### Verificar node_modules
```bash
# Borrar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Build local para verificar
```bash
# Hacer build local
npm run build

# Si hay errores, arreglarlos antes de hacer push
```

### Permisos en GitHub
1. Ve a Settings → Pages
2. Verifica que tengas permisos de escritura
3. Si es un repo de organización, contacta al admin

---

## 🔄 COMANDOS COMPLETOS (Copy-Paste)

```bash
# 1. Verificar rama
git branch

# 2. Agregar todos los archivos
git add .

# 3. Commit
git commit -m "Fix: Deploy configuration"

# 4. Push (puede pedir usuario/contraseña)
git push origin main

# 5. Ver el estado en GitHub Actions
# https://github.com/Izshin/tarea_3.1/actions
```

---

## 📍 URL FINAL

Una vez desplegado, tu sitio estará en:
## **https://izshin.github.io/tarea_3.1/**

Recarga con **Ctrl + Shift + R** para limpiar caché.
