import { shallow } from 'enzyme';
import "@testing-library/jest-dom";
import { GifGrid } from '../../componentes/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas del componente <GifGrid />', () => {

  let wrapper;
  let category = "Hunter x Hunter"

  // beforeEach( () => {
  //   const value = "Categoria"
  //   wrapper = shallow(<GifGrid category={ value }/>);
  // });

  test('Deberia hacer match con el snapshot', () => {
    
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    wrapper = shallow(<GifGrid category={ category } />);
    expect( wrapper ).toMatchSnapshot();

  });

  test('Debe mostras items cuando se cargan imagenes userFetchGifs', () => {
    
    const gifs = [{
      id: 'ABC',
      url: 'https://localhost/cualquier.cosa.jpg',
      title: 'tituloo',
    }];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow( <GifGrid category={ category } />);

    //expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('p').exists() ).toBe(false);
    expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );


  });
  




  
})
