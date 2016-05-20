
import React, { PropTypes } from 'react'

export default class Root extends React.Component {
    static propTypes = {
        path: PropTypes.string,
        children: PropTypes.node,
    }
    render() {
        return (
            <div id="outlet">
                <Navigation />
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

function Navigation({}) {
    return (
        <nav className="navbar navbar-light bg-faded">
            <div className="container">
                <div className="collapse navbar-toggleable-xs" id="navbar">

                    <a className="navbar-brand" href="/">Cody</a>

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
