import Window from "../components/Window"
import artData from "../assets/data/artwork.json"
import { useState } from "react"

function ExplorePage() {
  const artTabId = "artwork"
  const wipTabId = "more coming soon!"
  const [selectedTab, setSelectedTab] = useState(artTabId)

  const updateTab = (tabId) => {
    setSelectedTab(tabId)
  }

  const populateArt = (year) => {
    //filter json by year
    const filteredData = artData.filter(x => x.year === year)

    //create array of buttons
    const buttonData = filteredData.map(x => (
      <button className="exploreMediaBtn">
        <img src={`art/${year}/thumbnails/${x.id}.${x.type}`}></img>
      </button>
    ))
    
    //return header+buttons
    return <div>
        <h2 className='articleHeader'>{year}</h2>
        <hr/>
        {buttonData}
      </div>
  }

  return(
    <Window
      className="pageWindow"
      title="📁 file explorer">
        <div className="flexColumn">
          <div>
            <menu role="tablist" style={{marginLeft:"40px"}}>
              <button aria-selected={selectedTab === artTabId} aria-controls={artTabId} onClick={() => updateTab(artTabId)}>{artTabId}</button>
              <button aria-selected={selectedTab === wipTabId} aria-controls={wipTabId} onClick={() => updateTab(wipTabId)}>{wipTabId}</button>
            </menu>
              <article role="tabpanel" className="pageArticle">
                {/* art tab*/}
                <div hidden={selectedTab !== artTabId}>
                  {populateArt(2026)}
                  {populateArt(2025)}
                  {populateArt(2024)}
                  {populateArt(2023)}
                  {populateArt(2022)}
                </div>
              </article>
          </div>  
        </div>
    </Window>
  )
}

export default ExplorePage