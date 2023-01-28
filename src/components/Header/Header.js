import Nav from '../Nav/Nav'
import './header.css'

function Header(props) {
    return(
        <div className="header">
            <h1>logo</h1>
            <Nav className='Nav' urls={props.urls}/>
        </div>
    )
}

export default Header