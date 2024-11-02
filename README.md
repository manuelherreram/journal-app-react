# JournalApp - Proyecto Final

**JournalApp** es una aplicación de diario personal que permite a los usuarios autenticados gestionar sus entradas, incluyendo la creación, edición, eliminación y la capacidad de subir archivos asociados. Este proyecto fue desarrollado como parte del curso **React: De Cero a Experto** de Fernando Herrera en [DevTalles](https://cursos.devtalles.com/courses/react-cero-experto).

## Características Principales

- **Autenticación segura** con **Firebase** y soporte para **Google SignIn**.
- **Gestión de estado avanzada** utilizando **Redux** y **Redux Toolkit**.
- **CRUD completo** para las entradas de diario, interactuando con **Firestore**.
- **Subida de archivos con Cloudinary** para adjuntar imágenes a las entradas.
- **Manejo de rutas protegidas y públicas**.
- **Persistencia de sesión** y limpieza del estado al cerrar sesión.
- **Interfaz de usuario intuitiva** con animaciones y mejoras visuales.
- **Despliegue en Vercel**: [Accede a la aplicación aquí](https://journal-app-pi-ecru.vercel.app/).

## Tecnologías Utilizadas

- **React** con **Vite** para una experiencia de desarrollo rápida.
- **Redux** para la gestión global del estado y **Redux Devtools** para depuración.
- **Firebase** para autenticación y **Firestore** para almacenamiento en la nube.
- **Redux Thunk** para manejar acciones asíncronas.
- **CSS Animations** para mejorar la experiencia de usuario.
- **Yarn** como gestor de paquetes.

## Instalación y Ejecución

1. Clona el repositorio:

```bash
git clone https://github.com/manuelherreram/journal-app-react.git
```

2. Navega al directorio del proyecto:

```bash
cd journal-app-react
```

3. Instala las dependencias:

```bash
yarn install
```

o con NPM:

```bash
npm install
```

4. Configura las variables de entorno para **Firebase** (ver `.env.example`).

5. Inicia la aplicación en modo desarrollo:

```bash
yarn dev
```

La aplicación estará disponible en [http://localhost:5173](http://localhost:5173).

## Funcionalidades Destacadas

- **Manejo de autenticación**: Inicio y cierre de sesión, con persistencia del estado de autenticación.
- **CRUD eficiente**: Interacción fluida con la base de datos Firestore para la gestión de entradas.
- **Subida de archivos**: Permite al usuario cargar imágenes y visualizarlas en las entradas.
- **Diseño limpio y responsive** para una experiencia de usuario agradable en múltiples dispositivos.

## Despliegue

La aplicación está desplegada en **Vercel** y se puede ver en el siguiente enlace:
[JournalApp en Vercel](https://journal-app-pi-ecru.vercel.app/).

## Contribuciones

Si deseas contribuir, haz un fork del repositorio y abre un pull request con tus cambios.

## Licencia

Este proyecto está bajo la licencia MIT.

---

Desarrollado por [Manuel Herrera](https://www.linkedin.com/in/manuelherreramontoya/).
