import React from 'react';
import { Header } from './Header';


function Footer() {
    return (

        <footer className="text-muted py-5">
            <div className="container">
                <p className="float-end mb-1">
                    <a href={<Header></Header>}>Back to top</a>
                </p>
                <p className="mb-1">Made with ❤ by Soledad</p>
                <p className="mb-0">
                    Visit my profile
                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/SoledadVallejos"
                    >Visit the homepage</a>
                </p>
            </div>
        </footer>
    )
}

export { Footer };