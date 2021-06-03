import React from "react";
import PropTypes from 'prop-types';
import styles from './Profile.module.css'

const Stats = ({followers, views, likes}) => (
     <ul className={styles.stats}>
        <li>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>{followers}</span>
        </li>
        <li>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>{views}</span>
        </li>
        <li>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>{likes}</span>
        </li>
    </ul>
)

Stats.propTypes = {
    followers:PropTypes.number.isRequired,
    views:PropTypes.number.isRequired,
    likes:PropTypes.number.isRequired,
}

export default Stats;