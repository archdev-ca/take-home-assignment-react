import { Routes, Route } from 'react-router-dom'
import './styles/global.css'
import Home from './routes'
import Login from './routes/login'

function App() {
    return (
        <>
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    )
}

export default App
