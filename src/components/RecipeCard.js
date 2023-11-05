import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteIcon from '@mui/icons-material/Delete';

export default function RecipeCard({ recipe, onDelete }) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleDeleteClick = () => {
    // Call the onDelete function and pass the recipe's ID for deletion
    onDelete(recipe._id);
  };

  const likeButtonColor = isLiked ? 'orange' : 'initial';

  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.recipe} />
      <div className="recipe-card-info">
        <p className="recipe-title">{recipe.recipe}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <FavoriteBorderIcon
            style={{ marginTop: '10px', color: likeButtonColor }}
            onClick={handleLikeClick}
          />
          <DeleteIcon style={{ marginTop: '10px', cursor: 'pointer' }} onClick={handleDeleteClick} />
        </div>
      </div>
    </div>
  );
}
