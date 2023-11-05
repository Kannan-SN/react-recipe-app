import React, { useState } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';

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
        <Tooltip title="Like">
            <ThumbUpIcon
              style={{ marginTop: '10px', color: likeButtonColor }}
              onClick={handleLikeClick}
            />
          </Tooltip>
          <Tooltip title="Delete">
            <DeleteIcon
              style={{ marginTop: '10px', cursor: 'pointer' }}
              onClick={() => handleDeleteClick(recipe._id)}
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
