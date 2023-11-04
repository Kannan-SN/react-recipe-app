import React, { useState } from 'react';
import CustomImage from './CustomImage';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteIcon from '@mui/icons-material/Delete';

export default function RecipeCard({ recipe }) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    // Toggle the like status and increment/decrement the number of likes
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const likeButtonColor = isLiked ? 'orange' : 'initial';

  return (
    <div className="recipe-card">
      <CustomImage imgSrc={recipe.image} pt="65%" />
      <div className="recipe-card-info">
        <p className="recipe-title">{recipe.title}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <FavoriteBorderIcon
            style={{ marginTop: '10px', color: likeButtonColor }}
            onClick={handleLikeClick}
          />
          <DeleteIcon style={{ marginTop: '10px' }} />
        </div>
      </div>
    </div>
  );
}
