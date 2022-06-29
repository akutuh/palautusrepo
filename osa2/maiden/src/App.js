import { useState, useEffect } from 'react'
import axios from 'axios'

const SingleCountry = ({ country }) => {
  return ( 
    <>
      <h2>{country.name.common}</h2>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <b>languages:</b>
      {Object.values(country.languages).map((value, index) => {
        return (
          <li key={index}>{value}</li>
        );
      })}
      <p></p>
      <img src={country.flags.png} alt='flag'/>
    </>
  )
}

const CountriesList = (props) => {
  const allcountries = props.countries.filter(country => country.name.common.toLowerCase().includes(props.newSearch))
  if(allcountries.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  } else if (allcountries.length < 10 && allcountries.length > 1) {
    return (
      <>
        {allcountries.map(country =>
          <li key={country.name.official}>{country.name.common}</li>
          )}
      </>
    )
  } else {
    return (
      <>
        {allcountries.map(country =>
          <SingleCountry country={country} key={country.idd.suffixes[0]}/>
          )}
      </>
    )
  }

}

const SearchForm = (props) => {
  return (
    <>
      <input onSubmit={props.handleSubmit} onChange={props.handleSearch}/>
    </>
  )
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [newSearch, setnewSearch] = useState('')
  
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  },[])

  const handleSubmit = (event) => {
    console.log('sumbited')
    event.preventDefault();
  }

  const handleSearch = (event) => {
    console.log(event.target.value)
    setnewSearch(event.target.value)
  } 


  return (
    <div>
      <SearchForm handleSubmit={handleSubmit} handleSearch={handleSearch}/>
      <CountriesList countries={countries} newSearch={newSearch}/>
    </div>
  )

}

export default App;
