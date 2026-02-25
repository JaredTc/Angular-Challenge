# Angular Challenge

This is an Angular technical challenge consuming the JSONPlaceholder public API.  
It demonstrates the use of feature-based architecture, services, components, guards, and interceptors.

## Features
- **Tabla de usuarios:** Muestra los usuarios obtenidos de la API.
- **Funcionalidad de búsqueda:** Filtra usuarios dinámicamente.
- **State management:** `user.facade.ts` gestiona el flujo de datos entre el servicio y la UI.
- **Lazy loading**: Routing
- **Rxjs**: Observables

## 💻 Screens Shots
<img src="public/screenshots/view-users.png" alt="Pantalla principal" width="800"/> 

## Technologies
- Angular
- TypeScript
- JSONPlaceholder API
  
# 📂 Estructura del proyecto

```bash
Public/                  # Imágenes, iconos y otros recursos
src/
├── main.ts              # Punto de entrada de Angular
├── index.html           # HTML principal
├── styles.scss          # Estilos globales
├── app/
│   ├── core/            # Configuraciones y servicios globales
│   │   ├── constants/   # Constantes de la app
│   │   ├── guards/      # Guards
│   │   ├── interceptors/# Interceptores HTTP
│   │   ├── models/      # Modelos globales
│   │   └── services/    # Servicios globales
│   │
│   ├── features/        # Módulos o features específicos
│   │   └── user-component/ # archivos base html, scss, componente ts y rutas
│   │       ├── components/ # Componentes de esta feature
│   │       ├── models/     # Modelos de la feature
│   │       ├── services/   # Servicios de la feature
│   │       ├── state/      # State management / facades
│   │
│   ├── layout/          # Layout general de la app
│   │
│   ├── shared/          # Componentes y utilidades compartidas
│   └── util/            # Helpers y utilidades (ej. app.config.ts, helper.ts)
│
└── environments/        # Configuración de entornos (environment.ts, environment.prod.ts)
  ```

## Getting Started
git clone
  ```bash
  https://github.com/JaredTc/Angular-Challenge.git
  ```

