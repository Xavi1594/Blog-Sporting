# Blog - EL BALÓN DE GIJÓN
## Resultado final 
![Alt text](<captura 1.png>)
![Alt text](<captura 2.png>)
![Alt text](<captura 3.png>)
![Alt text](<captura 4.png>)
![Alt text](<captura 5.png>)



## Descripción y navegación
- El proyecto trata de un blog para seguir la actualidad del Real Sporting de Gijón, mediante entradas en el blog.
- Se trata de un blog sencillo con un sistema CRUD (Create, Read, Update, Delete). Al entrar a la web se muestra la feed con todos los posts disponibles. En la parte superior, hay un botón para añadir una nueva entrada que redirige a la vista correspondiente. Haciendo clic en la foto o el título de una entrada, se puede ver el post en detalle. Dentro de la vista individual de cada post, hay dos botones: uno rojo para borrar la entrada y otro azul para editarla. En la vista de edición se pueden modificar los campos y guardar los cambios.

## Tecnologías utilizadas

- Frontend: React con Bootstrap para el diseño y la interfaz de usuario.

- Backend: Node.js con Express y MySQL para la base de datos.

## Dependencias

- Backend
- body-parser: ^1.20.2
- cors: ^2.8.5
- express: ^4.18.2
- express-session: ^1.17.3
- express-validator: ^7.0.1
- fs: ^0.0.1-security
- morgan: ^1.10.0
- multer: ^1.4.5-lts.1
- mysql: ^2.18.1
- mysql2: ^3.2.3
- nodemon: ^2.0.22 (devDependency)
- Frontend
- @testing-library/user-event: ^13.5.0
- bootstrap: ^5.3.0
- react-bootstrap-icons: ^1.10.3
- react-router-dom: ^6.14.0
- react-scripts: 5.0.1
- web-vitals: ^2.1.4
- @testing-library/jest-dom: ^5.16.5 (devDependency)
- @testing-library/react: ^14.0.0 (devDependency)
- jest-fetch-mock: ^3.0.3 (devDependency)

## Arquitectura del proyecto

La estructura del proyecto se organiza en dos carpetas principales:

- Carpeta "backend": Contiene los controladores, las rutas, el archivo principal "index.js" para la configuración del servidor y la conexión a la base de datos.

- Carpeta "frontend": Contiene los componentes y archivos principales de React. En la carpeta "src" se encuentran los componentes reutilizables, las páginas principales, el enrutador principal y las pruebas correspondientes al frontend del proyecto.

Con esta estructura, el proyecto se organiza de manera modular y escalable, separando claramente el backend y frontend. Esto facilita el desarrollo, el mantenimiento y la adición de nuevas funcionalidades.

## Instalación y configuración

1. Clona el repositorio: `git clone https://github.com/tu_usuario/tu_repositorio.git`
2. Ve al directorio del backend: `cd backend`
3. Instala las dependencias: `npm install`
4. Configura la conexión a la base de datos en el archivo `.env`
5. Inicia el servidor: `npm start`
6. Ve al directorio del frontend: `cd frontend`
7. Instala las dependencias: `npm install`
8. Inicia la aplicación: `npm start`
9. Abre tu navegador y ve a `http://localhost:3000`

## Test
1. Para lanzar los test utiliza el comando `npm test`

## Autor
- Xavier Villaverde 
