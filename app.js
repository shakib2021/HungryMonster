
const search = document.getElementById('search');


search.addEventListener('click', function () {
    const inputValue = document.getElementById('inputValue').value;
const foodContainer = document.getElementById('foods');

    foodContainer.innerHTML = '';
  
        foodValue(inputValue);
      
    
});

const displayDetails = foodsName => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodsName}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            FoodInfo(data.meals[0]);
            console.log(data.meals[0]);
        });
};

const FoodInfo = meal => {
    const allfoodDiv = document.getElementById('allfood');

    allfoodDiv.innerHTML = `
    <img class="img-fluid rounded mb-4" src="${meal.strMealThumb}" alt="pic">
    <h4>${meal.strMeal}</h4>
    
    <h5 class="pt-3 pb-2"><i></i> Ingredients</h5>
    <ul class="list-unstyled mb-0">
        <li><i ></i>${meal.strMeasure1},
         ${meal.strIngredient1}</li>
        <li><i ></i>${meal.strMeasure2}, 
        ${meal.strIngredient2}</li>
        <li><i ></i>${meal.strMeasure3},
         ${meal.strIngredient3}</li>
        <li><i ></i>${meal.strMeasure4},
         ${meal.strIngredient4}</li>
    </ul>`;
};

function  foodValue(mealIdNum) {
    
    const mealId = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealIdNum}`;

    fetch(mealId)
        .then(response => response.json())
        .then(data => {
            FoodShow(data.meals);
        });

    const FoodShow = allfood => {
        const foodContain = document.getElementById('foods');
       
            allfood.map(food => {
                const foodSec = document.createElement('div');
                foodSec.className = 'col-md-3';
                const fooddetails = `
                        <div onclick="displayDetails('${food.idMeal}')" class="border rounded text-center h-100" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <img class="img-fluid rounded-top" src="${food.strMealThumb}" alt="">
                        <h4 class="h5 py-4 px-2 mb-0">${food.strMeal}</h4>
                        </div>
                    `;
                foodSec.innerHTML = fooddetails;
                foodContain.appendChild(foodSec);
            });
        };
}