import { useState } from "react";
import "./App.css";
import contactsJSON from './contacts.json'

function App() {
const [contacts, setContacts] = useState(contactsJSON.slice(0,5))
  
return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won an Oscar</th>
              <th>Won an Emmy</th>
              </tr>
              </thead>
              <tbody>
      {contacts.map((oneContact) => {
       return (
       <tr key={oneContact.id}>
          <td>
            <img src={oneContact.pictureUrl} style={{height: "200px"}} />
              </td>
              <td>{oneContact.name}</td>
              <td>{oneContact.popularity.toFixed(2)}</td>
              <td>{oneContact.wonOscar ? '🏆 ': ""}</td>
              <td>{oneContact.wonEmmy ? '🏆 ': ""}</td>
              </tr>
       );
            })}
            </tbody>
            </table>
            </div>
)
          }
export default App;
