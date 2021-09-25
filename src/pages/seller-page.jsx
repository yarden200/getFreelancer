import React from 'react'
import { connect } from 'react-redux'
import { onAddGig, onEditGig, onRemoveGig } from '../store/gig.actions.js'

import { GigAdd} from '../cmps/gig-add.jsx'


class _SellerPage extends React.Component {
    state = {

    }

    //CHECK//
    componentDidMount() {
    }

    onRemoveGig = (gigId) => {
        this.props.onRemoveGig(gigId)
    }
    onAddGig = (gig) => {
        this.props.onAddGig(gig)
    }
    onEditGig = (gig) => {
        const price = +prompt('New price?')
        const gigToSave = { ...gig, price }
        this.props.onEditGig(gigToSave)
    }

   
    render() {
        return (
            <div>
                <h3>Start Selling</h3>
                <main>
                <GigAdd onAddGig={this.onAddGig}/>
                </main>
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
    onRemoveGig,
    onAddGig,
    onEditGig
}


export const SellerPage = connect(mapStateToProps, mapDispatchToProps)(_SellerPage)