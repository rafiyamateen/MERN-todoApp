import { PencilSquare, XCircleFill } from 'react-bootstrap-icons';
import { ListGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './TodoList.css';

const TodoList = ({ todoList, editItem, deleteItem }) => {
    return <ListGroup variant='flush'>
        {todoList.map((todo) => {
            return <ListGroup.Item key={todo._id} id='list'>
                <span>
                    {todo.todo}
                </span>
                <span id='listIcons'>
                    <OverlayTrigger placement='bottom'
                        overlay={
                            <Tooltip id='tooltip-bottom'>edit</Tooltip>
                        } >
                        <PencilSquare className='icons editIcon' onClick={() => editItem(todo)}>Edit</PencilSquare>
                    </OverlayTrigger>
                    <OverlayTrigger placement='bottom'
                        overlay={
                            <Tooltip id='tooltip-bottom'>delete</Tooltip>
                        } >
                        <XCircleFill className='icons delIcon' onClick={() => deleteItem(todo._id)}>Delete</XCircleFill>
                    </OverlayTrigger>
                </span>
            </ListGroup.Item>
        })}
    </ListGroup>
}
export default TodoList;