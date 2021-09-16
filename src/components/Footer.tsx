import * as React from 'react'
import { Link } from 'gatsby'
import footerstyle from '../styles/footer.module.scss'

const Footer: React.FC = (() => (
  <>
    <p className={footerstyle.text}>© Copyright {new Date().getFullYear()} Yuriko Darragh</p>
    <p className={footerstyle.text}>Powered by <Link to="https://www.gatsbyjs.com/">Gatsby</Link></p>
  </>
))

export default Footer
