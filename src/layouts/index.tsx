import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Top from '../components/Top'

const IndexLayout: React.FC = ({ children }) => (
  <div>
    <Menu />
    <Top />
    {children}
    <Footer />
  </div>
)

export default IndexLayout
