import React from "react";
import PropTypes from 'prop-types';
import FriendListItem from "../FriendListItem/FriendListItem"


const FriendList = ({friends}) => (
    <ul className="friend-list">
        {friends.map(friend => (
            <li key={friend.id} className="item">
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
