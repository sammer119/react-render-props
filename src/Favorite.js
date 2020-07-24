import React, {Component} from 'react'
import Toggler from './Toggler'

function Favorite(props) {
    return (
        <Toggler render={function(on, toggle) {
            return (
                <>
                    <h3>Click here to favourite</h3>
                    <h1>
                        <span onClick={toggle}>
                            {on ? "❤️" : "♡"}
                        </span>
                    </h1>
                </>
            )
        }}/>
    )
}

export default Favorite