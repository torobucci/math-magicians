import renderer from 'react-test-renderer';
import NavBar from '../components/NavBar';
import { BrowserRouter} from 'react-router-dom';

describe('NavBar', () => {
  test('Should render elements correctly', () => {
    const tree = renderer.create(<BrowserRouter><NavBar /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
})