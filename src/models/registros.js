const { connectMysql } = require('../dbconnection');
class RegistrosModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('registros');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('registros').where('id', id);
    }

    // Post 
    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('registros').insert(datos).returning('id');
        return result[0];
    }

    // Patch
    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('registros').where('id', id).update(campos);
    }
}

module.exports = RegistrosModel;