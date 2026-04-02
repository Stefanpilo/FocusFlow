import Header from './components/HeaderComponent'
import SessionBottomCard from './components/SessionBottomCardComponent'
import SessionStatisticsCard from './components/SessionStatisticsCardComponent'
import TimerCard from './components/TimerCardComponent'

function App() {

  const wrapperStyle = {
    display: 'grid',
    height: '100vh',
    gridTemplateRows: "100px 1fr 400px"
  }

  const wrappedMidStyle = {
    display: 'grid',
    gridAutoFlow: 'column',
    gridTemplateColumns: ".65fr .35fr"
  }

  return (
    <div style={wrapperStyle}>
      <Header />
      <div style={wrappedMidStyle}>
        <TimerCard />
        <SessionStatisticsCard />
      </div>
      <SessionBottomCard />
    </div>
  )
}

export default App
