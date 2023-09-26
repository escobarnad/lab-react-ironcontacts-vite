import { useState } from "react";
import "./App.css";
import contactsJSON from './contacts.json'

function App() {
  const [remaining, setRemaining] = useState(contactsJSON.slice(5))
  const [contacts, setContacts] = useState(contactsJSON.slice(0,5))
  
const handleClick = () => {
  const randomIndex = Math.floor(Math.random() * remaining.length)
  const randomContact =remaining[randomIndex] 
  setContacts([...contacts, randomContact])
  const newRemaining = JSON.parse(JSON.stringify(remaining))
  newRemaining.splice(randomIndex,1)
  setRemaining(newRemaining)
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