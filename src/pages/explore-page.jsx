import React from 'react'
import { connect } from 'react-redux'
import { loadGigs, onSetFilter } from '../store/gig.actions.js'
// import { showSuccessMsg } from '../services/event-bus.service.js'
import { GigList } from '../cmps/gig-list.jsx'

const queryString = require('query-string');

class _ExplorePage extends React.Component {
    state = {
        filterBy: {
            searchKey: '',
            tag: ''
        }
    }


    componentDidMount() {
        const parsed = queryString.parse(this.props.location.search);
        console.log('explore url parsed:', parsed);
        const { searchKey, tag } = parsed
        if (searchKey) {
            this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, searchKey } }), () => {
                this.props.onSetFilter(this.state.filterBy)
                return
            })
        }
        if (tag) {
            console.log('There is TAG', tag);
            this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, tag } }), () => {
                console.log('setState CALLBACK:', this.state.filterBy);
                this.props.onSetFilter(this.state.filterBy)
                return

            })
        }
        else{
            this.props.loadGigs()
        }
    }

    render() {
        const { gigs } = this.props
        console.log('in render:', gigs);
        return (
            <div className="explore-page main-container">
                <h3>Gigs App</h3>
                {/* <main> */}
                    <div  >
                        <GigList
                            gigs={gigs}
                        />
                    </div>
                {/* </main> */} 
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