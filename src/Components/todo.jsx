import { useState } from "react";

export function Todos({ todos, setTodos }) {
    console.log("Todos")
    // never do this becaue it will create inconsistency in data because when the parent todos will update it will cause the child to re-render but child will not update the data because it creates it own state_variable that persists between re-renders
    const [newTodos, setNewTodos] = useState(todos);

    return (
        <>
            {newTodos.map(todo => {
                return (
                    <TodoWrapper>
                        <SingleTodo todo={todo} setNewTodos={setNewTodos} />
                    </TodoWrapper>
                )
            })}

            <button onClick={() => setTodos([{
                title: "Hi"
            }, {
                title: "Why"
            }])}>
                global change
            </button>
        </>
    )

}


function TodoWrapper({children}) {
    return (
        <div>
            {children}
        </div>
    )
}


function SingleTodo({todo, setNewTodos}) {
    return (
        <>
            {todo.title}
            <button onClick={() => {
                setNewTodos([{
                    title: "bello",
                }, {
                    title: "hello"
                }])
            }}>Change</button>
        </>
    )
}