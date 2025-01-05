import React, { useEffect, useRef, useState } from "react";
import styles from "./SearchPopup.module.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // Main CSS file for react-date-range
import "react-date-range/dist/theme/default.css"; // Theme CSS for react-date-range

const INITIAL_FORM_DATA = {
  destination: "",
  checkin_date: "",
  min_price: "",
  max_price: "",
  adults: "",
  children: "",
  room: "",
};

const INITIAL_DATE_RANGE = [
  {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  },
];

const SearchPopup = ({ onSearch }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [dateRange, setDateRange] = useState(INITIAL_DATE_RANGE);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const datePickerRef = useRef(null);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(formData);
  };

  const handleDateSelect = (ranges) => {
    const { startDate, endDate } = ranges.selection;
    setDateRange([ranges.selection]);
    setFormData((prev) => ({
      ...prev,
      checkin_date: `${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()}`,
    }));
  };

  const handleClickOutside = (event) => {
    if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
      setShowDatePicker(false);
    }
  };

  useEffect(() => {
    if (showDatePicker) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDatePicker]);

  return (
      <aside className={styles["search-popup"]}>
        <h3 className={styles["search-popup__title"]}>Search</h3>
        <form className={styles["search-popup__form"]} onSubmit={handleSubmit}>
          <div className={styles["form-group"]}>
            <label htmlFor="destination">Destination</label>
            <input
                type="text"
                id="destination"
                placeholder="Destination"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
            />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="checkin">Check-in Date</label>
            <input
                type="text"
                id="checkin"
                name="checkin_date"
                placeholder={`${dateRange[0].startDate.toLocaleDateString()} to ${dateRange[0].endDate.toLocaleDateString()}`}
                aria-label="Date range"
                onClick={() => setShowDatePicker(!showDatePicker)}
                readOnly
            />
            {showDatePicker && (
                <div ref={datePickerRef} className={styles["date-picker-container"]}>
                  <DateRange
                      editableDateInputs={true}
                      moveRangeOnFirstSelection={false}
                      className={styles["date-range-picker"]}
                      minDate={new Date()}
                      onChange={handleDateSelect}
                      ranges={dateRange}
                  />
                </div>
            )}
          </div>

          <fieldset className={styles["form-group"]}>
            <legend>Options</legend>
            <div className={styles["form-inline"]}>
              <label htmlFor="min-price">Min price per night</label>
              <input
                  type="number"
                  id="min-price"
                  name="min_price"
                  value={formData.min_price}
                  onChange={handleChange}
              />
            </div>
            <div className={styles["form-inline"]}>
              <label htmlFor="max-price">Max price per night</label>
              <input
                  type="number"
                  id="max-price"
                  name="max_price"
                  value={formData.max_price}
                  onChange={handleChange}
              />
            </div>
            <div className={styles["form-inline"]}>
              <label htmlFor="adults">Adults</label>
              <input
                  type="number"
                  id="adults"
                  name="adults"
                  min="1"
                  value={formData.adults}
                  onChange={handleChange}
              />
            </div>
            <div className={styles["form-inline"]}>
              <label htmlFor="children">Children</label>
              <input
                  type="number"
                  id="children"
                  name="children"
                  min="0"
                  value={formData.children}
                  onChange={handleChange}
              />
            </div>
            <div className={styles["form-inline"]}>
              <label htmlFor="rooms">Rooms</label>
              <input
                  type="number"
                  id="rooms"
                  name="room"
                  min="1"
                  value={formData.room}
                  onChange={handleChange}
              />
            </div>
          </fieldset>

          <button type="submit" className={styles["search-popup__button"]}>
            Search
          </button>
        </form>
      </aside>
  );
};

export default SearchPopup;
