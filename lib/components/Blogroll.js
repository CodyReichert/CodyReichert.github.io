
import React, { PropTypes } from 'react'
import { blogs }            from '../blogs'
import BlogPost             from './BlogPost'

export default class Blogroll extends React.Component {
    render() {
        return (
            <div>
                {blogs.map(b => (
                     <BlogPost params={{ id: b.id }} key={b.id} />
                 ))}
            </div>
        )
    }
}
