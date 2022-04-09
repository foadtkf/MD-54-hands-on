import React from 'react';
import './Header.css'
import CustomLink from './../../Activelink/CustomLink';
const Header = () => {
    return (
        <div>
            <h2>Hello there!</h2>
            <nav style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)'}}>
                <CustomLink to='/home'>Home</CustomLink>
                <CustomLink to='/orderreview'>Order Review</CustomLink>
            </nav>
        </div>
    );
};

export default Header;