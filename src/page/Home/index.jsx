import React from 'react'
import MenuJson from './menu'
import './index.scss'
import { Link } from 'react-router-dom'

const prefix = 'home'
function Home () {
  return (
    <div className={prefix}>
      {
        MenuJson.map((item, index) => {
          console.log(item.resUrl)
          return (
            <div className={`${prefix}-box`} key={index}>
              <Link
                to={{
                  pathname: item.url
                }}
              >
                <img className={`${prefix}-box-img`} src={item.resource} alt={item.text} />
                <div className={`${prefix}-box-text`}>{item.text}</div>
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default Home
