// src/__tests__/utils.test.js
import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    // Arrange
    const currentYear = new Date().getFullYear();
    const birthYear = 1984;
    const expectedAge = currentYear - birthYear;
    
    // Act
    const ageOfPerson = currentAgeForBirthYear(birthYear);
    
    // Assert
    expect(ageOfPerson).toBe(expectedAge);
  });

  it("returns 0 for a future birth year", () => {
    // Arrange
    const futureYear = new Date().getFullYear() + 10;
    
    // Act
    const ageOfPerson = currentAgeForBirthYear(futureYear);
    
    // Assert
    expect(ageOfPerson).toBe(0);
  });

  it("returns 0 for a birth year in the current year", () => {
    // Arrange
    const currentYear = new Date().getFullYear();
    
    // Act
    const ageOfPerson = currentAgeForBirthYear(currentYear);
    
    // Assert
    expect(ageOfPerson).toBe(0);
  });

  it("handles very old birth years correctly", () => {
    // Arrange
    const oldBirthYear = 1900;
    const currentYear = new Date().getFullYear();
    const expectedAge = currentYear - oldBirthYear;
    
    // Act
    const ageOfPerson = currentAgeForBirthYear(oldBirthYear);
    
    // Assert
    expect(ageOfPerson).toBe(expectedAge);
  });
});
