import React from 'react';
import TransactionItem from './TransactionItem';
import styles from './TransactionHistory.module.css';


const TransactionHistory = ({ transactions }) => (
    <table className={styles.transactionHistory}>
        <thead>
            <tr>
                <th className={styles.head}>Type</th>
                <th className={styles.head}>Amount</th>
                <th className={styles.head}>Currency</th>
            </tr>
        </thead>

        <tbody>
            <TransactionItem transactions={transactions}/>            
        </tbody>
    </table>
);

export default TransactionHistory;

