import * as React from 'react'
import IndexLayout from '../layouts'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import style from '../styles/about.module.scss'

const About = () => (
  <IndexLayout>
    <div className={style.center}>
      <FontAwesomeIcon icon={faGithubSquare} className={style.icon} />
      <FontAwesomeIcon icon={faLinkedin} className={style.icon} />
    </div>
  </IndexLayout>
)

export default About
