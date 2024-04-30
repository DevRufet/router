import React from 'react'
import { Link } from 'react-router-dom'
import Addemployess from '../Add Employess/Addemployess'
import Employess from '../Employess/Employess'
import LogOut from '../LogOut/LogOut'
import Main from '../Main/Main'



function Navbar() {
  return (
    <> 
    {/* <Main></Main>
    <Employess></Employess>
    <Addemployess></Addemployess>
    <LogOut></LogOut> */}
    <Link to={"Main"}>Main</Link>
    <Link to={"Employess"}>Employess</Link>
    <Link to={"Addemployess"}>Addemployess</Link>
    <Link to={"LogOut"}>LogOut</Link>

    </>
  )
}

export default Navbar