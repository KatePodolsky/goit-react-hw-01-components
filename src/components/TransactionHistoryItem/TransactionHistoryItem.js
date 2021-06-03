import React from "react";
import PropTypes from 'prop-types';

const TransactionHistoryItem = ({items}) => 
    items.map(({type,amount,currency,id}) => (
      <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
  ))

TransactionHistoryItem.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency:PropTypes.string.isRequired,
    })).isRequired,      
}

export default TransactionHistoryItem