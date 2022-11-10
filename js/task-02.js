const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//  добавим файл в js//
const foodListEl = document.querySelector('#ingredients');
// cоздадаим переменную foodIngredients с параметром ingredient и добавим в нее функцию со свойсвом map //
const foodIngredients = (ingredient) => {
  // которая вернет нам еще одну функцию , возвращаем через map массив
  return ingredient.map((item) => {
    // создаем переменную liItem которая отвечает за создание новых li в HTML
    const liItem = document.createElement('li');
    //  добавляем ей класс item
    liItem.classList.add('item');
    //  добавляем текст во внутрь новых лишек , это item - переменная которую мы создали в методе map
    liItem.textContent = item;
    //  возврат значения новых li 
    return liItem;
  })
}
//   в первую переменную foodListEl добавляем распыленный метод rest 
foodListEl.append(...foodIngredients(ingredients));
console.log(foodListEl);


