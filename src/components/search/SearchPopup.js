import React from 'react';
import styles from './SearchPopup.module.css';

const SearchPopup = (prop) => {
  function searchForm(){
    const destination = document.getElementById("destination").value;
    const checkin = document.getElementById("checkin").value;
    const min_price = document.getElementById("min-price").value;
    const max_price = document.getElementById("max-price").value;
    const adults  = document.getElementById("adults").value;
    const children = document.getElementById("children").value;
    const room = document.getElementById("rooms").value;
    prop.showsAll = {destination: destination, checkin: checkin, min_price: min_price,
    max_price: max_price, adults: adults, children: children, room: room}
  }
  return (
  <aside className={styles['search-popup']}>
    <h3 className={styles['search-popup__title']}>Search</h3>
    <form className={styles['search-popup__form']}>
      <div className={styles['form-group']}>
        <label htmlFor="destination">Destination</label>
        <input type="text" id="destination" placeholder="Destination" name="destination" />
      </div>

      <div className={styles['form-group']}>
        <label htmlFor="checkin">Check-in Date</label>
        <input type="text" id="checkin" name="checkin-date" defaultValue="06/24/2022 to 06/24/2022" />
      </div>

      <fieldset className={styles['form-group']}>
        <legend>Options</legend>
        <div className={styles['form-inline']}>
          <label htmlFor="min-price">Min price per night</label>
          <input type="number" id="min-price" name="min-price" />
        </div>
        <div className={styles['form-inline']}>
          <label htmlFor="max-price">Max price per night</label>
          <input type="number" id="max-price" name="max-price" />
        </div>
        <div className={styles['form-inline']}>
          <label htmlFor="adults">Adult</label>
          <input type="number" id="adults" name="adults" defaultValue={1} min="1" />
        </div>
        <div className={styles['form-inline']}>
          <label htmlFor="children">Children</label>
          <input type="number" id="children" name="children" defaultValue={0} min="0" />
        </div>
        <div className={styles['form-inline']}>
          <label htmlFor="rooms">Room</label>
          <input type="number" id="rooms" name="rooms" defaultValue={1} min="1" />
        </div>
      </fieldset>

      <button type="submit" className={styles['search-popup__button']} onClick={searchForm()}>Search</button>
    </form>
  </aside>

);
};

export default SearchPopup;
