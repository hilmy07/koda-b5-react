import React from "react";
import useFetch from "../hooks/useFetch";

function Name() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div>
        <h1>User List</h1>
        {data && data.map((u) => <p key={u.id}>{u.name}</p>)}
      </div>
    </>
  );
}

export default Name;
