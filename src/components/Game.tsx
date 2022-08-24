import React, { useEffect, useState } from 'react'
import iconPaper from '../assets/icon-paper.svg'
import iconRock from '../assets/icon-rock.svg'
import iconScissors from '../assets/icon-scissors.svg'

const ACTIONS = {
  ROCK: 'rock',
  PAPER: 'paper',
  SCISSORS: 'scissors',
  RESET: 'reset'
}

const Game = ({ setScore }: any) => {

  const [player, setPlayer] = useState({ choose: '', img: '' })
  const [house, setHouse] = useState({ choose: '', img: '' })
  const [winner, setWinner] = useState('')
  const playAgain = () => {
    setPlayer({ choose: '', img: '' })
    setHouse({ choose: '', img: '' })
    setWinner('')
  }

  const pick = ({ choose, img }: any) => {
    const housePick = Math.floor(Math.random() * 3)
    setPlayer({ choose: choose, img: img })
    setTimeout(() => {
      switch (housePick) {
        case 0:
          setHouse({ choose: ACTIONS.PAPER, img: iconPaper })
          break;
        case 1:
          setHouse({ choose: ACTIONS.ROCK, img: iconRock })
          break;
        case 2:
          setHouse({ choose: ACTIONS.SCISSORS, img: iconScissors })
          break;
        default:
          break;
      }
    }, 1000)
  }
  const setGameWinner = () => {
    setWinner('')
    if (player.choose === '') return
    if (player.choose === house.choose) return setWinner('Draw')
    if (player.choose === ACTIONS.ROCK) {
      if (house.choose === ACTIONS.PAPER) return setWinner("You lose")
      if (house.choose === ACTIONS.SCISSORS) return setWinner("You win")
    }
    if (player.choose === ACTIONS.PAPER) {
      if (house.choose === ACTIONS.SCISSORS) return setWinner("You lose")
      if (house.choose === ACTIONS.ROCK) return setWinner("You win")
    }
    if (player.choose === ACTIONS.SCISSORS) {
      if (house.choose === ACTIONS.ROCK) return setWinner("You lose")
      if (house.choose === ACTIONS.PAPER) return setWinner("You win")
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      switch (e.key) {
        case ('Enter'):
          if (document.body.contains(document.getElementById('play-again'))) {
            playAgain();
          }
          return;
        case ('1'):
          return document.getElementById('paper')?.focus()
        case ('2'):
          return document.getElementById('scissors')?.focus()
        case ('3'):
          return document.getElementById('rock')?.focus()
        case ('4'):
          return document.getElementById('rules')?.focus()
      }
    })
    return () => window.removeEventListener('keydown', () => { })
  }, [])

  useEffect(() => {
    setGameWinner()
    if (winner === "You win") setScore((oldVal: number) => oldVal + 1)
  }, [house, winner])

  return (
    <div className='flex place-content-center default-margin'>
      {
        !player.choose ? (
          <section className='background game'>
            <button
              className='gradient-box paper'
              id='paper'
              onClick={() => pick({ choose: ACTIONS.PAPER, img: iconPaper })}>
              <img src={iconPaper} />
            </button>
            <button
              className='gradient-box scissors'
              id='scissors'
              onClick={() => pick({ choose: ACTIONS.SCISSORS, img: iconScissors })}>
              <img src={iconScissors} />
            </button>
            <div className='w-full'></div>
            <button
              className='gradient-box rock'
              id='rock'
              onClick={() => pick({ choose: ACTIONS.ROCK, img: iconRock })}>
              <img src={iconRock} />
            </button>
          </section>
        ) :
          <section className='end game'>
            <div className='box'>
              <div className={`gradient-box ${player.choose}`}>
                <img src={player.img} />
              </div>
              <p>you picked</p>
            </div>
            <div className='box score'>
              {winner &&
                <>
                  <p>{winner}</p>
                  <button
                    tabIndex={1}
                    className='btn rounded'
                    id='play-again'
                    onClick={playAgain}>
                    play again
                  </button>
                </>
              }

            </div>
            <div className='box'>
              <div className={`gradient-box ${house.choose || 'blank'}`}>
                <img src={house.img} />
              </div>
              <p>the house picked</p>
            </div>
          </section>
      }
    </div>

  )
}

export default Game