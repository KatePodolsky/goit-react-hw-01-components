import React from "react";
import PropTypes from 'prop-types';
import defaulFoto from './defaultFotoUser.jpg'

const Profile = ({avatar,name,tag,location,followers,views,likes}) => (
     <div class="profile">
                <div class="description">
                    <img
                    src={avatar}
                    alt={name}
                    class="avatar"
                    />
                    <p class="name">{name}</p>
                    <p class="tag">{tag}</p>
                    <p class="location">{location}</p>
                </div>

                <ul class="stats">
                    <li>
                    <span class="label">Followers</span>
                    <span class="quantity">{followers}</span>
                    </li>
                    <li>
                    <span class="label">Views</span>
                    <span class="quantity">{views}</span>
                    </li>
                    <li>
                    <span class="label">Likes</span>
                    <span class="quantity">{likes}</span>
                    </li>
                </ul>
            </div>
)

Profile.defaultProps = {
    avatar: defaulFoto,
}

Profile.propTypes = {
    avatar:PropTypes.string,
    name:PropTypes.string.isRequired,
    tag:PropTypes.string.isRequired,
    location:PropTypes.string.isRequired,
    followers:PropTypes.number.isRequired,
    views:PropTypes.number.isRequired,
    likes:PropTypes.number.isRequired,
}

export default Profile