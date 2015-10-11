NonEmptyString = Match.Where(function (x) {
  check(x, String);
  return x.length > 0;
});

NonEmptyArray = Match.Where(function (x) {
  check(x, Array);
  return x.length > 0;
});

NumberAboveZero = Match.Where(function (x) {
  check(x, Number);
  return x >= 0;
});

StringOfType = Match.Where(function (x) {
  check(x, String);
  return x === "A" || x === "F";
});
