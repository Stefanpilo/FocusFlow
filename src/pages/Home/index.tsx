import Header from '../../components/Header/Header'
import SessionBottomCard from '../../components/Home/SessionBottomCard.tsx'
import SessionStatisticsCard from '../../components/Home/SessionStatisticsCard.tsx'
import TimerCard from '../../components/Home/TimerCard.tsx'

import * as style from './home.css.ts'

function Home() {

  return (
    <>
      <Header />
      <div style={style.wrappedMid}>
        <TimerCard />
        <SessionStatisticsCard />
      </div>
      <SessionBottomCard />
    </>
  )
}

export default Home
