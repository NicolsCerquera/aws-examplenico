//llamar a la funcion para poder conectarme a la base de datos
import { connect } from '../database'

//Obtener todas las tareas
export const getTasks = async (req, res) => {
  //Me retorna el objeto de conexcion (connection)
  const connection = await connect();
  //Con el objeto de conexcion hago una consulta y me devuelve las filas con [row]
  const [rows] = await connection.query("SELECT * FROM tasks");
  //responde con un json
  res.json(rows);
}
//Obtener la tarea de una sola id
export const getTask = async (req, res) => {
  //Me retorna el objeto de conexcion (connection)
  const connection = await connect();
  //devuelve la consulta donde la id sea igual a la id pasada por parametros
  const [rows] = await connection.query("SELECT * FROM tasks WHERE id = ?", 
  [req.params.id,]);
  //respone con un archivo json y pasa el elemento en la posicion 0
  res.json(rows[0])
}
//Cuenta el numero de tareas que hay dentro de la base de datos
export const getTaskCount = async (req, res) => {
  //Me retorna el objeto de conexcion (connection)
  const connection = await connect();
  //Realiza la consulta contando cuantas filas hay en la tabla tasks
  const [rows] = await connection.query("SELECT COUNT(*) FROM tasks");
  //Responde con un json en la posicion 0 y solo me va a devolder el numero
  res.json(rows[0]["COUNT(*)"])
}
//Crea y guarda la tarea dentro de la base de datos
export const saveTask = async (req, res) => {
  //Me retorna el objeto de conexcion (connection)
  const connection = await connect();
  //Trae datos del cuerpo y hace una consulta para insertar datos en la base de datos
  const [result] = await connection.query("INSERT INTO tasks(title, description) VALUES (?,?)", [req.body.title, req.body.description]);
  //me responde con un archivo json con la tarea creada y guardada en la base de datos
  res.json({
    id: result.insertId,
    ...req.body
  });
}
//Elimina una tarea mediante un id
export const deleteTask = async (req, res) => {
  const connection = await connect();
  const result = await connection.query("DELETE FROM tasks WHERE id=?", [req.params.id,]);
  /* console.log(result);
  res.json({}); */
  res.sendStatus(204);
}
//Actualiza una tarea mediante un id
export const updateTask = async (req, res) => {
  const connection = await connect();
  const result = await connection.query("UPDATE tasks SET ? WHERE id=?", [
    req.body, 
    req.params.id
  ]);
  /* console.log(result); */
  res.sendStatus(204);
}