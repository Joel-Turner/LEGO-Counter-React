import React, { useState, useEffect } from "react"
import Shop from "../shop/Shop"
import styles from "./Clicker.module.scss"

interface Props {
    clickIncrement: number;
    setClickIncrement(arg: (old:number) => number): void;
    timesClicked: number
    setTimesClicked(arg: (old:number) => number): void;
    ifAutoclick: boolean;
    setIfAutoclick(arg: (old:boolean) => boolean): void;
    activateOnce: boolean;
    setActivateOnce(arg: (old:boolean) => boolean): void;
    intervalID: any;
    setIntervalID(arg: (old:any) => any): void;
}

const Clicker = (props:Props) => {

    const [displayNum, setDisplayNum] = useState<number>(0)
    const [timerTime, setTimerTime] = useState<number>(0)
    const [displayClicks, setDisplayClicks] = useState<number>(0)

    

    useEffect(() => {
        console.log("Page Loaded")

        const IID = setInterval(() => {
            setTimerTime(previous => previous + 1)
        }, 500)
    }, [])

    if (timerTime === 2) {
        setTimerTime(previous => 0)
    }



    const onButtonPress = () => {
        props.setTimesClicked(previous => previous + props.clickIncrement)
    }

    const autoclick = () => {
        props.setTimesClicked(previous => previous + 1)
    }

    if (props.ifAutoclick === true) {
        
        if (timerTime === 1){
            props.setActivateOnce(previous => true)
            const intervalID = setInterval(() => {
            autoclick()
            }, 1000);
            console.log("Hello World")
            props.setIfAutoclick(previous => false)
        }

    }
    if (props.ifAutoclick === false) {
        clearInterval(props.intervalID)
    }


    return (
        <div className={styles.clicker}>
            <div className={styles.buttonImage}>
                <img src="/lego-icon.png" onClick={onButtonPress}></img>
            </div>

            <div>
                <p> {props.timesClicked} LEGO Bricks Collected</p>
                {/* <button className={styles.redButton} onClick={onButtonPress}>Click Me</button> */}
            </div>            
        </div>
    )
}

export default Clicker