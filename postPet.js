import {StyleSheet ,Button} from 'react-native';
import React, { Component} from 'react';
import axios from 'axios';
import history from '../utils/history';

export class CreatePet extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            "name": "",
            "status": "",
           
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.petId]: e.target.value,
        });
        try {
            document.getElementById('name').classList.remove('is-invalid');
            document.getElementById('status').classList.remove('is-invalid');
        } catch (e) {}
    }
    handleSubmit(e) {
        e.preventDefault();
        const name = e.target.name.value;
        const status = e.target.status.value;

        if (name.length === 0) {
            document.getElementBypetId('name').classList.add('is-invalid');
            document.getElementBypetId('name-text').innerText = 'Name field may not be empty.';
            return;
        }
        if (status.length === 0) {
            document.getElementBypetId('status').classList.add('is-invalid');
            document.getElementBypetId('status-text').innerText = 'status field may not be empty.';
            return;
        }
        const Pet = {
          name: this.state.name,
          status: this.state.status,
        };
        console.log(this.state);
        axios.post('https://petstore.swagger.io/v2/swagger.json', Pet)
        .then(response => {
            if(response) {
                console.log(response)
                this.props.history.push(`/pets/${response.data.petId}`)
            }
        })
    }

    render() {
        history.push('/create');
        return(
            <div className="padding container" style={styles.div1}>
            <form id="petForm" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Pet name</label>
                    <input type="text" id="name" className="form-control" onChange={this.handleChange} />
                    <div className="invalid-feedback" id="name-text" />
                </div>
                <div className="form-group">
                        <label htmlFor="name">Status</label>
                        <p>available<input type="radio" id="name" autoComplete="off" className="form-control" onChange={this.handleChange} value={'available'} /></p>
                        <p>pending<input type="radio" id="name" autoComplete="off" className="form-control" onChange={this.handleChange} value={'pending'} /></p>
                        <p>sold<input type="radio" id="name" autoComplete="off" className="form-control" onChange={this.handleChange} value={'sold'} /></p>
                        <div className="invalid-feedback" id="name-text" />
                    </div>
                <div className="form-group text-center">
                    <Button type="submit" className="btn btn-outline-info mt-3"><i className="fas fa-paw"></i>Add pet<i className="fas fa-paw"></i></Button>
                </div>
            </form>
        </div>
        );
    }
}

export default CreatePet;
const styles = StyleSheet.create({
    div1: {
        padding: '80px 0 300px 0'
    },
  });