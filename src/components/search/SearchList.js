import React from 'react';
import SearchListItem from './SearchListItem';
import data from './search.json'; 

const SearchList = () => {
  return (
    <section className="search-list">
      {data.map((hotel, index) => (
        <SearchListItem
          key={index}
          name={hotel.name}
          distance={hotel.distance}
          tag={hotel.tag}
          type={hotel.type}
          description={hotel.description}
          free_cancel={hotel.free_cancel}
          price={hotel.price}
          rate={hotel.rate}
          rate_text={hotel.rate_text}
          image_url={hotel.image_url}
        />
      ))}
    </section>
  );
};

export default SearchList;
