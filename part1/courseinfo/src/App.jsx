function Header({ course }) {
  return <h1>{course.name}</h1>;
}

function Part({ name, exercise }) {
  return (
    <p>
      {name} {exercise}
    </p>
  );
}

function Content({ course }) {
  return (
    <>
      <Part
        key={1}
        name={course.parts[0].name}
        exercise={course.parts[0].exercises}
      ></Part>
      <Part
        key={2}
        name={course.parts[1].name}
        exercise={course.parts[1].exercises}
      ></Part>
      <Part
        key={3}
        name={course.parts[2].name}
        exercise={course.parts[2].exercises}
      ></Part>
    </>
  );
}

const Total = ({ course }) => {
  return (
    <p>
      Number of exercises
      {course.parts[0].exercises +
        course.parts[1].exercises +
        course.parts[2].exercises}
    </p>
  );
};

export default function App() {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  );
}
