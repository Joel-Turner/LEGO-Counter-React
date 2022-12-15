import React, { useState, useEffect } from "react"
import styles from "./Shop.module.scss"

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

const Shop = (props:Props) => {
        
    const increaseClickIncrement = () => {
        if (props.timesClicked >= 100) {
            props.setClickIncrement(previous => previous + 1)
            props.setTimesClicked(previous => previous - 100)
            if(props.activateOnce == true) {
                clearInterval(props.intervalID)
                props.setActivateOnce(previous => false)
            }
        }
        if (props.timesClicked <= -100) {
            props.setClickIncrement(previous => previous + 1)
            props.setTimesClicked(previous => previous + 100)
            if(props.activateOnce == true) {
                clearInterval(props.intervalID)
                props.setActivateOnce(previous => false)
            }
        }

    }

    const activateAutoclick = () => {
        if (props.timesClicked >= 1000) {
            props.setIfAutoclick(previous => true)
            props.setTimesClicked(previous => previous - 1000)
        }
    }

    return (
        <div className={styles.upgradeShop}>
            <h2>Upgrades Shop</h2>
            <div>
                <button onClick={increaseClickIncrement}>Increase Click Amount</button>
                <p className={styles.incrementDesc}>Increases the number of LEGO Bricks earned per Click. Costs 100 Bricks. Current Click Amount is {props.clickIncrement}</p>
            </div>
            <div>
                <button onClick={activateAutoclick}>Autoclicker</button>
            </div>
        </div>
    )
}

export default Shop