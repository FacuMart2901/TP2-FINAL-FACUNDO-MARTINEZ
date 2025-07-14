import { v4 as uuidv4 } from 'uuid';
class Dao{
data = []

getAll=async() => {
    return this.data;
  };//ACA HAY QUE PONER LOS METODOS (GETBYID, POST)
create= async(params) => {
const info={
    id: uuidv4(),
    nombre: params.nombre,
}
   this.data.push(info)
    return info;
  }
}

export default Dao;
