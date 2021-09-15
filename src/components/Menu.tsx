import { Link } from 'gatsby'
import * as React from 'react'
import menustyle from '../styles/menu.module.scss'

const Menu: React.FC = ({ children }) => (
  <ul className={menustyle.links}>
    <li className={menustyle.liststyle}><Link to="/about">About</Link></li>
    <li className={menustyle.liststyle}><Link to="/about">Works</Link></li>
    <li className={menustyle.liststyle}><Link to="/about">Qiita</Link></li>
  </ul>
)

export default Menu
