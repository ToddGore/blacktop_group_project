import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

class Listing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listing: {},
            features: [],
            pictureArray: [],
            isLoading: true
        }
    }

    componentDidMount() {
        this.getListingById()

    }
    getListingById = () => {
        axios.get(`/api/listing/5`).then(res => {
            this.setState({
                listing: res.data[0],
                isLoading: false
            })
            this.getPicArray()
        })
    }
    getPicArray = () => {
        const {pic_one, pic_two, pic_three, pic_four} = this.state.listing
        let picArr = []
        if(pic_one){
            picArr.push(pic_one)
        }
        if(pic_two){
            picArr.push(pic_two)
        }
        if(pic_three){
            picArr.push(pic_three)
        }
        if(pic_four){
            picArr.push(pic_four)
        }
        this.setState({pictureArray: picArr})
    }

    render() {
        const { listing, pictureArray } = this.state
        let mappedPictures = pictureArray.map((picture, i) => {
            return(
                <div key={i}>
                    <img src={picture} alt=''/>
                </div> 
            )
        })
        return (
            <div>
                {this.state.isLoading ?
                 <div>
                     <p>Loading . . .</p>
                 </div>  
                 :
                    <div>
                        <h2>Details</h2>
                        <div>
                            <Carousel showThumbs={false} showStatus={false}>
                               {mappedPictures}
                            </Carousel>
                        </div>
                        <div>
                            <p>{listing.address}</p>
                        </div>
                        <div>
                            <p>{listing.num_spaces}</p>
                            <p>{listing.space_size}</p>
                            <p>covered:{listing.covered ? 'true' : 'false'}</p>
                            <p>lit:{listing.lit ? 'true' : 'false'}</p>
                            <p>charging:{listing.charging ? 'true' : 'false'}</p>
                            <p>camera:{listing.camera ? 'true' : 'false'}</p>
                            <p>fenced:{listing.fenced ? 'true' : 'false'}</p>
                            <p>guarded:{listing.guarded ? 'true' : 'false'}</p>
                        </div>
                        <div>
                            <p>About</p>
                        </div>
                        <div>
                            <p>Monday:{listing.monday ? 'true' : 'false'}</p>
                            <p>Tuesday:{listing.tuesday ? 'true' : 'false'}</p>
                            <p>Wednesday:{listing.wednesday ? 'true' : 'false'}</p>
                            <p>Thursday:{listing.thursday ? 'true' : 'false'}</p>
                            <p>Friday:{listing.friday ? 'true' : 'false'}</p>
                            <p>Saturday:{listing.saturday ? 'true' : 'false'}</p>
                            <p>Sunday:{listing.sunday ? 'true' : 'false'}</p>
                        </div>
                        <Link to='/checkout'>
                            <span>Checkout</span>
                        </Link>
                    </div>
                }
            </div>

        )
    }
}

export default Listing