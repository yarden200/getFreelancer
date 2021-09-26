import React from 'react'

import { gigService } from '../services/gig.service.js'
import logo1 from '../assets/img/logo1.PNG'
import logo2 from '../assets/img/logo2.PNG'
import logo3 from '../assets/img/logo3.PNG'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';




export class GigDetails extends React.Component {
    state = {
        gig: null,
    }


    componentDidMount() {
        const gigId = this.props.match.params.gigId
        if (!gigId) return
        gigService.getById(gigId)
            .then(gig => {
                this.setState({ gig })
            })
    }



    render() {
        const { gig } = this.state
        if (!gig) return <div>Loading</div>
        return (
            <div className="details-page">
                <nav className="gig-likes"><span>♡ 187</span></nav>
                <div className="flex-container">
                    <div className="gig-details">
                        <Card className="mui-card" elevation={1} >
                            <CardHeader
                                title={gig.title}
                                subheader={<h5>{gig.seller.fullname} ⭐ {gig.rate} ({gig.rateCount})</h5>}
                            />
                            <CardMedia>
                                {/* <img src={example} alt="Example" style={{ maxWidth: '500px' }} /> */}
                                <div>
                                    <Slide easing="ease">
                                        <div className="each-slide">
                                            <div style={{ 'backgroundImage': `url()` }}>
                                                <img src={logo1} alt="Example" style={{ maxWidth: '850px' }} />
                                            </div>
                                        </div>
                                        <div className="each-slide">
                                            <div style={{ 'backgroundImage': `url()` }}>
                                                <img src={logo2} alt="Example" style={{ maxWidth: '850px' }} />
                                            </div>
                                        </div>
                                        <div className="each-slide">
                                            <div style={{ 'backgroundImage': `url()` }}>
                                                <img src={logo3} alt="Example" style={{ maxWidth: '850px' }} />
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                            </CardMedia>
                            <CardContent>
                                <Typography component={'span'} variant="body1" color="textSecondary" >
                                    <span> What people loved about this seller:</span>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto expedita iste nihil delectus cupiditate, similique recusandae quod praesentium officia mollitia aperiam voluptatum dolorum impedit deserunt eligendi rerum tenetur illo consequatur?
                                </Typography>
                            </CardContent>
                        </Card>
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
                            {/* <button className="package-button" class="FKiIhUG _1x76oPA co-white bg-co-green-700" type="submit">Continue<span> (₪33.58)</span></button> */}
                        </div>
                    </div>
                    <div className="order-confirmation">
                    </div>
                </div>
            </div>
        )
    }
}
