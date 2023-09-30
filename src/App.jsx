import { useState } from "react";
import "./App.css";
import contactsJSON from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5));
  const [remaining, setRemaining] = useState(contactsJSON.slice(5));
  // console.log(contacts)

  const handleAddContact = () => {
    if (remaining.length === 0){
      return
    } else {
    const randomIndex = Math.floor(Math.random() * remaining.length)
    const randomContact = remaining[randomIndex]
    setContacts([randomContact, ...contacts])
    const newRemaining = JSON.parse(JSON.stringify(remaining))
    newRemaining.splice(randomIndex, 1)
    setRemaining(newRemaining)
  }
}

  const handleDelete = (id) => {
    const updatedContacts = contacts.filter((contact) => id !== contact.id);
    setContacts(updatedContacts);
  };

  const handleSortName = () => {
    const sortedNames = contacts.toSorted((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    })
    setContacts(sortedNames)
  }

  const handleSortPopularity = () =>  {
    const sortedPopularity = contacts.toSorted((a, b) => {
      if (a.popularity < b.popularity) {
        return 1;
      }
      if (a.popularity > b.popularity) {
        return -1;
      }
      return 0;
    })
    setContacts(sortedPopularity)
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={() => handleAddContact()}>Add Random Contact</button>
      <button onClick={() => handleSortPopularity()}>Sort by popular</button>
      <button onClick={() => handleSortName()}>Sort by alphabet</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((eachContact) => {
            return (
              <tr key={eachContact.id}>
                <td>
                  <img
                    src={eachContact.pictureUrl}
                    alt="profile picture"
                    height="150 px"
                  />
                </td>
                <td>{eachContact.name}</td>
                <td>{eachContact.popularity.toFixed(2)}</td>
                <td>{eachContact.wonOscar && "🏆"}</td>
                <td>{eachContact.wonEmmy && "🏆"}</td>
                <td>
                  <button onClick={() => handleDelete(eachContact.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
