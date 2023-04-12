const input = document.querySelector("input");
const result = document.querySelector("#result");

input.addEventListener("input", () => {
  const value = input.value;

  if (value < 0 || isNaN(value)) {
    result.classList.remove("text-success");
    result.classList.add("text-danger");
    result.textContent = "Invalid input";
    return;
  }

  if (value === "") {
    result.textContent = "";
    return;
  }

  const isPalindrome = isNumberPalindrome(value);
  result.textContent = isPalindrome
    ? "Yes! This is a palindrome!"
    : "No, Try again.";
});

function isNumberPalindrome(num) {
  const str = String(num);
  const len = str.length;

  for (let i = 0; i < len / 2; i += 1) {
    if (str[i] !== str[len - i - 1]) {
      result.classList.remove("text-success");
      result.classList.add("text-danger");
      return false;
    }
  }

  result.classList.remove("text-danger");
  result.classList.add("text-success");
  return true;
}
