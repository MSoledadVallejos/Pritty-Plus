import React from 'react';
import logoCat from "../static/img/logoCat.png"


function Header() {
    return (
        <>
            <header>
                <div className="navbar navbar-dark bg-dark shadow-sm">
                    <div className="container">
                        <div className="navbar-brand">
                            <img
                                height="90px" src={logoCat} alt="logo" />
                            <strong>Pritty Plus</strong>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export { Header };