import React from "react";
import PropTypes from 'prop-types';
import styles from "../FriendList/FriendList.module.css";

const FriendListItem = ({friend:{isOnline,avatar,name}}) => (
    <li className={styles.item}>
        <span className={isOnline? styles.statusOnline: styles.statusOffline}>{isOnline}</span>
        <img
            className={styles.avatar}
            src={avatar}
            alt={name}
            width="48" />
        <p className={styles.name}>{name}</p>
    </li>
)

export default FriendListItem