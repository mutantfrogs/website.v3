import Window from "../components/Window"
import placeholder from "../assets/images/placeholder.gif"
import Socials from "../components/Socials"

function AboutPage() {

  //calculate age
  let birthday = new Date("2000-10-31")
  let today = new Date()
  let age = today.getFullYear() - birthday.getFullYear()
  if(birthday.getMonth() >= today.getMonth()){
    if(birthday.getDate() >= today.getDate()){
      age--
    }
  }
  
  return (
    <Window
      className="pageWindow"
      title="🖥️ my computer">
        <div className="flexColumn">
          <div>
              <article role="tabpanel" className="pageArticle">
                <p className="aboutText">
                  hello! my name is <b>jules (they/they)</b> aka <b>mutantfrogs</b>. 
                  i am a {age} year old artist, developer, and proud netizen. 
                  this website is a labor of love, and most things i create are posted here.
                  please have a look around! there might even be a secret or two O_o
                </p>
                <img src={placeholder} style={{width:"300px"}}></img>
                <Socials/>
              </article>
          </div>  
        </div>
    </Window>
  )
}

export default AboutPage