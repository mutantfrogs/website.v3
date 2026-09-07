import {useState, useEffect} from 'react';
import splashtextjson from '../assets/data/splashtext.json'

function Splashtext(){
    const [splashList, setSplashList] = useState(splashtextjson)
    const [splashIndex, setSplashIndex] = useState(0)

    //filter and shuffle list on mount
    useEffect(() => {
        let splashes = [...splashtextjson]
        let today = new Date()
        let month = today.getMonth() + 1
        let day = today.getDate()
        const filters = [
            s => s.month === month && s.day === day,    //month and day defined
            s => s.month === undefined && s.day === undefined,    //no date defined
        ]

        //apply filters, if any return a value use that list
        for(const f of filters){
            let result = splashes.filter(f)
            if(result.length){
                splashes = result
            }
        }

        //shuffle order of filtered splashlist using Fisher-Yates algorithm
        for(let i = splashes.length - 1; i > 0; i--){
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [splashes[i], splashes[randomIndex]] = [splashes[randomIndex], splashes[i]];
        }

        setSplashList(splashes)
    }, [])

    //increment index on click
    const updateSplash = () => {
        setSplashIndex(index => (index + 1) % splashList.length)
    }

    //set splashtext properties
    let splashText = splashList[splashIndex].value
    let splashSize = 40 - splashText.length * 0.6
    let splashStyle = splashList[splashIndex].special ? "splashtext splashtextSpecial" : "splashtext"

    return(
        <h4 onClick={updateSplash} className={splashStyle} style={{fontSize: splashSize}}>{splashText}</h4>
    )
}

export default Splashtext