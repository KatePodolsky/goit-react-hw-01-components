import React from "react";
import PropTypes from 'prop-types';
import styles from "../FriendList/FriendList.module.css";

const FriendListItem = ({friends}) => 
       friends.map(({avatar,name,isOnline,id}) => (
            <li key={id} className={styles.item}>
                <span className={isOnline? styles.statusOnline: styles.statusOffline}>{isOnline}</span>
                <img
                    className={styles.avatar}
                    src={avatar}
                    alt={name}
                    width="48" />
                <p className={styles.name}>{name}</p>
            </li>
      ))

FriendListItem.propTypes = {
     friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline:PropTypes.bool.isRequired,
})).isRequired,
}

export default FriendListItem