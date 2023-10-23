import ListNavigation from '../../components/list-navigation/list-navigation';
import ListItems from '../../components/list-items/list-items-component';
import { ListContainer } from "./list.styles";

const List = () => {
  return (
    <ListContainer>
      <ListNavigation />
      <ListItems />
    </ListContainer>
  );
};

export default List;