import React, { useState, useEffect, useRef } from "react";
import "./index.css"; // Import the CSS file for styling
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // Main CSS file for react-date-range
import "react-date-range/dist/theme/default.css";
const Header = () => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const datePickerRef = useRef(null); // Create a ref for the date picker

  const handleDateSelect = (ranges) => {
    setDateRange([ranges.selection]);
  };
  const handleSearch = () => {
    // Redirect to the search page
    window.location.replace("/search");
    setShowDatePicker(false); // Close the date picker after selecting a date
  };

  const handleClickOutside = (event) => {
    // Close the date picker if the click is outside of it
    if (
      datePickerRef.current &&
      !datePickerRef.current.contains(event.target)
    ) {
      setShowDatePicker(false);
    }
  };

  useEffect(() => {
    // Add an event listener when the date picker is open
    if (showDatePicker) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDatePicker]);

  return (
    <div className="home-header">
      <div className="container">
        <h1>A lifetime of discounts? It's Genius.</h1>
        <p>
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free account
        </p>
        <button className="btn-signin">Sign in / Register</button>

        <div className="search-bar">
          <div className="search-input">
            <i className="fa fa-bed" aria-hidden="true"></i>
            <input
              type="text"
              placeholder="Where are you going?"
              aria-label="Where are you going?"
            />
          </div>
          <div className="search-input date-picker-container">
            <i className="fa fa-calendar" aria-hidden="true"></i>
            <input
              placeholder={`${dateRange[0].startDate.toLocaleDateString()} to ${dateRange[0].endDate.toLocaleDateString()}`}
              aria-label="Date range"
              onClick={() => setShowDatePicker(!showDatePicker)}
              readOnly
            />
            {showDatePicker && (
              <div ref={datePickerRef}>
                <DateRange
                  editableDateInputs={true}
                  moveRangeOnFirstSelection={false}
                  className="date-range-picker"
                  minDate={new Date()}
                  onChange={handleDateSelect}
                  ranges={dateRange}
                />
              </div>
            )}
          </div>
          <div className="search-input">
            <i className="fa fa-user" aria-hidden="true"></i>
            <input
              type="text"
              placeholder="1 adult · 0 children · 1 room"
              aria-label="Guest and room details"
            />
          </div>
          <button className="btn-search" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
