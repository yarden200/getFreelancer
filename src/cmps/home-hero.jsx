import React from 'react'
import { Link } from 'react-router-dom'
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
                    <div className="hero-content flex column">
                        <header>
                            <h1>Find the perfect <span className="freelanse">freelance</span><br /> services for your business</h1>
                        </header>
                            <SearchInput history={history} />
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
