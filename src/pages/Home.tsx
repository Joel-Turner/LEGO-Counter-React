import React, {useState, useEffect} from 'react';
import Hero from '../components/hero/Hero';
import Page from '../components/page/Page';
import Clicker from "../components/clicker/Clicker"
import Shop from "../components/shop/Shop"
import Unclicker from "../components/unclicker/Unclicker"


const Home = (): JSX.Element => {

  const [clickIncrement, setClickIncrement] = useState<number>(1)
  const [timesClicked, setTimesClicked] = useState<number>(0)
  const [ifAutoclick, setIfAutoclick] = useState<boolean>(false)
  const [activateOnce, setActivateOnce] = useState<boolean>(false)
  const [intervalID, setIntervalID] = useState<any>()
  const [numAutoRun, setNumAutoRun] = useState<number>(0)

  useEffect(() => {
    console.log("ifAutoclick has changed")
  }, [ifAutoclick])

  return (
    <Page title="Home">
      <Clicker numAutoRun={numAutoRun} setNumAutoRun={setNumAutoRun} clickIncrement={clickIncrement} setClickIncrement={setClickIncrement} timesClicked={timesClicked} setTimesClicked={setTimesClicked} ifAutoclick={ifAutoclick} setIfAutoclick={setIfAutoclick} activateOnce={activateOnce} setActivateOnce={setActivateOnce} intervalID={intervalID} setIntervalID={setIntervalID}/>
      <Shop numAutoRun={numAutoRun} setNumAutoRun={setNumAutoRun} clickIncrement={clickIncrement} setClickIncrement={setClickIncrement} timesClicked={timesClicked} setTimesClicked={setTimesClicked} ifAutoclick={ifAutoclick} setIfAutoclick={setIfAutoclick} activateOnce={activateOnce} setActivateOnce={setActivateOnce} intervalID={intervalID} setIntervalID={setIntervalID}/>
      {/* <Unclicker clickIncrement={clickIncrement} setClickIncrement={setClickIncrement} timesClicked={timesClicked} setTimesClicked={setTimesClicked} ifAutoclick={ifAutoclick} setIfAutoclick={setIfAutoclick} activateOnce={activateOnce} setActivateOnce={setActivateOnce} intervalID={intervalID} setIntervalID={setIntervalID}/> */}
      <Hero />
    </Page>
  )
};

export default Home;
