
import React, { PropTypes } from 'react'
import { blogs }            from '../blogs'
import BlogPreview          from './BlogPreview'

export default class Blogroll extends React.Component {
    render() {
        return (
            <div>
                {blogs.map(b => (
                     <BlogPreview params={{ id: b.id }} key={b.id} />
                 ))}
            </div>
        )
    }
}
