import { BrowserRouter as Router, Routes, Route} from "react-router";
import Header from "./components/Header"
import AboutPage from "./pages/AboutPage"
import ExplorePage from "./pages/ExplorePage"
import NotesPage from "./pages/NotesPage"
import "xp.css/dist/XP.css";
import "./style.css"

function App() {

  return (
    <div className="flexContainerColumn">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<AboutPage/>}></Route>
          <Route path='/explore' element={<ExplorePage/>}></Route>
          <Route path='/notes' element={<NotesPage/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
