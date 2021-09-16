import * as React from 'react'
import IndexLayout from '../layouts/index'
import { StaticQuery, graphql } from 'gatsby'
import Blogpost from '../components/Blogpost'
import Top from '../components/Top'

const IndexPage: React.FC = (() => (
  <IndexLayout>
    <Top />
    <Blogpost />
  </IndexLayout>
))

export default IndexPage


