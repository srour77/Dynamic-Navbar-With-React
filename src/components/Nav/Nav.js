import './nav.css'
import Link from '../Link/Link'

function Nav(props) {
    return(
        <ul>
            {
                props.urls.map(item => {
                    let {url,name} = item;
                    return <li><Link url={url} name={name}/></li>
                })
            }
        </ul>
    )
}

export default Nav