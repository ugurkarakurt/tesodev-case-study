import React, { useContext, useEffect } from 'react';
import HomeNavigation from '../../components/home-navigation/home-navigation.component';
import ListPreview from '../../components/list-preview/list-preview.component';
import { HomeContainer } from './home.styles';
import { RecordsContext } from '../../contexts/records.context';
import Slider from '../../components/carousel/slider.component';
import Footer from '../../components/footer/footer.component';

const Home = () => {
  const { setPreviousPage } = useContext(RecordsContext);

  useEffect(() => {
    setPreviousPage("Home Page")
  }, []);

  return (
    <HomeContainer>
      <HomeNavigation />
      <ListPreview />
      <Slider />
      <Footer />
    </HomeContainer>
  );
}

export default Home;
