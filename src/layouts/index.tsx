import * as React from 'react'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import topindex from '../styles/topindex.module.scss'

const IndexLayout: React.FC = ({ children }) => (
  <div className={topindex.container}>
    <Menu />

    {children}
    <Footer />
  </div>
)

export default IndexLayout
