import React from "react";
import PropTypes from 'prop-types';
import styles from "./Statistics.module.css";

const Statistics = ({title,stats}) => (
     <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <ul className={styles.statList}>
            {stats.map((statItem) => (
                <li  style={{
            backgroundColor: `${'#'+(Math.random().toString(16) + '000000')
                .substring(2, 8)
            }`,
          }}
                
                    
                    key={statItem.id} className={styles.item}>
                <span className={styles.label}>{statItem.label}</span>
                <span className={styles.percentage}>{statItem.percentage}%</span>
                </li>
            ))
            }
        </ul>
    </section>
)

Statistics.defaultProps = {
    title: ' ',
}

Statistics.propTypes = {
    title:PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage:PropTypes.number.isRequired,
    })).isRequired,
}

export default Statistics



