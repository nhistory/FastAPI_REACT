# FastAPI + React Todo app

![](preview.gif)

- Backend: [FastAPI](https://fastapi.tiangolo.com/)(0.61.1), [uvicorn](https://www.uvicorn.org/)(0.11.8)
- Frontend: [React](https://reactjs.org/)

---

### Why FastAPI?

> FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.6+ based on standard Python type hints.
> 

### Why React?

> [Most popular web framework of stack overflow survey.](https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-web-frameworks)
> 

---

## Backend

- Use python virtual environment (3.9.4)
- We need to use [CORSMiddleware](https://fastapi.tiangolo.com/tutorial/cors/).
    
    > CORS refers to the situation when a frontend running in a browser has JavaScript code that communicates with a backend, and the backend is in a different “origin” than the frontend.
    > 
- [async RESTful API](https://openliberty.io/docs/21.0.0.5/sync-async-rest-clients.html)
    
    > A synchronous client constructs an HTTP structure, sends a request, and waits for a response. An asynchronous client constructs an HTTP structure, sends a request, and moves on. In this case, the client is notified when the response arrives. The original thread, or another thread, can then process the response. Although asynchronous behavior can result in faster overall execution, synchronous behavior might be preferred in certain cases where more simplified code is necessary.
    > 

---

## Frontend

- UI component library: [Charkra UI](http://chakra-ui.com/)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [React Context API](https://reactjs.org/docs/context.html) : This is not “state management” tool. ([Why React Context is Not a “State Management” Tool, and why it doesn’t replace Redux.](https://blog.isquaredsoftware.com/2021/01/context-redux-differences/))