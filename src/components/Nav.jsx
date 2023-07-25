import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/"><button>Home</button></Link></li>
            <li><Link to="/image-generator"><button>Generate Image</button></Link></li>
            <li><Link to="/contact"><button>Contact</button></Link></li>
        </ul>

    </nav>
  )
}
