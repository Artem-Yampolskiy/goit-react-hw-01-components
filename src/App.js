import React from 'react';

import Container from './components/Container/Container';

import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import Statistics from './components/Statistics/Statistics';
import TransactionHistory from './components/TrasactionHistory/TransactionHistory';

import user from './HW-file-json/user.json';
import friends from './HW-file-json/friends.json';
import statisticalData from './HW-file-json/statistical-data.json';
import transactions from './HW-file-json/trasactions.json';

import './App.css';

function App() {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <FriendList friends={friends} />

      <Statistics title="Upload stats" stats={statisticalData} />;
      <Statistics stats={statisticalData} />

      <TransactionHistory items={transactions} />

    </Container>
  );
}

export default App;
