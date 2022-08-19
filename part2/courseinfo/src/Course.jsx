const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Part = ({ name, exercise }) => {
  return (
    <p>
      {name} {exercise}
    </p>
  );
};

const Content = ({ course }) => {
  return (
    <>
      {course.parts.map((value) => (
        <Part
          key={`${course.id}-${value.id}`}
          name={value.name}
          exercise={value.exercises}
        />
      ))}
    </>
  );
};

const Total = ({ course }) => {
  const total = course.parts.reduce((acc, curr) => acc + curr.exercises, 0);
  return <p>{`Number of exercises: ${total}`}</p>;
};

const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  );
};

export default Course;
