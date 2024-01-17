import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['D', 'a', 'v', 'i', 'd', '.']
  const sentence1 = ['Y', 'o', 'u', 'r', ' ', 'n', 'e', 'x', 't']
  const sentence2 = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _13`}>,</span>
            <span className={`${letterClass} _14`}>&nbsp;I</span>
            <span className={`${letterClass} _15`}>'</span>
            <span className={`${letterClass} _16`}>m&nbsp;</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={17}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={sentence1}
              idx={23}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={sentence2}
              idx={31}
            />
          </h1>
          <h2>Full Stack Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <a
            href="https://drive.google.com/file/d/1LSA0_cE6VXgQXsotlwTt4C2bxL5m8SM2/view?usp=sharing"
            className="flat-button"
            download="David Bellver - CV Español"
          >
            <FontAwesomeIcon icon={faDownload} color="#ffd700" />
            RESUME
          </a>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
