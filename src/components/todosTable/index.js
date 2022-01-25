import { useState } from "preact/hooks";
import { useSelector } from "react-redux";
import styled from '@emotion/styled';

const Container = styled.div`
  background:#eee;
`

const Table = styled.table`
  box-shadow:0 0 10px #0000000f;
  width:100%;
  background:#fff;
  border-radius:6px;
  border-collapse: collapse;
`
const TableRow = styled.tr`
border-bottom:1px solid #eee;
`
const TableHead = styled.th`
padding:16px;
text-align:left;
font-weight:400;
`
const TableData = styled.td`
padding:16px;

`
const ToDosTable = () => {
    const [todos, setTodos] = useState([])

    const selectUser = (state) => state.todos;
    const todosFromStore = useSelector(selectUser);
    setTodos(todosFromStore)
    return (<Container>
        <Table>
            <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>User ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Completed</TableHead>
            </TableRow>
            {
                todos.map((todo, idx) => (
                    <TableRow key={idx}>
                        <TableData>{todo.id}</TableData>
                        <TableData>{todo.userId}</TableData>
                        <TableData>{todo.title}</TableData>
                        <TableData>{todo.completed ? "Yes" : "No"}</TableData>
                    </TableRow>
                ))
            }
        </Table>
    </Container>
    )
}
export default ToDosTable;