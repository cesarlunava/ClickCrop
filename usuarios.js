const connection = require("./conexion");

const obtenerUsuarios = async (req, res) => {
    if (!req.session.usuario){
        res.status(401).send('No autorizado')
        return
    }
    
    try {
        const [results, fields] = await connection.query(
            "SELECT * FROM `usuarios`"
        );
        res.status(200).json(results)

        console.log(resuls);
        console.log(fields);
    } catch (err) {
        console.log(err);
        res.status(500),send('Error en el servidor')
    }
}

const eliminarUsuarios = async (req, res) => {
    if(!req.session.usuario) {
        res.status(401).send('No autorizado')
        return
    }
    const datos = req.query;

    try {
        const [results, fields] = await connection.query(
            "DELETE FROM usuarios WHERE `usuarios`.`id` = ?",
            [datos.id]
        );
        if (results.affectedRows > 0) {
            res.status(200).send('Usuario eliminado')
        } else {
            res.status(401).send('No se pudo eliminar')
        }

        console.log(results);
        console.log(fields);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error en el servidor')
    }
}
module.exports = {obtenerUsuarios, eliminarUsuarios};