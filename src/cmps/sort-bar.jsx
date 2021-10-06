import React from 'react'

export class SortBar extends React.Component {
    state = {
        filterBy: {
            searchKey: '',
            tag: '',
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
            <div class="sort-bar">
                <div class="dropdown">
                    <button class="link" onClick={this.onBtnLink}>Budget</button>
                    <div class="dropdown-menu information-grid">
                        <div>
                            <div class="dropdown-heading">Free Tutorials</div>
                            <div class="dropdown-links">
                                <a href="#" class="link">All</a>
                                <a href="#" class="link">Latest</a>
                                <a href="#" class="link">Popular</a>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="link">Delivery Time</button>
            </div>
        )
    }
}
