import { Component } from 'react'
import mango from './../assets/mango.png'
import Switch from './Switch'

class Header extends Component {
    render() {
        return(
            <div className='container-Header'>
                <div className='logo'>
                    <img src={mango} alt='Logo'/>
                    <h1>
                        Traveling Mango
                    </h1>
                </div>
                <Switch theme={''} />
            </div>
        )
    }
}

export default Header;