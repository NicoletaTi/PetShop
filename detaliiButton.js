import {Button, StyleSheet ,Text} from 'react-native';
import { Link } from 'react-router-dom';

const Detali= petId => (
  <div className="float-right">
    <Link to={`/pet/${petId.petId}`}>
        <Button className="btn btn-outline-info" title="Detalii" type="button" style={styles.button}>
            <Text className="ml-1">Detali</Text>
        </Button>                        
    </Link>
  </div>
);

export default Detali;
const styles = StyleSheet.create({
  button: {
    borderColor:'rgb(53, 79, 82)' , 
    margin: '3px',
    color:'rgb(47, 62, 70)'
  },
});

