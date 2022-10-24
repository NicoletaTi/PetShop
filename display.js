import { Text, StyleSheet} from 'react-native';
import { Link } from 'react-router-dom';
import Edit from './editButton';
import Delete from './deleteButton';
import Detali from './detaliiButton';


const Display = (props) => {
    let { name, status, petId } = props.pet
    return (
        <div className="card text-center" style={styles.div1}>
            <div className="card-body">
                <Link to={`/pet/${petId}`}>
                   <h5 className="card-title" style={styles.col}><i className="fas fa-paw"></i>{name}</h5>
                </Link>
                <Text className="card-text" style={styles.col}>ID:{petId}</Text>
                <Text className="card-text">{status}</Text>
                <div style={styles.div2}>
                <Edit id={petId} />
                <Delete id={petId} />
                <Detali id={petId}/>
                </div>
            </div>
        </div>
    );
}

export default Display
const styles = StyleSheet.create({
    div1: {
      width: '22rem', 
      margin: '7px', 
      borderColor:'rgb(47, 62, 70)'
    },
    col: {
        color: 'rgb(82, 121, 111)'
      },
      div2: {
        margin: '17px', 
      },

  });