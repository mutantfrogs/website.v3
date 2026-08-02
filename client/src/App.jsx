import { BrowserRouter as Router, Routes, Route} from "react-router";
import AboutPage from "./pages/AboutPage"
import ExplorePage from "./pages/ExplorePage"
import NotesPage from "./pages/NotesPage"
import "xp.css/dist/XP.css";

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<AboutPage/>}></Route>
        <Route path='/explore' element={<ExplorePage/>}></Route>
        <Route path='/notes' element={<NotesPage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
