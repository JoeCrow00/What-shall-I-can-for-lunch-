// Random generator
function genRandom (num) {
    return Math.floor(Math.random() * num);
}

// An object of arrays
const foodArrays = {
    mainProtein: ['chicken breast', 'ham', 'tuna', 'baked beans', 'egg', 'smoked salmon', 'veggie sausage'],
    extraElement: ['mushrooms', 'avocado', 'egg', 'tomatoes', 'chedder cheese', 'spinach'],
    carb: ['on toast', 'sandwich', 'rice bowl', 'baked potato', 'salad', 'pasta pot'],
    extraFlavour: ['light mayo', 'HP sauce', 'hot sauce', 'greek yogurt', 'cream cheese', 'crumbled feta', 'parmesan']
}
// Array to store the generated food options in
let yourMeal = []

// Seperate arrays 
/*const mainProtein = ['Chicken breast', 'Ham', 'Tuna', 'Baked Beans', 'Egg', 'Smoked Salmon', 'Veggie Sausage'];
const extraElement = ['mushrooms', 'avocado', 'egg', 'tomatoes', 'chedder cheese', 'spinach'];
const carb =  ['on toast', 'sandwich', 'rice bowl', 'baked potato', 'salad', 'pasta pot'];
const extraFlavour =  ['light mayo', 'HP sauce', 'hot sauce', 'greek yogurt', 'cream cheese', 'crumbled feta', 'parmesan'];
*/

// For in loop - randomising foodIndex - switch
for (let food in foodArrays) {
    let  foodIndex = genRandom(foodArrays[food].length)
    switch (food) {
        case 'mainProtein':
            yourMeal.push(`Your lunch should be ${foodArrays[food][foodIndex]}`)
            break
        case 'extraElement':
            yourMeal.push(`and ${foodArrays[food][foodIndex]}`)
            break
        case 'carb':
            yourMeal.push(`${foodArrays[food][foodIndex]}`)
            break
        case 'extraFlavour':
            yourMeal.push(`with ${foodArrays[food][foodIndex]}`)
            break
        default:
            yourMeal.push('Need more data')
    }
}

function formatFood(meal) {

    const formattedMeal = yourMeal.join(' ')
    console.log(formattedMeal)
    console.log(
        'YUMMY! :)'
    )
}

formatFood(yourMeal);

