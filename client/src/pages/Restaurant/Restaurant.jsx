import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import Comment from '../../components/Comment'
import {  Paper } from "@material-ui/core";
import Stack from '@mui/material/Stack';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

export default function Restaurant() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [res, setRes] = useState(null);
  const goBack = () => navigate(-1);
  const [feedbackValue, setFeedbackValue] = useState('')
  const [rating, setRating] = useState(0);
  useEffect(() => {
    fetch(`http://localhost:9000/restaurants/${id}`).then( res => res.json()).then( data => setRes(data))
  }, [id]);
  const calculateRate = (ratingsArray) => {
    console.log(ratingsArray)
    const val =  ratingsArray.reduce( (rate, acc) => {
      console.log(typeof acc)
      acc += + rate
      return acc
    },0)/ratingsArray.length
    return val
  }
  const rateRestaurant = async (newValue) =>{
    fetch(`http://localhost:9000/restaurants/${id}`,{
                method:'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body:JSON.stringify({ratings:newValue})
            }).then( res => res.json()).then( data => {
              setRes(data)
            }).catch(err => console.log(err))
  }
const submitFeedback = async()=>{
  const updateDate = new Date()
  fetch(`http://localhost:9000/restaurants/${id}`,{
                method:'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body:JSON.stringify({feedback:{text:feedbackValue, updated:updateDate}})
            }).then( res => res.json()).then( data => {
              setRes(data)
              setFeedbackValue('')
            }).catch(err => console.log(err))
}
  return (
    <div>
      {res && (
        <>
        <button onClick={goBack}>Go Back</button>
          <h1>{res.name}</h1>
          <Rating
            name="Rating"
            value={calculateRate(res?.ratings)}
            readOnly
          />
          <p>{res.description}</p>
          <Paper style={{ padding: "40px 20px" }}>
            {res?.feedbacks.map( (comment, index) => <Comment key={index} comment={comment}/>)}
          </Paper>
          <Stack direction="column">
          <TextareaAutosize
          value={feedbackValue}
          onChange={(ev)=>setFeedbackValue(ev.target.value)}
            aria-label="minimum height"
            minRows={3}
            placeholder="Feedback"
            style={{ width: 200 }}
          />
          <Button style={{ width: 200 }} onClick={submitFeedback} variant="outlined">Add Feedback</Button>
          <Rating
            name="Rating"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
              rateRestaurant(newValue)
            }}
          />
          </Stack>

        </>
      )}
      
    </div>
  );
}
