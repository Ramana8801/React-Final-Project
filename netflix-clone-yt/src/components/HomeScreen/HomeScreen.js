import React from 'react'
import Nav from '../Nav/Nav';

import Row from '../Row/Row';
import userrequests from '../firebase/Request';
import Banner from '../Banner/Banner';
import { FooterContainer } from '../../containers/footer';
function HomeScreen() {
    return (
        <div className="homescreen">
          <Nav/>
          <Banner/>

          <Row  title="Netflix Originals" isLargeRow fetchURL={userrequests.fetchNetflixOriginals}/>
          <Row title="Trending Now" fetchURL={userrequests.fetchTrending}/>
          <Row title="Top Rated" fetchURL={userrequests.fetchTopRated}/>
          <Row title="Action Movies" fetchURL={userrequests.fetchActionMovies}/>
          <Row title="Comedy Movies" fetchURL={userrequests.fetchComedyMovies}/>
          <Row title="Horror Movies" fetchURL={userrequests.fetchHorrorMovies}/>
          <Row title="Romantic Movies" fetchURL={userrequests.fetchRomanceMovies}/>
          <Row title="Documentaries" fetchURL={userrequests.fetchDocumentaries}/>
          <FooterContainer/>
        </div>
    )
}

export default HomeScreen;
