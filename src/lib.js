/**
 * @typedef {Object} RemoveCorrespondingItemsByTermArgs
 * @property {string[]} terms1
 * @property {string[]} terms2
 * @property {string} filterTerm
 */
/**
 * @typedef {Object} Terms
 * @property {string[]} terms1
 * @property {string[]} terms2
 */

/**
 * @param {RemoveCorrespondingItemsByTermArgs} args
 * @returns {Terms}
 */
export function removeCorrespondingItemsByTerm({ terms1, terms2, filterTerm }) {
  return terms1.reduce(
    (accumulatedResults, term, index) => {
      // Avoid any mutation or reassignment of the parameter object.
      const accumulatedResults2Modify = { ...accumulatedResults };

      // As we iterate, if the current `term` does not include the `filterTerm`, add it to the 'results arrays.'
      if (!term.includes(filterTerm)) {
        accumulatedResults2Modify.terms1 = [
          ...accumulatedResults2Modify.terms1,
          term,
        ];

        // Also add the corresponding term from `terms2` to the 'results arrays.'
        accumulatedResults2Modify.terms2 = [
          ...accumulatedResults2Modify.terms2,
          terms2[index],
        ];
      }

      return accumulatedResults2Modify;
    },

    // Initialize the results.
    { terms1: [], terms2: [] },
  );
}

/**
 * @typedef {Object} sortByName
 * @property {string[]} elements
 * @property {string} sortBy
 */

/**
 *
 * @param {sortByName} args
 * @return {Array}
 */

// Sort elements in an array by first or last name
export function sortByName({ elements, sortBy = "last" }) {
  if (sortBy === "first") {
    return elements.sort((a, b) => {
      // Split first and last names of each element
      // and sort by first name
      const [firstNameA, lastNameA] = a.split(" ");
      const [firstNameB, lastNameB] = b.split(" ");
      return firstNameA.localeCompare(firstNameB);
    });
  } else {
    return elements.sort((a, b) => {
      // Split first and last names of each element
      // and sort by last name
      const [firstNameA, lastNameA] = a.split(" ");
      const [firstNameB, lastNameB] = b.split(" ");
      return lastNameA.localeCompare(lastNameB);
    });
  }
}
