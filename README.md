# Hackathon - Refuerzo
Este proyecto fue desarrollado como parte de la hackatón "Desafío Full Stack: Construyendo Aplicaciones con MERN y PostgreSQL". El objetivo principal de esta hackatón es brindar una oportunidad para aprender y aplicar tecnologías modernas como MongoDB, Express, React y
Node.js (MERN stack) junto con PostgreSQL en un entorno colaborativo.

### Funciones principales implementadas

-   Permite agregar nuevos proyectos con un nombre, descripción y estado.
    
-   Recupera y muestra una lista de todos los proyectos almacenados en MongoDB.
    
-  Permite agregar nuevas actividades asociadas a un proyecto específico.
    
-   Recupera y muestra todas las actividades relacionadas con un proyecto específico.

  ### Tecnologías Utilizadas

-   **Frontend:** React.js
- **Backend:** Node.js, Express.js
-   **Bases de Datos:**  PostgreSQL para la gestión de proyectos y MongoDB para las actividades.
## Cómo ejecutar el proyecto

### Prerrequisitos
-  [Node.js](https://nodejs.org/) - Entorno de ejecución de JavaScript 
-  [MongoDB](https://www.mongodb.com/) - Base de datos NoSQL
- [PostgreSQL](https://www.postgresql.org/) - Base de datos

### Instalación
1. Clona el repositorio:
   ```bash
   git clone https://github.com/JDSCast/hackathon.git
   cd hackathon
2. Instala las dependencias de las carpetas de back-end y front-end:
   ```bash 
   npm install 
3. Configura las variables de entorno: Crea un archivo `.env` en la raíz del proyecto y define las siguientes variables (predeterminadas son estas):

	```bash
			PORT=5000
			MONGO_URL=mongodb://localhost:27017/hackathon
			POSTGRES_USER='postgres'
			POSTGRES_HOST='localhost'
			POSTGRES_DB='hackathon_postgres'
			POSTGRES_PASSWORD='admin'
			POSTGRES_PORT=5432

	Nota: recuerda crear en la base de datos de PostgresSQL con el mismo nombre de  POSTGRES_DB
4. Inicia el servidor (en la carpeta backend):
	```bash
	npx nodemon servidor.js
5. Inicia el proyecto (en la carpeta frontend):
	 ```bash
	 npm start
