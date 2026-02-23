# 🏆 PARALYMPICDREAMS: Olympic Horizon

Centro de alto rendimiento deportivo paralímpico de élite.

## ✨ Características

- 🎬 Video introductorio con animación inicial elegante
- 📱 **100% Responsive** - Optimizado para móviles, tablets y desktop
- 🎨 Diseño moderno con paleta de colores profesional
- ⚡ Animaciones fluidas y transiciones suaves
- 🚀 Despliegue automático con GitHub Actions

## 🛠️ Tecnologías

- React 19 + TypeScript
- Vite 7
- CSS3 con animaciones
- GitHub Actions para CI/CD

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Desarrollo con hot reload
npm run dev

# Desarrollo con acceso desde móvil (red local)
npm run dev
# Accede desde: http://TU-IP-LOCAL:5173

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🚀 Despliegue

Ver [DEPLOY.md](./DEPLOY.md) para instrucciones detalladas de despliegue en GitHub Pages.

**Resumen rápido:**
1. Sube tu código a GitHub
2. Configura GitHub Pages con "GitHub Actions"
3. El sitio se desplegará automáticamente en cada push

## 📁 Estructura

```
ivo/
├── src/
│   ├── App.tsx          # Componente principal
│   ├── App.css          # Estilos de la app
│   ├── index.css        # Estilos globales
│   └── main.tsx         # Entry point
├── public/
│   ├── INTRODUCTORIO.mp4
│   ├── Entrenador.jpg
│   ├── Nutricionista1.jpg
│   └── Preparador1.jpg
└── .github/
    └── workflows/
        └── deploy.yml   # CI/CD automático
```

## 🎨 Paleta de Colores

- **Azul Principal**: `#1976d2`
- **Azul Oscuro**: `#0d47a1`
- **Gris Claro**: `#f5f5f5`
- **Blanco**: `#ffffff`

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Móvil**: 480px - 768px
- **Móvil pequeño**: < 480px

## 👥 Equipo

- Entrenador Principal
- Preparador Físico
- Nutricionista Deportiva

---

Desarrollado con ❤️ para atletas paralímpicos de élite

import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
