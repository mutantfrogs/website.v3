import {useState, useEffect} from 'react';
import splashtextjson from '../assets/data/splashtext.json'

function Splashtext(){
    const [splashText, setSplashText] = useState(null)
    const [splashSize, setSplashSize] = useState(null);
    const [splashClasses, setSplashClasses] = useState(null)

    const getSplashList = () => {
        //get info about current date
        let today = new Date()
        let month = today.getMonth() + 1
        let day = today.getDate()

        //list of filters to apply
        const filters = [
            s => s.month === month && s.day === day,    //month and day defined
            s => s.month === undefined && s.day === undefined,    //no date defined
        ]

        //returns first filtered result that has a length greater than 0
        for(const f of filters){
            let result = splashtextjson.filter(f)
            if(result.length){
                return result
            }
        }
        
        //fallback value
        return([{"value": "Error: No splashes found!"}])
    }

    //randomizes splash text value
    const setSplash = () => {
        //pick random splash from list
        const splashes = getSplashList()
        const index = Math.floor(Math.random() * splashes.length)
        const splash = splashes[index]

        //set splashClasses
        if(splash.special){
            setSplashClasses("splashtext splashtextSpecial")
        }
        else{
            setSplashClasses("splashtext")
        }

        //set splashText and splashSize
        const text = splash.value
        const size = 40 - text.length * 0.6
        setSplashText(text)
        setSplashSize(size)
    }

    //runs setSplash() on component mount
    useEffect(() => {setSplash()}, [])

    return(
        <h4 onClick={setSplash} className={splashClasses} style={{fontSize: splashSize}}>{splashText}</h4>
    )
}

export default Splashtext