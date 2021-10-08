import React from 'react'
import { connect } from 'react-redux'
// import { FaAngleDown } from 'react-icons/fa';

export class _GigAdd extends React.Component {

    state = {
        gig: {
            title: '',
            category: '',
            tags: '',
            price: '',
            description: '',
            deliveryIn: '',
            rate: '',
            rateCount: '',
            reviews: [],
            imgUrls: ''
        },
    }

    handleTextChange = (ev) => {
        const field = ev.target.name;
        const value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value;
        this.setState({ gig: { ...this.state.gig, [field]: value } })
    };

    onAdd = (ev) => {
        ev.preventDefault();
        console.log(this.state.gig)
        this.props.onAddGig(this.state.gig)
        this.setState({
            gig: {
                title: '', category: '', tags: '', price: '',
                description: '', deliveryIn: '', rate: '',
                rateCount: '', reviews: '', imgUrls: ''
            }
        })
    }

    render() {

        const { title, tags, price, description, deliveryIn, imgUrls } = this.state.gig;

        return (
            <div className="gig-add">
                {/* <span><button className="add-btn">Publish Gig</button></span> */}
                < form className="form-add" onSubmit={this.onAdd} >
                    {/* <input name="title" type="text" value={title} placeholder="Enter Gig Name" onChange={this.handleTextChange} /> */}
                    <div className="post-gig-for-sale">
                        <ul>
                            <li>
                                <select placeholder="Select Category <FaAngleDown/>" name="category" id="ctg-select" onChange={this.handleTextChange}>
                                    <option value="">Select Category</option>
                                    <option value="graphics-and-design">Graphics & Design</option>
                                    <option value="digital-marketing">Digital Marketing</option>
                                    <option value="writing-and-translation">Writing & Translation</option>
                                    <option value="video-and-animation">Video & Animation</option>
                                    <option value="music-and-audio">Music & Audio</option>
                                    <option value="programming-and-tech">Programming & Tech</option>
                                    <option value="data">Data</option>
                                    <option value="Lifestyle">Lifestyle</option>
                                    <option value="sitemap">Sitemap</option>
                                </select>
                            </li>
                            <li>
                                <input name="title" type="text" value={title} placeholder="Enter Gig Name.." onChange={this.handleTextChange} />
                            </li>
                            <li className="tags">
                                <input name="tags" type="text" value={tags} placeholder="Enter Search Tags.." onChange={this.handleTextChange} />

                            </li>
                            <li className="price">
                                <input name="price" type="text" value={price} placeholder="Enter Gig Price.." onChange={this.handleTextChange} />

                            </li>
                            <li className="description">
                                <input name="description" type="text" value={description} placeholder="Enter Gig Description.." onChange={this.handleTextChange} />

                            </li>
                            <li className="delivery-in">
                                <input name="deliveryIn" type="text" value={deliveryIn} placeholder="Enter delivery Time In Days.." onChange={this.handleTextChange} />

                            </li>
                            <li className="img-urls">
                                <input name="imgUrls" type="text" value={imgUrls} placeholder="Enter image url" onChange={this.handleTextChange} />

                            </li>
                        </ul>
                    </div>
                    <div className="add-btn-container">
                        <h2><span className="btn"><button className="add-btn">Publish Gig</button></span></h2>
                    </div>
                </form >
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        gigs: state.gigModule.gigs
    }
}

export const GigAdd = connect(mapStateToProps)(_GigAdd)