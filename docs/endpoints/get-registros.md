# Endpoint: `GET /registros`

Permite obtener información sobre todos los registros registrados.

## Ejemplo de Solicitud
```http
GET /registros/
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
},
{
"id": 3,
"fecha": "06/12/23",
"ejercicios_id": 3,
"no_series": 3,
"reps": 8,
"peso": 80,
"notas": "buena técnica y ejecución"
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