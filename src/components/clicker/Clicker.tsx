import React, { useState, useEffect } from "react"
import Shop from "../shop/Shop"
import styles from "./Clicker.module.scss"

interface Props {
    clickIncrement: number;
    setClickIncrement(arg: (old:number) => number): void;
    timesClicked: number
    setTimesClicked(arg: (old:number) => number): void;
    activateOnce: boolean;
    setActivateOnce(arg: (old:boolean) => boolean): void;
    intervalID: any;
    setIntervalID(arg: (old:any) => any): void;
    numAutoRun: number;
    setNumAutoRun(arg: (old:number) => number): void;
}

const Clicker = (props:Props) => {

    const [displayNum, setDisplayNum] = useState<number>(0)
    const [timerTime, setTimerTime] = useState<number>(0)
    const [displayClicks, setDisplayClicks] = useState<number>(0)
    const [ifTrue, setIfTrue] = useState<boolean>(true)
    AC: Number;

    const autoclick = () => {
        setIfTrue(previous => !previous)
    }

    useEffect(() => {
        if (ifTrue === false){
            props.setTimesClicked(previous => previous + props.numAutoRun)
            window.localStorage.setItem('timesClicked', String(props.timesClicked + props.numAutoRun))
            setIfTrue(previous => true)
        }
    }, [ifTrue])

    

    useEffect(() => {
        console.log("Page Loaded")

        props.setTimesClicked(previous => parseInt(window.localStorage.getItem("timesClicked")) || 0);
        props.setClickIncrement(previous => parseInt(window.localStorage.getItem("clickIncrement")) || 1);
        props.setNumAutoRun(previous => parseInt((window.localStorage.getItem("numAutoRun"))) || 0)

        const AC = setInterval(() => {
            autoclick()
        }, 1000);
        // const IID = setInterval(() => {
        //     setTimerTime(previous => previous + 1)
        // }, 500)
    }, [])

    // if (timerTime === 2) {
    //     setTimerTime(previous => 0)
    // }

    const onButtonPress = () => {
        props.setTimesClicked(previous => previous + props.clickIncrement)
        window.localStorage.setItem('timesClicked', String(props.timesClicked + props.clickIncrement))
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