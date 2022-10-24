
import axios from 'axios';
import Display from './display';
import {StyleSheet} from 'react-native';
  
class PetList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        pets: []
        };
    }

    componentDidMount() {
        axios.get('https://petstore.swagger.io/v2/swagger.json')
        .then(response => {
            this.setState(
            {
                pets: response.data
            }
            )
        })
    }
    render() {
        const { pet } = this.state
        let petList
        if(pet.length > 0) {
        petList = pet.map((pet, index) => {
            return(
                <Display pet={pet} key={index}/>
            )}
        )
        }
        if(petList) {
            return (
                <div style={styles.div1}>
                    <div className="padding" style={styles.div2}>
                        <div className="container">
                            <div className="page-header text-center">
                                
                                <h2 className="display-4" style={styles.div3}><i className="fas fa-paw"></i>{ petList ? ("Pets In Shop") : (null) }<i className="fas fa-paw"></i></h2>
                                
                                <hr />
                            </div>
                            <div className="row">
                                {
                                    petList
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="container" style={styles.div4}>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-info" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        )
    }

}

export default PetList;
const styles = StyleSheet.create({
    div1: {
        fontFamily: 'Slabo 27px'
    },
    div2: {
        padding: '80px 0 50px 0'
    },
    div3: {
        color: 'rgb(53, 79, 82)' ,
        marginTop: '-30px'
    },
    div4: {
        padding: '350px 0 350px 0'
    },
  });