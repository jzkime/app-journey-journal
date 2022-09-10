import { Link } from 'react-router-dom';

function Header() {
    return (
    <header>
        <h1>Journey Journal</h1>
        <nav>
            <div id='header-left'>
                <Link className='header-icon' to='/archive'><img src='https://cdn-icons-png.flaticon.com/512/29/29302.png'/></Link>
            </div>
            <input className='search' placeholder='search'/>
            <div id='header-right'>
                <Link className='header-icon' to='/new-entry'><img src='https://static.thenounproject.com/png/184292-200.png'/></Link>
                <Link className='header-icon' to='/profile' ><img src='https://www.pngmart.com/files/22/User-Avatar-Profile-Transparent-Isolated-Background.png'/></Link>
            </div>
        </nav>
    </header>
    )
}

export default Header;