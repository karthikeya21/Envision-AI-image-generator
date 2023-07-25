import React from 'react'
import { Link } from 'react-router-dom'
import { Contact } from './Contact'

import { Nav } from './Nav'

export const Home = () => {
  return (
    <>
    <header>
      <span className='font-link'>
      <h1>ENVISION</h1>
      </span>
        
        <h2>-* AI Image Generator *-</h2>
        <h3>Create realistic Images by using power of AI.</h3>
        <br />
        <button>
          <Link to="/image-generator">TRY NOW!</Link>
        </button>
    </header>
    </>
  )
}
