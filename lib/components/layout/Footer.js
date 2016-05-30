
import React from 'react'
import Icon  from './Icon'

export default function Navigation() {
    return (
        <footer className="navbar navbar-full navbar-dark bg-inverse">
            <div className="container">
                <div className="collapse navbar-toggleable-xs" id="navbar">
                    <ul className="nav navbar-nav pull-md-left">
                        <li className="nav-item">
                            <span className="nav-link">
                                Cody Reichert - Copyright &copy; 2016
                            </span>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav pull-md-right">
                        <li className="nav-item">
                            <a className="nav-link"
                               target="_blank"
                               href="https://github.com/CodyReichert">
                                <Icon glyph="github-alt"/>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"
                               target="_blank"
                               href="https://twitter.com/CodyReichert">
                                <Icon glyph="twitter"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
