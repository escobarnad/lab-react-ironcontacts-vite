import { useState } from "react";
import "./App.css";
import contactsJSON from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5));
  const [allContacts, setAllContacts] = useState(contactsJSON.slice(5));

  const addRandomContact = () => {
    let randomIndex = Math.floor(Math.random() * allContacts.length);
    let randomContact = allContacts[randomIndex];

    const isContactAdded = contacts.some(
      (contact) => contact.id === randomContact.id
    );

    if (!isContactAdded) {
      setContacts([randomContact, ...contacts]);

      const newAllContacts = allContacts.filter(
        (contact) => contact.id !== randomContact.id
      );
      setAllContacts(newAllContacts);
    }
  };

  const sortByPopularity = () => {
    const toSortPopularity = [...contacts];
    const sortedByPopularity = toSortPopularity.sort(
      (a, b) => b.popularity - a.popularity
    );
    setContacts(sortedByPopularity);
  };

  const sortByName = () => {
    const toSortName = [...contacts];
    const sortedByName = toSortName.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts(sortedByName);
  };

  const deleteContact = (index) => {
    const deleteArr = [...contacts];
    deleteArr.splice(index, 1);
    setContacts(deleteArr);
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={() => addRandomContact()}>Add Random Contact</button>
      <button onClick={() => sortByPopularity()}>Sort by Popularity</button>
      <button onClick={() => sortByName()}>Sort by Name</button>
      <table className="center">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts &&
            contacts.map((contact, index) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img
                      src={contact.pictureUrl}
                      alt={contact.name}
                      style={{ height: "6rem" }}
                    />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td>{contact.wonOscar ? "🏆" : ""}</td>
                  <td>{contact.wonEmmy ? "🌟" : ""}</td>
                  <td>
                    <button onClick={() => deleteContact(index)}>Delete</button>
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
