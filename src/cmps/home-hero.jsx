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
        console.log('hero render: history', history);
        return (
            <div className="home-hero-container">
                <div className="home-hero-content">

                    <header>
                        <h1>Find the perfect freelance<br /> services for your business</h1>
                    </header>
                    <div className="hero-search">
                        <SearchInput history={history}/>
                    </div>
                    <div className="hero-popular">
                        popular:
                        {this.state.pTags.map(tag => <Link key={tag} to={`/explore?tag=${tag}`} >
                            {tag}
                        </Link>)}
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