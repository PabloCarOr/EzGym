const EjerciciosModel = require('../models/ejercicios');

    /**
     * Recupera una colección de valores de un recurso:
     * 
     * ```http
     *   GET /temas
     *   Accept: application/json
     * ```
     */
class EjerciciosController {
    static async indexGet(req, res) {
        let data = await EjerciciosModel.consultar();
        res.send(data);

    /**
     * Recupera el valor de un recurso individual:
     * 
     * ```http
     *   GET /temas/{id}
     *   Accept: application/json
     * ```
     */
    }
    static async itemGet(req, res) {
        let id = req.params.id;
        let data = await EjerciciosModel.consultarPorId(id);
        if (data.length == 0) {
            res.status(404).send({errno: 404, error: 'Not found'});
            return;
        }
        res.send(data[0]);
    }

     /**
     * Recibe una petición para crear un recurso:
     * 
     * ```http
     *   POST /temas
     *   Content-Type: application/json
     *
     *   {"nombre":"Nuevo tema"}
     * ```
     */
     static async indexPost(req, res) {
        try {
            const newData = req.body;

            const insertedId = await EjerciciosModel.insertar(newData);

            res.status(201)
                .header('Location', `/ejercicios/${insertedId}`)
                .send({status: 201, message: 'Created'});
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }

        /**
     * Recibe una petición para actualizar parte de un recurso:
     * 
     * ```http
     *   PATCH /temas/{id}
     *   Content-Type: application/json
     * 
     *   {"nombre": "Nuevo nombre del tema"}
     * ```
     */
        static async itemPatch(req, res) {
            try {
                const id = req.params.id;
                const updatedFields = req.body;
    
                const result = await EjerciciosModel.actualizar(id, updatedFields);
    
                if (result === 0) {
                    res.status(404).send({ errno: 404, error: 'Not found' });
                } else {
                    res.send({ message: 'Successfull partial update'});
                }
            } catch (error) {
                console.error(error);
                res.status(400).send({ errno: 400, error: 'Bad Request' });
            }
        }
}

module.exports = EjerciciosController;