
import React, { PropTypes } from 'react'
import * as Blogs           from '../blogs'
import { BlogPostMeta }     from './BlogPost'


/*
 * A blog preview for the blog roll. Pretty much the same as a
 * BlogPost, but without comments, etc
 */
export default class BlogPreview extends React.Component {

    static propTypes = {
        params: PropTypes.object
    }

    render() {
        const blog = Blogs.getBlogById(this.props.params.id)
        return (
            <div>
                <h1 style={{paddingTop:25, paddingBottom:10}}>
                    <a href={`/posts/${blog.id}`}>{blog.meta.title}</a>
                </h1>
                <BlogPostMeta meta={blog.meta} />
                <hr/>
                <div dangerouslySetInnerHTML={{__html:blog.content}}/>
            </div>
        )
    }
}
