# Endpoint: `PATCH /ejercicios`

Recibe una petición para actualizar parte de un recurso ejercicios.

## Ejemplo de Solicitud
```http
    PATCH /ejercicios/{id}
    Content-Type: application/json
    {"nombre": "Nuevo nombre del ejercicio"}
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