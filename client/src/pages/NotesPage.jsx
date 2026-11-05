import { useState } from "react"
import Window from "../components/Window"
import constructionGif from "../assets/images/construction.gif"

function NotesPage() {
    const viewTabId = "coming soon!"
    const [selectedTab, setSelectedTab] = useState(viewTabId)
  
    const updateTab = (tabId) => {
      setSelectedTab(tabId)
    }

  return(
    <Window
      className="pageWindow"
      title="🎨 paint">
        <div className="flexColumn">
          <div>
            <menu role="tablist" style={{marginLeft:"40px"}}>
              <button aria-selected={selectedTab === viewTabId} aria-controls={viewTabId} onClick={() => updateTab(viewTabId)}>{viewTabId}</button>
            </menu>
              <article role="tabpanel" className="pageArticle">
                {/*view notes tab*/}
                <div hidden={selectedTab !== viewTabId}>
                  <img src={constructionGif}></img>
                </div>
              </article>
          </div>
        </div>
    </Window>
  )
}

export default NotesPage