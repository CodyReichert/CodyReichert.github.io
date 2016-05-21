
import React, { PropTypes } from 'react'

export default function Icon({ glyph, ...rest }) {
    return (
        <i className={`fa fa-${glyph}`}
           style={{marginRight:5}}
           {...rest}
        />
    )
}

Icon.propTypes = {
    glyph: PropTypes.string.isRequired
}
