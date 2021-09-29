import React from 'react'
import { connect } from 'react-redux'
import { onEditGig } from '../store/gig.actions'
// import ImageUploader from "react-images-upload";



export class _GigEdit extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.onDrop = this.onDrop.bind(this);
    // }

    // onDrop = this.onDrop.bind(this);

    state = {
        gig: {
            title: '',
            categories: '',
            tags: '',
            price: '',
            description: '',
            deliveryIn: '',
            imgs: []
        },
    }


    componentDidMount () {
        const {gig} = this.props
        // this.setState({ gig })
        this.setState({ gig: { title: gig.title, categories: gig.categories, tags: gig.tags, price: gig.price, description: gig.description, deliveryIn: gig.deliveryIn, imgs: [] }})
        // const gigId = this.props.match.params.gigId
        // if (!gigId) return
        // gigService.getById(gigId)
        //     .then(gig => {
        //         
        //         this.setState({ gig: { title: gig.title, categories: gig.categories, tags: gig.tags, price: gig.price, description: gig.description, deliveryIn: gig.deliveryIn, imgs: [] }})
        //     })
    // newEntity.dateCreated = new Date().toLocaleDateString('he')
    }

    handleTextChange = (ev) => {
        const field = ev.target.name;
        const value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value;
        this.setState({ gig: { ...this.state.gig, [field]: value } })
        // console.log(this.state.gig);
    };

    onEdit = async (ev) => {
        ev.preventDefault();
        // console.log('gig from add class', this.state.gig);
        await Promise.all([
            this.props.onEditGig(this.state.gig),
            this.setState({ gig: { title: '', categories: '', tags: '', price: '', description: '', deliveryIn: '', imgs: [] } })
        ]);
        // await this.props.onEditGig(this.state.gig)
        // await this.setState({ gig: { title: '', categories: '', tags: '', price: '', description: '', deliveryIn: '', imgs: [] } })
        this.props.history.push("/")

    }

    // onDrop(pictureFiles, pictureDataURLs) {
    //     console.log('pictureFiles',pictureFiles);
    //     this.setState({ gig: { ...this.state.gig, imgs:pictureFiles } })
        //////// this.setState({
        ////////     imgs: this.state.gig.imgs.concat(pictureFiles)
        //////// });
    // }

    render() {
        const { title, tags, price, description, deliveryIn } = this.state.gig;

        return (

            < form className="form-add" onSubmit={this.onEdit} >
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
                <input name="deliveryIn" type="text" value={deliveryIn} placeholder="Enter delivery Time In Days" onChange={this.handleTextChange} />
                {/* <ImageUploader
                    withIcon={true}
                    buttonText="Choose images"
                    onChange={this.onDrop}
                    imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                    maxFileSize={5242880}
                /> */}
                <button className="add-btn">Update Gig</button>
            </form >
        )
    }
}

function mapStateToProps(state) {
    return {
        gigs: state.gigModule.gigs
    }
}

const mapDispatchToProps = {
    onEditGig
}


export const GigEdit = connect(mapStateToProps,mapDispatchToProps)(_GigEdit)