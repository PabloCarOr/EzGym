# Endpoint: `POST /registros`

Recibe una petición para crear un recurso registros.

## Ejemplo de Solicitud
```http
    POST /registros
    Content-Type: application/json
    {"fecha": "2023-12-05"}
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