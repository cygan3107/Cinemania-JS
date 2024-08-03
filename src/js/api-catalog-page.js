import axios from 'axios';
import {
  genres,
  fullStar,
  halfStar,
  emptyStar,
  heroFragment,
  topMoviesFragment,
  pagesBtnStartup,
  emptyApiResponeHero,
  emptyApiResponeCatalog,
} from './api-html-fragment.js';

const params = {
  page: 1,
  language: 'en-US',
  api_key: '682127ed972e56f6bb70ae743d23c1d7',
};
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${params.api_key}`,
  },
};

const urls = {
  urlDay: `https://api.themoviedb.org/3/trending/movie/day`,
  urlWeek: `https://api.themoviedb.org/3/trending/movie/week`,
  urlSearch:`https://api.themoviedb.org/3/search/movie`,
  url:``,
  title:``,
  quantity: 20,
};

const generateStars = rating => {
  let fullStars = Math.floor(rating);
  let halfStars = rating % 1 >= 0.5 ? 1 : 0;
  let emptyStars = 5 - fullStars - halfStars;
  return `${fullStar.repeat(fullStars)}${halfStar.repeat(
    halfStars
  )}${emptyStar.repeat(emptyStars)}`;
};

const createHeroMovie = resResponse => {
  const maxLength = 200;
  const heroSection = document.querySelector('#hero');
  const randomMovieIndex = Math.floor(
    Math.random() * resResponse.data.results.length
  );
  const topDayMovie = resResponse.data.results[randomMovieIndex];

  const cutText = (text, maxLength) =>
    text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  const truncatedOverview = cutText(topDayMovie.overview, maxLength);
  const rating = topDayMovie.vote_average / 2;
  const starsHTML = generateStars(rating);

  heroSection.innerHTML = heroFragment(
    topDayMovie.id,
    topDayMovie.backdrop_path,
    topDayMovie.title,
    starsHTML,
    truncatedOverview
  );
};


const movieGenresCompare = (arr1, arr2) => {
  const finalArr = [];
  for (i = 0; i < arr1.length; i += 1) {
    if (arr2.includes(arr1[i].id)) {
      finalArr.push(arr1[i].name);
    }
  }
  return finalArr.slice(0, 2).join(', ');
};

const catalogItem = movie => {
  const movieGenres = movieGenresCompare(genres, movie.genre_ids);
  const releaseYear = movie.release_date.slice(0, 4);
  const rating = movie.vote_average / 2;
  const starsHTML = generateStars(rating);
  return topMoviesFragment(
    movie.id,
    movie.backdrop_path,
    movie.title,
    movieGenres,
    releaseYear,
    starsHTML
  );
};
const emptyResponseCatalog = () => {
  const moviesCatalog = document.querySelector('#catalogSection');
  catalogSection.innerHTML = emptyApiResponeCatalog;
};
const crateCatalog = movies => {
  const moviesCatalog = document.querySelector('#catalg');
  let weekMoviesSectionFragment = '';
  movies.forEach(movie => {
    weekMoviesSectionFragment = weekMoviesSectionFragment + catalogItem(movie);
  });
  moviesCatalog.innerHTML = weekMoviesSectionFragment;
};
const createPagesBtn = (totalItems, itemsPerPage) => {
  const pagesBtnSection = document.querySelector('#pagesBtnSection');
  const lastPage = Math.ceil(totalItems / itemsPerPage);
  if (lastPage < 2) return;

  pagesBtnSection.innerHTML = pagesBtnStartup(lastPage);
};
function createDefaultHeroSection() {
  const heroSection = document.querySelector('#hero');
  heroSection.innerHTML = emptyApiResponeHero;
}

const catalogPageApiData = url =>
  axios
    .get(url, { params, ...options })
    .then(resResponse => {
      const length = resResponse.data.results.length;
      //const length = 0
      if (url.includes('day')) {
        if (length === 0) {
          createDefaultHeroSection();
          return;
        }
        createHeroMovie(resResponse);
        if (length===0){
            emptyResponseCatalog()
            return;
          }
          urls.url=url
        crateCatalog(resResponse.data.results)
        createPagesBtn(resResponse.data.total_results, 20)

        return;
      }
      if (length === 0) {
        emptyResponseCatalog();
        return;
      }
      crateCatalog(resResponse.data.results);
      createPagesBtn(resResponse.data.total_results, 20);
      return;
    })
    .catch(error => {
      emptyResponseCatalog();
      createDefaultHeroSection();
      return console.log(error);
    });

const catalogPageContent = async () =>
  await Promise.all([
    catalogPageApiData(urls.urlDay),
    catalogPageApiData(urls.urlWeek),
  ]);

catalogPageContent();

////////////////// Kamil całą tą definicję klasy Krystian wywalił wcześniej, inaczej przerobił ten plik i już mam to w mainie, widzę że dopisaleś do tej definicji klasy coś więcej, nie chcę usuwać, póki co zakomentuję, zobaczymy czy bez tego zadziała 
// class UrlSearch {
//   constructor({ titel, adulds, page, country, year }) {
//     this.inputs.queryTitle = titel;
//     this.inputs.queryAdults = adulds;
//     this.inputs.queryPages = page;
//     this.inputs.queryRegion = country;
//     this.inputs.queryYear = year;
//   }

//   setups = {
//     coreUrl: 'https://api.themoviedb.org/3/search/movie',
//     query: '?',
//     queryTitle: 'query=',
//     queryAdults: '&include_adult=',
//     queryPages: '&page=',
//     queryRegion: '&region=',
//     queryYear: '&year=',
//   };

//   inputs = {
//     queryTitle: '',
//     queryAdults: '',
//     queryPages: '',
//     queryRegion: '',
//     queryYear: '',
//   };

//   set pageNumber(number) {
//     this.inputs.queryPages = number;
//   }
//   set coreUrl(url) {
//     this.setups.coreUrl = url;
//   }

//   get url() {
//     return (
//       this.setups.coreUrl +
//       this.setups.query +
//       this.setups.queryTitle +
//       this.inputs.queryTitle +
//       this.setups.queryAdults +
//       this.inputs.queryAdults +
//       this.setups.queryPages +
//       this.inputs.queryPages
//     );
//   }
// }



const PageApiData = url =>
    axios
        .get(url, { params, ...options })
        .then(resResponse => {
            const length=resResponse.data.results.length
            //obsługa gdy pojawi się błąd null z document.querySelector('#catalg')
            if (document.querySelector('#catalg').hasChildNodes()) {
                const childs = document.querySelectorAll("#catalg > li");
                childs.forEach(child => child.remove());
            }
            if (document.querySelector('#navForm')!==null)
                document.querySelector("#navForm").remove();
            

             if (length===0){
                emptyResponseCatalog()
                return;
              }
              console.log(resResponse)
            crateCatalog(resResponse.data.results)
            createPagesBtn(resResponse.data.total_results, 20)
            return;
        })
        .catch(error => {
            emptyResponseCatalog()
            return console.log(error)}
              );

window.addEventListener("click" , event=>{
    console.log(event.target.parentElement.id)
    
    try {
        if (event.target.id ==="searchBtn") {
            event.preventDefault();
            console.log(document.querySelector('#catalogFormInput').value.trim())
            if (document.querySelector('#catalogFormInput').value.trim()=="") {
                 return
             }
            urls.url=`https://api.themoviedb.org/3/search/movie`
            params.page=1
            urls.title= document.querySelector('#catalogFormInput').value.trim()

            const searchUrl=`${urls.url}?query=${urls.title}&include_adult=false` 

            const PageContent = async () => await PageApiData(searchUrl)
            PageContent();
            console.log(urls)
        }
        if (event.target.parentElement.id ==="navForm") {
            event.preventDefault();
            params.page=event.target.textContent
            let navUrl= urls.url
            if(navUrl.includes("search")){
                navUrl=navUrl+`?query=${urls.title}&include_adult=false`
                console.log(navUrl)
            }
            const PageContent = async () => await PageApiData(navUrl)
            
            PageContent();

        }
      
    ///////////// w    window.addEventListener    od Kamila   , to jest chyba poprostu stara wersja tego kodu przed poprawkami, zostawiam dla pewności, ale raczej do wywalenia    
//       const searchMovieTitle = document
//         .querySelector('#catalogFormInput')
//         .value.trim();
//       let searchMovieRegion = '';
//       let searchMovieYear = '';

//       const titel = document.querySelector('#catalogFormInput').value.trim();
//       const adulds = 'false';
//       const page = '1';
//       const country = 'US';
//       const year = '2024';

//       const test = new UrlSearch({ titel, adulds, page, country, year });

//       const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${searchMovieTitle}&include_adult=false&page=1${searchMovieRegion}${searchMovieYear}`;

//       console.log('searchUrl: ', searchUrl);
//       console.log('url: ', test.url);  

    } catch (error) {
    console.error(error);
    }

    
} )






    // try {
    //     if (event.target.parentElement.id ==="navForm"){
    //         console.log(event.target.textContent)








    //     }
    //   } catch (error) {
    //     console.error("ID is not define!");
    //   }
      



// try {
//     if (event.target.parentElement.id ==="navForm"){
//         console.log(event.target.textContent)

//     }
//   } catch (error) {
//     console.error("ID is not define!");
//   }
