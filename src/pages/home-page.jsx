import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { loadGigs, onSetFilter } from '../store/gig.actions.js'
import { GigList } from '../cmps/gig-list.jsx'
import a9 from '../assets/img/a9.PNG';
import a8 from '../assets/img/a8.PNG';
import a7 from '../assets/img/a7.PNG';
import a4 from '../assets/img/a4.PNG';
import a5 from '../assets/img/a5.PNG';


class _HomePage extends React.Component {

    state = {
        gigs:[]
    }


    componentDidMount() {

        const gigs = this.props.loadGigs()
        this.setState({gigs})
        // const {gigs} = this.setState({gigs})

    }

    render() {
        // const { count } = this.props
        const { gigs } = this.props
        console.log(gigs)
        
        return (
            <section>
                <h1>getFreelace</h1>
                <div className="cards-container card-grid">
                    <section className="">
                        {/* <img src={a9} alt="a1" /> */}
                        <div >
                        <GigList
                            gigs={gigs}
                        />
                    </div>
                    </section>
                    {/* <section className="">
                        <img src={a8} alt="a2" />
                        <div className="gig-preview">
                            <h3>{gig.seller.fullname}</h3>
                            <Link to={`/details/${gig._id}`}> <h4>{gig.title}</h4> </Link>
                            <img src={gig.imgs} alt="Example" style={{ maxWidth: '500px' }} />
                            <p>⭐{gig.rate} ({gig.rateCount})</p>
                            <p>♡</p>
                            <p>Starting At ${gig.price}</p>
                        </div>
                    </section>
                    <section className="">
                        <img src={a7} alt="a3" />
                        <div className="gig-preview">
                            <h3>{gig.seller.fullname}</h3>
                            <Link to={`/details/${gig._id}`}> <h4>{gig.title}</h4> </Link>
                            <img src={gig.imgs} alt="Example" style={{ maxWidth: '500px' }} />
                            <p>⭐{gig.rate} ({gig.rateCount})</p>
                            <p>♡</p>
                            <p>Starting At ${gig.price}</p>
                        </div>
                    </section>
                    <section className="">
                        <img src={a4} alt="a4" />
                        <div className="gig-preview">
                            <h3>{gig.seller.fullname}</h3>
                            <Link to={`/details/${gig._id}`}> <h4>{gig.title}</h4> </Link>
                            <img src={gig.imgs} alt="Example" style={{ maxWidth: '500px' }} />
                            <p>⭐{gig.rate} ({gig.rateCount})</p>
                            <p>♡</p>
                            <p>Starting At ${gig.price}</p>
                        </div>
                    </section>
                    <section className="">
                        <img src={a5} alt="a5" />
                        <div className="gig-preview">
                            <h3>{gig.seller.fullname}</h3>
                            <Link to={`/details/${gig._id}`}> <h4>{gig.title}</h4> </Link>
                            <img src={gig.imgs} alt="Example" style={{ maxWidth: '500px' }} />
                            <p>⭐{gig.rate} ({gig.rateCount})</p>
                            <p>♡</p>
                            <p>Starting At ${gig.price}</p>
                        </div>
                    </section> */}

                </div>

            </section >
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

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage)