
import React, { PropTypes } from 'react'
import { blogs }            from '../blogs'

export default class Blogroll extends React.Component {
    render() {
        return (
            <div>
                <h1>All Blogs</h1>
                <ul>
                    {blogs.map(b => (
                         <li key={b.id}>
                             <a href={`/posts/${b.id}/index.html`}>
                                 {b.meta.title}
                             </a>
                         </li>
                     ))}
                </ul>
            </div>
        )
    }
}
