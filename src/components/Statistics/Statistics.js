import React from "react";
import PropTypes from 'prop-types';

const Statistics = ({title,stats}) => (
     <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
            {stats.map((statItem) => (
                <li key={statItem.id} className="item">
                <span className="label">{statItem.label}</span>
                <span className="percentage">{statItem.percentage}%</span>
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