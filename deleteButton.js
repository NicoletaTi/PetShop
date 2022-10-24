import {Button, StyleSheet ,Text} from 'react-native';
import { Link } from 'react-router-dom';

const Delete= petId => (
  <div className="float-right">
    <Link to={`/pet/${petId.petId}/delete`}>
        <Button className="btn btn-outline-info" title="Stergere" type="button" style={styles.button}>
            <Text className="ml-1">Stergere</Text>
        </Button>                        
    </Link>
  </div>
);

export default Delete;
const styles = StyleSheet.create({
  button: {
    borderColor:'rgb(53, 79, 82)' , 
    margin: '3px',
    color:'rgb(47, 62, 70)'
  },
});