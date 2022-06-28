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

  export default Course