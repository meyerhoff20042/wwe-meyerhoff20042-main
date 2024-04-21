# WWE

## Getting Started

1. Clone this to your computer. Preferably in your `~/Code` directory or some other directory that is not a mess and/or connected to One Drive or some other cloud service.
1. `cd` into the directory.
1. Run `npm install` to install the dependencies.
   l. Run `code .` to open the project in Visual Studio Code.

## Adding the Data

1. Create a new file, `data.js` in the root of the project. You can do this by running `touch src/data.js` in the terminal, or just use the Explorer in Visual Studio Code. **Be sure** to place it in the right directory - `src`.
1. Paste the following code into `data.js`:

```js
/**
 * 1. TODO: Filter out the `Vacant Title` from the `CHAMPIONS` array. Also, remove the corresponding index from the `BELTS` array.
 * 2. TODO: Filter out the `Tag Team Champions` from the `BELTS` array. Also, remove the corresponding indices from the `CHAMPIONS` array.
 * 3. TODO: Alphabetize `CHAMPIONS` by last name.
 * 4. TODO: Create a new ARRAY of objects called `CHAMPIONSHIPS` that contains the following properties:
 *   - `title` - The name of the title.
 *  - `champion` - The name of the champion.
 */

const CHAMPIONS = [
  "Cody Rhodes",
  "Damian Priest",
  "Vacant Title",
  "Bayley",
  "Sami Zayn",
  "Logan Paul",
  "Awesome Truth",
  "A-Town Down Under",
  "The Kabuki Warriors",
  "Ilja Dragunov ",
  "Roxanne Perez",
  "Oba Femi",
  "Nathan Frazer & Axiom",
  "Charlie Dempsey",
];

const BELTS = [
  "Undisputed WWE Champion",
  "World Heavyweight Champion",
  "Women's World Champion",
  "WWE Women’s Champion",
  "Intercontinental Champion",
  "United States Champion",
  "World Tag Team Champions",
  "SmackDown Tag Team Champions",
  "WWE Women's Tag Team Champions",
  "NXT Champion",
  "NXT Women's Champion",
  "NXT North American Champion",
  "NXT Tag Team Champions",
  "NXT Heritage Cup Champion",
];
```

As you work, cut/paste parts of the `TODO` comments and use them as your commit messages. This will help you keep track of what you've done and what you need to do.

Be sure to push your changes to GitHub when you're done.
