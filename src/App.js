import { useState } from 'react';

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

export default function App() {

  const [formShow, setFormShow] = useState();

  function formFriendShow(friend) {
    setFormShow(e => (e?.id === friend.id ? null : friend));
  }
  
  return (
    <div className="app">
      <div className="slidebar">
        <div style={{ display: 'flex' }}>
          <FriendList
            initialFriends={initialFriends}
            formFriendShow={formFriendShow}
            formShow={formShow}
          />
        </div>
        <AddFrind />
      </div>
    </div>
  );
}

function FriendList({ initialFriends, formFriendShow, formShow }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {initialFriends.map(e => (
        <Friend
          friend={e}
          key={e.id}
          formFriendShow={formFriendShow}
          formShow={formShow}
        />
      ))}
    </div>
  );
}

function Friend({ friend, formFriendShow, formShow }) {
  return (
    <div style={formShow?.id === friend.id ? { backgroundColor: 'red' } : {}}>
      <img src={friend.image} alt="badaxawa wyna nia " />

      <h2>{friend.name}</h2>
      {friend.balance < 0 && (
        <p style={{ color: 'red' }}>
          you owe {friend.name} {friend.balance * -1} $
        </p>
      )}

      {friend.balance > 0 && (
        <p style={{ color: 'blue' }}>
          {friend.name} ows you {friend.balance} $
        </p>
      )}

      {friend.balance === 0 && <p>you and {friend.name} are even $</p>}

      <button onClick={() => formFriendShow(friend)}> select</button>
    </div>
  );
}

function AddFrind() {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <h1>friend name </h1>
        <input type="text" />
      </div>
      <div style={{ display: 'flex' }}>
        <h1>Image url </h1>
        <input type="text" value={'https://i.pravatar.cc/48'} />
      </div>
      <button>add friend </button>
    </div>
  );
}
