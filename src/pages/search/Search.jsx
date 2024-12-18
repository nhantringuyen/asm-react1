import React from "react";
import Navbar from "../../components/common/Navbar";
import SearchPopup from '../../components/search/SearchPopup';
import SearchList from '../../components/search/SearchList';
import Footer from "../../components/common/Footer";
import './Search.css';

const Search = () => {

  return (
    <>
    <Navbar />
    <main>
      <div className="app__main">
        <div className="app__search-popup">
          <SearchPopup showAll={showAll} />
        </div>
        <div className="app__search-list">
          <SearchList />
        </div>
      </div>
    </main>
    <Footer />
  </>
  );
};

export default Search;
