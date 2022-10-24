import {Button, StyleSheet ,Text} from 'react-native';
import { Link } from 'react-router-dom';

const Edit = petId => (
  <div className="float-right">
    <Link to={`/pet/${petId.petId}/edit`}>
        <button className="btn btn-outline-info" title="Edit pet" type="button" style={styles.button}>
            <span className="ml-1">Editare</span>
        </button>                        
    </Link>
  </div>
);

export default Edit;
const styles = StyleSheet.create({
  button: {
    borderColor:'rgb(53, 79, 82)' , 
    margin: '3px',
    color:'rgb(47, 62, 70)'
  },
});

