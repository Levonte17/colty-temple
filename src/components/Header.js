import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div className='header'>
            <nav className="nav">
                <Link to="/">
                    <div className='nav-logo'>Home</div>
                </Link>
                
                <Link to="/prayer">
                    <div className='nav-logo'>Prayer</div>
                </Link>
                
                <Link to="/announcements">
                    <div className='nav-logo'>Announcements</div>
                </Link>
                
                <Link to="/hours">
                    <div className='nav-logo'>Hours</div>
                </Link>
                
                <Link to="/community">
                    <div className='nav-logo'>Community</div>
                </Link>
                
            </nav>
        </div>
    );
}


export default Header;