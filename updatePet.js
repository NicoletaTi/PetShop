import {StyleSheet ,Button} from 'react-native';
import React, { Component } from 'react';
import axios from 'axios';
import history from '../utils/history';

class PetUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "name": "",
            "status": "",
            "petId": "",
            
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
      }
    
    componentDidMount() {
        const petId = this.props.match.params.petId;
        axios.get(`https://petstore.swagger.io/v2/swagger.json/${petId}`)
        .then(response => {
            this.setState({
                "name": response.data.name,
                "status": response.data.status,
                "petId": response.data.petId,

            })
        })
    }

    handleChange(e) {
        this.setState({
            [e.target.petId]: e.target.value,
        });
        try {
            document.getElementById('name').classList.remove('is-invalid');
            document.getElementById('status').classList.remove('is-invalid');
            document.getElementById('petId').classList.remove('is-invalid');
        } catch (e) {}
    }

    handleClick() {
        const petId = this.props.match.params.petId;
        axios.delete(`https://petstore.swagger.io/v2/swagger.json/${petId}`)
        .then(response => {
            if(response) {
                console.log(response)
                this.props.history.push('/')
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const idCheck = this.props.match.params.petId;
        const nameCheck = e.target.name.value;
        const statusCheck = e.target.status.value;
        

        if (nameCheck.length === 0) {
            document.getElementById('name').classList.add('is-invalid');
            document.getElementById('name-text').innerText = 'Name field may not be empty.';
            return;
        }
        if (statusCheck.length === 0) {
            document.getElementById('status').classList.add('is-invalid');
            document.getElementById('status-text').innerText = 'Animal status field may not be empty.';
            return;
        }
        if (idCheck.length === 0) {
            document.getElementById('petId').classList.add('is-invalid');
            document.getElementById('petId-text').innerText = 'id field may not be empty.';
            return;
        }
        const isNum = /^\d+$/.test(idCheck);
        if (isNum === false) {
            document.getElementById('petId').classList.add('is-invalid');
            document.getElementById('petId-text').innerText = 'id field must be a number';
            return;
        }
        const { name,status,petId} = this.state;
        const updatedPet = {
            "name": name,
            "status": status,
            "petId": petId,
           
        };
        axios.put(`https://petstore.swagger.io/v2/swagger.json/${petId}`, updatedPet)
        .then(response => {
            if(response) {
                console.log(response)
                this.props.history.push(`/pet/${this.props.match.params.petId}`)
            }
        })
    }

    render() {
        const { name, status ,petId} = this.state;
        history.push('/')
        return(
            <div className="container" style={styles.div1}>
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="text-center mt-3">Edit Pet Details</h5>
                    <div className="form-group">
                        <label htmlFor="name">id:{petId}</label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" autoComplete="off" className="form-control" onChange={this.handleChange} value={name} />
                        <div className="invalid-feedback" id="name-text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Status</label>
                        available<input type="radio" id="name" autoComplete="off" className="form-control" onChange={this.handleChange} value={'available'} />
                        pending<input type="radio" id="name" autoComplete="off" className="form-control" onChange={this.handleChange} value={'pending'} />
                        sold<input type="radio" id="name" autoComplete="off" className="form-control" onChange={this.handleChange} value={'sold'} />
                        <div className="invalid-feedback" id="name-text" />
                    </div>
                    <div className="form-group text-center">
                        <Button type="submit" className="btn btn-outline-info mt-3">Update</Button>
                    </div>
                </form>
                </div>
        )
    }
}

export default PetUpdate;
const styles = StyleSheet.create({
    div1: {
        padding: '100px 0 200px 0'
    },
  });