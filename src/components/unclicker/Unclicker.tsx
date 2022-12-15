import React, { useState, useEffect } from "react"
import Shop from "../shop/Shop"
import styles from "./Unclicker.module.scss"

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

const Unclicker = (props:Props) => {

    const onButtonClick = () => {
        console.log("Button Pressed")
        props.setTimesClicked(previous => previous - props.clickIncrement)
    }


    return (
        <div className={styles.unclicker}>
            <div className={styles.buttonImage2}>
                <img src="/inverse-lego-icon.jpg" onClick={onButtonClick}></img>
            </div>          
        </div>
    )

}

export default Unclicker