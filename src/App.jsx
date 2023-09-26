import { useState } from "react";
import "./App.css";
import contactsJSON from './contacts.json'

function App() {
  const copyContactsJSON = JSON.parse(JSON.stringify(contactsJSON));
  const [contacts, setContacts] = useState(copyContactsJSON.splice(0,5))
  const [rowCount, setRowCount] = useState(0);

const handleClick = () => {
  //const filterArr = copyContactsJSON.filter((element) => !contacts.includes(element));
  const randomIndex = Math.floor(Math.random() * copyContactsJSON.length)
  const randomContact =copyContactsJSON[randomIndex] 
  setContacts([...contacts, randomContact])
}

const handleClick2 = () => {
  
  const ratedContacts = [...contacts].sort((a, b)=>{
    if (a.popularity<b.popularity) {return 1}
    if (b.popularity<a.popularity) {return -1}
    return 0
   })
   console.log(ratedContacts)
    setContacts(ratedContacts)
}

const handleClick3 = () => {
  
  const sortedContacts = [...contacts].sort((a, b)=>{
  if (a.name<b.name) {return -1}
  if (b.name<a.name) {return 1}
  return 0
 })
  setContacts(sortedContacts)
}

const handleClick4 = (id) => {
  const updatedContacts = contacts.filter((contact) => contact.id !== id);
  setContacts(updatedContacts);
  
}

return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={() => handleClick()}>Add Random Contact</button>
      <button onClick={() => handleClick2()}>Sort by popular</button>
      <button onClick={() => handleClick3()}>Sort by alphabet</button>
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
              <td>  <button onClick={() => handleClick4(oneContact.id)}>Delete</button></td>
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