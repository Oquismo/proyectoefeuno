const bd = require ('../conexion/db')

const escuderiaController={

traerEscuderia(req,res){
    
    bd.query('SELECT * FROM  escuderia',(err, results)=>{

        if (err){
            console.log(err);
        }

      res.json(results).status(200);
    })

}


}


module.exports = escuderiaController