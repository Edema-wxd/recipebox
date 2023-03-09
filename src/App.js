import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import SearchBar from './components/SearchBar/SearchBar'
import MenuArr from './components/MenuArr/MenuArr'
import MenuDis from './components/MenuDis/MenuDis'

function App() {
    return (
        <Router>
            <div className='mainbody'>
                <Route exact path='/'>
                    <SearchBar />
                    <MenuArr />
                </Route>

                <Route exact path='/recipe'>
                    <MenuDis />
                </Route>

            </div>
        </Router>
    )
}

export default App