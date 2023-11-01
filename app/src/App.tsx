import { Routes, Route} from "react-router-dom";
import './styles/global.css'
import Home from "./routes";


function App() {

    return (
        <>
            <Routes>
                <Route index path="/" element={<Home />} />
            </Routes>
        </>
    )
}

export default App
