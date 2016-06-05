
import React from 'react'

export default function Navigation() {
    return (
        <nav className="navbar navbar-full navbar-dark bg-inverse">
            <div className="container">
                <div id="navbar">

                    <a className="navbar-brand" href="/">
                        Cody Reichert
                        {" "}
                        <small>The one true blog</small>
                    </a>

                    <ul className="nav navbar-nav pull-md-right">
                        <li className="nav-item">
                            <a className="nav-link" href="/about">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/posts">
                                Posts
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
