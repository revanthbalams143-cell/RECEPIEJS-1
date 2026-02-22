// Recipe data - Foundation for all 4 parts
const recipes = [
  {
    id: 1,
    title: "Classic Spaghetti Carbonara",
    time: 25,
    difficulty: "easy",
    description: "A creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
    category: "pasta"
  },
  {
    id: 2,
    title: "Chicken Tikka Masala",
    time: 45,
    difficulty: "medium",
    description: "Tender chicken pieces in a creamy, spiced tomato sauce.",
    category: "curry"
  },
  {
    id: 3,
    title: "Homemade Croissants",
    time: 180,
    difficulty: "hard",
    description: "Buttery, flaky French pastries that require patience but deliver amazing results.",
    category: "baking"
  },
  {
    id: 4,
    title: "Greek Salad",
    time: 15,
    difficulty: "easy",
    description: "Fresh vegetables, feta cheese, and olives tossed in olive oil and herbs.",
    category: "salad"
  },
  {
    id: 5,
    title: "Beef Wellington",
    time: 120,
    difficulty: "hard",
    description: "Tender beef fillet coated with mushroom duxelles and wrapped in puff pastry.",
    category: "meat"
  },
  {
    id: 6,
    title: "Vegetable Stir Fry",
    time: 20,
    difficulty: "easy",
    description: "Colorful mixed vegetables cooked quickly in a savory sauce.",
    category: "vegetarian"
  },
  {
    id: 7,
    title: "Pad Thai",
    time: 30,
    difficulty: "medium",
    description: "Thai stir-fried rice noodles with shrimp, peanuts, and tangy tamarind sauce.",
    category: "noodles"
  },
  {
    id: 8,
    title: "Margherita Pizza",
    time: 60,
    difficulty: "medium",
    description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil.",
    category: "pizza"
  }
];

// DOM Selection - Get the container where recipes will be displayed
const recipeContainer = document.querySelector('#recipe-container');
const filterButtons = document.querySelectorAll('.filter-btn');
const sortButtons = document.querySelectorAll('.sort-btn');

// State management
let currentFilter = 'all';
let currentSort = 'none';

// Function to create HTML for a single recipe card
const createRecipeCard = (recipe) => {
  return `
        <div class="recipe-card" data-id="${recipe.id}">
            <h3>${recipe.title}</h3>
            <div class="recipe-meta">
                <span>⏱️ ${recipe.time} min</span>
                <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
            </div>
            <p>${recipe.description}</p>
        </div>
    `;
};

// Function to render recipes to the DOM
const renderRecipes = (recipesToRender) => {
    const recipeCardsHTML = recipesToRender
        .map(createRecipeCard)
        .join('');

    recipeContainer.innerHTML = recipeCardsHTML;
};

// Pure filter functions
const filterByDifficulty = (recipesToFilter, difficulty) => {
  return recipesToFilter.filter(recipe => recipe.difficulty === difficulty);
};

const filterByTime = (recipesToFilter, maxTime) => {
  return recipesToFilter.filter(recipe => recipe.time <= maxTime);
};

const applyFilter = (recipesToFilter, filterType) => {
  switch (filterType) {
    case 'easy':
      return filterByDifficulty(recipesToFilter, 'easy');
    case 'medium':
      return filterByDifficulty(recipesToFilter, 'medium');
    case 'hard':
      return filterByDifficulty(recipesToFilter, 'hard');
    case 'quick':
      return filterByTime(recipesToFilter, 30);
    case 'all':
    default:
      return recipesToFilter;
  }
};

// Pure sort functions
const sortByName = (recipesToSort) => {
  return [...recipesToSort].sort((a, b) => a.title.localeCompare(b.title));
};

const sortByTime = (recipesToSort) => {
  return [...recipesToSort].sort((a, b) => a.time - b.time);
};

const applySort = (recipesToSort, sortType) => {
  switch (sortType) {
    case 'name':
      return sortByName(recipesToSort);
    case 'time':
      return sortByTime(recipesToSort);
    case 'none':
    default:
      return recipesToSort;
  }
};

const applyTransformations = (recipeList, transformations) => {
  return transformations.reduce((acc, transform) => transform(acc), recipeList);
};

// Main update function
const updateDisplay = () => {
  const recipesToDisplay = applyTransformations(recipes, [
    (list) => applyFilter(list, currentFilter),
    (list) => applySort(list, currentSort)
  ]);

  renderRecipes(recipesToDisplay);
  console.log(`Displaying ${recipesToDisplay.length} recipes (Filter: ${currentFilter}, Sort: ${currentSort})`);
};

// UI helper
const updateActiveButtons = () => {
  filterButtons.forEach(btn => {
    const filterType = btn.dataset.filter;
    if (filterType === currentFilter) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  sortButtons.forEach(btn => {
    const sortType = btn.dataset.sort;
    if (sortType === currentSort) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
};

// Event handlers
const handleFilterClick = (event) => {
  const filterType = event.target.dataset.filter;
  currentFilter = filterType;
  updateActiveButtons();
  updateDisplay();
};

const handleSortClick = (event) => {
  const sortType = event.target.dataset.sort;
  currentSort = sortType;
  updateActiveButtons();
  updateDisplay();
};

// Event listeners
const setupEventListeners = () => {
  filterButtons.forEach(btn => {
    btn.addEventListener('click', handleFilterClick);
  });

  sortButtons.forEach(btn => {
    btn.addEventListener('click', handleSortClick);
  });
};

// Initialize
setupEventListeners();
updateActiveButtons();
updateDisplay();