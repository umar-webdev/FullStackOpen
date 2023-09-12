import Content from "./part1/Content"

const App = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />

    </div>
  )
}

export default App

const Header = () => {
  const course = 'Half Stack application development'

return (
  <div>
      <h1>{course}</h1>
  </div>
)
}

