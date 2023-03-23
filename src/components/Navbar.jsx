import { Link } from 'react-router-dom';
import BookNote from './BookNote';
import Home from './Home';

const Navbar = () => {
    return (
        <header>
            <nav>
                <div className="logo-text">
                    <Link to="/">The Reading Room</Link>
                </div>
                <ul className="nav-list">
                    <Link className='nav-link' to="/booknotes" element={<BookNote />}>Book Notes</Link>
                    <Link className='nav-link disabled' aria-disabled to="/readinglist" element={<Home />}>Reading List</Link>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;