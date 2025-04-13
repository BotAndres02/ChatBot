import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Chat from "./pages/chat";
import AddQuestion from "./components/addQuestions";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/add" element={<AddQuestion/>}/>
      </Routes>
    </Router>
    
  )
}

export default App
