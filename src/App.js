import React from 'react';
import Profile from './components/Profile/Profile';
import user from './data/user.json';
import Statistics from './components/Statistics/Statistics.jsx';
import statisticalData from './data/data.json';
import FriendList from './components/FriendList/FriendList.jsx';
import friends from './data/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx';
import transactions from '..//src/data/transactions.json';

const App = () => (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;