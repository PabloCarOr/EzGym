const { connectMysql } = require('../dbconnection');
class UsuariosModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('usuarios');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('usuarios').where('id', id);
    }
    // POST
    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('usuarios').insert(datos).returning('id');
        return result[0];
    }

    //PUT
    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id'] = id;
        await db('usuarios').where('id', id).del();
        await db.insert(newData).into('usuarios');
        return id;
    }

    //PATCH
    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('usuarios').where('id', id).update(campos);
    }

}

module.exports = UsuariosModel;
