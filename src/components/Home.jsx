import { Link } from "react-router-dom"

const Home = () => {
    return (
    <div id="home">
        <h1 className="home-title">The Reading Room</h1>
        <p className="home-subtitle">Create notes about a book you've read, or save the name of a book you want to read.</p>
        {/* <p className="home-info">You can also review your previously saved notes, or your check out your reading wish list by using the links in the nav bar.</p> */}
        
        <div className="button-link-group">
            <Link to="/booknotes">
                <button className="button-link" type="button">Book Notes</button>
            </Link>
            <Link to="/readlist">
                <button className="button-link disabled" type="button" disabled>Reading List</button>
            </Link>
        </div>
    </div>
    )
};

export default Home;