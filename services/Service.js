import Dao from "../Dao/Dao.js";

class Service{
alumnos=new Dao();   //CAMBIAR "dao/alumnos" POR NOMBRE DE LO PEDIDO
getAll= async() => {
    const data = this.alumnos.getAll();
    return data;
  };
create= async(params) => {
    const data = this.alumnos.create(params);
    return data;
  };
}

export default Service;
