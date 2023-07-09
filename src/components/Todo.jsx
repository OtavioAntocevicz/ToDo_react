const Todo = ({ todo, completeTodo, removeTodo }) => {
    return (
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        <div className="content">
          <p>{todo.text}</p>
          <p className="category">({todo.category})</p>
        </div>
        <div>
          {
            !todo.isCompleted ?
            <button className="complete" onClick={() => completeTodo(todo.id)}>
              Completar
            </button> :
            <button className="uncomplete" onClick={() => completeTodo(todo.id)}>
              Decompletar
            </button>
            } 
          <button className="remove" onClick={() => removeTodo(todo.id)}>
            x
          </button>
        </div>
      </div>
    );
  };
  
  export default Todo;
  