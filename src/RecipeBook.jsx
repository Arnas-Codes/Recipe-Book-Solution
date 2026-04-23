
import omeletteImg from "./assets/image-omelette.jpeg";

const RecipeBook = () => {
  return (
    <div className="max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-2xl mx-auto flex flex-col items-center justify-center p-6 min-h-screen rounded-2xl gap-10 bg-white font-outfit">
      <div>
        <img className="rounded-xl w-full" src={omeletteImg} alt="Omelette" />
        <h1 className="font-young my-6 text-4xl font-bold">
          Simple Omelette Recipe
        </h1>
        <p className="text-stone-600">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
      </div>

      <div className="w-full bg-rose-50 p-5 rounded-xl">
        <h3 className="text-rose-800 text-lg font-bold font-young mb-2">
          Preparation time
        </h3>
        <ul className="list-disc ml-5 text-stone-700">
          <li>
            <strong>Total:</strong> Approximately 10 minutes
          </li>
          <li>
            <strong>Preparation:</strong> 5 minutes
          </li>
          <li>
            <strong>Cooking:</strong> 5 minutes
          </li>
        </ul>
      </div>

      <div className="w-full">
        <h2 className="text-Brown-800 font-bold font-young text-2xl mb-3">
          Ingredients
        </h2>
        <ul className="list-disc ml-5 text-stone-700">
          <li>2–3 large eggs</li>
          <li>Salt to taste</li>
          <li>Pepper to taste</li>
          <li>1 tablespoon of butter or oil</li>
          <li>Optional fillings: cheese, vegetables, meats, herbs</li>
        </ul>
      </div>

      <div className="w-full">
        <h2 className="text-Brown-800 font-young font-bold text-2xl mb-3">
          Instructions
        </h2>
        <ol className="list-decimal ml-5 text-stone-700 space-y-2">
          <li>
            Beat the eggs with salt and pepper. Add water or milk if needed.
          </li>
          <li>Heat a non-stick pan and add butter or oil.</li>
          <li>Pour eggs and spread evenly.</li>
          <li>Add fillings when slightly runny in the middle.</li>
          <li>Fold and cook for another minute.</li>
          <li>Serve hot.</li>
        </ol>
      </div>

      <div className="w-full">
        <h2 className="text-brown-800 font-bold font-young text-2xl mb-3">
          Nutrition
        </h2>

        <p className="text-stone-600 mb-3">
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>

        <div className="divide-y divide-gray-200 max-w-md mx-auto">
          <div className="grid grid-cols-3 items-center py-2 text-stone-600">
            <span>Calories</span>
            <span className="text-center font-semibold text-Brown-800">
              277kcal
            </span>
            <span></span>
          </div>

          <div className="grid grid-cols-3 items-center py-2 text-stone-600">
            <span>Carbs</span>
            <span className="text-center font-semibold text-Brown-800">0g</span>
            <span></span>
          </div>

          <div className="grid grid-cols-3 items-center py-2 text-stone-600">
            <span>Protein</span>
            <span className="text-center font-semibold text-Brown-800">
              20g
            </span>
            <span></span>
          </div>

          <div className="grid grid-cols-3 items-center py-2 text-stone-600">
            <span>Fat</span>
            <span className="text-center font-semibold text-Brown-800">
              22g
            </span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeBook;
