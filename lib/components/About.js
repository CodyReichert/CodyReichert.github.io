
import React, { PropTypes } from 'react'

import avatar from '../assets/images/avatar.jpg'

export default class About extends React.Component {
    render() {
        return (
            <div style={{marginTop:25}}>
                <div className="media">
                    <div className="media-left media-middle">
                        <img
                            width={200}
                            src={avatar}
                            alt="Cody Reichert Avatar"
                            className="media-object img-thumbnail"
                        />
                    </div>
                    <div className="media-body media-middle">
                        <h3 className="media-heading">Hey there</h3>
                        <p>
                            I'm Cody. Thanks for visiting.  This page
                            should probably contain more information
                            about me, but it doesn't yet.  Hopefully
                            I'll find the time to update it.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <br/>
                        <h2>Business</h2>

                        <h5>
                            Assertible
                            {" "}
                            <small className="text-muted">
                                Automated QA testing for web services
                            </small>
                        </h5>
                        <p>
                            <a href="https://assertible.com">Assertible</a>
                            {" "} is a service for creating automated
                            QA tests for APIs and
                            websites. <CReichert/> and I started
                            Assertible to have a <i>reliable</i> way
                            to test and monitor our APIs and it has
                            become a key part of our testing workflow.
                            Assertible focuses on
                            {" "}
                            <a href="https://assertible.com/docs/guide/deployments">
                                post deploy smoke tests
                            </a>
                            {" "}
                            and
                            {" "}
                            <a href="https://assertible.com/docs/guide/automation">
                                web service monitoring
                            </a>.
                            <br/>
                            <a href="https://assertible.com">
                                Read more...
                            </a>
                        </p>
                        <h5>
                            SimplyRETS
                            {" "}
                            <small className="text-muted">
                                A platform for building real estate apps
                            </small>
                        </h5>
                        <p>
                            I co-founded SimplyRETS in 2015, along with my
                            brother <CReichert/>. SimplyRETS provides
                            a platform for developers and real estate
                            agents to build modern web applications
                            with listing and market data from their MLS.
                            <br/>
                            <a href="https://simplyrets.com">Read more...</a>
                        </p>
                        <h5>
                            Reichert Brothers
                            {" "}
                            <small className="text-muted">
                                :: A Haskell Consulting Company
                            </small>
                        </h5>
                        <p>
                            In 2014 <CReichert/>, started our own
                            consulting company specializing in Haskell
                            and other statically typed
                            languages. Although we are full on
                            projects right now, Reichert Brothers
                            still plays a big role in our company
                            structure.
                            <br/>
                            <a href="http://reichertbrothers.com">Read more...</a>
                        </p>

                        <h2>Open Source</h2>
                        <div>
                            <p>
                                Below are some of my current and
                                previous Open Source projects:
                            </p>
                            <p>
                                <small className="text-muted">
                                    Author and Maintainer
                                </small>
                            </p>
                            <ul>
                                <li>
                                    <GhProjectLink name="simplyrets/simplyretswp">
                                        A WordPress plugin for SimplyRETS.
                                    </GhProjectLink>
                                </li>
                                <li>
                                    <GhProjectLink name="awesome-cl">
                                        An awesome list of tools and
                                        libraries for Common Lisp.
                                    </GhProjectLink>
                                </li>
                                <li>
                                    <GhProjectLink name="qi">
                                        Qi - A Package Manager for
                                        Common Lisp
                                    </GhProjectLink>
                                </li>
                                <li>
                                    <GhProjectLink name="shakespeare-mode">
                                        An Emacs major mode for
                                        writing Shakespearean
                                        templates.
                                    </GhProjectLink>
                                </li>
                                <li>
                                    <GhProjectLink name="react-c3">
                                        A React.js library for c3.js
                                    </GhProjectLink>
                                </li>
                                <li>
                                    <GhProjectLink name="materializer">
                                        Material Design components for
                                        Wordpress.
                                    </GhProjectLink>
                                </li>
                                <li>
                                    <GhProjectLink name="react-c3">
                                        A collection of Emacs
                                        Yasnippets for writing
                                        EcmaScript 2015.
                                    </GhProjectLink>
                                </li>
                            </ul>
                            <p>
                                <small className="text-muted">
                                    Contributor
                                </small>
                            </p>
                            <ul>
                                <li>
                                    <GhProjectLink
                                        name="creichert/magit-gh-issues">
                                        A collection of Emacs
                                        Yasnippets for writing
                                        EcmaScript 2015.
                                    </GhProjectLink>
                                </li>
                                <li>
                                    <GhProjectLink
                                        name="creichert/stack-tag">
                                        Create ETAGS and CTAGS for
                                        Haskell projects using Stack.
                                    </GhProjectLink>
                                </li>
                                <li>
                                    <GhProjectLink
                                        name="beetbox/beets">
                                        A music library manager and tagger.
                                    </GhProjectLink>
                                </li>
                            </ul>
                            <p>
                                And many, many more.{" "}
                                <a href="https://github.com/CodyReichert">
                                    Follow me
                                </a>
                                {" "}on GitHub for more.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function GhProjectLink({ name, children }) {

    const href = name.includes("/") ? name : `CodyReichert/${name}`

    return (
        <a href={`https://github.com/${href}`}>
            <span style={{color:"#333"}}>{href}:</span> {children}
        </a>
    )
}

function CReichert() {
    return (
        <a href="https://twitter.com/creichert">@creichert</a>
    )
}
