import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';

export default function Restaurant() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [res, setRes] = useState(null);
  const goBack = () => navigate(-1);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
      res.json().then((data) => setRes(data))
    );
  }, [id]);

  return (
    <div>
      {res && (
        <>
          <h1>{res.title}</h1>
          <p>{res.body}</p>
        </>
      )}
      <button onClick={goBack}>Go Back</button>
    </div>
  );
}
