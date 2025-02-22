// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//   <div>Hello</div>
//   )
// }

// export default App


import React from 'react'
import home from './Pages/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
        <Router>
          <Routes>
              <Route path='movie/:id' element={<h2>Hello</h2>}></Route>
          </Routes>
        </Router>
    </div>
  )
}

export default App