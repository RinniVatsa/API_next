// components/Header.js
// components/Header.js
import Link from 'next/link';

const Header = () => {
    return ( <
        header style = { headerStyle } >
        <
        nav >
        <
        ul style = { navStyle } >
        <
        h1 > Users List < /h1> < /
        ul > < /
        nav > <
        /header>
    );
};

const headerStyle = {
    background: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '1rem 0',
};

const navStyle = {
    listStyle: 'none',
    padding: 0,
};

const liStyle = {
    display: 'inline',
    margin: '0 10px',
};

export default Header;