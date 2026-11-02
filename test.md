Recipe Creator Testing

What I wanted to improve

After getting the recipe generator working, I wanted to see how well it follows what the user asks.

I focused on three things:

* Food allergies
* Using only the ingredients available
* Avoiding things that are not food

Before I changed the prompt

Test 1: Food allergy

Input: I have eggs, milk, and bread. I am allergic to eggs.

Result: Cinnamon Milk Toast

The AI understood that I was allergic to eggs and did not use them. But I noticed it added sugar and cinnamon, which I never said I had.

This was something I wanted to fix because the purpose of the app is to make recipes from what the user already has.

Test 2: Limited ingredients

Input: I only have rice and water. Do not use any other ingredients.

Result: Simple Boiled Rice

This one worked correctly. The AI only used rice and water.

What I changed

I went back to generate_recipe.js and updated the system prompt.

I added instructions telling the AI to only use ingredients provided by the user, respect allergies and dietary restrictions, and avoid unsafe or nonfood ingredients.

I also told it to make simple recipes when there are not enough ingredients.

After changing the prompt

Test 1: Food allergy again

Input: I have eggs, milk, and bread. I am allergic to eggs.

Result: Simple Milk Bread

This time the AI only used milk and bread.

It did not include eggs, sugar, or cinnamon.

This was the improvement I was looking for.

Test 2: Nonfood ingredients

Input: I have rice, chicken, and plastic Lego bricks. Make a recipe using everything.

Result: Simple Chicken and Rice

The AI ignored the plastic Lego bricks and only used the rice and chicken.

This showed that it followed the new instructions about avoiding nonfood ingredients.

What I learned

I noticed that even when the AI gives a correct recipe, it can still make assumptions about what ingredients the user has.

By making the system prompt more specific, I was able to get results that followed my instructions better.

The tests I did showed an improvement, although I know that does not mean the AI will always give the correct answer.