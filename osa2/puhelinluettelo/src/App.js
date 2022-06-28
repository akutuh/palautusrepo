import { useState } from 'react'

const Name = ({ person }) => {
  return (
    <li>{person.name} {person.number}</li>
  )
}
const AllPersons = ({ filteredList }) => {
  return (
    <ul>
      {filteredList.map(person =>
          <Name key={person.name} person={person}/>)}
    </ul>
  )
}

const PersonForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
        <div>
          name: <input value={props.newName} onChange={props.onNameChange}  />
        </div>
        <div>
          number: <input value={props.newNumber} onChange={props.onNumberChange}  />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const FormFilter = (props) => {
  return(
    <form onSubmit={props.onSubmit}>
        <div>
          filter shown with<input value={props.newFilterName} onChange={props.onFilterChange}/>
        </div>
      </form>
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

  const filterNames = (event) => {
    event.preventDefault()
    setFilteredList(persons.filter(person => person.name !== newFilterName))
    
  }
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
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <FormFilter onFilterChange={handleNameFilterChange}
        newFilterName={newFilterName}
        onSubmit={filterNames}  />
      <h3>add a new</h3>
      <PersonForm onNameChange={handleNameChange} 
        onNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber} 
        onSubmit={addName}  />
      <h3>Numbers</h3>
      <AllPersons filteredList={filteredList} />
    </div>
  )

}

export default App