import { useState } from "react";
import "./App.css";
import contactsJSON from './contacts.json'

function App() {
  const copyContactsJSON = JSON.parse(JSON.stringify(contactsJSON));
  const [contacts, setContacts] = useState(copyContactsJSON.splice(0,5))
  const [rowCount, setRowCount] = useState(0);

const handleClick = () => {
  if (copyContactsJSON.length === 0) {
    return;
  } else {
  const filterArr = copyContactsJSON.filter((element) => !contacts.includes(element));
  const randomIndex = Math.floor(Math.random() * filterArr.length)
  console.log(randomIndex)
  const randomContact =filterArr[randomIndex] 
  filterArr.splice(randomIndex, 1)
  setContacts([...contacts, randomContact])
  
  console.log(randomIndex)
  console.log(filterArr.length)
}
}
return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={() => handleClick()}>Add Random Contact</button>
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


// button -> math.random i !== contact.id displayed

 // Math.random if id == id list > roll again else print 