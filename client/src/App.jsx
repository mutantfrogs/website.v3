import { BrowserRouter as Router, Routes, Route} from "react-router";
import Header from "./components/Header"
import AboutPage from "./pages/AboutPage"
import ExplorePage from "./pages/ExplorePage"
import NotesPage from "./pages/NotesPage"
import "xp.css/dist/XP.css";
import "./assets/style.css"

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<AboutPage/>}></Route>
        <Route path='/explore' element={<ExplorePage/>}></Route>
        <Route path='/notes' element={<NotesPage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
