import React from 'react'
import MenuItem from '../components/MenuItem'
import { MenuList } from '../other/MenuList'
import Kep from "../assets/margherita.jpg";

function Home() {
    return (
        <div>
           <div className="napiAjanlat">
           <MenuItem name="akcio" price="0" image={Kep}/>
           
           </div>
        </div>
    )
}

export default Home
