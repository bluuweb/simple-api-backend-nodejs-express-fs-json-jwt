# Simple API JWT

API para consumir un servicio de Auth con JWT.

## Endpoints

### Pizzas

```sh
GET /api/pizzas
```

### Auth

```sh
POST /api/auth/login
POST /api/auth/register
```

body:

```json
{
  "email": "test@example.com",
  "password": "123123"
}
```

## JWT

Para obtener el token JWT, se debe hacer una petición a `/api/auth/login` o a `/api/auth/register` con el body correspondiente.

El token JWT se debe enviar en el header `Authorization` de la siguiente manera:

```sh
Authorization Bearer token_jwt
```

Ejemplo con fetch:

```js
fetch("http://localhost:3000/api/pizzas", {
  headers: {
    Authorization: "Bearer token_jwt",
  },
  body: JSON.stringify({
    email: "test@example.com",
    password: "123123",
  }),
});
```
