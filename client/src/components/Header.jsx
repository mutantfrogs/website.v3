import Window from "../components/Window"
import Splashtext from "../components/Splashtext"
import {useState} from 'react';
import { Link, useLocation } from 'react-router';

function Header(){
    const location = useLocation();

    //sets the header text based on what page user is currently on
    const getHeaderText = () => {
        switch (location.pathname) {
        case '/': return "about";
        case '/explore': return "explore";
        case '/notes': return "notes";
        default: return "404";
        }
    };

    return(
        <Window 
            className="headerWindow"
            title="🐸 mutantfro.gs" 
            closeBtn={() => alert("This one is just for looks :P")}
        >
            <div>
                <Splashtext/>
                <h1 className="headerText">{getHeaderText()}</h1>
                <div className='flexRow'>
                    <Link to="/">
                        <button className='headerNavigationBtn'>about</button>
                        </Link>
                    <Link to="/explore">
                        <button className='headerNavigationBtn'>explore</button>
                        </Link>
                    <Link to="/notes">
                        <button className='headerNavigationBtn'>notes</button>
                        </Link>
                </div>

                <div className="status-bar">
                    <p className="status-bar-field">
                        <marquee>welcome to my website and please enjoy your stay!</marquee>
                        </p>
                </div>
            </div>
        </Window>
    )
}

export default Header