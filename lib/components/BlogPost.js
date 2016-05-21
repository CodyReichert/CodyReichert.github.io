
import React, { PropTypes } from 'react'
import * as Blogs           from '../blogs'
import Icon                 from './layout/Icon'

/*
 * A single blog post page. Gets route param 'id'
 * in it's props, and finds the correct blog to render
 */
export default class BlogPost extends React.Component {

    static propTypes = {
        params: PropTypes.object
    }

    render() {
        const blog = Blogs.getBlogById(this.props.params.id)
        return (
            <div>
                <h1 style={{paddingTop:25, paddingBottom:10}}>
                    {blog.meta.title}
                </h1>
                <BlogPostMeta meta={blog.meta} />
                <hr/>
                <div dangerouslySetInnerHTML={{__html:blog.content}}/>
            </div>
        )
    }
}

function BlogPostMeta({ meta }) {
    return (
        <small className="text-muted">
            <span style={{marginRight:10}}>
                <Icon glyph="calendar" />
                {prettyDate(meta.date)}
            </span>
            <span style={{marginRight:10}}>
                <Icon glyph="folder" />
                {meta.category}
            </span>
            <span style={{marginRight:10}}>
                <Icon glyph="pencil" />
                {meta.author}
            </span>
            <span className="pull-xs-right">
                <a href="/posts">Back to blogs</a>
            </span>
        </small>
    )
}

function prettyDate(date) {
    const pDate = new Date(date)
    const day = pDate.getDay()
    const month = pDate.getMonth() + 1
    const year = pDate.getFullYear()

    return `${month}/${day}/${year}`
}
