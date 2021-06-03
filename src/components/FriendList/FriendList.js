import React from "react";
import PropTypes from 'prop-types';
import FriendListItem from "../FriendListItem/FriendListItem"
import styles from "./FriendList.module.css";

const FriendList = ({friends}) => (
    <ul className={styles.friendList}>
        <FriendListItem friends={friends}
        />
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
