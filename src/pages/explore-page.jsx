import React from 'react'
import { connect } from 'react-redux'


class _ExplorePage extends React.Component {
    
    state = {}


    render() {
        return (
            <section>
                <h1>Explore</h1>
            </section >
        )
    }
}

function mapStateToProps(state) {
    return {
        gigs: state.gigModule.gigs
    }
}

export const ExplorePage = connect(mapStateToProps)(_ExplorePage)