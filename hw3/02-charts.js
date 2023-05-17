const backgroundColors = [
  "rgba(54, 162, 235, 0.8)",
  "rgba(255, 206, 86, 0.8)",
  "rgba(255, 99, 132, 0.8)",
  "rgba(75, 192, 192, 0.8)",
  "rgba(153, 102, 255, 0.8)",
  "rgba(255, 159, 64, 0.8)",
  "rgba(199, 199, 199, 0.8)",
  "rgba(83, 102, 255, 0.8)",
  "rgba(40, 159, 64, 0.8)",
  "rgba(210, 199, 199, 0.8)",
  "rgba(78, 52, 199, 0.8)",
];

const borderColors = [
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(255, 99, 132, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
  "rgba(159, 159, 159, 1)",
  "rgba(83, 102, 255, 1)",
  "rgba(40, 159, 64, 1)",
  "rgba(210, 199, 199, 1)",
  "rgba(78, 52, 199, 1)",
];

const Validator = {
  Targaryen: ["Targaryan", "Targaryen"],
  Tarly: ["Tarly", "Tarth"],
  Tyrell: ["Tyrell"],
  Stark: ["Stark"],
  Baratheon: ["Baratheon"],
  Lannister: ["Lannister", "Lanister"],
  Greyjoy: ["Greyjoy"],
  Clegane: ["Clegane"],
  Baelish: ["Baelish"],
  Seaworth: ["Seaworth"],
  Unknown: ["Unknown", "None", "Unkown"],
  "Free Folk": ["Free Folk"],
  Naathi: ["Naathi"],
  Bolton: ["Bolton"],
  Naharis: ["Naharis"],
  Lorathi: ["Lorathi", "Lorath"],
  Mormont: ["Mormont"],
  Sparrow: ["Sparrow"],
  Viper: ["Viper"],
  Sand: ["Sand"],
  Worm: ["Worm"],
  Qyburn: ["Qyburn"],
  Bronn: ["Bronn"],
};

const thronesUrl = "https://thronesapi.com/api/v2/Characters";

const fetchThrones = async () => {
  try {
    const response = await fetch(Thronesurl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

const countCharactersByFamily = (characters) => {
  const familyCounts = {};
  characters.forEach((character) => {
    const family = character.lastName ? character.lastName.trim() : "Unknown";
    for (const key in Validator) {
      if (Validator[key].includes(family)) {
        familyCounts[key] = (familyCounts[key] || 0) + 1;
        return;
      }
    }
    familyCounts[family] = (familyCounts[family] || 0) + 1;
  });
  return familyCounts;
};

const categorizeFamilyCounts = (familyCounts) => {
  const categorizedData = {};
  for (const key in familyCounts) {
    if (Object.prototype.hasOwnProperty.call(familyCounts, key)) {
      if (familyCounts[key] === 1) {
        categorizedData.others = (categorizedData.others || 0) + 1;
      } else {
        categorizedData[key] = familyCounts[key];
      }
    }
  }

  return categorizedData;
};

const renderChart = async () => {
  const characters = await fetchThrones();
  const familyCounts = countCharactersByFamily(characters);
  const categorizedData = categorizeFamilyCounts(familyCounts);
  const uniqueFamilies = Object.keys(categorizedData);
  const donutChart = document.querySelector(".donut-chart");
  new Chart(donutChart, {
    type: "doughnut",
    data: {
      labels: uniqueFamilies,
      datasets: [
        {
          label: "My First Dataset",
          data: Object.values(categorizedData),
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
  });
};

renderChart();
