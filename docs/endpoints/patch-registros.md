# Endpoint: `PATCH /registros`

Recibe una petición para actualizar parte de un recurso registros.

## Ejemplo de Solicitud
```http
    PATCH /registros/{id}
    Content-Type: application/json
    {"notas": "buenas sensaciones"}
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "message": "Successfull partial update"
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