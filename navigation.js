import {StyleSheet ,Nav,Button} from 'react-native';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Nav className="navbar navbar-expand-lg navbar-light" style={styles.nav}>
            <NavLink className="navbar-brand nav-link" to="/">
                <span className="navbar-brand" style={styles.span}><i className="fas fa-paw"></i>PetShop</span>
            </NavLink>
            <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </Button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav float-right">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/create" style={styles.NavLink}>
                            Create Pet
                        </NavLink>
                    </li>
                </div>
            </div>
        </Nav>
    )
}

export default NavigationBar
const styles = StyleSheet.create({
    nav: {
        backgroundColor: 'rgb(53, 79, 82)',
         padding: '1% 1% 1% 2%'
    },
    span: {
        color: 'rgb(202, 210, 197)'
    },
    NavLink: {
        color: 'rgb(202, 210, 197)' ,
        alignContent:'left'
    },
  });