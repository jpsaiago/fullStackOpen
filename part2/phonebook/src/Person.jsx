export default function Person({ value, index }) {
  return (
    <p key={index}>
      Name: {value.name}, Number: {value.number}
    </p>
  );
}
