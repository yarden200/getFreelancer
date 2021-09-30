import React from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

import { SearchInput } from './search-input'

export class HomeHero extends React.Component {
    state = {
        pTags: [
            'React',
            'Node.js',
            'Redux',
            'Css'
        ]
    }

    render() {
        const { history } = this.props
        return (
            <div className="hero-container">
                <div className="main-container">
                    <div className="hero-content">
                        <header>
                            <h1>Find the perfect <span className="freelanse">freelance</span><br /> services for your business</h1>
                        </header>
                        <div className="hero-search flex">
                            <SearchInput history={history} />
                        </div>
                        <div className="hero-popular flex">
                            popular:
                            <ul>
                                {this.state.pTags.map(tag => <Link key={tag} to={`/explore?tag=${tag}`} >
                                    {tag}
                                </Link>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}







// function mapStateToProps(state) {
//     return {

//     }
// }
// const mapDispatchToProps = {

// }


// export const HomeHero = connect(mapStateToProps, mapDispatchToProps)(_HomeHero)