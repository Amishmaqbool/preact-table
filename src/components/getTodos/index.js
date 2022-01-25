import { useState, useEffect } from "preact/hooks"
import { useDispatch } from "react-redux";
import axios from "axios";
import ToDosTable from "../todosTable";
const GetTodos = () => {
    const dispatch = useDispatch();
    const [todos, setTodos] = useState([])

    useEffect(async () => {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos");
        setTodos(data);
        dispatch({ type: "ADD_TODOS", payload: data });
    }, [])

    return (
        <>
            <ToDosTable />
        </>
    )
}
export default GetTodos;