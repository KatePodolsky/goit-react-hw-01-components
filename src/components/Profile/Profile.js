import React from "react";
import PropTypes from "prop-types";
import defaulFoto from "./defaultFotoUser.jpg";
import styles from "./Profile.module.css"

const Profile = ({avatar,name,tag,location,stats}) => (
    <div className={styles.profile}>
        <div className="description">
            <img
                src={avatar}
                alt={name}
                className={styles.avatar}
            />
            <p className={styles.name}>{name}</p>
            <p className={styles.tag}>@{tag}</p>
            <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.stats}>
        <li>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>{stats.likes}</span>
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
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers:PropTypes.number.isRequired,
        views:PropTypes.number.isRequired,
        likes:PropTypes.number.isRequired,
    }).isRequired,
}

export default Profile