import React from 'react';
import AddNavigation from '../../components/add-navigation/add-navigation.component';
import AddFormComponent from '../../components/add-form/add-form.component';
import { AddContainer } from './add.styles';

const Home = () => {
  return (
    <AddContainer>
      <AddNavigation />
      <AddFormComponent />
    </AddContainer>
  );
}

export default Home;
