import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Title from './../components/Title';
import { AiOutlineCheck } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";


function MemoForm({ addMemo }) {
    const [values, setValues] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!values) return;
        addMemo(values);
        setValues("");
    };

    return (
        <form className="memoForm" onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Enter memo..."
                value={values}
                onChange={(e) => setValues(e.target.value)}
            />
            <button className="btn-addMemo" type="submit">Save</button>

        </form>
    );
}


function Display({ memo, isComplete, handleDelete, handleEdit }) {

    const [newValues, setNewValues] = useState(memo.text);

    return (
        <div className="memo" key={memo.id}>
            <input
                style={{ textDecoration: memo.isDone && "line-through" }}
                type="text"
                value={newValues}
                onChange={(e) => setNewValues(e.target.value)}
            />
            <div>
                <button
                    className="button-complete"
                    onClick={() => isComplete(memo.id, !memo.isDone)}
                >
                    <AiOutlineCheck id="i" />
                </button>
                <button
                    className="button-edit"
                    onClick={() => handleEdit(memo.id, newValues)}
                >
                    <MdEdit id="i" />
                </button>
                <button className="button-delete" onClick={() => handleDelete(memo.id)}>
                    <MdDelete id="i" />
                </button>
            </div>
        </div>
    );
}

function Memo() {
    const [memos, setMemos] = useState([]);

    useEffect(() => { }, [memos])


    const addMemo = text => {
        const newMemos = [...memos, { id: new Date().getTime(), text, isDone: false }];
        setMemos(newMemos);
    };

    const isComplete = (index, newValue) => {
        let copy = [...memos]
        copy.map((item) => {
            if (item.id === index) {

                item.isDone = newValue
                return item
                // return { ...item, isDone:newValue }
            }
            return item;
        })


        setMemos(copy)
    };

    const handleEdit = (index, newText) => {
        let copy = [...memos]

        copy.map((item) => {
            console.log(index, newText, "ITEM", item)
            if (item.id === index) {
                item.text = newText
                return item
            } else {
                return copy;
            }
        });

        console.log("copy with change", copy)
        setMemos(copy)
    }

    const handleDelete = ({ id }) => {
        const newMemos = [...memos];
        newMemos.splice(id, 1);
        setMemos(newMemos);
    };

    return (
        <div className="App">
            <NavBar />
            <div>
                <Title />
            </div>
            <div>
                <MemoForm addMemo={addMemo} />
            </div>

            <div className="memo-book">
                <div className="memo_container">
                    {memos.map((memo, index) => (
                        <Display
                            key={index}
                            memo={memo}
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