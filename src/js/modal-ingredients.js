const refs = {
  openModalBtnIcecream: document.querySelector('[data-open-modal-ice-cream]'),
  openModalBtnIcecoffee: document.querySelector('[data-open-modal-ice-coffee]'),
  openModalBtnMilkshakes: document.querySelector(
    '[data-open-modal-milkshakes]'
  ),
  closeModalBtn: document.querySelector('[data-close-modal-ingredients]'),
  backdrop: document.querySelector('[data-backdrop-ingredients]'),
};

refs.openModalBtnIcecream.addEventListener('click', toggleModal);
refs.openModalBtnIcecoffee.addEventListener('click', toggleModal);
refs.openModalBtnMilkshakes.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  document.body.classList.toggle('data-open-modal-ingridients');
  refs.backdrop.classList.toggle('is-hidden');
}

// Change content in each color card
// const content = {
//   icecream: {
//     modalTitle: 'Chocolate Icecream',
//     kcal: '320',
//     protein: '4g',
//     fats: '8,2g',
//     carbs: '40,4g',
//     ingredientOne: 'Milk',
//     ingredientOneWeight: '100ml',
//     ingredientTwo: 'Belgian chocolate',
//     ingredientTwoWeight: '20g',
//     ingredientThree: 'Cream',
//     ingredientThreeWeight: '150 ml',
//     ingredientFour: 'Cocoa powder',
//     ingredientFourWeight: '30g',
//     ingredientFive: 'Sugar',
//     ingredientFiveWeight: '40g',
//     ingredientSix: 'Vanilla sugar',
//     ingredientSixWeight: '10g',
//   },
//   coffee: {
//     modalTitle: 'Ice coffee',
//     kcal: '258',
//     protein: '2g',
//     fats: '6g',
//     carbs: '20,5g',
//     ingredientOne: 'Milk',
//     ingredientOneWeight: '200ml',
//     ingredientTwo: 'Brasilia coffee',
//     ingredientTwoWeight: '150ml',
//     ingredientThree: 'Chocolate syrup',
//     ingredientThreeWeight: '30 ml',
//     ingredientFour: 'Sugar',
//     ingredientFourWeight: '15g',
//   },
//   milkshake: {
//     modalTitle: 'Milkshake',
//     kcal: '300',
//     protein: '3,5g',
//     fats: '7,6g',
//     carbs: '45g',
//     ingredientOne: 'Milk',
//     ingredientOneWeight: '250ml',
//     ingredientTwo: 'Vanilla icecream',
//     ingredientTwoWeight: '100ml',
//     ingredientThree: 'Cream',
//     ingredientThreeWeight: '50 ml',
//     ingredientFour: 'Milk chocolate',
//     ingredientFourWeight: '10g',
//     ingredientFive: 'Marshmellow',
//     ingredientFiveWeight: '5g',
//   },
//   chooseContent() {
//     let;
//   },
// };

// Query selectors
// Don't know now but need to watch which class is  on the button product__btn too (one of them: icecream, coffee, milkshake) when I click on this button (and see one of them: data-open-modal-ice-cream, data-open-modal-coffee, data-open-modal-milkshake).
// let whichCard = document.querySelector('coffee');
// lang.addEventListener('click', data.changeLang);

// const modalTitle = document.querySelector('.modal__title');
// const kcal = document.querySelector('.kcal');
// const protein = document.querySelector('.protein');
// const fats = document.querySelector('.fats');
// const carbs = document.querySelector('.carbs');
// const ingredientOne = document.querySelector('.ingredient-one');
// const ingredientOneWeight = document.querySelector('.ingredient-one-weight');
// const ingredientTwo = document.querySelector('.ingredient-two');
// const ingredientTwoWeight = document.querySelector('.ingredient-two-weight');
// const ingredientThree = document.querySelector('.ingredient-three');
// const ingredientThreeWeight = document.querySelector(
//   '.ingredient-three-weight'
// );
// const ingredientFour = document.querySelector('.ingredient-four');
// const ingredientFourWeight = document.querySelector('.ingredient-four-weight');
// const ingredientFive = document.querySelector('.ingredient-five');
// const ingredientFiveWeight = document.querySelector('.ingredient-five-weight');
// const ingredientSix = document.querySelector('.ingredient-six');
// const ingredientSixWeight = document.querySelector('.ingredient-six-weight');
