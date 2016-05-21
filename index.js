
import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import { Router, createMemoryHistory } from 'react-router'
import { routes }   from './lib/routes'

import 'bootstrap/dist/css/bootstrap.css'
import './lib/assets/styles/main.scss'

/*
 * Client side render
 */
if (typeof window !== 'undefined') {
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
