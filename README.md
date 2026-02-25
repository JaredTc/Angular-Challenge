# Angular Challenge

This is an Angular technical challenge consuming the JSONPlaceholder public API.  
It demonstrates the use of feature-based architecture, services, components, guards, and interceptors.

## Features
- **Tabla de usuarios:** Muestra los usuarios obtenidos de la API.
- **Funcionalidad de búsqueda:** Filtra usuarios dinámicamente.
- **State management:** `user.facade.ts` gestiona el flujo de datos entre el servicio y la UI.
- **Lazy Loading:** La feature se carga de manera diferida mediante routing.
- **RxJS:** Uso de Observables para manejar datos de manera reactiva.

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
├── app/
│   ├── core/        # Configuraciones y servicios globales
│   ├── features/    # User Feature con tabla, búsqueda y state management
│   │   └── user-component/
│   │       ├── components/
│   │       ├── models/
│   │       ├── services/
│   │       ├── state/        # Facade
│   │       ├── user-component.ts
│   │       ├── user-component.html
│   │       ├── user-component.scss
│   │       └── user-component.routes.ts
│   ├── layout/      # Layout general de la app
│   ├── shared/      # Componentes y utilidades compartidas
│   └── util/        # Helpers y utilidades
├── environments/    # Configuración de entornos
├── assets/          # Recursos estáticos
└── docs/            # Capturas de pantalla y GIFs
  ```

## Getting Started
git clone
  ```bash
  https://github.com/JaredTc/Angular-Challenge.git
  ```
Instalar dependencias:
  ```bash
npm install
  ```
Ejecutar el proyecto:
  ```bash
ng serve
  ```

