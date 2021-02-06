

const searchBtn = () => {
    const foodName = document.getElementById('foodName').value;
    searchByCategory(foodName);
}

const searchByCategory = foodName => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
    fetch(url)
        .then(response => response.json())
    .then(data => displayFood(data.meals))
}

const displayFood = foods => {
    let foodInfo = '';
    let allFoods = document.getElementById('allMeal');
    if (foods === null) {
        document.getElementById('showFood').innerHTML = '';
        foodInfo = `<h1>No match found</h1>`;
        allFoods.innerHTML = foodInfo;
        
        
    }
    else {
        allFoods.innerHTML = '';
        document.getElementById('showFood').innerHTML = '';
            foods.forEach(food => {
            
        
            let foodDiv = document.createElement('div');
            foodDiv.classList.add('col');
    
            
            foodInfo = `
            <a href="#" onclick="displayFoodDetail('${food.idMeal}')">
            <div class="card h-100 p-5 shadow">
                
                <img src="${food.strMealThumb}" alt="" class="img-fluid w-50">
                <h3 class="card-title">${food.strMeal}</h3>
                </div>
                </a>
            `;
    
                foodDiv.innerHTML = foodInfo;
            allFoods.appendChild(foodDiv);
        });
    }
    
    
    
}

const displayFoodDetail = foodId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`
    fetch(url)
        .then(response => response.json())
    .then(data => showFood(data.meals[0]))
}

const showFood = food => {
    console.log(food)
    const showFood = document.getElementById('showFood');
    let foodDiv = document.createElement('div');
    foodDiv.classList.add('card','p-5');
    let foodInfo = `
                
                <img src="${food.strMealThumb}" alt="" class="img-fluid w-50">
                <h3>${food.strMeal}</h3>
                <h4>Ingredients:</h4>
                <ul>
                    <li>${food.strIngredient1}</li>
                    <li>${food.strIngredient2}</li>
                    <li>${food.strIngredient3}</li>
                    <li>${food.strIngredient4}</li>
                    <li>${food.strIngredient5}</li>
                    <li>${food.strIngredient6}</li>
                </ul>
            `;
            foodDiv.innerHTML = foodInfo;
            showFood.appendChild(foodDiv);
}
