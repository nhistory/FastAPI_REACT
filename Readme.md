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

According to the StackOverflow survey 2021, React is the most popular web framework.

Let’s figure out the reason why React has become the number one framework.

[Stack Overflow Developer Survey 2021](https://insights.stackoverflow.com/survey/2021#most-popular-technologies-webframe-prof)

- [static website vs dynamic website](https://wpamelia.com/static-vs-dynamic-website/)
    
    > Static websites are ones that are fixed and display the same content for every user, usually written exclusively in HTML. A dynamic website, on the other hand, is one that can display different content and provide user interaction, by making use of advanced programming and databases in addition to HTML.
    > 
    
    If we make a web application that needs a lot of user interaction features, we should build a bunch of functions to control [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)s. Web browsers have to update objects every time when occurs user behaviors as well. Web frameworks can help to handle thousands of DOMs and make better the efficiency of document rendering.
    
    - Client-Side Rendering vs Server-Side Rendering
        
        The dynamic web application is used to render pages on the client-side(web browsers). Generally, server-side rendering is faster than CSR. But if there are complex interactions between user and browser, CSR is much more efficient.
        
    - Goot to read:
    
    [How Browsers Work: Behind the scenes of modern web browsers - HTML5 Rocks](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/)
    
     
    
- Advantages of React
    - Component
        
        Components are individual view units that make up the UI, and if the UI is developed as Lego, the component acts as a block. These features facilitate productivity and maintenance. In the event of a tricky task of updating complex logic in which changes in one element affect changes in other elements, it can be supplemented as a reuse function of the component.
        
    - Virtual DOM
        
        > The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM.
        > 
        
        [React: The Virtual DOM | Codecademy](https://www.codecademy.com/article/react-virtual-dom)
        
        1. The entire virtual DOM gets updated.
        2. The virtual DOM gets compared to what it looked like before you updated it. React figures out which objects have changed.
        3. The changed objects, and the changed objects only, get updated on the *real* DOM.
        4. Changes on the real DOM cause the screen to change.

---

## Backend

- Use python virtual environment (3.9.4)
```bash
// create and activate python virtual environment
backend$ python3.9 -m venv venv
backend$ source venv/bin/activate
backend$ export PYTHONPATH=$PWD
// run the backend server
(venv)$ python main.py
```
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
---

## Version Update (v1.2)

![](preview1.2.gif)
- Added `index.css` and changed Interface design.
- Install `react-icons` and use font-awesome icons.
- Add `reminder` function to add left side green bar.