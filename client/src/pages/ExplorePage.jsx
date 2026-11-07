import { useState, useContext } from "react"
import { SecretContext } from "../context/SecretContext"
import Window from "../components/Window"
import artData from "../assets/data/artwork.json"

function ExplorePage() {
  const {secrets, setSecrets} = useContext(SecretContext)

  const artTabId = "artwork"
  const debugTabId = "debug"
  const [selectedTab, setSelectedTab] = useState(artTabId)

  const updateTab = (tabId) => {
    setSelectedTab(tabId)
  }

  const populateArt = (year) => {
    //return nothing if enableArtArchive cheatcode isn't actiavted
    if(secrets.enableArtArchive == false && year < 2021){
      return
    }
    
    //filter json by year
    const filteredArt = artData.filter(x => x.year === year)

    //create array of buttons
    const buttonData = filteredArt.map(x => (
      <button className="exploreMediaBtn">
        <img src={`art/${year}/thumbnails/${x.id}.${x.filetype}`}></img>
      </button>
    ))

    //return nothing if no artwork exists for the year
    if(buttonData.length == 0){
      return
    }
    
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
              <button aria-selected={selectedTab === debugTabId} aria-controls={debugTabId} onClick={() => updateTab(debugTabId)}>{debugTabId}</button>
            </menu>
              <article role="tabpanel" className="pageArticle">
                {/*art tab*/}
                <div hidden={selectedTab !== artTabId}>
                  {populateArt(2026)}
                  {populateArt(2025)}
                  {populateArt(2024)}
                  {populateArt(2023)}
                  {populateArt(2022)}
                  {populateArt(2021)}
                  {populateArt(2020)}
                  {populateArt(2019)}
                  {populateArt(2018)}
                  {populateArt(2017)}
                  {populateArt(2016)}
                </div>

                {/*wip tab*/}
                <div hidden={selectedTab !== debugTabId}>
                  <div className="flexColumn">
                    <button onClick={() => {setSecrets(prev => ({...prev, enableArtArchive: !secrets.enableArtArchive}))}}>enableArtArchive</button>
                    <button onClick={() => {setSecrets(prev => ({...prev, enableBannedNotes: !secrets.enableBannedNotes}))}}>enableBannedNotes</button>
                  </div>
                </div>
              </article>
          </div>  
        </div>
    </Window>
  )
}

export default ExplorePage