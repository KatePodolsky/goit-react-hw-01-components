import React from "react";
import PropTypes from "prop-types";
import Stats from "./stats";
import defaulFoto from "./defaultFotoUser.jpg";
import styles from "./Profile.module.css"

const Profile = ({avatar,name,tag,location,followers,views,likes}) => (
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
        <Stats followers={followers} views={views} likes={likes} />
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