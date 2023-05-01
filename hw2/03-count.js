const paragraph = document.getElementById("my-paragraph");
const highlightInput = document.getElementById("highlight-input");

const highlightText = () => {
  const originalText = paragraph.textContent;
  const textToHighlight = highlightInput.value;
  const regex = new RegExp(textToHighlight, "gi");
  const highlightedText = '<span class="bg-warning">$&</span>';
  const highlightedParagraph = originalText.replace(regex, highlightedText);

  paragraph.innerHTML = highlightedParagraph;
};

highlightInput.addEventListener("keyup", highlightText);
