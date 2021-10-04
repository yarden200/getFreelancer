import React from 'react'

export class SearchInput extends React.Component {
    state = {
        searchKey: '',
    }

    handleChange = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState(({ [field]: value }), () => {
            console.log('in input:', this.state.searchKey);
        })
    }

    onSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/explore?searchKey=${this.state.searchKey}`)
    }

    render() {
        const { searchKey } = this.state
        return (
            <div className="search-input-container">
                <form className="search-input-content flex" onSubmit={this.onSubmit} >
                    <label htmlFor='search'>
                        <span className="search-icon"></span>
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
