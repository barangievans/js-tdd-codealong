// src/utils.js
export function currentAgeForBirthYear(birthYear) {
    const currentYear = new Date().getFullYear();
    // Return 0 if the birth year is in the future
    if (birthYear > currentYear) {
      return 0;
    }
    return currentYear - birthYear;
  }
  