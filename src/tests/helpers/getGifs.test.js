import { getGifs } from "../../helpers/getGifs"

describe('Pruebas con getGifs', () => {
  
  test('Debe traer 3 elementos', async() => {
    
    const gifs = await getGifs('voley');

    expect( gifs.length ).toBe( 3 );

  });

  test('Debe traer 3 elementos', async() => {
    
    const gifs = await getGifs('');

    expect( gifs.length ).toBe( 0 );

  });


})
