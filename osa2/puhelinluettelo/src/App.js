import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/persons'

const Name = ({ person, deleteName }) => {
  return (
    <li>{person.name} {person.number} <button onClick={() => deleteName(person)}>delete</button></li>
  )
}
const AllPersons = ({ persons, newFilterName, deleteName}) => {
  const filteredNames = persons.filter(person => person.name.includes(newFilterName))
  return (
    <ul>
      {filteredNames.map(person =>
        <Name key={person.name} person={person} deleteName={deleteName}/>)}
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
    <form onSubmit={props.filterNames}>
        <div>
          filter shown with <input onChange={props.handleNameFilterChange}/>
        </div>
      </form>
  )
}


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilterName, setNewFilterName] = useState('')

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, []) 


  const filterNames = (event) => {
    event.preventDefault()
    console.log('submitted')
  }
  const addName = (event) => {
    event.preventDefault()
    if(persons.some(person => person.name === newName && person.number !== '')){
      window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      const numberForPerson = persons.find(person => person.name === newName)
      const changedNumber = { ...numberForPerson, number: newNumber}
      personService
        .update(changedNumber, numberForPerson.id)
        .then((response) => {
          setPersons(persons.map(person => person.id !== numberForPerson.id ? person : response.data))
        })
        setNewName('')
        setNewNumber('')
      //todo replace number
    }  else if (persons.some(person => person.name === newName && person.number === '')){
      // add number to existing name where number null
      const numberForPerson = persons.find(person => person.name === newName)
      const changedNumber = { ...numberForPerson, number: newNumber}
      personService
        .update(changedNumber, numberForPerson.id)
        .then((response) => {
          setPersons(persons.map(person => person.id !== numberForPerson.id ? person : response.data))
        })
        setNewName('')
        setNewNumber('')
    } else {
      const nameObject = {
        name: newName,
        number: newNumber
      }
      personService
        .create(nameObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
        })
    }
    
  }

  const deleteName = (personO) => {
    if (window.confirm(`Delete ${personO.name}?`)) {
      console.log('delete', personO.id)
      personService
        .deletePerson(personO.id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== personO.id))
        })
    } else {
      console.log('delete canceled')
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
      <FormFilter handleNameFilterChange={handleNameFilterChange}
        onSubmit={filterNames}  />
      <h3>add a new</h3>
      <PersonForm onNameChange={handleNameChange} 
        onNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber} 
        onSubmit={addName}  />
      <h3>Numbers</h3>
      <AllPersons 
        persons={persons} 
        newFilterName={newFilterName}
        deleteName={deleteName}
        />
    </div>
  )

}

export default App