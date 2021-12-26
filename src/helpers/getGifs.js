

export const getGifs = async( category ) => {
  const apiKey = '7WvZgInPzt8qbLUVuW5Fk5iaj5T1RTPm';
  const limit = '3';
  const q = encodeURI( category );
  const url = `https://api.giphy.com/v1/gifs/search?q=${q}&limit=${limit}&api_key=${apiKey}`;
  //const url = 'https://api.giphy.com/v1/gifs/search?q=Deathnote&limit=1&api_key=7WvZgInPzt8qbLUVuW5Fk5iaj5T1RTPm';
  const resp = await fetch( url );
  const { data } = await resp.json();

  const gifs = data.map( img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized.url,
    };
  })

  return gifs;
}