import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Input } from '@mui/material';

function RecipeForm() {
  const [recipeImage, setRecipeImage] = useState(null);
  const [recipeName, setRecipeName] = useState('');
  const [recipeDescription, setRecipeDescription] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setRecipeImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!recipeImage || !recipeName || !recipeDescription) {
      // You can add validation here if necessary
      return;
    }

    const formData = new FormData();
    formData.append('recipeImage', recipeImage);
    formData.append('recipeName', recipeName);
    formData.append('recipeDescription', recipeDescription);

    // You can now submit the formData to your backend or perform other actions.
    console.log('Form Data:', formData);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} style={styles.form}>
        <Grid container spacing={2}>
          <Grid sx={{ml:'15px'}}>
            <label htmlFor="recipe-image" style={styles.fileInputLabel}>
              <Input sx={{maxWidth:'100x'}}
                id="recipe-image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Recipe Name"
              variant="outlined"
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Recipe Description"
              variant="outlined"
              multiline
              rows={4}
              value={recipeDescription}
              onChange={(e) => setRecipeDescription(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" style={styles.submitButton}>
          Submit
        </Button>
      </form>
    </Container>
  );
}

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  },
  fileInputLabel: {
    display: 'block',
    fontSize: '16px',
    marginBottom: '10px',
    color: '#333',
  },
  submitButton: {
    marginTop: '20px',
    backgroundColor: '#4CAF50', // Change the button color
    color: 'white', // Change the text color
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default RecipeForm;
