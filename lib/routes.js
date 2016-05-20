
import React                 from 'react'
import { Route, IndexRoute } from 'react-router'

import Root     from './components/Root'
import About    from './components/About'
import Blogroll from './components/Blogroll'
import BlogPost from './components/BlogPost'


/*
 * Routes
 */
export const routes = (
    <Route component={Root} path='/'>
        <IndexRoute component={Blogroll}/>
        <Route path="about" component={About} />
        <Route path="posts" component={Blogroll} />
        <Route path="posts/:id" component={BlogPost} />
    </Route>
)
