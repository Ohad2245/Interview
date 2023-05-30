import { useEffect, useState } from 'react';
import './rating.css';
import { CryptoState } from '../../CryptoContext';
import { db } from '../../firebase';
import {collection, addDoc} from "firebase/firestore";



const Rating = ({ questionId }) => {


  const [hover, setHover] = useState(null);
  const [rating, setRating] = useState(0);
  const [avgRating, setAvgRating] = useState(0.0);
  const [userRatings, setUserRatings] = useState({});
  const [selectedRating, setSelectedRating] = useState(
    localStorage.getItem(`rating-${questionId}`) || 0
  );
  const [ratings, setRatings] = useState(
    JSON.parse(localStorage.getItem("ratings")) || []
  );
  const { setAlert, user } = CryptoState();

  useEffect(() => {
    const getUserRatings = async () => {
      const querySnapshot = await db
        .collection("likes")
        .where("user", "==", user.email)
        .get();
      const ratings = {};
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        ratings[data.questionId] = data.rating;
      });
      setUserRatings(ratings);
    };

    const getAvgRatings = async () => {
      const querySnapshot = await db.collection("likes").get();
      const ratings = {};
      const counts = {};
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.questionId in ratings) {
          ratings[data.questionId] += data.rating;
          counts[data.questionId] += 1;
        } else {
          ratings[data.questionId] = data.rating;
          counts[data.questionId] = 1;
        }
      });
      const avgRatings = {};
      Object.keys(ratings).forEach((questionId) => {
        avgRatings[questionId] = ratings[questionId] / counts[questionId];
      });
      setAvgRating(avgRatings[questionId] || 0.0);
    };

    getUserRatings();
    getAvgRatings();
  }, [questionId, user.email]);

  useEffect(() => {
    const storedRating = localStorage.getItem(`rating-${questionId}`);
    if (storedRating) {
      setRating(storedRating);
    } else {
      setRating(userRatings[questionId] || 0);
    }
  }, [questionId, userRatings]);


  const handleRating = async (ratingValue) => {
    const likesObj = {
      rating: ratingValue,
      user: user.email,
      questionId: questionId,
    };
    try {
      await addDoc(collection(db, "likes"), likesObj);
      setAlert({
        open: true,
        message: `The Rating has been sent.`,
        type: "success",
      });
      localStorage.setItem(`rating-${questionId}`, ratingValue);
      setRating(ratingValue);
      setSelectedRating(ratingValue === selectedRating ? 0 : ratingValue);

    } catch (error) {
      console.error("Error adding question: ", error);
    }
  };
  
  return (
    <div>
      <div className="flex justify-center items-center mt-5">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i}>
              <input
                type="radio"
                name={`rating-${rating}`}
                value={ratingValue}
                onClick={() => handleRating(ratingValue)}
              />
              <span
                className="star"
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color:
                    ratingValue <= (hover || selectedRating) ? "#ffc107" : "#bababa",
                }}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              >
                {ratingValue}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
      }
export default Rating;
