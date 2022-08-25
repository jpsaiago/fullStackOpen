export default function Search({ search, setSearch }) {
  return (
    <p>
      {" "}
      Search:{" "}
      <input
        type="text"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        name="name"
      />
    </p>
  );
}
