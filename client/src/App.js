import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddButton from './Components/AddButton/AddButton';
import AddForm from './Components/AddForm/AddForm'
import TodoList from './Components/TodoList/TodoList'
import EditForm from './Components/EditForm/EditForm'
import UpdateBtn from './Components/UpdateBtn/UpdateBtn'
import { Alert } from 'react-bootstrap'
import axios from 'axios'

const App = () => {

  const [todoList, setTodoList] = useState([])
  useEffect(() => {
    axios.get('http://localhost:1000/todos')
      .then(res => setTodoList(res.data))
      .catch(e => console.log('Failed to get todos list. Error: ', e))
  }, [])
  const [input, setInput] = useState({ todo: '' }),
    [edit, setEdit] = useState(false),
    [alert, setAlert] = useState(false),

    onChange = (e) => {
      setInput({ todo: e.target.value })
      setAlert(false)
    },

    addItem = () => {
      if (input.todo) {
        const str = input.todo,
          title = str[0].toUpperCase() + str.slice(1),
          newTodo = { todo: title }
        axios.post('http://localhost:1000/add', newTodo)
          .then(() => {
            axios.get('http://localhost:1000/todos')
              .then(res => setTodoList(res.data))
              .catch(e => console.log('Failed to get todos list. Error: ', e))
            setInput({ todo: '' })
          })
          .catch(e => console.log('Failed to add todo. Error: ', e))
      }
      else {
        setAlert(true)
      }
    },

    editItem = (todo) => {
      setInput({
        ...todo
      })
      setEdit(true)
    },

    deleteItem = (id) => {
      axios.delete(`http://localhost:1000/delete/${id}`)
        .then(() => {
          const filteredList = todoList.filter(todo => todo._id !== id)
          setTodoList(filteredList)
        })
        .catch(e => console.log(`Failed to delete. Error: ${e}`))
    },

    update = (toEdit) => {
      if (input.todo) {
        const string = toEdit.todo,
          firstCap = string[0].toUpperCase() + string.slice(1)
        axios.put(`http://localhost:1000/update/${toEdit._id}`, { todo: firstCap })
          .then(() => {
            const updateItem = todoList.map(todoItem => (todoItem._id === toEdit._id ? { ...todoItem, todo: firstCap } : todoItem))//, id: toEdit.id 
            setTodoList(updateItem)
            setInput({
              todo: ''
            })
            setEdit(false)
          })
          .catch(e => console.log(`Failed to update todos list. Error: ${e}`))
      }
      else {
        setAlert(true)
      }
    },

    onEdit = (e) => {
      setInput({
        todo: e.target.value,
        _id: input._id
      })
      setAlert(false)
    }

  useEffect(() => {
    if (edit) {
      document.getElementById('editForm').focus();
    } else {
      document.getElementById('addForm').focus();
    }
  })

  return (
    <div className='appContainer'>
      <h2 className='head'> TODO APP</h2>
      <Alert id='alert' show={alert} variant='dark'>
        Please enter an item!
        </Alert>
      <div className='addSec'>
        {
          edit ?
            <>
              <EditForm input={input} onChange={onEdit} />
              <UpdateBtn input={input} update={update} />
            </> :
            <>
              <AddForm onChange={onChange} input={input} />
              <AddButton addItem={addItem} />
            </>
        }
      </div>
      <TodoList todoList={todoList} deleteItem={deleteItem} editItem={editItem} />
    </div >
  )
}
export default App;