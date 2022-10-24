import {StyleSheet ,Text } from 'react-native';
import React, {Component} from 'react';
import axios from 'axios';
import history from '../utils/history';

class PetDetail extends Component {
    constructor() {
        super();
        this.state = {
            pet: {}
        };
    }

    componentDidMount() {
        const { petId } = this.props.match.params;
        axios.get(`https://petstore.swagger.io/v2/swagger.json/${petId}`)
        .then(response => {
            this.setState(
            {
                pet: response.data
            }
            )
        })
    }

    render() {
        const { name, status, petId } = this.state.pet;
        history.push('/')
        if (name) {
            return(
                <div className="container" style={styles.div1}>
                    <div className="card text-center">
                        <div className="card-header">
                            Details of {name}
                        </div>
                        <div className="card-body">
                            <Text className="card-text">{name}'s id - {petId}</Text>
                            <Text className="card-text">{name}'s status - {status}</Text>
                        </div>
                    </div>
                </div>
            );
        }
        return(
            <div className="container" style={styles.div2}>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-info" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default PetDetail;
const styles = StyleSheet.create({
    div1: {
        padding: '200px 0 300px 0'
    },
    div2: {
        padding: '350px 0 350px 0'
    },
  });