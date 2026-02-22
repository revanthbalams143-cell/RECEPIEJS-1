const RecipeApp = (() => {
  'use strict';

  // ============================================
  // PRIVATE: DATA
  // ============================================
  const recipes = [
    {
      id: 1,
      title: 'Classic Spaghetti Carbonara',
      time: 25,
      difficulty: 'easy',
      description: 'A creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.',
      category: 'pasta',
      ingredients: [
        '400g spaghetti',
        '200g pancetta or guanciale',
        '4 large eggs',
        '100g Pecorino Romano cheese',
        'Black pepper',
        'Salt'
      ],
      steps: [
        'Bring a large pot of salted water to boil',
        'Cook spaghetti according to package directions',
        {
          text: 'Prepare the sauce',
          substeps: [
            'Beat eggs in a bowl',
            'Grate cheese and add to eggs',
            'Add generous black pepper',
            'Mix well'
          ]
        },
        'Cook pancetta in a large pan until crispy',
        'Drain pasta, reserve 1 cup pasta water',
        'Add hot pasta to pancetta pan (off heat)',
        'Quickly mix in egg mixture, adding pasta water to create creamy sauce',
        'Serve immediately with extra cheese'
      ]
    },
    {
      id: 2,
      title: 'Chicken Tikka Masala',
      time: 45,
      difficulty: 'medium',
      description: 'Tender chicken pieces in a creamy, spiced tomato sauce.',
      category: 'curry',
      ingredients: [
        '500g chicken breast',
        '1 cup yogurt',
        '2 tbsp tikka masala spice mix',
        '1 onion, chopped',
        '2 garlic cloves, minced',
        '400g tomato puree',
        '1/2 cup cream',
        'Salt and oil'
      ],
      steps: [
        'Marinate chicken with yogurt and half the spice mix for 20 minutes',
        'Heat oil in a pan and sauté onion until golden',
        'Add garlic and remaining spices, cook for 1 minute',
        'Add chicken and cook until lightly browned',
        'Pour in tomato puree and simmer for 15 minutes',
        'Stir in cream and cook for 5 more minutes',
        'Adjust salt and serve hot with rice or naan'
      ]
    },
    {
      id: 3,
      title: 'Homemade Croissants',
      time: 180,
      difficulty: 'hard',
      description: 'Buttery, flaky French pastries that require patience but deliver amazing results.',
      category: 'baking',
      ingredients: [
        '500g all-purpose flour',
        '10g instant yeast',
        '60g sugar',
        '10g salt',
        '300ml milk',
        '250g cold butter',
        '1 egg for wash'
      ],
      steps: [
        'Mix flour, yeast, sugar, salt, and milk into a soft dough',
        'Knead until smooth and chill for 30 minutes',
        'Roll dough and encase cold butter in the center',
        'Perform three fold-and-chill turns',
        'Roll dough into a large rectangle and cut triangles',
        'Shape each triangle into a croissant',
        'Proof croissants until doubled',
        'Brush with egg wash and bake at 200°C until golden'
      ]
    },
    {
      id: 4,
      title: 'Greek Salad',
      time: 15,
      difficulty: 'easy',
      description: 'Fresh vegetables, feta cheese, and olives tossed in olive oil and herbs.',
      category: 'salad',
      ingredients: [
        '2 cucumbers',
        '3 tomatoes',
        '1 red onion',
        '150g feta cheese',
        '1/2 cup olives',
        '2 tbsp olive oil',
        '1 tbsp lemon juice',
        'Oregano and salt'
      ],
      steps: [
        'Chop cucumbers, tomatoes, and onion into bite-size pieces',
        'Add vegetables to a large mixing bowl',
        'Whisk olive oil, lemon juice, oregano, and salt',
        'Pour dressing over the vegetables',
        'Add olives and gently toss',
        'Top with crumbled feta and serve fresh'
      ]
    },
    {
      id: 5,
      title: 'Beef Wellington',
      time: 120,
      difficulty: 'hard',
      description: 'Tender beef fillet coated with mushroom duxelles and wrapped in puff pastry.',
      category: 'meat',
      ingredients: [
        '700g beef tenderloin',
        '400g mushrooms',
        '6 slices prosciutto',
        '1 sheet puff pastry',
        '2 tbsp Dijon mustard',
        '1 egg yolk',
        'Salt and pepper'
      ],
      steps: [
        'Season and sear beef fillet in a hot pan, then cool',
        {
          text: 'Prepare mushroom duxelles',
          substeps: [
            'Finely chop mushrooms',
            'Cook with salt until moisture evaporates',
            {
              text: 'Finish duxelles',
              substeps: [
                'Add black pepper',
                'Cool completely before assembly'
              ]
            }
          ]
        },
        'Brush beef with Dijon mustard',
        'Lay out prosciutto, spread duxelles, and wrap beef tightly',
        'Roll wrapped beef in puff pastry and seal edges',
        'Brush pastry with egg yolk and score lightly',
        'Chill for 15 minutes',
        'Bake at 200°C until pastry is golden and beef reaches desired doneness',
        'Rest for 10 minutes before slicing'
      ]
    },
    {
      id: 6,
      title: 'Vegetable Stir Fry',
      time: 20,
      difficulty: 'easy',
      description: 'Colorful mixed vegetables cooked quickly in a savory sauce.',
      category: 'vegetarian',
      ingredients: [
        '1 bell pepper',
        '1 carrot',
        '1 cup broccoli florets',
        '1 cup snap peas',
        '2 tbsp soy sauce',
        '1 tbsp sesame oil',
        '2 garlic cloves',
        '1 tsp cornflour'
      ],
      steps: [
        'Slice all vegetables evenly',
        'Whisk soy sauce, cornflour, and 2 tbsp water',
        'Heat sesame oil in a wok',
        'Add garlic and stir for 20 seconds',
        'Add firm vegetables first and stir-fry for 2 minutes',
        'Add remaining vegetables and cook for 3 minutes',
        'Pour sauce and toss until glossy',
        'Serve immediately with rice or noodles'
      ]
    },
    {
      id: 7,
      title: 'Pad Thai',
      time: 30,
      difficulty: 'medium',
      description: 'Thai stir-fried rice noodles with shrimp, peanuts, and tangy tamarind sauce.',
      category: 'noodles',
      ingredients: [
        '200g rice noodles',
        '200g shrimp',
        '2 eggs',
        '2 tbsp tamarind paste',
        '1 tbsp fish sauce',
        '1 tbsp palm sugar',
        'Bean sprouts',
        'Crushed peanuts and lime'
      ],
      steps: [
        'Soak rice noodles in warm water until softened',
        'Mix tamarind paste, fish sauce, and sugar',
        'Heat oil and cook shrimp until pink',
        'Push shrimp aside and scramble eggs',
        'Add noodles and sauce mixture',
        'Toss quickly until noodles absorb sauce',
        'Fold in bean sprouts',
        'Serve with peanuts and lime wedges'
      ]
    },
    {
      id: 8,
      title: 'Margherita Pizza',
      time: 60,
      difficulty: 'medium',
      description: 'Classic Italian pizza with fresh mozzarella, tomatoes, and basil.',
      category: 'pizza',
      ingredients: [
        '1 pizza dough ball',
        '1/2 cup tomato sauce',
        '200g fresh mozzarella',
        'Fresh basil leaves',
        '2 tbsp olive oil',
        'Salt',
        'Semolina for dusting'
      ],
      steps: [
        'Preheat oven and pizza stone to 250°C',
        'Stretch dough into a 10-12 inch round',
        'Spread tomato sauce evenly',
        'Add mozzarella pieces and a pinch of salt',
        'Bake until crust is puffed and charred in spots',
        'Top with fresh basil and drizzle olive oil',
        'Slice and serve hot'
      ]
    }
  ];

  // ============================================
  // PRIVATE: STATE
  // ============================================
  let currentFilter = 'all';
  let currentSort = 'none';
  let searchQuery = '';
  let favorites = JSON.parse(localStorage.getItem('recipeFavorites')) || [];
  let debounceTimer;
  const expandedSections = {};

  // ============================================
  // PRIVATE: DOM REFERENCES
  // ============================================
  const recipeContainer = document.querySelector('#recipe-container');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const sortButtons = document.querySelectorAll('.sort-btn');
  const searchInput = document.querySelector('#search-input');
  const clearSearchBtn = document.querySelector('#clear-search');
  const recipeCountDisplay = document.querySelector('#recipe-count');

  // ============================================
  // PRIVATE: PURE FILTER FUNCTIONS
  // ============================================
  const filterByDifficulty = (recipesToFilter, difficulty) => {
    return recipesToFilter.filter((recipe) => recipe.difficulty === difficulty);
  };

  const filterByTime = (recipesToFilter, maxTime) => {
    return recipesToFilter.filter((recipe) => recipe.time <= maxTime);
  };

  const filterBySearch = (recipesToFilter, query) => {
    if (!query || query.trim() === '') {
      return recipesToFilter;
    }

    const lowerQuery = query.toLowerCase().trim();

    return recipesToFilter.filter((recipe) => {
      const titleMatch = recipe.title.toLowerCase().includes(lowerQuery);
      const ingredientMatch = recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(lowerQuery)
      );
      const descriptionMatch = recipe.description.toLowerCase().includes(lowerQuery);

      return titleMatch || ingredientMatch || descriptionMatch;
    });
  };

  const filterFavorites = (recipesToFilter) => {
    return recipesToFilter.filter((recipe) => favorites.includes(recipe.id));
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
      case 'favorites':
        return filterFavorites(recipesToFilter);
      case 'all':
      default:
        return recipesToFilter;
    }
  };

  // ============================================
  // PRIVATE: PURE SORT FUNCTIONS
  // ============================================
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

  // ============================================
  // PRIVATE: RENDER FUNCTIONS
  // ============================================
  const getExpandedState = (recipeId) => {
    if (!expandedSections[recipeId]) {
      expandedSections[recipeId] = {
        steps: false,
        ingredients: false
      };
    }

    return expandedSections[recipeId];
  };

  const renderSteps = (steps, level = 0) => {
    const listClass = level === 0 ? 'steps-list' : 'substeps-list';
    let html = `<ol class="${listClass}">`;

    steps.forEach((step) => {
      if (typeof step === 'string') {
        html += `<li>${step}</li>`;
      } else {
        html += `<li>${step.text}`;

        if (step.substeps && step.substeps.length > 0) {
          html += renderSteps(step.substeps, level + 1);
        }

        html += '</li>';
      }
    });

    html += '</ol>';
    return html;
  };

  const createStepsHTML = (steps) => {
    if (!steps || steps.length === 0) {
      return '<p>No steps available</p>';
    }

    return renderSteps(steps);
  };

  const createRecipeCard = (recipe) => {
    const expandedState = getExpandedState(recipe.id);
    const stepsVisibleClass = expandedState.steps ? 'visible' : '';
    const ingredientsVisibleClass = expandedState.ingredients ? 'visible' : '';
    const stepsButtonText = expandedState.steps ? '📋 Hide Steps' : '📋 Show Steps';
    const ingredientsButtonText = expandedState.ingredients ? '🥗 Hide Ingredients' : '🥗 Show Ingredients';
    const isFavorited = favorites.includes(recipe.id);
    const heartIcon = isFavorited ? '❤️' : '🤍';

    return `
      <div class="recipe-card" data-id="${recipe.id}">
          <button class="favorite-btn ${isFavorited ? 'favorited' : ''}" data-recipe-id="${recipe.id}" aria-label="Toggle favorite">
              ${heartIcon}
          </button>

          <h3>${recipe.title}</h3>
          <div class="recipe-meta">
              <span>⏱️ ${recipe.time} min</span>
              <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
          </div>
          <p>${recipe.description}</p>

          <div class="card-actions">
              <button class="toggle-btn" data-recipe-id="${recipe.id}" data-toggle="steps">
                  ${stepsButtonText}
              </button>
              <button class="toggle-btn" data-recipe-id="${recipe.id}" data-toggle="ingredients">
                  ${ingredientsButtonText}
              </button>
          </div>

          <div class="ingredients-container ${ingredientsVisibleClass}" data-recipe-id="${recipe.id}">
              <h4>Ingredients:</h4>
              <ul>
                  ${recipe.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join('')}
              </ul>
          </div>

          <div class="steps-container ${stepsVisibleClass}" data-recipe-id="${recipe.id}">
              <h4>Cooking Steps:</h4>
              ${createStepsHTML(recipe.steps)}
          </div>
      </div>
    `;
  };

  const renderRecipes = (recipesToRender) => {
    if (!recipeContainer) {
      return;
    }

    recipeContainer.innerHTML = recipesToRender.map(createRecipeCard).join('');
  };

  // ============================================
  // PRIVATE: UI HELPER FUNCTIONS
  // ============================================
  const updateActiveButtons = () => {
    filterButtons.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.filter === currentFilter);
    });

    sortButtons.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.sort === currentSort);
    });
  };

  const updateRecipeCounter = (showing, total) => {
    if (recipeCountDisplay) {
      recipeCountDisplay.textContent = `Showing ${showing} of ${total} recipes`;
    }
  };

  const applyTransformations = (recipeList, transformations) => {
    return transformations.reduce((acc, transform) => transform(acc), recipeList);
  };

  const updateDisplay = () => {
    const recipesToDisplay = applyTransformations(recipes, [
      (list) => filterBySearch(list, searchQuery),
      (list) => applyFilter(list, currentFilter),
      (list) => applySort(list, currentSort)
    ]);

    updateRecipeCounter(recipesToDisplay.length, recipes.length);
    renderRecipes(recipesToDisplay);
    updateActiveButtons();

    console.log(`Displaying ${recipesToDisplay.length} recipes (Search: "${searchQuery}", Filter: ${currentFilter}, Sort: ${currentSort})`);
  };

  // ============================================
  // PRIVATE: FAVORITES MANAGEMENT
  // ============================================
  const saveFavorites = () => {
    localStorage.setItem('recipeFavorites', JSON.stringify(favorites));
  };

  const toggleFavorite = (recipeId) => {
    const id = Number.parseInt(recipeId, 10);

    if (favorites.includes(id)) {
      favorites = favorites.filter((favoriteId) => favoriteId !== id);
    } else {
      favorites.push(id);
    }

    saveFavorites();
    updateDisplay();
  };

  // ============================================
  // PRIVATE: EVENT HANDLERS
  // ============================================
  const handleToggleClick = (event) => {
    if (!event.target.classList.contains('toggle-btn')) {
      return;
    }

    const button = event.target;
    const recipeId = Number.parseInt(button.dataset.recipeId, 10);
    const toggleType = button.dataset.toggle;

    const containerClass = toggleType === 'steps' ? 'steps-container' : 'ingredients-container';
    const container = document.querySelector(`.${containerClass}[data-recipe-id="${recipeId}"]`);

    if (container) {
      container.classList.toggle('visible');

      const isVisible = container.classList.contains('visible');
      const expandedState = getExpandedState(recipeId);
      expandedState[toggleType] = isVisible;

      if (toggleType === 'steps') {
        button.textContent = isVisible ? '📋 Hide Steps' : '📋 Show Steps';
      } else {
        button.textContent = isVisible ? '🥗 Hide Ingredients' : '🥗 Show Ingredients';
      }
    }
  };

  const handleFilterClick = (event) => {
    const filterType = event.target.dataset.filter;

    if (!filterType) {
      return;
    }

    currentFilter = filterType;
    updateDisplay();
  };

  const handleSortClick = (event) => {
    const sortType = event.target.dataset.sort;

    if (!sortType) {
      return;
    }

    currentSort = sortType;
    updateDisplay();
  };

  const handleSearchInput = (event) => {
    const query = event.target.value;

    if (clearSearchBtn) {
      clearSearchBtn.style.display = query ? 'block' : 'none';
    }

    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
      searchQuery = query;
      updateDisplay();
    }, 300);
  };

  const handleClearSearch = () => {
    if (searchInput) {
      searchInput.value = '';
    }

    searchQuery = '';

    if (clearSearchBtn) {
      clearSearchBtn.style.display = 'none';
    }

    clearTimeout(debounceTimer);
    updateDisplay();
  };

  const handleFavoriteClick = (event) => {
    if (!event.target.classList.contains('favorite-btn')) {
      return;
    }

    const recipeId = event.target.dataset.recipeId;
    toggleFavorite(recipeId);
  };

  // ============================================
  // PRIVATE: INITIALIZATION
  // ============================================
  const setupEventListeners = () => {
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', handleFilterClick);
    });

    sortButtons.forEach((btn) => {
      btn.addEventListener('click', handleSortClick);
    });

    if (recipeContainer) {
      recipeContainer.addEventListener('click', handleToggleClick);
      recipeContainer.addEventListener('click', handleFavoriteClick);
    }

    if (searchInput) {
      searchInput.addEventListener('input', handleSearchInput);
    }

    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('click', handleClearSearch);
    }

    console.log('Event listeners attached!');
  };

  const init = () => {
    console.log('🍳 RecipeJS initializing...');
    setupEventListeners();
    updateDisplay();
    console.log('✅ RecipeJS ready!');
    console.log(`📊 ${recipes.length} recipes loaded`);
    console.log(`❤️  ${favorites.length} favorites saved`);
  };

  // ============================================
  // PUBLIC API
  // ============================================
  return {
    init,
    updateDisplay
  };
})();

RecipeApp.init();