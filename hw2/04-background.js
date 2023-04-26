// Add your code here
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle");
  const intervalInput = document.getElementById("interval");
  let backgroundColorInterval;
  let isStarted = false;

  // reference: https://www.rustcodeweb.com/2021/07/how-to-generate-random-rgb-color-using-javascript.html
  const randomColor = () => {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const a = 0.2;
<<<<<<< HEAD
    const RGBColor = `rgb(${x},${y},${z},${a})`;
=======
    const RGBColor = "rgb(" + x + "," + y + "," + z + "," + a + ")";
>>>>>>> 4decafd (hw 2 submission)
    return RGBColor;
  };

  const changeBackgroundColor = () => {
    document.body.style.backgroundColor = randomColor();
  };

  const start = () => {
    const interval = parseInt(intervalInput.value, 10) || 3;
    backgroundColorInterval = setInterval(
      changeBackgroundColor,
      interval * 1000
    );
<<<<<<< HEAD
    toggleButton.textContent = "Stop";
    toggleButton.classList.remove("btn-primary");
    toggleButton.classList.add("btn-danger");
=======
>>>>>>> 4decafd (hw 2 submission)
  };

  const stop = () => {
    clearInterval(backgroundColorInterval);
<<<<<<< HEAD
    toggleButton.textContent = "Start";
    toggleButton.classList.remove("btn-danger");
    toggleButton.classList.add("btn-primary");
=======
>>>>>>> 4decafd (hw 2 submission)
  };

  toggleButton.addEventListener("click", () => {
    if (!isStarted) {
      start();
<<<<<<< HEAD
    } else {
      stop();
=======
      toggleButton.textContent = "Stop";
      toggleButton.classList.remove("btn-primary");
      toggleButton.classList.add("btn-danger");
    } else {
      stop();
      toggleButton.textContent = "Start";
      toggleButton.classList.remove("btn-danger");
      toggleButton.classList.add("btn-primary");
>>>>>>> 4decafd (hw 2 submission)
    }
    isStarted = !isStarted;
  });
});
