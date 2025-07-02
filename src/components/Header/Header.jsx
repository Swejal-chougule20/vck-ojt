import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    return(
        <div className="header1">
            <header className="site-header">
                <div className="brand">
                    Vivekanand College
                </div>
                <nav className="nav-links">
                   <Link to="/" className="Links">Home</Link> 
                   <Link to="/about" className="Links">About</Link>   
                   <Link to="/courses" className="Links">Courses</Link> 
                   <Link to="/contact" className="Links">Contact</Link>                  
                   <a href="/admission" className="apply-btn">Apply Now!</a>
                </nav>
            </header>
        </div>
    )
}

export default Header;
