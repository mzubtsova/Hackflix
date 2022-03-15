// 1. creating header component
import { Link } from 'react-router-dom';

function Header(props) {
  
        console.log("Header props:", props)
    return (
        <header>
            {/* step 17 wrapping h1 to <link> so it's clickable and returns you home */}
            <Link to="/">
                <h1>{props.heading}</h1>
            </Link>
        </header>
    )
}

export default Header;