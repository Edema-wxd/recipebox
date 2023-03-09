import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import SearchBar from './components/SearchBar/SearchBar'
import MenuArr from './components/MenuArr/MenuArr'
import MenuDis from './components/MenuDis/MenuDis'

function App() {
    return (
        <Router>

            <div className='mainbody'>
                <Routes>
                    <Route exact path='/' element={<>
                        <SearchBar />
                        <MenuArr />
                    </>} ></Route>

                    <Route exact path='/recipe' element={<MenuDis />}>
                    </Route>
                </Routes>

            </div>
        </Router>
    )
}

export default App