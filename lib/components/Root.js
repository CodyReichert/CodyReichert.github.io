
import React, { PropTypes } from 'react'
import Navigation           from './layout/Navigation'
import Footer               from './layout/Footer'

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
                <br/>
                <Footer />
            </div>
        )
    }
}
