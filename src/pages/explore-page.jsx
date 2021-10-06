import React from 'react'
import { connect } from 'react-redux'
import { loadGigs, onSetFilter } from '../store/gig.actions.js'
import { GigList } from '../cmps/gig-list.jsx'

const queryString = require('query-string');

class _ExplorePage extends React.Component {

    state = {
        filterBy: {
            searchKey: '',
            tags: ''
        }
    }

    componentDidMount() {
        // const elHeader=document.querySelector('.app-header')
        // elHeader.classList.add("app-header-scroll1")
        const parsed = queryString.parse(this.props.location.search);
        const { searchKey, tags } = parsed
        console.log(searchKey, tags);
        if (searchKey) {
            this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, searchKey } }), () => {
                this.props.onSetFilter(this.state.filterBy)
                return
            })
        }
        if (tags) {
            this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, tags } }), () => {
                this.props.onSetFilter(this.state.filterBy)
                return
            })
        }
        else {
            this.props.loadGigs()
        }
    }
    
    render() {
        console.log('filterBy from explore', this.state.filterBy);
        const { gigs } = this.props
        return (
            <div className="explore-page main-container">
                <h3>Our Freelancers Gigs</h3>
                <div  >
                    <GigList gigs={gigs} />
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        gigs: state.gigModule.gigs
    }
}
const mapDispatchToProps = {
    loadGigs,
    onSetFilter
}


export const ExplorePage = connect(mapStateToProps, mapDispatchToProps)(_ExplorePage)