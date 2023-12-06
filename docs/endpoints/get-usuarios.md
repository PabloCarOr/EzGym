# Endpoint: `GET /usuarios`

Permite obtener información sobre todos los usuarios registrados.

## Ejemplo de Solicitud
```http
GET /usuarios/
```

## Respuesta Exitosa (Código 200 OK)
```json
{
"id": 1,
"nombre": "pablo",
"correo": "carrillo@gmail.com",
"password": "123"
},
{
"id": 2,
"nombre": "Pumas",
"correo": "0",
"password": "0"
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "Not found."
  }
  ```

- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ``` 