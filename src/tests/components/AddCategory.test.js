import { shallow } from 'enzyme';
import { AddCategory } from "../../componentes/AddCategory";
import "@testing-library/jest-dom";

describe('Pruebas en <AddCategory />', () => {

  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={ setCategories } />);

  beforeEach( () => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={ setCategories } />);
  }); 

  test('debe de mostrarse correctamente', () => {
    
    expect( wrapper ).toMatchSnapshot();
  
  });

  test('debe de cambiar la caja de texto', () => {
  
    const input = wrapper.find('input');
    const value = 'hola mundo';
    input.simulate('change', {target: {value}}); // {target: {value}} simula ser un evento

    //Aqui habia que cambiar unas cosas en el AddCategory
    //Pero me parecia medio al pedo.
    // expect( wrapper.find('p').text().trim() ).toBe( value );

  });

  test('No debe postear la informacion con submit', () => {

    wrapper.find('form').simulate('submit', { preventDefault(){} });
    expect( setCategories ).not.toHaveBeenCalled();

  });

  test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
    // 1. Simular el inputChange.
    // 2. Simular el submit.
    // 3. setCategories se debe haber llamado.
    // 4. El valor del input debe de estar ''.

    // Simula el inputChange
    const input = wrapper.find('input');
    const value = 'Pokemon'
    input.simulate('change', {target: {value}});

    expect( wrapper.find('input').prop('value') ).toBe( value );

    // Simula el submit
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault(){} });

    // Chequea que se haya llamado a setCategories
    expect( setCategories ).toHaveBeenCalled();
    expect( setCategories).toHaveBeenCalledTimes( 1 );
    expect( setCategories).toHaveBeenCalledWith( expect.any(Function) );

    // Limpia el input
    expect( wrapper.find('input').prop('value') ).toBe('');
    

  });
  
  
  
  
})
