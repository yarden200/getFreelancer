import React from 'react'

export class SortBar extends React.Component {
    state = {
        filterBy: {
            searchKey: '',
            tags: '',
            deliveryTime: ''
        },
        isOpen: ''

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
        this.props.history.push(`/explore?searchKey=${1}`)
    }

    onBtnLink = (ev) => {
        console.log('link!!', ev);
    }
    render() {
        const { } = this.state
        return (
            <div className="sort-bar">
                <div className="dropdown">
                    <button className="link" onClick={this.onBtnLink}>Budget</button>
                    <div className="dropdown-menu information-grid">
                        <div>
                            <div className="dropdown-heading">Free Tutorials</div>
                            <div className="dropdown-links">
                                <a href="#" className="link">All</a>
                                <a href="#" className="link">Latest</a>
                                <a href="#" className="link">Popular</a>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="link">Delivery Time</button>
            </div>
        )
    }
}
