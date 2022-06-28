const Header = ({ course }) => <h1>{course}</h1>

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