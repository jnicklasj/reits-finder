import Nav from './components/Nav';
import Search from './components/Search';
import Findby from './components/Findby';
import ParkingLists from './components/ParkingLists';
import Tabbar from './components/Tabbar';
import { Container } from '@chakra-ui/react';

export default function Welcome(props) {
  return (
    <Container maxW="container.sm">
      <Nav />
      <Search />
      <Findby />
      <ParkingLists />
      <Tabbar />
    </Container>
  );
}
