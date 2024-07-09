import mango from './../assets/mango.png'
import { Switch } from './Switch'

export const Header = () => {
    return(
        <div className='container-Header'>
            <div className='logo'>
                <img src={mango} alt='Logo'/>
                <h1>
                    Traveling Mango
                </h1>
            </div>
            <Switch />
        </div>
    )
}