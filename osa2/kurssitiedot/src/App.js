const Header = ({ course }) => <h1>{course}</h1>


const Total = ({ course }) => {
  return (
    <b>Total of {course.parts.reduce((sum, cours) => sum + cours.exercises, 0)} exercises </b>
  )
}

const Part = ({ part }) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map(part => 
        <Part key={part.id} part={part} />
      )}
    </div>
    
  )
}

const Course = ({ course }) => 
  <>
    <Header course={course.name}  />
    <Content course={course} />
    <Total course={course} />
  </>

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        id: 1,
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        id: 2,
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        id: 3,
        name: 'State of a component',
        exercises: 14
      },
      {
        id: 4,
        name: 'Redux',
        exercises: 11
      }
    ]
  }
  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App