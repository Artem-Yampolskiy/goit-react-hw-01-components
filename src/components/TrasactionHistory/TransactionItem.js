import React from 'react';
import PropTypes from 'prop-types';


const TrasactionItem = ({ transactions }) =>
    transactions.map(({ id, type, amount, currency }) => (
        <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    ));

TrasactionItem.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default TrasactionItem;

