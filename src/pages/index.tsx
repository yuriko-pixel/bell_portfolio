import * as React from 'react'
import IndexLayout from '../layouts/index'
import topstyle from '../styles/top.module.scss'
import { StaticQuery, graphql } from 'gatsby'
import Template from '../components/test'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

const IndexPage: React.FC = (() => (
  <StaticQuery
    query={graphql`
      query indexLayoutQueryAndIndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <IndexLayout>
        <div className={topstyle.center}>
          <img className={topstyle.topimg}
            src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-witch-hat-halloween-wanicon-lineal-color-wanicon.png"
          />
          <div className={topstyle.title}>{data.site.siteMetadata.title}</div>
          <div className={topstyle.occp}>Front-End Engineer</div>
          <Template />
        </div>
      </IndexLayout>
    )}
  />
)
)

export default IndexPage


