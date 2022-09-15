export default function Search({ search, setSearch }) {
  return (
    <h4>
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
    </h4>
  );
}
