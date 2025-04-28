export function validateInputs(nameMix, coefMix, exam, ds1, otherNote, custom) {
  const nameMixRegex = /^[A-Za-z\s-_]+$/; // Updated regex to allow hyphens and underscores
  const coefMixRegex = /^(?:[1-3](?:[.,]\d+)?)$/;
  const scoreRegex = /^(?:[0-9]|[1-9]\d|20)(?:[.,]\d+)?$/; // Updated regex to accept commas

  if (!nameMixRegex.test(nameMix)) {
    return { valid: false, message: "NameMix should contain only alphabetic characters, spaces, hyphens, and underscores." };
  }

  if (!coefMixRegex.test(coefMix)) {
    return { valid: false, message: "CoefMix should be a numeric value between 1 and 3." };
  }

  if (!scoreRegex.test(exam) || !scoreRegex.test(ds1) || !scoreRegex.test(otherNote)) {
    return { valid: false, message: "Exam, DS1, and OtherNote should be numeric values between 0 and 20." };
  }

  if (custom && !scoreRegex.test(custom)) {
    return { valid: false, message: "Moy should be a numeric value between 0 and 20." };
  }

  return { valid: true, message: "All inputs are valid." };
}
