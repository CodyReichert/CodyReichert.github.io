
import React, { PropTypes } from 'react'

import avatar from '../assets/images/avatar.jpg'

export default class About extends React.Component {
    render() {
        return (
            <div style={{marginTop:25}}>
                <img
                    width={200}
                    src={avatar}
                    alt="Cody Reichert Avatar"
                    className="img-thumbnail"
                />
                <p>
                    Hey, I'm Cody. Thanks for visiting.  This page
                    should probably contain more information about me,
                    but it doesn't yet.  Hopefully I'll find the time
                    to update it.
                </p>
            </div>
        )
    }
}
