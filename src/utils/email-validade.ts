export function isEmailValid(email: string) {
  if (!email.includes("@")) {
    return false;
  }

  const secondPart = email.split("@")[1];

  if (
    !secondPart.includes(".") ||
    secondPart.length < 5 ||
    secondPart.split(".")[1].length < 1
  ) {
    return false;
  }

  return true;
}
