import { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table"; 
import './style.css'

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
      console.log(response);
      setTodos(response.data);
    });
  }, []);

const todoList = todos.map((todo, index) => (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.userId}</td>
      <td>{todo.title}</td>
      <td 
      className={todo.completed ? 'completed' : 'not-completed'}>
        {todo.completed ? 'Completed' : 'Not Completed'}
        </td>
    </tr>
  ))

  return (
    <>
      <p className='title'>Todo List</p>
      <Table striped="columns" bordered hover >  
        <tr>
          <th className="table-head">S.N</th>
          <th className="table-head">User Id</th>
          <th className="table-head">Name</th>
          <th className="table-head">Status</th>
        </tr>
        {todoList}
      </Table>
    </>
  );
};

export default TodoList;
