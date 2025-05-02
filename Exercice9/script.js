function checkAge(age) {
  const ages = parseInt(age);
  if (ages < 18) {
    return "Vous êtes mineur.";
  } else if (ages >= 18 && ages < 65) {
    return "Vous êtes majeur.";
  } else if (ages >= 65) {
    return "Vous êtes senior.";
  }
}

export default checkAge;
