import * as React from 'react'
import topstyle from '../styles/top.module.scss'
import IndexLayout from '../layouts/index'
import { StaticQuery, graphql, Link } from 'gatsby'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

const Top: React.FC = (() => (
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
      <div className={topstyle.center}>
        <Link to="/">
          <img className={topstyle.topimg}
            src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-witch-hat-halloween-wanicon-lineal-color-wanicon.png"
          />
        </Link>
        <div className={topstyle.title}>{data.site.siteMetadata.title}</div>
        <div className={topstyle.occp}>Front-End Engineer</div>
      </div>
    )}
  />
))

export default Top
