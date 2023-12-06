# Endpoint: `POST /usuarios`

Recibe una petición para crear un recurso usuarios.

## Ejemplo de Solicitud
```http
    POST /usuarios
    Content-Type: application/json
    {"nombre":"diego"}
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "status": 201,
    "message": "Created"
}
```

## Respuestas de Errores Posibles
- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ``` 