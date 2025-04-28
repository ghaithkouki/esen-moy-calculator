export function validateInputs(nameMix, coefMix, exam, ds1, otherNote, custom) {
  const nameMixRegex = /^[A-Za-z\s-_]+$/;
  const coefMixRegex = /^(?:[1-5](?:[.,]\d+)?)$/;
  const scoreRegex = /^(?:0*(?:\.\d+|\,\d+)?|0*[1-9](?:\.\d+|\,\d+)?|1\d(?:\.\d+|\,\d+)?|20(?:\.0+|\,0+)?)$/;

  if (!nameMixRegex.test(nameMix)) {
    return { 
      valid: false, 
      message: "Le nom devrait contenir uniquement des caractères alphabétiques, espaces, tirets, et underscores." 
    };
  }

  if (!coefMixRegex.test(coefMix)) {
    return { 
      valid: false, 
      message: "Le coefficient devrait être une valeur numérique entre 1 et 5." 
    };
  }

  if (!scoreRegex.test(exam) || !scoreRegex.test(ds1) || !scoreRegex.test(otherNote)) {
    return { 
      valid: false, 
      message: "Les notes devraient être des valeurs numériques. Utilisez le point (.) ou la virgule (,) pour les décimales." 
    };
  }

  if (custom && !scoreRegex.test(custom)) {
    return { 
      valid: false, 
      message: "La moyenne devrait être une valeur numérique. Utilisez le point (.) ou la virgule (,) pour les décimales." 
    };
  }

  return { valid: true, message: "Toutes les entrées sont valides." };
}