export default function Search({ setSearch, search }) {
  return (
    <>
      <p>Find Countries</p>
      <input
        type="text"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
    </>
  );
}
