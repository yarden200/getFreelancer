import React from 'react'
import { connect } from 'react-redux';
import { onRemoveGig, onEditGig } from '../store/gig.actions.js'
import { gigService } from '../services/gig.service.js';
import a1 from '../assets/img/a1.PNG';
import a2 from '../assets/img/a2.PNG';
import a3 from '../assets/img/a3.PNG';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button'
// import Typography from '@mui/material/Typography';
// import 'react-slideshow-image/dist/styles.css';
// import { GigCarusel } from '../cmps/gigs-slider.jsx';
import { Slide } from 'react-slideshow-image';
import { ModalApp } from '../cmps/app-modal.jsx';
import { GigEdit } from '../cmps/gig-edit.jsx';




export class _GigDetails extends React.Component {
    state = {
        gig: null,
        showModal: false

    }


    componentDidMount() {
        console.log(this.props.history);
        const gigId = this.props.match.params.gigId
        if (!gigId) return
        gigService.getById(gigId)
            .then(gig => {
                console.log('GIG:', gig);
                this.setState({ gig })
            })
    }

    openModal = () => {
        this.setState({ showModal: true })
    }

    onRemove = async (gigId) => {
        await this.props.onRemoveGig(gigId)
        this.props.history.push("/")
    }

    render() {
        const { gig } = this.state
        const { history } = this.props
        if (!gig) return <div>Loading</div>
        return (
            <div className="details-page main-container">
                <div className="gig-details">
                    <div className="main-content">
                                title={gig.title}
                                subheader={<h5>{gig.seller?.fullname} ⭐ {gig.rate} ({gig.rateCount})</h5>}
                                <div>
                                    <Slide easing="ease">
                                        <div className="each-slide">
                                            <div style={{ 'backgroundImage': `url()` }}>
                                                <img src={a1} alt="Example" style={{ maxWidth: '850px' }} />
                                            </div>
                                        </div>
                                        <div className="each-slide">
                                            <div style={{ 'backgroundImage': `url()` }}>
                                                <img src={a2} alt="Example" style={{ maxWidth: '850px' }} />
                                            </div>
                                        </div>
                                        <div className="each-slide">
                                            <div style={{ 'backgroundImage': `url()` }}>
                                                <img src={a3} alt="Example" style={{ maxWidth: '850px' }} />
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                                    <span> What people loved about this seller:</span>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto expedita iste nihil delectus cupiditate, similique recusandae quod praesentium officia mollitia aperiam voluptatum dolorum impedit deserunt eligendi rerum tenetur illo consequatur?
                            <button className="delete-gig" onClick={() => this.onRemove(gig._id)}>Delete</button>
                            <button className="edit-gig" onClick={this.openModal}>Edit</button>
                        <ModalApp
                            showModal={this.state.showModal}
                            openModal={() => this.setState({ showModal: true })}
                            closeModal={() => this.setState({ showModal: false })}
                        >
                            <GigEdit onEdit={this.onEdit} gig={gig} history={history} />
                        </ModalApp>
                    </div>
                    <div className="sidebar">
                        <div className="package-content">
                            <div className="flex package-price">
                                <h3>Package Price</h3>
                                <h3>$75.00</h3>
                            </div>
                            <p>Includes 1 logo design concept with 3 free revisions plus more to come </p>
                        </div>
                        <div className="checklist">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus itaque asperiores ea aut, mollitia, dolor consequatur illo recusandae animi qui, repudiandae quis dolorum quod corporis alias accusamus id dolorem perferendis?
                        </div>
                        <div>
                            <button className="continue-button">Continue $75.00</button>
                        </div>
                    </div>
                    <div className="order-confirmation">
                    </div>
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
    onRemoveGig,
    onEditGig
}

export const GigDetails = connect(mapStateToProps, mapDispatchToProps)(_GigDetails)
