import React from 'react'
import Orderone from "./Orderone"
import Ordertwo from "./Ordertwo"
import Orderthree from "./Orderthree"
import Loader from '../components/Loader'
import Nav from '../components/Nav'

const Multistep = () => {
  return (
    <div>
        <Loader/>
        <header>
            <Nav/>
        </header>
        <div>
            <Orderone/>
            <Ordertwo/>
            <Orderthree/>
        </div>
    </div>
  )
}

export default Multistep