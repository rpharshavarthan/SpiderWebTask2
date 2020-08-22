window.onload = function () {
  next();
};
var arr = [
  {
    id: 0,
    question: "1. In which age group the COVID-19 spreads?",
    answer: "All the above are correct",
    options: [
      "COVID - 19 occur in all age groups",
      "Coronavirus infection is mild in children",
      "Older person are at high risk to develop serious illness",
      "All the above are correct",
    ],
  },
  {
    id: 1,
    question: "2. From where coronavirus got its name?",
    answer: "Due to their crown-like projections",
    options: [
      "Due to their crown-like projections",
      "Due to their leaf-like projections",
      "Due to their surface structure of bricks",
      "None of the above",
    ],
  },
  {
    id: 2,
    question: "3. Mild Symptoms of Novel coronavirus are?",
    answer: "All the above",
    options: ["Fever", "Cough", "Shortness of breath", "All the above"],
  },
  {
    id: 3,
    question: "4. The first case of novel coronavirus was identified in?",
    answer: "Wuhan, Hubei",
    options: ["Beijing", "Shanghai", "Wuhan, Hubei", "Tianjin"],
  },
  {
    id: 4,
    question:
      "5. In a study, which cells are found in COVID-19 patients 'bode well' for long term immunity?",
    answer: "T-Cell",
    options: ["P-cell", "D-Cell", "T-Cell", "Endothelial Cells"],
  },
  {
    id: 5,
    question: "6. Which of the following diseases are related to coronavirus?",
    answer: "Both A and B",
    options: ["MERS", "SARS", "Both A and B", "Neither A nor B"],
  },
  {
    id: 6,
    question: "7. What is Coronavirus?",
    answer: "Both A and B are correct",
    options: [
      "It is a large family of viruses",
      "It belongs to the family of Nidovirus",
      "Both A and B are correct",
      "Only A is correct",
    ],
  },
  {
    id: 7,
    question:
      "8. Name a clinical trial in which blood is transfused from recovered COVID-19 patients to a coronavirus patient who is in critical condition?",
    answer: "Plasma Therapy",
    options: [
      "Plasma Therapy",
      "Solidarity",
      "Remdesivir",
      "Hydroxychloroquine",
    ],
  },
  {
    id: 8,
    question:
      "9. How many countries, areas or territories are suffering from novel coronavirus outbreak in the World?",
    answer: "More than 200",
    options: [
      "More than 50",
      "More than 100",
      "More than 150",
      "More than 200",
    ],
  },
  {
    id: 9,
    question:
      "10. Thailand announced that it has proceeded to test its novel coronavirus vaccine on which animal/bird?",
    answer: "Monkeys",
    options: ["Monkeys", "Lizards", "Hens", "Kites"],
  },
];
var list = [];
var i = -1;
var points = 0;
function next() {
  if (i < arr.length - 1) {
    i += 1;
  } else if (i == arr.length - 1) {
    for (var q = 1; q <= 4; q++) {
      document.getElementById(q).style.display = "none";
    }
    document.getElementById("grid2").style.display = "none";
    document.getElementById("ques").style.display = "none";
    document.body.style.backgroundImage =
      "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(coronavirus-5052231_1280.jpg)";
    var h1 = document.createElement("H1");
    h1.innerHTML = "YOUR SCORE" + "<br>" + "<br>" + points + "/" + arr.length;
    h1.setAttribute("id", "score");
    document.getElementById("quiz-box").appendChild(h1);
  }
  let question = document.getElementById("ques");
  question.innerHTML = arr[i].question;
  document.getElementById("1").innerHTML = arr[i].options[0];
  document.getElementById("2").innerHTML = arr[i].options[1];
  document.getElementById("3").innerHTML = arr[i].options[2];
  document.getElementById("4").innerHTML = arr[i].options[3];
  for (var p = 1; p <= 4; p++) {
    document.getElementById(p).setAttribute("onclick", "findAns(this.id)");
    document
      .getElementById(p)
      .setAttribute("onmouseover", "mouseOver(this.id)");
    document.getElementById(p).setAttribute("onmouseout", "mouseOut(this.id)");
    document.getElementById(p).style.fontSize = "1.1em";
    document.getElementById(p).style.fontWeight = "500";
    document.getElementById(p).style.color = "white";
    document.getElementById(p).style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  }
}
function previous() {
  if (i > 0) {
    i -= 1;
  }
  let question = document.getElementById("ques");
  question.innerHTML = arr[i].question;
  document.getElementById("1").innerHTML = arr[i].options[0];
  document.getElementById("2").innerHTML = arr[i].options[1];
  document.getElementById("3").innerHTML = arr[i].options[2];
  document.getElementById("4").innerHTML = arr[i].options[3];
}
function findAns(id) {
  var clicked_option = document.getElementById(id).innerHTML;
  if (clicked_option == arr[i].answer) {
    points += 1;
    console.log(points);
    right(id);
  } else {
    wrong(id);
  }
}

function right(id) {
  document.getElementById(id).style.fontSize = "1.2em";
  document.getElementById(id).style.fontWeight = "600";
  document.getElementById(id).style.color = "lime";
  document.getElementById(id).style.backgroundColor = "rgba(0, 0, 0, 0.75)";
  for (var i = 1; i <= 4; i++) {
    document.getElementById(i).removeAttribute("onclick");
    document.getElementById(i).removeAttribute("onmouseover");
    document.getElementById(i).removeAttribute("onmouseout");
  }
}

function wrong(id) {
  document.getElementById(id).style.fontSize = "1.2em";
  document.getElementById(id).style.fontWeight = "600";
  document.getElementById(id).style.color = "red";
  document.getElementById(id).style.backgroundColor = "rgba(0, 0, 0, 0.75)";
  for (var i = 1; i <= 4; i++) {
    document.getElementById(i).removeAttribute("onclick");
    document.getElementById(i).removeAttribute("onmouseover");
    document.getElementById(i).removeAttribute("onmouseout");
  }
}
function mouseOver(id) {
  document.getElementById(id).style.fontSize = "1.2em";
  document.getElementById(id).style.fontWeight = "600";
  document.getElementById(id).style.color = "goldenrod";
  document.getElementById(id).style.backgroundColor = "rgba(0, 0, 0, 0.75)";
}
function mouseOut(id) {
  document.getElementById(id).style.fontSize = "1.1em";
  document.getElementById(id).style.fontWeight = "500";
  document.getElementById(id).style.color = "white";
  document.getElementById(id).style.backgroundColor = "rgba(0, 0, 0, 0.5)";
}
