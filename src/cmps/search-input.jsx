import React from 'react'
import { Link } from 'react-router-dom'

export class SearchInput extends React.Component {
    state = {
        searchKey: '',
    }

    handleChange = (ev) => {
        console.log(ev);
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState(({ [field]: value }), () => {
            console.log('in input:', this.state.searchKey);
        })
    }

    onSearch = (ev) => {
        console.log('ev', ev);
        console.log(this.state.searchKey);
    }

    onSubmit = (ev) => {
        ev.preventDefault()
        console.log('on Submit ev:', ev);
        console.log('this.prpos.history', this.props.history);
        this.props.history.push(`/explore?searchKey=${this.state.searchKey}`)
    }

    render() {
        const { searchKey } = this.state
        return (
            <div className="search-input-container">
                <form className="search-input-content" onSubmit={this.onSubmit} >
                    <label htmlFor='search' >
                        <input
                            name='searchKey' id='search'
                            type='text' placeholder='Try "building mobile app"' value={searchKey}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button className="search-btn">Search</button>
                </form>
            </div>
        )
    }
}