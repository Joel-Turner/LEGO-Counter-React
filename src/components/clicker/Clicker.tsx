import React, { useState, useEffect } from "react"
import styles from "./Clicker.module.scss"

const Clicker = () => {
    const [timesClicked, setTimesClicked] = useState<number>(0)

    useEffect(() => {
        console.log("Value has changed")
    }, [])

    const onButtonPress = () => {
        setTimesClicked(previous => previous + 1)
    }



    return (
        <div className={styles.clicker}>
            <div className={styles.buttonImage}>
                <img src="/lego-icon.png" onClick={onButtonPress}></img>
            </div>

            <div>
                <p> {timesClicked} LEGO Bricks Collected</p>
                {/* <button className={styles.redButton} onClick={onButtonPress}>Click Me</button> */}
            </div>            
        </div>
    )
}

export default Clicker