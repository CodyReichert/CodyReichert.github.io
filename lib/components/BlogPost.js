
import React, { PropTypes } from 'react'
import * as Blogs           from '../blogs'

/*
 * A single blog post page. Gets route param 'id'
 * in it's props, and finds the correct blog to render
 */
export default class BlogPost extends React.Component {

    static propTypes = {
        params: PropTypes.object
    }

    render() {
        const content = Blogs.getBlogById(this.props.params.id)
        return (
            <div dangerouslySetInnerHTML={{__html:content.content}}></div>
        )
    }
}
