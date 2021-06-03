import React from "react";
import PropTypes from "prop-types";
import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({items}) => (
<table className={styles.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
    <TransactionHistoryItem items={items}               
    />
  </tbody>
</table>
)

TransactionHistory.propTypes = {
      items: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency:PropTypes.string.isRequired,
    })).isRequired,  
}

export default TransactionHistory