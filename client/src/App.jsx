import { BrowserRouter as Router, Routes, Route} from "react-router";
import { createContext, useState } from "react";
import Header from "./components/Header"
import AboutPage from "./pages/AboutPage"
import ExplorePage from "./pages/ExplorePage"
import NotesPage from "./pages/NotesPage"
import { SecretContext } from "./context/SecretContext";
import "xp.css/dist/XP.css";
import "./style.css"

function App() {

  const [secrets, setSecrets] = useState(
    {
      enableArtArchive:false,
      enableHiddenNotes:false
    })

  return (
    <div className="flexColumn">
      <Router>
        <SecretContext value={{secrets, setSecrets}}>
          <Header/>
          <Routes>
            <Route path='/' element={<AboutPage/>}></Route>
            <Route path='/explore' element={<ExplorePage/>}></Route>
            <Route path='/notes' element={<NotesPage/>}></Route>
          </Routes>
        </SecretContext>
      </Router>
    </div>
  )
}

export default App
