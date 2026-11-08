function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length
    && arr1.every((element, index) => element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
  const ages = users
    .filter(user => user.gender === gender)
    .map(user => user.age);

  if (ages.length === 0) {
    return 0;
  }

  const totalAge = ages.reduce((sum, age) => sum + age, 0);

  return totalAge / ages.length;
}
