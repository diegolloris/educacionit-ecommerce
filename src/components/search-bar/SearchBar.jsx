import React from 'react'
import PropTypes from 'prop-types'

const SearchBar = props => {
    return (
        <>
            <div className="center">
                <input type="text" placeholder="Tu búsqueda"></input>
            </div>
            <br />
        </>
    )

}


SearchBar.propTypes = {}

export default SearchBar
