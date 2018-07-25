import React, { Component } from "react";
import axios from 'axios'
import { storage } from './../Firebase/index'

import Nav from "./../Nav/Nav";
import "./my_vehicle.css";
import delete_icon from './../Images/delete_icon.svg'
import edit_icon from './../Images/edit_icon.svg'
import cancel_button from './../Images/cancelbutton.svg'
import update_icon from './../Images/update_icon.svg'
import no_image from './../Images/no_image.png'
import add_image_icon from './../Images/add_image_icon.svg'
import white_edit_icon from './../Images/white_edit_icon.svg'



export default class Myvehicle extends Component {
  constructor() {
    super();

    this.state = {
      user: { id: 9 },
      Year: "",
      Make: "",
      Model: "",
      Color: "",
      Size: "",
      Plate: "",
      car_pic: '',
      vehicles: [],
      edit: false,
      view: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.cancel = this.cancel.bind(this);
  }
  componentDidMount(){
    let id = this.state.user.id
    axios.get(`/api/vehicle/${id}`).then((res) => {
      this.setState({vehicles: res.data})
    })
  }
  changeViews(){
    this.setState({
      Year: '',
      Make: '',
      Model: '',
      Color: '',
      Size: '',
      Plate: '',
      car_pic: '',
      view: true,
      edit: false
    })
  }
  editToggle(e){
    this.setState({
      edit: false,
      Year: '',
      Make: '',
      Model: '',
      Color: '',
      Size: '',
      Plate: '',
      car_pic: '',
    })
  }
  cancel(){
    this.setState({
      view: false,
      Year: '',
      Make: '',
      Model: '',
      Color: '',
      Size: '',
      Plate: '',
      car_pic: '',
    })
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleCarPic(e) {
    if(e.target.files[0]) {
        const car_pic = e.target.files[0];
        const uploadTask = storage.ref(`main_images/${car_pic.name}`).put(car_pic);
        uploadTask.on('state_changed',  
        () => {
            storage.ref('main_images').child(car_pic.name).getDownloadURL().then(url => {
                this.setState({car_pic: url})
            })
        });
    }
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
  handleToggle() {
    this.setState({ toggle: !this.state.toggle })
  }
  addCar() {
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
        Year: '',
        Make: '',
        Model: '',
        Color: '',
        Size: '',
        Plate: '',
        car_pic: '',
        view: false,
      })
    })
  }
  updateCar(e) {
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
      this.setState({ edit: false })
    })
  }
  deleteCar(id) {
    let result = window.confirm('Are you sure you want to delete this vehicle?')
    if (result) {
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
          <div>
            {this.state.edit ?
              <div>
                <img alt='' src={white_edit_icon} style={{height: '60px',position: 'absolute', top:'125px', left: '50%'}}/>
                <img alt='' src={e.car_pic} style={{height: '150px',margin: 'auto', display:'block',position:'relative'}}/>
              </div>
            : //You are working here to get the white pencil to pop up
              <div>
                <img alt='' src={e.car_pic} style={{height: '150px',margin: 'auto', display:'block'}}/> 
              </div> 
            }
          </div> 
        : 
          <div>
            {this.state.car_pic ?
                <img alt='' src={this.state.car_pic} style ={{height: '150px', display: 'block', margin: 'auto'}}/>
              :
              <div>
                {this.state.edit ?
                    <div>
                        <label htmlFor='picture_input2'>
                            <img src={add_image_icon} alt='' style={{height: '150px', display: 'block' , margin: 'auto'}} />
                        </label>
                        <input type='file' id='picture_input2'onChange={(e)=>{this.handleCarPic(e)}} style={{display: 'none'}}/>
                    </div>
                  :
                  <img alt = '' src = {no_image} style = {{height: '150px', margin: 'auto', display:'block'}}/>
                }
              </div>
            }
          </div> 
        }
        {this.state.edit ?
          // IN EDITING MODE
          <div>
            <p>Year: <input type='' className='input' name = 'Year' onChange = {(e) => {this.handleChange(e)}} value = {this.state.Year} maxLength = '4'/></p>
            <p>Make: <input type='' className='input' name = 'Make' onChange = {(e) => {this.handleChange(e)}} value = {this.state.Make}/></p> 
            <p>Model: <input type='' className='input' name = 'Model' onChange = {(e) => {this.handleChange(e)}} value = {this.state.Model}/></p> 
            <p>Color: <input type='' className='input' name = 'Color' onChange = {(e) => {this.handleChange(e)}} value = {this.state.Color}/></p> 
            <p>Size: <input type='' className='input' name = 'Size' onChange = {(e) => {this.handleChange(e)}} value = {this.state.Size}/></p> 
            <p>Plate: <input type='' className='input' name = 'Plate' onChange = {(e) => {this.handleChange(e)}} value = {this.state.Plate}/></p> 
            <img alt='' style={{height:'30px', float: 'right'}}  src = {update_icon} onClick = {() => {this.updateCar(e)}}/> 
            <img alt='' style= {{height:'25px'}}  src = {cancel_button} onClick = {() =>  {this.editToggle()}}/> 
          </div> 
          :
          // NOT IN EDITING MODE
          <div>
            <hr/>
            <p>Year: {e.year}</p>
            <hr/>
            <p>Make: {e.make}</p>
            <hr/>
            <p>Model: {e.model}</p>
            <hr/>
            <p>Color: {e.color}</p>
            <hr/>
            <p>Size: {e.size}</p>
            <hr/>
            <p>Plate: {e.plate}</p>
            <hr/>
            <img alt='' src ={delete_icon} onClick = {(id) => {this.deleteCar(e.id)}}/>
            <img alt='' style = {{float: 'right'}}src = {edit_icon} onClick = {() => {this.handleEdit(e)}}/>
          </div> 
        }
        </div>
      </div>
    ))
    return (
      <div>
        {this.state.view ? 
        <div>
          <Nav/>
            <div className="myvehicle">
              {this.state.car_pic ?
                  <div>
                    <img alt = '' src = {this.state.car_pic} style = {{height: '150px', marginBottom: '20px'}}/>
                  </div> 
                :
                  <div>
                    <label htmlFor='picture_input'>
                      <img src={add_image_icon} alt='' style={{height: '150px'}} />
                    </label>
                    <input type='file' id='picture_input'onChange={(e)=>{this.handleCarPic(e)}} style={{display: 'none'}}/>
                  </div>
              }
            
                Year: <input type='' className="input" value={this.state.Year}  name="Year" onChange={e => {this.handleChange(e)}} maxLength = '4'/> 
                <br />
                Make: <input type="" className="input" value={this.state.Make} name="Make" onChange={e => { this.handleChange(e) }} />
                <br />
                Model: <input type="" className="input" value={this.state.Model} name="Model" onChange={e => { this.handleChange(e) }} />
                <br />
                Color: <input type="" className="input" value={this.state.Color} name="Color" onChange={e => { this.handleChange(e) }} />
                <br />
                Plate: <input type="" className="input" value={this.state.Plate} name="Plate" onChange={e => { this.handleChange(e) }} />
                <br />
                Size: (click on a icon button)
                <br />
                <button className='button' onClick = {()=> {this.cancel()}}>Cancel</button>
                <button className="button" onClick = {()=> {this.addCar()}}>Submit</button>
              </div>
            </div>
          :
            <div> 
              <Nav/>
              <div className = 'myvehicle'>
                  <button className='button' onClick = {() => {this.changeViews()}}>Add a Vehicle</button>
                  {mappedVehicles}
              </div>
            </div>
        }
      </div>
    );
  }
}
