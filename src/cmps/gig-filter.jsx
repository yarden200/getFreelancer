import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


import { onSetFilter } from "../store/gig.actions.js";



class _GigFilter extends React.Component {
    state = {
        filterBy: {
            searchKey: '',
            tag: ''
        },
        pTags: [
            'React',
            'Node.js',
            'Redux',
            'Css'
        ]
    }




    handleChange = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => {
            // console.log('in input:', this.state.filterBy);
        })
    }

    onSearch = (ev) => {
        ev.preventDefault()
        console.log('ev', ev);
        console.log(this.state.filterBy.searchKey);
        this.props.onSetFilter(this.state.filterBy)
    }

    // onSearchByTag = (ev) => {
    //     const tag = ev.target.textContent
    //     console.log('search by tag:', ev.target.textContent);
    //     this.setState({ filterBy: { ...this.state.filterBy, tag: tag } })
    //     console.log('search by tag filter:', this.state.filterBy);
    //     this.props.onSetFilter(this.state.filterBy)
    // }

    render() {
        const { searchKey, tag } = this.state.filterBy
        return (
            <div className="gig-filter-container">
                <form className="gig-filter" >
                    <label htmlFor='search' >
                        <input
                            name='searchKey' id='search'
                            type='text' placeholder='Try "building mobile app"' value={searchKey}
                            onChange={this.handleChange}
                        />
                    </label>
                    <Link  to={`/explore?searchKey=${searchKey}`}> 
                        <button className="search-btn">Search</button>
                    </Link>

                </form>
                <div>
                    <div> popular:
                         {this.state.pTags.map(tag => <Link key={tag} to={`/explore?tag=${tag}`} >
                            {tag}
                        </Link>)}
                    </div>
                </div>

            </div>
        )

    }
}

function mapStateToProps(state) {
    return {
        gigs: state.gigModule
    }
}

const mapDispatchToProps = {
    onSetFilter,
}

export const GigFilter = connect(mapStateToProps, mapDispatchToProps)(_GigFilter)