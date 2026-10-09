# GameHub - Evaluación Final Transversal

## Descripción

GameHub es una aplicación web de eCommerce orientada a la venta de videojuegos, desarrollada como proyecto de **Evaluación Final Transversal (EFT)** para la asignatura **Desarrollo Frontend I (PFY2201)**.

El proyecto integra los principales contenidos trabajados durante el curso: **HTML5, CSS3, JavaScript, Bootstrap 5 y React**. La aplicación permite visualizar un catálogo dinámico de videojuegos, buscar productos, filtrar por categoría, administrar un carrito de compras, consultar detalles mediante un modal y utilizar un formulario de contacto con validación.

Además, incorpora una API REST sencilla desarrollada con **Node.js y Express** para cargar inicialmente los videojuegos desde un archivo JSON.

---

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- React
- Vite
- JSX
- Bootstrap 5
- Node.js
- Express
- API REST
- Fetch API
- Git y GitHub

---

## Funcionalidades principales

La aplicación incluye:

- Catálogo dinámico de videojuegos.
- Carga inicial de productos desde una API REST.
- Archivo JSON local como respaldo si la API no está disponible.
- Tarjetas responsivas con imagen, nombre, categoría, descripción y precios.
- Búsqueda dinámica por nombre.
- Filtro por categoría.
- Generación automática de categorías a partir de los videojuegos disponibles.
- Agregar videojuegos al catálogo durante la ejecución.
- Eliminar videojuegos del catálogo durante la ejecución.
- Agregar y eliminar productos del carrito.
- Contador de productos mediante Badge.
- Cálculo automático del total del carrito.
- Cambio dinámico del botón `Agregar al carrito` por `✓ En el carrito`.
- Modal con información detallada del videojuego.
- Toast de confirmación al agregar un producto al carrito.
- Mensaje cuando el carrito está vacío.
- Mensaje cuando una búsqueda o filtro no encuentra resultados.
- Formulario de contacto con validación de nombre, correo electrónico y mensaje.
- Mensajes de error y confirmación mediante renderizado condicional.
- Diseño responsivo utilizando Bootstrap 5.
- Navegación entre las distintas secciones del sitio.

> Los videojuegos agregados o eliminados desde la interfaz se gestionan mediante el estado de React durante la sesión actual. Al recargar la página, el catálogo vuelve a cargarse desde la API REST o desde el archivo JSON de respaldo.

---

## Arquitectura general

El catálogo inicial se obtiene desde el backend mediante una API REST.

```text
backend/data/productos.json
          |
          v
     Express / Node.js
          |
          v
   GET /api/productos
          |
          v
       fetch()
          |
          v
      useEffect()
          |
          v
      useState()
          |
          v
 Componentes React
```

En desarrollo local, el frontend intenta obtener los datos desde:

```text
http://localhost:3000/api/productos
```

Si la API REST no se encuentra disponible, utiliza como respaldo:

```text
public/data/productos.json
```

---

## Estructura del proyecto

```text
EFT_Frontend_I_GameHub/
|
├── backend/
│   ├── data/
│   │   └── productos.json
│   ├── app.js
│   ├── package.json
│   └── package-lock.json
|
├── evidencias/
|
├── public/
│   ├── data/
│   │   └── productos.json
│   ├── img/
│   │   ├── cyberpunk2077.jpg
│   │   ├── diablo4.jpg
│   │   ├── hades.jpg
│   │   ├── helldivers2.jpg
│   │   ├── minecraft.jpg
│   │   └── silksong.jpg
│   ├── favicon.svg
│   └── icons.svg
|
├── src/
│   ├── assets/
│   │   └── hero.png
│   ├── components/
│   │   ├── CartToast.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── GameForm.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Offers.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductList.jsx
│   │   ├── ProductModal.jsx
│   │   ├── SearchBar.jsx
│   │   └── ShoppingCart.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
|
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

La aplicación se encuentra dividida en componentes reutilizables para mantener el código modular y facilitar su mantenimiento.

---

## Componentes React

### Header

Contiene la barra de navegación principal y el Badge con la cantidad de productos agregados al carrito.

### Hero

Presenta la sección principal de bienvenida de GameHub.

### SearchBar

Permite buscar videojuegos dinámicamente por nombre.

### CategoryFilter

Genera las categorías disponibles desde el catálogo y permite filtrar los videojuegos utilizando estado y props.

### ProductList

Recibe la lista de videojuegos filtrados y genera dinámicamente las tarjetas mediante `map()`.

### ProductCard

Muestra los datos de cada videojuego y permite:

- Ver detalle.
- Agregar al carrito.
- Mostrar si ya está en el carrito.
- Eliminar el videojuego del catálogo.

### GameForm

Permite agregar nuevos videojuegos al catálogo durante la ejecución de la aplicación.

### ShoppingCart

Muestra los productos seleccionados, permite eliminarlos y calcula el valor total mediante `reduce()`.

### ProductModal

Muestra información detallada del videojuego seleccionado mediante un Modal de Bootstrap.

### CartToast

Muestra una notificación temporal cuando un videojuego es agregado al carrito.

### Contact

Implementa el formulario de contacto con validación de nombre, correo electrónico y mensaje.

### Offers y Footer

Complementan la estructura visual y semántica del sitio.

---

## Gestión de estado con useState

La aplicación utiliza `useState` para administrar información dinámica, entre ella:

```javascript
const [juegos, setJuegos] = useState([]);
const [carrito, setCarrito] = useState([]);
const [busqueda, setBusqueda] = useState("");
const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");
const [cargando, setCargando] = useState(true);
const [error, setError] = useState(null);
const [juegoSeleccionado, setJuegoSeleccionado] = useState(null);
const [mensajeToast, setMensajeToast] = useState("");
```

También se utilizan estados locales dentro de componentes como `Contact` y `GameForm` para manejar formularios y validaciones.

---

## Carga de datos con useEffect

`useEffect` se utiliza para cargar el catálogo cuando inicia la aplicación.

La solicitud principal se realiza mediante:

```javascript
fetch("http://localhost:3000/api/productos")
```

Los datos recibidos se almacenan utilizando:

```javascript
setJuegos(datos);
```

Si la API no responde, la aplicación intenta cargar el archivo JSON local ubicado en `public/data/productos.json`.

---

## Filtro por categoría

Las categorías se generan automáticamente a partir de los géneros presentes en el catálogo:

```javascript
const categorias = [
  "Todas",
  ...new Set(juegos.map((juego) => juego.genero)),
];
```

El filtro por categoría puede utilizarse en conjunto con la búsqueda por nombre.

---

## Gestión dinámica del catálogo

La aplicación permite agregar y eliminar videojuegos utilizando el estado de React.

Al agregar un videojuego se actualiza `juegos` con `setJuegos()`.

Al eliminar un videojuego se utiliza `filter()` para removerlo de la lista actual.

Estos cambios son temporales y corresponden a la sesión actual del navegador.

---

## Formulario de contacto

El formulario contiene los campos:

- Nombre.
- Correo electrónico.
- Mensaje.

Antes de aceptar el envío se valida que:

- El nombre no esté vacío.
- El correo tenga un formato válido.
- El mensaje no esté vacío.

Si existe un error se muestran mensajes de validación. Cuando los datos son correctos se muestra un mensaje de confirmación y se limpian los campos.

---

## Renderizado condicional

La aplicación utiliza renderizado condicional para mostrar distintos elementos según el estado.

Algunos ejemplos:

```text
Cargando videojuegos...
```

```text
No fue posible cargar el catálogo de videojuegos.
```

```text
El carrito está vacío.
```

```text
No se encontraron videojuegos.
```

El botón de cada producto también cambia dinámicamente:

```text
Agregar al carrito
```

por:

```text
✓ En el carrito
```

---

## Métodos de JavaScript utilizados

### map()

Permite recorrer el catálogo y generar las tarjetas de videojuegos.

### filter()

Se utiliza para:

- Buscar videojuegos.
- Filtrar por categoría.
- Eliminar videojuegos del catálogo.
- Eliminar productos del carrito.

### reduce()

Permite calcular el precio total de los productos agregados al carrito.

### some()

Permite comprobar si un videojuego ya se encuentra en el carrito.

### Set

Se utiliza para obtener categorías únicas a partir de los géneros del catálogo.

---

## Instalación y ejecución

### Requisitos

Se recomienda tener instalado:

- Node.js
- npm
- Git

### 1. Clonar el repositorio

```bash
git clone https://github.com/Johanromanque/EFT_Frontend_I_GameHub.git
```

Ingresar al proyecto:

```bash
cd EFT_Frontend_I_GameHub
```

### 2. Instalar dependencias del frontend

```bash
npm install
```

### 3. Ejecutar el frontend

```bash
npm run dev
```

Vite mostrará la dirección local, normalmente:

```text
http://localhost:5173/
```

### 4. Instalar dependencias del backend

Abrir otra terminal:

```bash
cd backend
npm install
```

### 5. Ejecutar la API REST

```bash
node app.js
```

La API estará disponible en:

```text
http://localhost:3000/api/productos
```

---

## Pruebas realizadas

Durante el desarrollo se comprobaron las siguientes funcionalidades:

- Carga del catálogo.
- API REST.
- Archivo JSON de respaldo.
- Búsqueda por nombre.
- Filtro por categoría.
- Combinación de búsqueda y categoría.
- Agregar videojuegos al catálogo.
- Eliminar videojuegos del catálogo.
- Agregar productos al carrito.
- Eliminar productos del carrito.
- Badge del carrito.
- Cálculo del total.
- Modal de detalle.
- Toast de confirmación.
- Carrito vacío.
- Formulario de contacto vacío.
- Validación de correo electrónico.
- Mensaje de envío correcto.
- Visualización en escritorio.
- Diseño responsive en dispositivos móviles.

El proyecto también se verifica mediante:

```bash
npm run build
```

para comprobar que la aplicación pueda generar correctamente una versión de producción.

---

## Repositorio

Repositorio público del proyecto:

https://github.com/Johanromanque/EFT_Frontend_I_GameHub

---

## GitHub Pages

La aplicación será publicada mediante GitHub Pages.

```text
PENDIENTE_ACTUALIZAR_GITHUB_PAGES
```

---

## Evidencias

Las capturas finales de funcionamiento serán incorporadas en la carpeta:

```text
evidencias/
```

antes de realizar la entrega definitiva.

---

## Autor

**Johan Romanque**

Desarrollo Frontend I - PFY2201  
Duoc UC  
Evaluación Final Transversal
