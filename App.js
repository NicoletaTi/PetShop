import { StyleSheet } from 'react-native';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import history from './utils/history';
import NavigationBar from './components/navigation';
import PetList from './components/petList';
import PetDetail from './components/petDetail';
import CreatePet from './components/postPet';
import PetUpdate from './components/updatePet';
import DeletePet from './components/petdelete';
export * from "./api";


const App = () => {
    return(
        <Router history={history}>
            <div className="App">
                <NavigationBar />
                <Switch>
                    <Route exact path="/" component={PetList} />
                    <Route path="/create" component={CreatePet} />
                    <Route exact path="/pet/:petId" component={PetDetail} />
                    <Route path="/pet/:petId/edit" component={PetUpdate} />
                    <Route path="/pet/:petId/delete" component={DeletePet} />
                </Switch>
            </div>
        </Router>
    );
}
export default App;
const styles = StyleSheet.create({
    container: {},
  });