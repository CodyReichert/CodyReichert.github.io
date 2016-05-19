
import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import { Router, createMemoryHistory } from 'react-router'
import { Route, IndexRoute } from 'react-router'

const blogContext = require.context('./posts', true, /\.md$/)
const blogs = blogContext.keys().map(blogContext).sort((a, b) =>
    // Import blogs and sort them by date (reverse)
    new Date(b.meta.date) - new Date (a.meta.date)
)

function getBlogById(postId) {
    return blogs.find(b => b.id === postId)
}



/*
 * Root component - wraps all other
 */
class Root extends React.Component {
    static propTypes = {
        path: React.PropTypes.string,
        children: React.PropTypes.node,
    }
    render() {
        return (
            <div id="outlet">
                {this.props.children}
            </div>
        )
    }
}

class About extends React.Component {
    render() {
        return (
            <div>
                <p>Hi, thanks for reaching ABOUT ME</p>
            </div>
        )
    }
}

class Archive extends React.Component {
    render() {
        return (
            <div>
                <h1>All Blogs</h1>
                <ul>{blogs.map(b => (
                        <li key={b.id}>
                            <a href={`/posts/${b.id}/index.html`}>
                                {b.meta.title}
                            </a>
                        </li>
                    ))}</ul>
            </div>
        )
    }
}

/*
 * A single blog post page. Gets route param 'id'
 * in it's props, and finds the correct blog to render
 */
class Post extends React.Component {

    static propTypes = {
        params: React.PropTypes.object
    }

    render() {
        const content = getBlogById(this.props.params.id)
        return (
            <div dangerouslySetInnerHTML={{__html:content.content}}></div>
        )
    }
}

/*
 * Routes
 */
const routes = (
    <Route component={Root} path='/'>
        <IndexRoute component={About}/>
        <Route path="about" component={About} />
        <Route path="posts" component={Archive} />
        <Route path="posts/:id" component={Post} />
    </Route>
)


/*
 * Client side render
 */
if (typeof document !== 'undefined') {
    const history = createHistory();
    const outlet = document.getElementById('outlet');
    ReactDOM.render(<Router history={history} routes={routes} />, outlet);
}

/*
 * Server side render (default)
 */
export default (locals, callback) => {
    const history = createMemoryHistory(locals.path);

    callback(null, locals.template({
        html: ReactDOMServer.renderToStaticMarkup(
            <Router createElement={(C, p) => <C locals={locals} {...p} />}
                    history={history}>
                {routes}
            </Router>
        ),
        assets: locals.assets
    }))
};
