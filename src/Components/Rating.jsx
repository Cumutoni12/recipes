import React, { useState } from "react";

function Rating() {
  const [rating, setRating] = useState("Please select a Rating");
  const handleRating = (e) => setRating(e.target.value);
  return (
    <div>
      <p> {rating || "Please select a Rating"}</p>
      <select value={rating} onChange={handleRating}>
        <option> Please select a Rating</option>
        <option value="👍👍"> Fatantistic</option>
        <option value="🙌🙌"> Excellent </option>
        <option value="👌👌"> Nice</option>
      </select>
    </div>
  );
}

export default Rating;
