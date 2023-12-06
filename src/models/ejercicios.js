const { connectMysql } = require('../dbconnection');
class EjerciciosModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('ejercicios');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('ejercicios').where('id', id);
    }
    //POST 
    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('ejercicios').insert(datos).returning('id');
        return result[0];
    }
    // PATCH
    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('ejercicios').where('id', id).update(campos);
    }
}

module.exports = EjerciciosModel;