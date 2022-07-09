import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function AllRestaurants() {
  const [allRes, setAllRes] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
      res.json().then((data) => setAllRes(data))
    );
  }, []);
  console.log(allRes);
  return (
    <div>
      <h1>All Restaurants</h1>
      {allRes.map((item) => {
        return (
          <Link key={item.id} to={`/all/${item.id}`}>
            <li>{item.title}</li>
          </Link>
        );
      })}
    </div>
  );
}
