import React, { useReducer, useState } from "react";
import "./Todo.css";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";

const Todo = () => {
  let dispatch = useDispatch();
  let arr = [];
  let [inptValue, setInptValue] = useState("");
  let [id, setId] = useState("");
  // let [todo, dispatch] = useReducer(reducer, arr);
  
  let count =useSelector((state)=>{
return state;
  });

  function reducer(state, action) {
    switch (action?.type) {
      case "ADD_TODO":
        return [...state, { id: uuidv4(), name: action?.payload }];

      case "UPDATE_TODO":
        return state.map((e) => {
          if (e?.id === action?.payload?.id) {
            return {
              ...e,
              name: action?.payload?.name,
            };
          } else {
            return e;
          }
        });

      case "DEL_TODO":
        return state.filter((e) => {
          return e?.id !== action?.payload;
        });

      default:
        return state;
    }
  }

  function getInptValue(e) {
    setInptValue(e.target.value);
  }

  let addTodo = () => {
    if (id) {
      dispatch({ type: "UPDATE_TODO", payload: { id, name: inptValue } });
      setId("");
    } else {
      dispatch({ type: "ADD_TODO", payload: inptValue });
    }
    setInptValue("");
  };

  let deleteTodo = (id) => {
    dispatch({ type: "DEL_TODO", payload: id });
  };

  let updateTodo = (obj) => {
    setInptValue(obj?.name);
    setId(obj?.id);
  };

  
  return (
    // <div className="todo-container">
    //   <div className="todo-main">
    //     <h1 className="todo-heading">Todo List</h1>
    //     <div className="todo-input">
    //       <div>
    //         <label>Todo Name : </label>
    //         <input
    //           type="text"
    //           value={inptValue}
    //           onChange={(e) => getInptValue(e)}
    //         />
    //       </div>
    //       <div>
    //         <button onClick={addTodo}>{id ? "Update Todo" : "Add Todo"}</button>
    //       </div>
    //     </div>
    //   </div>
    //   <hr />
    //   <div className="todo-list-ul">
    //     <ul className="todo-list">
    //       {todo.map((e) => (
    //         <>
    //           <li key={e?.id}>
    //             <span className="list-name">{e?.name}</span>
    //             <span>
    //               <button className="update-btn" onClick={() => updateTodo(e)}>
    //                 Update
    //               </button>
    //               <button
    //                 className="delete-btn"
    //                 onClick={() => deleteTodo(e?.id)}
    //               >
    //                 Delete
    //               </button>
    //             </span>
    //           </li>
    //           <hr />
    //         </>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
    <>
    <h1>{count} from todo</h1>
    <button onClick={()=>dispatch({type:"INCREMENT"})}>incFromTodo</button>
    </>
  );
};

export default Todo;
