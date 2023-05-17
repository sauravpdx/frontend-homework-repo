// url for the Thrones API
const url = "https://thronesapi.com/api/v2/Characters";
const loader = document.getElementById("loading");

const fetchThrones = async (thronesUrl) => {
  try {
    const response = await fetch(Thronesurl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

const runFunThrones = async () => {
  const nonAlcoholicDrinks = await fetchThrones(url);
  const resultsSection = document.getElementById("results");
  nonAlcoholicDrinks.forEach((throne) => {
    const card = `
            <div class="col-md-6 col-lg-4 p-2">
              <div class="card p-1 figure">
              <div class="image-container">
              <img
              src="${throne.imageUrl}"
              alt="${throne.fullName}"
            />
              </div>
              <div class="card-body">
                  <h2 class="card-title fw-bolder fs-4" >${throne.fullName}</h2>
              </div>
              </div>
            </div>
          `;
    resultsSection.innerHTML += card;
  });
};

runFunThrones();
