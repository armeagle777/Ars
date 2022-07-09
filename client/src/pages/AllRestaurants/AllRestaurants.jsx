import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function AllRestaurants() {
  const [allRes, setAllRes] = useState([]);


  
  useEffect(() => {
    fetch('http://localhost:9000/restaurants').then( res => res.json()).then( data => setAllRes(data.data))

  }, []);
  console.log(allRes);
  return (
    <div>
      <h1>All Restaurants</h1>
      {allRes.map((item) => {
        return (
          <Link key={item._id} to={`/all/${item._id}`}>
            <li>{item.name}</li>
          </Link>
        );
      })}
    </div>
  );
}
