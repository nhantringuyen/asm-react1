import React, { useState } from "react";
import Navbar from "../../components/common/Navbar";
import SearchPopup from '../../components/search/SearchPopup';
import SearchList from '../../components/search/SearchList';
import Footer from "../../components/common/Footer";
import styles from './Search.module.css';

const Search = () => {
  const [searchData, setSearchData] = useState({});

  const handleSearch = (data) => {
    setSearchData(data); // Cập nhật dữ liệu tìm kiếm
  };
  return (
    <>
    <Navbar />
    <main>
      <div className={styles.app__main}>
        <div className={`${styles["app__search-popup"]}`}>
          <SearchPopup onSearch={handleSearch} />
        </div>
        <div className={`${styles["app__search-list"]}`}>
          <SearchList  searchData={searchData} />
        </div>
      </div>
    </main>
    <Footer />
  </>
  );
};

export default Search;
