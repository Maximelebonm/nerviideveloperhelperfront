import './HeaderComponent.css'
import { Link } from 'react-router-dom'
import nerviiLogo from '../../assets/logo/nervii-logo-solo.svg';

export const HeaderComponent = ()=>{

    return (
        <nav id="headerNav">
            <div id="logoContainer">
                 <Link  to="/"><img src={nerviiLogo} id="navLogo"/></Link>

            </div>
            <div>
                    <Link to={'/search'} className="NavItem"><li>Search</li></Link>
            </div>
        </nav>
    )
}