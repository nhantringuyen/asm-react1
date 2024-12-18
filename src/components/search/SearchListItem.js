import React from 'react';
import styles from './SearchListItem.module.css';
import Button from "../common/Button";

const SearchListItem = ({ name, distance, tag, type, description, free_cancel, price, rate, rate_text, image_url }) => {
  return (
    <article className={styles['search-list-item']}>
        {/* Hình ảnh của khách sạn */}
        <img src={image_url} alt={name} className={styles['search-list-item__image']} />

        {/* Thông tin khách sạn */}
        <div className={styles['search-list-item__details']}>
            <h3 className={styles['hotel-name']}>{name}</h3>
            <p className={styles['hotel-distance']}>{distance} from center</p>

            <span className={styles['hotel-tag']} aria-label={tag}>{tag}</span>

            <p className={styles['hotel-description']}>{description}</p>
            <p className={styles['hotel-type']}>{type}</p>

            {/* Điều kiện hủy miễn phí, chỉ hiển thị nếu có */}
            {free_cancel && (
                <p className={styles['hotel-free-cancel']}>
                    <span className={styles['green-text']}>Free cancellation</span>
                    <br />
                    You can cancel later, so lock in this great price today!
                </p>
            )}
        </div>

        {/* Thông tin giá cả và đánh giá */}
        <div className={styles['search-list-item__price']}>
            <div className={styles['hotel-rate']} aria-label={`${rate_text} rating`}>
                <strong>{rate_text}</strong>
                <div className={styles['hotel-score']} aria-hidden="true">{rate}</div>
            </div>

            <div className={styles['hotel-price']} aria-label={`Price: $${price}`}>
                ${price}
            </div>
            <span className={styles['hotel-taxes']}>Includes taxes and fees</span>
            <Button text="See availability" classNames="primary" />
        </div>
    </article>

);
};

export default SearchListItem;
