import React, { useEffect, useState } from "react";
import { Flex, Input, InputGroup, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/core";
import { FaTasks, FaTimes } from 'react-icons/fa';
import { HiPencil } from 'react-icons/hi';

// GET
const TodosContext = React.createContext({
    todos: [], fetchTodos: () => {}
})

// POST
function AddTodo() {
    const [item, setItem] = React.useState("")
    const {todos, fetchTodos} = React.useContext(TodosContext)
    const handleInput = event => {
        setItem(event.target.value)
    }
    const handleSubmit = (event) => {
        const newTodo = {
            "id": todos.length + 1,
            "item": item
        }
        fetch("http://localhost:8000/todo", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTodo)
        }).then(fetchTodos)
    }

    return (
        <form className='add-form' onSubmit={handleSubmit}>
            <div className='form-control'>
                <input 
                    type="text"
                    placeholder="Add a todo item"
                    aria-label="Add a todo item"
                    onChange={handleInput}
                />
            </div>
        </form>
    )
}

// PUT
function UpdateTodo({item, id}) {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [todo, setTodo] = useState(item)
    const {fetchTodos} = React.useContext(TodosContext)

    const updateTodo = async () => {
        await fetch(`http://localhost:8000/todo/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ item: todo })
        })
        onClose()
        await fetchTodos()
    }

    return (
        <>
            {/* <button className='btn' onClick={onOpen}>Update</button> */}
            <HiPencil style={{cursor:'pointer'}} onClick={onOpen} />
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Update Todo</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <InputGroup size="md">
                            <Input 
                                pr="4.5rem"
                                type="text"
                                placeholder="Add a todo item"
                                aria-label="Add a todo item"
                                value={todo}
                                onChange={e => setTodo(e.target.value)}
                            />
                        </InputGroup>
                    </ModalBody>
                    <ModalFooter>
                        <button className='btn' onClick={updateTodo}>Update Todo</button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

function TodoHelper({item, id, fetchTodos,reminder, onToggle}) {
    return (
        // <Box p={1} shadow="sm">
            // <Flex justify="space-between">
                <div className={`task ${reminder ? 'reminder' : ''}`} onDoubleClick={()=>onToggle(id)}>
                    <h3>
                        {item}
                        <Flex aligh="end">
                            <UpdateTodo item={item} id={id} fetchTodos={fetchTodos}/>
                            <DeleteTodo id={id} fetchTodos={fetchTodos}/>
                        </Flex>
                    </h3>
                </div>
            // </Flex>
        // </Box>
    )
}

// DELETE
function DeleteTodo({id}) {
    const {fetchTodos} = React.useContext(TodosContext)

    const deleteTodo = async () => {
        await fetch(`http://localhost:8000/todo/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "appication/json" },
            body: { "id": id }
        })
        await fetchTodos()
    }

    return (
        <>
            {/* <button className='btn' onClick={deleteTodo}>Delete Todo</button> */}
            <FaTimes style={{cursor:'pointer'}} onClick={deleteTodo} />
        </>
    )
}

export default function Todos() {
    const [todos, setTodos] = useState([])
    const fetchTodos = async () => {
        const response = await fetch("http://localhost:8000/todo")
        const todos = await response.json()
        setTodos(todos.data)
    }
    const toggleReminder = (id) => {
        setTodos(todos.map((todo)=>todo.id === id ? {...todo, reminder: !todo.reminder} : todo))
    }
    useEffect(() => {
        fetchTodos()
    }, [])

    return (
        <TodosContext.Provider value={{todos, fetchTodos}}>
        <AddTodo />
            <div>
                {
                    todos.map((todo, index) => (
                    <TodoHelper key={index} item={todo.item} id={todo.id} reminder={todo.reminder} onToggle={toggleReminder} fetchTodos={fetchTodos} />
                ))
                }
            </div>
        </TodosContext.Provider>
    )
}