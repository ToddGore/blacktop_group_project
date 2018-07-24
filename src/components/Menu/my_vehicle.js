import React, { Component } from "react";
import axios from 'axios'
import {storage} from './../Firebase/index'

import Nav from "./../Nav/Nav";
import "./my_vehicle.css";
import delete_icon from './../Images/delete_icon.svg'
import edit_icon from './../Images/edit_icon.svg'
import cancel_button from './../Images/cancelbutton.svg'
import update_icon from './../Images/update_icon.svg'
import no_image from './../Images/no_image.png'
import add_image_icon from './../Images/add_image_icon.svg'



export default class Myvehicle extends Component {
  constructor() {
    super();

    this.state = {
      user: {id: 9},
      Year: "",
      Make: "",
      Model: "",
      Color: "",
      Size: "",
      Plate: "",
      car_pic: '',
      vehicles: [],
      toggle: false,
      edit: false,
      progress:0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  //this is for when someone uploads a new car image.
  handleCarPic(e) {
    if(e.target.files[0]) {
        const car_pic = e.target.files[0];
        this.setState({
            car_pic: car_pic 
        })
    }
  }
  handleUpload = (e) => {
    const {car_pic} = this.state;
    const uploadTask = storage.ref(`main_images/${car_pic.name}`).put(car_pic);
    uploadTask.on('state_changed', 
    (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress})
    }, 
    (error) => {
        console.log(error)
    }, 
    () => {
        storage.ref('main_images').child(car_pic.name).getDownloadURL().then(url => {
            console.log(url);
            this.setState({car_pic: url})
            // AXIOS CALL TO SAVE IMAGE URL IN DB GOES HERE
        })
    });
  }
  handleEdit(e){
    this.setState({
      edit: true,
      Year: e.year,
      Make: e.make,
      Model: e.model,
      Color: e.color,
      Size: e.size,
      Plate: e.plate,
      car_pic: e.car_pic
    })
  }
  handleToggle(){
    this.setState({toggle: !this.state.toggle})
  }
  editToggle(e){
    this.setState({edit: !this.state.edit})
  }
  componentDidMount(){
    let id = this.state.user.id
    axios.get(`/api/vehicle/${id}`).then((res) => {
      this.setState({vehicles: res.data})
    })
  }
  addCar(){
    let body = {
      user_id: this.state.user.id,
      car_pic: this.state.car_pic,
      year: this.state.Year,
      make: this.state.Make,
      model: this.state.Model,
      color: this.state.Color,
      size: this.state.Size,
      plate: this.state.Plate
    }
    axios.post('/api/vehicle', body).then((res) => {
      this.componentDidMount()
      this.setState({
        vehicles: res.data,
        toggle: false,
        Year: '',
        Make: '',
        Model: '',
        Color: '',
        Size: '',
        Plate: '',
        car_pic: '',
      })
    })
  }
  updateCar(e){
    let id = e.id
    let body = {
      car_pic: this.state.car_pic,
      year: this.state.Year,
      make: this.state.Make,
      model: this.state.Model,
      color: this.state.Color,
      size: this.state.Size,
      plate: this.state.Plate
    }
    axios.put(`/api/vehicle/${id}`, body).then((res) => {
      this.componentDidMount()
      this.setState({edit: false})
    })
  }
  deleteCar(id){
    let result = window.confirm('Are you sure you want to delete this vehicle?')
    if(result){
      axios.delete(`/api/vehicle/${id}`).then((res) => {
        this.componentDidMount()
      })
    }
  }
  

  render() {

    let mappedVehicles = this.state.vehicles.map((e, i) => (

      <div key ={i}>
        <div style = {{boxShadow: '0px 1px 10px grey', padding: '20px', marginTop: '30px', textAlign: 'left'}}>

        {e.car_pic ?
          <img alt = '' src = {e.car_pic} style ={{height: '150px',margin: 'auto', display:'block'}}/> 
        : 
          <div>
            {this.state.edit ?
                <div>
                  <label htmlFor = 'upload-photo' style = {{curser: 'pointer'}}>
                    <img alt = ''src = {add_image_icon} style = {{height: '150px',margin: 'auto', display:'block'}}/>
                  </label>
                  <input type='file' id = 'upload-photo' accept='image/*' style = {{height: '150px',margin: 'auto',display: 'none'}}/>
                </div>
              :
                <img alt = '' src = {no_image} style = {{height: '150px', margin: 'auto', display:'block'}}/>
            }
          </div>
        }

          <hr/>
          
          {this.state.edit ? 
              <p>Year: <input type='' className='input' name = 'Year' onChange = {(e) => {this.handleChange(e)}} value = {this.state.Year} maxLength = '4'/></p>
            : 
              <p>Year: {e.year}</p>
          }

          <hr/>

          {this.state.edit ?
             <p>Make: <input type='' className='input' name = 'Make' onChange = {(e) => {this.handleChange(e)}} value = {this.state.Make}/></p> 
            : 
             <p>Make: {e.make}</p>
          }

          <hr/>

          {this.state.edit ?
              <p>Model: <input type='' className='input' name = 'Model' onChange = {(e) => {this.handleChange(e)}} value = {this.state.Model}/></p> 
            : 
              <p>Model: {e.model}</p>
          }

          <hr/>

          {this.state.edit ?
              <p>Color: <input type='' className='input' name = 'Color' onChange = {(e) => {this.handleChange(e)}} value = {this.state.Color}/></p> 
            : 
              <p>Color: {e.color}</p>
          }

          <hr/>

          {this.state.edit ?
              <p>Size: <input type='' className='input' name = 'Size' onChange = {(e) => {this.handleChange(e)}} value = {this.state.Size}/></p> 
            : 
              <p>Size: {e.size}</p>
          }

          <hr/>

          {this.state.edit ?
              <p>Plate: <input type='' className='input' name = 'Plate' onChange = {(e) => {this.handleChange(e)}} value = {this.state.Plate}/></p> 
            :
              <p>Plate: {e.plate}</p>
          }

          <hr/>

          {this.state.edit ? 
              <img style  = {{height:'30px', float: 'right'}} alt = '' src = {update_icon} onClick = {() => {this.updateCar(e)}}/> 
            :
              <img alt  = '' src ={delete_icon} onClick = {(id) => {this.deleteCar(e.id)}}/>
          }

          {this.state.edit ? 
              <img style  = {{height:'25px'}} alt ='' src = {cancel_button} onClick = {() =>  {this.editToggle()}}/> 
            : 
              <img alt = '' style = {{float: 'right'}}src = {edit_icon} onClick = {() => {this.handleEdit(e)}}/>
          }

        </div>
      </div> 
    ))
    return (
      <div>
        {this.state.toggle ? 
        <div>
          <Nav/>
            <div className="myvehicle">
           
                  <img alt = '' src = {this.state.car_pic} style = {{height: '150px'}}/> 
              
                <div>
                  <progress value={this.state.progress} max='100' />
                  <br />
                  <input type='file' onChange={(e)=>{this.handleCarPic(e)}}/>
                  <button onClick={(e)=> {this.handleUpload(e)}}>Upload</button>
                </div>
            
              Year: <input type='' className="input" value={this.state.Year}  name="Year" onChange={e => {this.handleChange(e)}} maxLength = '4'/> 
              <br />
              Make: <input type="" className="input" value={this.state.Make} name="Make" onChange={e => {this.handleChange(e)}}/>
              <br />
              Model: <input type="" className="input" value={this.state.Model} name="Model" onChange={e => {this.handleChange(e)}}/>
              <br />
              Color: <input type="" className="input" value={this.state.Color} name="Color" onChange={e => { this.handleChange(e) }}/>
              <br />
              Plate: <input type="" className="input" value={this.state.Plate} name="Plate" onChange={e => {this.handleChange(e)}}/>
              <br />
              Size: (click on a icon button)
              <br />
              <button className='button' onClick = {()=> {this.handleToggle()}}>Cancel</button>
              <button className="button" onClick = {()=> {this.addCar()}}>Submit</button>
            </div>
        </div> 
      
          :

          <div> 
            <Nav/>
            <div className = 'myvehicle'>
                <button className='button' onClick = {() => {this.handleToggle()}}>Add a Vehicle</button>
                {mappedVehicles}
            </div>
          </div> 
        }
      </div>
    );
  }
}
