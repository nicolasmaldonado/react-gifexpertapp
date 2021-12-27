import { shallow } from "enzyme";
import { GifExpertApp } from "../../componentes/GifExpertApp";
import { GifGrid } from "../../componentes/GifGrid";


describe('Pruebas sobre <GifExpertApp />', () => {

  test('Debe mostrarse correctamente', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect( wrapper ).toMatchSnapshot();
  });

  test('Debe mostra una lista de X categorias', () => {
    const categories = ['Hunter x Hunter', 'Pokemon'];
    const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find(GifGrid).length ).toBe( 2 );
  })
  
  
})
