# Ecommerce Backend

Este es el backend de un sistema de ecommerce. Está construido usando Node.js, Express y Prisma, y se conecta a una base de datos PostgreSQL. La aplicación permite la creación de productos, usuarios, y gestión de pedidos y carritos.

## Tecnologías utilizadas

- **Node.js**: Entorno de ejecución para JavaScript.
- **Express**: Framework para construir el servidor HTTP.
- **Prisma**: ORM para interactuar con la base de datos.
- **PostgreSQL**: Base de datos relacional.

## Endpoints disponibles

### Productos

- **POST /api/products**: Crear un nuevo producto.
    - Requiere un cuerpo JSON con los siguientes campos:
      ```json
      {
        "name": "Nombre del producto",
        "price": 100.00,
        "description": "Descripción del producto",
        "stock": 50,
        "sku": "1815136"
      }
      ```

### Base de datos

El proyecto usa **Prisma** como ORM para interactuar con una base de datos PostgreSQL.

### Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tuusuario/ecommerce-backend.git
    ```

2. Instala las dependencias:
    ```bash
    cd ecommerce-backend
    npm install
    ```

3. Configura las variables de entorno:
    - Crea un archivo `.env` en la raíz del proyecto y define la variable `DATABASE_URL` con la conexión a tu base de datos PostgreSQL:
      ```env
      DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/ecommerce"
      ```

4. Ejecuta las migraciones:
    ```bash
    npx prisma migrate dev
    ```

5. Inicia el servidor:
    ```bash
    npm run dev
    ```

El servidor se ejecutará en el puerto `5000` por defecto.
