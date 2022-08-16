import React, { useState } from 'react'
import Header from './components/Header';
import Game from './components/Game';
import Rules from './components/Rules';

const App = () => {

  const [score, setScore] = useState(0)

  return (
    <main>
      <Header score={score} />
      <Game setScore={setScore} />
      <Rules />
    </main>
  )
}
export default App;

