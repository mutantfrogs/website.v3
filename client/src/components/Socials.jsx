import github from '../assets/images/github.png'
import youtube from '../assets/images/youtube.png'
import bluesky from '../assets/images/bluesky.png'
import discord from '../assets/images/discord.png'

export default function Socials(){
    return(
        <div>
            <div className='flexRow'>
            <a target="_blank" href="https://bsky.app/profile/mutantfro.gs">
                <img className="socialsBtn" src={bluesky} alt="Blue Sky" />
                </a>
            <a target="_blank" href="https://www.youtube.com/@mutantfrogs">
                <img className="socialsBtn" src={youtube} alt="YouTube" />
                </a>
            <a target="_blank" href="https://github.com/mutantfrogs">
                <img className="socialsBtn" src={github} alt="GitHub" />
                </a>
            <a target="_blank" href="https://discord.com/users/272445901593903114">
                <img className="socialsBtn" src={discord} alt="Discord" />
                </a>
        </div>
            <div className='centeredText'>
                <p> (i'm barely active on anything but this is where else you can find me!) </p>
            </div>
        </div>
    )
}