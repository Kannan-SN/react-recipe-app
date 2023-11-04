
import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"
import { useState } from "react";

export default function Recipes() {
    const initialRecipes = [
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_1.jpg",
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/img/gallery/img_4.jpg",
        },
        {
            title: "American Cheese Burger",
            image: "/img/gallery/img_5.jpg",
           
        },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img_6.jpg",
            
        },
        {
            title: "Japanese Sushi",
            image: "/img/gallery/img_10.jpg",
           
        },
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_1.jpg",
            
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/img/gallery/img_4.jpg",
           
        },
        {
            title: "American Cheese Burger",
            image: "/img/gallery/img_5.jpg",
           
        },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img_6.jpg",
            
        },
        {
            title: "Japanese Sushi",
            image: "/img/gallery/img_10.jpg",
        },
        {
            title: "American Cheese Burger",
            image: "/img/gallery/img_5.jpg",
            
        },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img_6.jpg",
    
        }
    ].sort(() => Math.random() - 0.5);

    const [recipes, setRecipes] = useState(initialRecipes);
    const [searchInput, setSearchInput] = useState('');
  
    const handleSearchChange = (event) => {
      const newSearchInput = event.target.value;
      setSearchInput(newSearchInput);
  
      // Filter recipes based on the new search input
      const filteredRecipes = initialRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(newSearchInput.toLowerCase())
      );
      setRecipes(filteredRecipes);
    };
  
    return (
      <div>
        <PreviousSearches
          searchInput={searchInput}
          onSearchChange={handleSearchChange}
        />
        <div className="recipes-container">
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
        </div>
      </div>
    );
  }
  