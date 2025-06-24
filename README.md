# MagisTV Landing

Aplicación web de landing page para MagisTV construida con Vue 3, TypeScript y Vite.

## 🚀 Características

- **Vue 3** con Composition API
- **TypeScript** para tipado estático
- **Vite** como bundler y dev server
- **Vue Router** para navegación
- **PrimeVue** para componentes UI
- **Tailwind CSS** para estilos
- **Oh Vue Icons** para iconografía

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── ui/             # Componentes de interfaz de usuario
│   │   ├── Card.vue
│   │   ├── LayoutGrid.vue
│   │   ├── FeaturesSection.vue
│   │   └── Pricing.vue
│   ├── Hero.vue        # Componente hero principal
│   ├── Footer.vue      # Componente footer
│   └── index.ts        # Exportaciones de componentes
├── Pages/              # Páginas de la aplicación
│   ├── Home.vue        # Página principal
│   ├── Contacto.vue    # Página de contacto
│   ├── Dispositivos.vue # Página de dispositivos
│   └── index.ts        # Exportaciones de páginas
├── assets/             # Recursos estáticos
├── router.ts           # Configuración de rutas
├── main.ts             # Punto de entrada
├── App.vue             # Componente raíz
└── style.css           # Estilos globales
```

## 🛠️ Configuración

### Alias de Rutas

El proyecto incluye alias de rutas configurados para facilitar las importaciones:

- `@/` → `src/`
- `@components/` → `src/components/`
- `@pages/` → `src/Pages/`
- `@assets/` → `src/assets/`

### Scripts Disponibles

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## 🎨 Componentes

### Componentes Principales
- **Hero**: Sección principal de la landing page
- **Footer**: Pie de página con información de contacto

### Componentes UI
- **Card**: Tarjeta para mostrar contenido
- **LayoutGrid**: Grid responsivo para layouts
- **FeaturesSection**: Sección de características
- **Pricing**: Sección de precios y planes

## 📱 Páginas

- **Home** (`/`): Página principal con toda la información
- **Contacto** (`/contacto`): Página de contacto
- **Dispositivos** (`/dispositivos`): Información sobre dispositivos

## 🔧 Tecnologías Utilizadas

- **Vue 3.5.17**: Framework de JavaScript progresivo
- **TypeScript 5.8.3**: Superset de JavaScript con tipado estático
- **Vite 6.3.5**: Herramienta de construcción frontend
- **Vue Router 4.5.1**: Router oficial para Vue.js
- **PrimeVue 4.3.5**: Biblioteca de componentes UI
- **Tailwind CSS 4.1.10**: Framework CSS utility-first
- **Oh Vue Icons**: Biblioteca de iconos para Vue

## 📄 Licencia

Este proyecto es privado y está destinado para uso interno de MagisTV.
