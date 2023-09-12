/* eslint-disable react/prop-types */

const App = (props) => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content part={course.parts}/>
      <Total parts={course.parts} />

    </div>
  )
}

export default App

const Header = (props) => {

return (
  <div>
      <h1>{props.course}</h1>
  </div>
)
}
const Parts = (props) => {
  return (
    <div>
        <h1>{props.part} {props.exercises}</h1>
    </div>
  )
  }
  const Total = (props) => {
    return (
      <div>
          <h1>Number of Exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</h1>
      </div>
    )
    }
  const Content = (props) => {
    console.log(props)

    return (
      <div>
        <Parts part={props.part[0].name} exercises={props.part[0].exercises}/>
        <Parts part={props.part[1].name} exercises={props.part[1].exercises}/>
        <Parts part={props.part[2].name} exercises={props.part[2].exercises}/>
      </div>
    )
  }

