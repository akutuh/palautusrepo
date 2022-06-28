import { useState } from 'react'

const Name = ({ person }) => {
  return (
    <li>{person.name} {person.number}</li>
  )
}



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilterName, setNewFilterName] = useState('')
  const [filteredList, setFilteredList] = useState(persons)


  const addName = (event) => {
    event.preventDefault()
    if(persons.some(person => person.name === newName)){
      window.alert(`${newName} is already added to phonebook`);
    } else {
      const nameObject = {
        name: newName,
        number: newNumber
      }
  
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
      setFilteredList(persons)
    }
    
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleNameFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilterName(event.target.value)
    setFilteredList(persons.filter(person => person.name !== newFilterName))
    console.log('FilteredList',filteredList)
  }
  /*
    useEffect ?
  */
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter shown with<input value={newFilterName} onChange={handleNameFilterChange}/>
        </div>
      </form>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}  />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}  />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredList.map(person =>
          <Name key={person.name} person={person}/>)}
      </ul>
    </div>
  )

}

export default App