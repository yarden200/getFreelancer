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
                <div className="cards-container card-grid">
                    <section className="">
                        {/* <img src={a9} alt="a1" /> */}
                        <div >
                        <GigList
                            gigs={gigs}
                        />
                    </div>
                    </section>
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