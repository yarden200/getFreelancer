import React from 'react'
import { connect } from 'react-redux'
import { loadGigs, onSetFilter } from '../store/gig.actions.js'
import { GigList } from '../cmps/gig-list.jsx'
import { SortBar } from '../cmps/sort-bar.jsx'

const queryString = require('query-string')

class _ExplorePage extends React.Component {

    state = {
        filterBy: {
            searchKey: '',
            tags: ''
        }
    }

    componentDidMount() {
        const parsed = queryString.parse(this.props.location.search);
        console.log('explore', parsed);
        const { searchKey, tags } = parsed
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
        // console.log(this.props.location.search)
        // const { search } = this.props.location
        console.log('filterBy from explore', this.state.filterBy);
        const { gigs } = this.props
        return (
            <div className="explore-page main-container">
                {/* <h3>Gigs App</h3> */}
                {/* <SortBar /> */}
                {/* <div className="">
                    
                </div> */}
                <GigList gigs={gigs} />
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