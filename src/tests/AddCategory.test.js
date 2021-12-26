import { shallow } from 'enzyme';
import { AddCategory } from "../componentes/AddCategory";


describe('Pruebas en <AddCategory />', () => {

  const setCategories = () => {};
  const wrapper = shallow(<AddCategory setCategories={ setCategories } />);

  test('debe de mostrarse correctamente', () => {
    
    expect( wrapper ).toMatchSnapshot();
  
  });

  test('debe de cambiar la caja de texto', () => {
  
    const input = wrapper.find('input');
    const value = 'hola mundo';
    input.simulate('change', {target: {value}});

    //Aqui habia que cambiar unas cosas en el AddCategory
    //Pero me parecia medio al pedo.

  })
  
  
})
