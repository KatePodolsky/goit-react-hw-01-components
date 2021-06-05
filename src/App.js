import React from "react";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import Container from "./components/Container/Container";
import user from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

const App = () => {
  return (
    <Container>
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
        // followers={user.stats.followers}
        // views={user.stats.views}
        // likes={user.stats.likes}
      />
    </div>
      <Statistics
        title="Upload stats"
        stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  )
};

export default App










