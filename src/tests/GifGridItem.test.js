import { shallow } from "enzyme";
import { GifGridItem } from "../componentes/GifGridItem";

describe('Testing GifGridItem', () => {

  let wrapper;
  const title = 'New title';
  const url = 'https://google.com';

  beforeEach( () => {
    wrapper = shallow(
      <GifGridItem 
        title = { title }
        url = { url }
      />
    );
  })

  test('Debe mostrar el componente correctamente', () => {
    expect( wrapper ).toMatchSnapshot();
  })
  
  test('Debe tener un parrafo con el title', () => {
    const p = wrapper.find('p');
    expect( p.text().trim() ).toBe( title );
  })

  test('Debe obtener la imagen con matching url y alt', () => {
    const img = wrapper.find('img');
    expect( img.props().src ).toBe( url );
    expect( img.props().alt ).toBe( title )
  })

  test('Debe tener animate__fadeIn', () => {
    const div = wrapper.find('div');
    //expect( div.prop('className') ).toMatch('animate__fadeIn');
    expect( div.hasClass('animate__fadeIn') ).toBeTruthy();
  })
  
  

})
