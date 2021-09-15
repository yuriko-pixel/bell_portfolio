import * as React from 'react'
import { Link } from 'gatsby'

const Footer: React.FC = (() => (
  <>
    <p>© Copyright {new Date().getFullYear()} Yuriko Darragh</p>
    <p>Powered by <Link to="https://www.gatsbyjs.com/">Gatsby</Link></p>
  </>
))

export default Footer
