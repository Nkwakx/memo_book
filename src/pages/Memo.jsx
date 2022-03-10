import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Title from './../components/Title';
import { AiOutlineCheck } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";



function MemoForm({ addTodo }) {
    const [values, setValues] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!values) return;
        addTodo(values);
        setValues("");
    };

    return (
        <form className="toDoForm" onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Enter todo..."
                value={values}
                onChange={(e) => setValues(e.target.value)}
            />
            <button className="btn-addMemo" type="submit">Save</button>

        </form>
    );
}


function Display({ todo, isComplete, handleDelete, handleEdit, }) {

    const [newValues, setNewValues] = useState(todo.text);

    const handleChange = (e) => {
        e.preventDefault();
        if (todo.isDone === true) {
            setNewValues(todo.text);
        } else {
            todo.text = "";
            setNewValues(e.target.text);
        }
    };
    return (
        <div className="todo">
            <input
                style={{ textDecoration: todo.isDone && "line-through" }}
                type="text"
                value={todo.text === "" ? newValues : todo.text}
                onChange={handleChange}
            />
            <div>
                <button
                    className="button-complete"
                    onClick={() => isComplete(todo)}
                >
                    <AiOutlineCheck id="i" />
                </button>
                <button
                    className="button-edit"
                    onClick={() => handleEdit(todo.id, todo.text)}
                >
                    <MdEdit id="i" />
                </button>
                <button className="button-delete" onClick={() => handleDelete(todo.id)}>
                    <MdDelete id="i" />
                </button>
            </div>
        </div>
    );
}




function Memo() {
    const [todos, setTodos] = useState([]);
    const [editMemo, setEditMemo] = useState("");

    useEffect(() => {}, [todos])


    const addTodo = text => {
        const newTodos = [...todos, {id: Date.now(), text, isDone:false }];
        setTodos(newTodos);
    };

    const isComplete = index => {
        setTodos(
            todos.map((item) =>{
                if(item.id === index.id)
                {
                    return {...item, isDone: !item.isDone}
                }
                return item;
            })
        )
    };
    const handleEdit = ({id}) =>{
        
        const findById = todos.find((todo) => todo.id === id, { text: todos.text });
        setEditMemo(findById);
    }

    const handleDelete = ({id}) => {
        const newTodos = [...todos];
        newTodos.splice(id, 1);
        setTodos(newTodos);
    };

    return (
        <div className="App">
            <NavBar />
            <div>
                <Title />
            </div>
            <div>
                <MemoForm addTodo={addTodo} />
            </div>

            <div className="memo-book">
                <div className="todo_container">
                    {todos.map((todo, index) => (
                        <Display
                            key={todo.index}
                            todo={todo}
                            isComplete={isComplete}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Memo;