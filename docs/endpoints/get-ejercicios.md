# Endpoint: `GET /ejercicios`

Permite obtener información sobre todos los ejercicios registrados.

## Ejemplo de Solicitud
```http
GET /ejercicios/
```

## Respuesta Exitosa (Código 200 OK)
```json
{
"id": 1,
"nombre": "squat",
"categoria": "tren inferior",
"descripcion": "Trabaja directamente los músculos del muslo, músculos de la cadera y glúteos"
},
{
"id": 2,
"nombre": "Press banca",
"categoria": "Tren superior",
"descripcion": "El press de banca activa los músculos del pecho, sobre todo el músculo pectoral mayor"
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