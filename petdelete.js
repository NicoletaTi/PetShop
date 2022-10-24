import {StyleSheet ,Button} from 'react-native';
import React, { Component } from 'react';
import axios from 'axios';
import history from '../utils/history';

class PetDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "name": "",
            "status": "",
            
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
      }
    
    componentDidMount() {
        const petId = this.props.match.params.petId;
        axios.get(`https://petstore.swagger.io/v2/swagger.json${petId}`)
        .then(response => {
            this.setState({
                "name": response.data.name,
                "status": response.data.status,
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
        const petId= this.props.match.params.petId;
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
    }

    render() {
        const { name } = this.state;
        history.push('/')
        return(
            <div style={styles.div1}>
                <div className="row float-right mt-1">
                    <div>
                        <Button type="button" className="btn btn-outline-danger" data-toggle="modal" data-target="#deleteModal" >
                            <i className="fas fa-trash" />
                            <p>Are you sure you want to remove {name} from store?</p>
                            <span className="ml-1">Delete</span>
                        </Button>
                        <div className="modal fade" id="deleteModal" tabIndex="-1" role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                <h5 className="modal-title" id="deleteModalLabel">Remove {name} from store</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                </div>
                                <div className="modal-body">
                                Are you sure you want to remove {name} from store?
                                </div>
                                <div className="modal-footer">
                                <Button id="delete" type="button" className="btn btn-danger" onClick={this.handleClick} data-dismiss="modal">Delete</Button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }
}

export default PetDelete;
const styles = StyleSheet.create({
    div1: {
        padding: '200px 0 200px 0',
        color: 'rgb(53, 79, 82)',
         margin:'0px 600px 200px 250px'
    },
  });