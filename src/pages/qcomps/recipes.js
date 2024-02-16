export const recipes = [
    {
        id: "greek-salad",
        name: "Greek Salad",
        ingredients: new Set([
            "tomatoes",
            "cucumber",
            "onion",
            "olives",
            "feta",
        ]),
    },
    {
        id: "hawaiian-pizza",
        name: "Hawaiian Pizza",
        ingredients: new Set([
            "pizza crust",
            "pizza sauce",
            "mozzarella",
            "ham",
            "pineapple",
        ]),
    },
    {
        id: "hummus",
        name: "Hummus",
        ingredients: new Set([
            "chickpeas",
            "olive oil",
            "garlic cloves",
            "lemon",
            "tahini",
        ]),
    },
];

const RecipeItem = ({ recipe }) => {
    let ingredients = Array.from(recipe.ingredients) || [];
    return (
        <div>
            <h1>{recipe.name}</h1>
            <ul>
                {ingredients.map((ingredient) => (
                    <li>{ingredient}</li>
                ))}
            </ul>
        </div>
    );
};

export default function RecipeList() {
    return (
        <div>
            <h1>Recipes</h1>
            {recipes.map((recipe) => (
                <RecipeItem recipe={recipe} />
            ))}
        </div>
    );
}
