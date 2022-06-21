const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header course={course} />
      <Content  partA={part1.name} exercisesA={part1.exercises} partB={part2.name} 
      exercisesB={part2.exercises} partC={part3.name} exercisesC={part3.exercises}/>

      <Total  number={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.partA} exercises={props.exercisesA}/>
      <Part part={props.partB} exercises={props.exercisesB}/>
      <Part part={props.partC} exercises={props.exercisesC}/>
    </>
  )
}
const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.number}</p>
    </>
  )
}





export default App