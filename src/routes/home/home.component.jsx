import HomeNavigation from '../../components/home-navigation/home-navigation.component';
import ListPreview from '../../components/list-preview/list-preview.component';
import { HomeContainer } from './home.styles';

const Home = () => {
  return (
    <HomeContainer>
      <HomeNavigation />
      <ListPreview />
    </HomeContainer>
  );
};

export default Home;