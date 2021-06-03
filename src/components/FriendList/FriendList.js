import React from "react";
import PropTypes from 'prop-types';
import FriendListItem from "../FriendListItem/FriendListItem"
import styles from "./FriendList.module.css";

const FriendList = ({friends}) => (
    <ul className={styles.friendList}>
        {friends.map(friend => (
            <li key={friend.id} className={styles.item}>
                <FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            </li>
        ))
        }
        </ul>
)

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline:PropTypes.bool.isRequired,
    })).isRequired,
}

export default FriendList
