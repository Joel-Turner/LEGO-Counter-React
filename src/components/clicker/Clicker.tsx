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

    useEffect(() => {
        console.log("Page Loaded")
    }, [])

    const onButtonPress = () => {
        props.setTimesClicked(previous => previous + props.clickIncrement)
    }

    const autoclick = () => {
        props.setTimesClicked(previous => previous + 0.25)
    }

    if (props.ifAutoclick === true) {
        
        if (props.activateOnce === false){
            props.setActivateOnce(previous => true)
            const intervalID = setInterval(() => {
                autoclick()
              }, 1000);
            console.log("Hello World")
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