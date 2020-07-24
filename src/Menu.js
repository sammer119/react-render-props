import React, {Component} from 'react'
import Toggler from './Toggler'

// bring in the toggler
// render the toggler inside the menu, and use the render prop to determine what wil get displayed
// remember to bring in the 'goodies' (state and methods) to that function so you can get this to work

function Menu(props) {
    return (
        <Toggler render={function(on, toggler) {
            return (
                <>
                    <button onClick={toggler}>{!on ? 'Hide' : 'Show'} Menu </button>
                    <nav style={{display: !on ? 'block' : 'none'}}>
                        <h6>Signed in as Coder123</h6>
                        <p><a>Your Profile</a></p>
                        <p><a>Your Repos</a></p>
                        <p><a>Your Stars</a></p>
                        <p><a>Your Gists</a></p>
                    </nav>
                </>
            )
        }} />
    )
}

export default Menu