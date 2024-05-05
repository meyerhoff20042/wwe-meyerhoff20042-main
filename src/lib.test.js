import { expect, test } from "vitest";
import {
  getLastName,
  removeCorrespondingItemsByTerm,
  sortByName,
  merge2ArraysIntoAnArrayOfObjects,
} from "./lib";

describe("getLastName", () => {
  test("returns the last name from a full name", () => {
    // Arrange
    const fullName = "John Doe";
    const expected = "Doe";

    // Act
    const result = getLastName(fullName);

    // Assert
    expect(result).toBe(expected);
  });

  test("returns the last name from a full name with extra spaces", () => {
    // Arrange
    const fullName = "John   Doe";
    const expected = "Doe";

    // Act
    const result = getLastName(fullName);

    // Assert
    expect(result).toBe(expected);
  });

  test("returns the last name from a full name with extra spaces at the beginning", () => {
    // Arrange
    const fullName = "   John Doe";
    const expected = "Doe";

    // Act
    const result = getLastName(fullName);

    // Assert
    expect(result).toBe(expected);
  });

  test("returns the last name from a full name with extra spaces at the end", () => {
    // Arrange
    const fullName = "John Doe   ";
    const expected = "Doe";

    // Act
    const result = getLastName(fullName);

    // Assert
    expect(result).toBe(expected);
  });

  test("returns the last name from a multi-word full name", () => {
    // Arrange
    const fullName = "John Michael Doe";
    const expected = "Doe";

    // Act
    const result = getLastName(fullName);

    // Assert
    expect(result).toBe(expected);
  });

  test("returns the last name from a full name with special characters", () => {
    // Arrange
    const fullName = "Starsky & Hutch";
    const expected = "Hutch";

    // Act
    const result = getLastName(fullName);

    // Assert
    expect(result).toBe(expected);
  });
});

test("removeCorrespondingItemsByTerm", () => {
  // Arrange
  const terms1 = ["term1", "term2", "term3"];
  const terms2 = ["corresponding1", "corresponding2", "corresponding3"];
  const filterTerm = "term2";

  const expected = {
    terms1: ["term1", "term3"],
    terms2: ["corresponding1", "corresponding3"],
  };

  // Act
  const result = removeCorrespondingItemsByTerm({ terms1, terms2, filterTerm });

  // Assert - Check if the function correctly removes the corresponding items
  expect(result.terms1).toEqual(expected.terms1);
  expect(result.terms2).toEqual(expected.terms2);
});

test("sortByFirstName", () => {
  // Arrange
  const args = {
    elements: ["John Doe", "Jane Smith", "Ralph Johnson"],
    sortBy: "first",
  };

  const sortedElements = sortByName(args);

  expect(sortedElements).toEqual(["Jane Smith", "John Doe", "Ralph Johnson"]);
});
