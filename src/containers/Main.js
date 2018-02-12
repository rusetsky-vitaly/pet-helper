import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Account from '../pages/Account';
import Stuff from '../pages/Stuff';
import Shelters from '../pages/Shelters';
import PetDido from '../pages/PetDido';
import PetBoba from '../pages/PetBoba';
import ShelterSirius from '../pages/ShelterSirius';

class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/account' component={Account}/>
        <Route exact path='/stuff' component={Stuff}/>
        <Route exact path='/shelters' component={Shelters}/>
        <Route exact path='/pets/dido' component={PetDido}/>
        <Route exact path='/pets/boba' component={PetBoba}/>
        <Route exact path='/shelters/sirius' component={ShelterSirius}/>
      </Switch>
    );
  }
}

export default Main;
