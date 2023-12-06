# Endpoint: `GET /registros/{id}`

Permite obtener información detallada sobre un registro específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del registro que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /registros/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id": 1,
  "fecha": "2023-12-05",
  "ejercicios_id": 1,
  "no_series": 3,
  "reps": 12,
  "peso": 120,
  "notas": "buenas sensaciones"
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

## Notas Adicionales

- Asegurate de incluir un ID válido en la solicitud para obtener la información
  sobre un tema en específico.
