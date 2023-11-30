//Makes Featured Recipe Button A Link to Recipe
let featuredRecipeBtn = document.getElementById("featured-recipe-btn");
featuredRecipeBtn.addEventListener("click", function() {
    window.location.href = "recipe_id/1/creamy_key_lime_pie.html";
});

//Creates database and populates it with some recipes
document.addEventListener("DOMContentLoaded", function () {

});

//Get recipes table data and input on front-end
async function getRecipes() {
    //error handling in case fetch doesnt go thru
    try {
        //fetch request and handling?
        let response = await fetch('get_recipes.php'); //response variabe for a fetch request, which is fetched from get_recipes.php
        let json = await response.json(); //parse response as a json file, which it is

        let recipeListClass = document.getElementsByClassName("recipe-list"); //recipe list class container

        json.forEach(recipe => {
            let recipeCard = document.createElement("div"); //create recipeCard div
            recipeCard.className = "recipe"; //assign class recipe (has styling that makes it a card)
            recipeCard.innerHTML = `
                <div class="recipe">
                    <a href="recipe_id/${recipe.recipe_id}/${encodeURIComponent(recipe.recipe_title)}.html">
                        <div class="recipe-img" style="background-image: url(${recipe.recipe_img});"></div>
                        <div class="recipe-text">
                            <h2 class="title">${recipe.recipe_title}</h2>
                            <p class="description">${recipe.recipe_description}</p>
                        </div>
                    </a>
                </div>
            `;
        });
        recipeListClass.appendChild(recipeCard);
    }
    catch(error) {
        console.log("Couldn't get recipes");
    }
}

document.addEventListener("DOMContentLoaded",getRecipes);