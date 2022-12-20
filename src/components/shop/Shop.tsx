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
    numAutoRun: number;
    setNumAutoRun(arg: (old:number) => number): void;
}

const Shop = (props:Props) => {

    useEffect(() => {
        props.setClickIncrement(previous => parseInt(window.localStorage.getItem("clickIncrement")) || 1);
        
    }, [])
        
    const increaseClickIncrement = () => {
        if (props.timesClicked >= 100) {
            props.setClickIncrement(previous => previous + 1)
            props.setTimesClicked(previous => previous - 100)
            window.localStorage.setItem('clickIncrement', String(props.clickIncrement + 1))
            window.localStorage.setItem('timesClicked', String(props.timesClicked - 100))
        }
        // if (props.timesClicked <= -100) {
        //     props.setClickIncrement(previous => previous + 1)
        //     props.setTimesClicked(previous => previous + 100)

        // }

    }

    const activateAutoclick = () => {
        if (props.timesClicked >= 1000) {

            // props.setIfAutoclick(previous => true)
            // props.setIfAutoclick(previous => false)
            props.setNumAutoRun(previous => previous + 1)
            window.localStorage.setItem('numAutoRun', String(props.numAutoRun + 1))
            props.setTimesClicked(previous => previous - 1000)

            window.localStorage.setItem('timesClicked', String(props.timesClicked - 1000))
        }
    }
    const reset = () => {
        props.setIfAutoclick(previous => false)
        props.setTimesClicked(previous => 0)
        props.setClickIncrement(previous => 1)
        props.setNumAutoRun(previous => 0)

        window.localStorage.setItem('timesClicked', String(0))
        window.localStorage.setItem('ifAutoclick', String(false))
        window.localStorage.setItem('clickIncrement', String(1))
        window.localStorage.setItem('numAutoRun', String(0))
        location.reload()
    }

    return (
        <div className={styles.upgradeShop}>
            <h2>Upgrades Shop</h2>
            <div className={styles.increaseClickIncrement}>
                <button onClick={increaseClickIncrement}>Increase Click Amount</button>
                <p> The number of LEGO Bricks earned per Click. Costs 100 Bricks. Current Click Amount is {props.clickIncrement}</p>
            </div>
            <div className={styles.activateAutoclick}>
                <button onClick={activateAutoclick}>Autoclicker</button>
                <p> Adds one LEGO Brick to the counter every second per Autoclicker. There are currently {props.numAutoRun} Autoclickers running</p>
            </div>
            <div className={styles.reset}>
                <button onClick={reset}>Reset </button>
                <p> Resets <b>everything</b></p>
            </div>
        </div>
    )
}

export default Shop