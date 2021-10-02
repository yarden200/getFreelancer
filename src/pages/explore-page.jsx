import React from 'react'
import { connect } from 'react-redux'
import { loadGigs, onSetFilter } from '../store/gig.actions.js'
// import { showSuccessMsg } from '../services/event-bus.service.js'
import { GigList } from '../cmps/gig-list.jsx'

const queryString = require('query-string');

class _ExplorePage extends React.Component {
    state = {
        filterBy: {
            searchKey: '',
            tag: ''
        }
    }


    componentDidMount() {
        const parsed = queryString.parse(this.props.location.search);
        console.log('explore url parsed:', parsed);
        const { searchKey, tag } = parsed
        if (searchKey) {
            this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, searchKey } }), () => {
                this.props.onSetFilter(this.state.filterBy)
                return
            })
        }
        if (tag) {
            console.log('There is TAG', tag);
            this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, tag } }), () => {
                console.log('setState CALLBACK:', this.state.filterBy);
                this.props.onSetFilter(this.state.filterBy)
                return
            })
        }
        else {
            this.props.loadGigs()
        }
    }

    render() {
        const { gigs } = this.props
        console.log('in render:', gigs);
        return (
            <div className="explore-page main-container">
                <h3>Gigs App</h3>
                <div >
                    <GigList
                        gigs={gigs}
                    />
                </div>
                <div className="faqs-layout">
                    <section class="faqs"><h2>Website Design FAQs</h2><ul><li><h3>What is web design?</h3><p>Web design involves all aspects of the design and functioning of websites, from the graphic design and interface to the UX and technical aspects on the back-end.</p></li><li><h3>What kinds of projects need web design?</h3><p>Any online project can require some amount of web design. This can include single landing pages and websites with multiple sub-sites. Even a simple web page design with single fields to collect email addresses is an example of web design.</p></li><li><h3>What makes a good web design?</h3><p>Good web design should include the right amount of information, be bold and eye-catching (but not distracting or annoying), and easy to use. CTAs (call to action) should be clear about the action you want people to take and how to achieve it. And good web design is cohesive, making every webpage on the site feel like it belongs.</p></li><li><h3>How do I pick the right web designer for my business?</h3><p>The best way to choose a web designer is to look at their experience and browse their gig gallery. Look at samples of previous website designs to get a sense of their style, and choose the candidate whose style you like best. Before ordering, you should always explain your project requirements, expectations, and budget to ensure they fit your business.</p></li><li><h3>What services do web designers provide?</h3><p>Web design services will vary depending on the designer, so always inquire in advance. Some of the more popular services include websites, icon illustrations, mobile apps, UI/UX, landing pages, email templates, blog customization, and more.</p></li><li><h3>How much does hiring a web designer cost?</h3><p>The cost of hiring a website or mobile app designer depends on a variety of elements. Multi-paged sites will cost much more than a single page, whereas fully developed websites complete with e-commerce platforms are the highest priced. Pricing also varies with experience levels, types of content, and the number of revisions required.</p></li></ul></section>
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
    loadGigs,
    onSetFilter
}


export const ExplorePage = connect(mapStateToProps, mapDispatchToProps)(_ExplorePage)