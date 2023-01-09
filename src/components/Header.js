import React from 'react';
import '../input.css';

class Header extends React.Component{
    render() {
        return (
            <header className="text-center bg-orange-500">
                <h1 className="text-2xl bg-green-600">BOLLYWOOD</h1>
            <h2>	&#127775;Melhores filmes	&#127775;</h2>
            </header>
        );
    }
}

export default Header;