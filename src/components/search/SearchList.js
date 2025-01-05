import React, {useEffect, useState} from "react";
import SearchListItem from './SearchListItem';

const SearchList = ({ searchData }) => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    // Fetch data from public/data/search.json
    const fetchData = async () => {
      try {
        const response = await fetch("/data/search.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Fetch error:", error); // Handle errors
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (Object.keys(searchData).length > 0) {
      // Filter posts based on searchData
      const filtered = posts.filter((post) => {
        const matchesDestination = searchData.destination
            ? post.destination && post.destination.toLowerCase().includes(searchData.destination.toLowerCase())
            : true;
        const matchesPrice =
            (searchData.min_price ? post.price >= parseFloat(searchData.min_price) : true) &&
            (searchData.max_price ? post.price <= parseFloat(searchData.max_price) : true);
        const matchesDate = searchData.checkin_date
            ? new Date(post.checkin) >= new Date(searchData.checkin_date.split(" to ")[0])
            : true;

        return matchesDestination && matchesPrice && matchesDate;
      });
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts); // Show all posts if no searchData
    }
  }, [searchData, posts]);

  return (
      <section className="search-list">
        {filteredPosts.length > 0 ? (
            filteredPosts.map((hotel, index) => (
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
            ))
        ) : (
            <p>No results found.</p> // Show a message if no results
        )}
      </section>
  );
};

export default SearchList;
