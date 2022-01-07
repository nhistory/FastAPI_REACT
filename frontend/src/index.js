import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { ThemeProvider } from '@chakra-ui/core';

import Header from './components/Header';
import Todos from "./components/Todos";

function App() {
  return (
    <div className='container'>
      <ThemeProvider>
        <Header />
        <Todos />
      </ThemeProvider>
    </div>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)