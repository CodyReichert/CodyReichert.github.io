
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
