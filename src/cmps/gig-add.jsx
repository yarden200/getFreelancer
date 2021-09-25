import React from 'react'
import { connect } from 'react-redux'

export class _GigAdd extends React.Component {


    state = {
        gig: {
            title: '',
            categories: '',
            tags: '',
            price: '',
            description: ''
        },
    }

    // componentDidMount () {
    // newEntity.dateCreated = new Date().toLocaleDateString('he')
    // }

    handleTextChange = (ev) => {
        const field = ev.target.name;
        const value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value;
        this.setState({ gig: { ...this.state.gig, [field]: value } })
        console.log(this.state.gig);
    };

    onAdd = (ev) => {
        ev.preventDefault();
        console.log('gig from add class', this.state.gig);
        this.props.onAddGig(this.state.gig)
        this.setState({ gig: { title: '', categories: '', tags: '', price: '', description: '' } })
    }

    render() {
        const { title, categories, tags, price, description } = this.state.gig;

        return (

            < form className="form-add" onSubmit={this.onAdd} >
                <input name="title" type="text" value={title} placeholder="Enter Gig Name" onChange={this.handleTextChange} />
                <select name="categories" id="ctg-select" onChange={this.handleTextChange}>
                    <option value="">SELECT A CATEGORY</option>
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
                <input name="tags" type="text" value={tags} placeholder="Enter Search Tags" onChange={this.handleTextChange} />
                <input name="price" type="text" value={price} placeholder="Enter Gig Price" onChange={this.handleTextChange} />
                <input name="description" type="text" value={description} placeholder="Enter Gig Description" onChange={this.handleTextChange} />
                <button className="add-btn">Publish Gig</button>
            </form >
        )
    }
}

function mapStateToProps(state) {
    return {
        gigs: state.gigModule.gigs
    }
}

export const GigAdd = connect(mapStateToProps)(_GigAdd)