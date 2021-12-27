import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';


describe('Pruebas sobre el hook useFetchGifs', () => {
  
  test('Debe retornar el estado inicial', async() => {

    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Hunter x Hunter') ) ; 

    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect( data ).toEqual([]);
    expect( loading ).toBe(true);

  });

  test('Debe retornar un arreglos de imgs y el loading en false', async() => {
    
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Hunter x Hunter') );
    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect( data.length ).toEqual( 3 );
    expect( loading ).toBe( false );
  });
  
  
})
