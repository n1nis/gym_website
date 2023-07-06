export const exerciseOptions = {
  method: "GET",
  headers: {
    'X-RapidAPI-Key': '737a541598msh493c8a39bab0603p18c27djsn9ecd4b424751',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b8c01f26f6msh199ea8a66338969p1f52efjsn1cf2216126ec",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
