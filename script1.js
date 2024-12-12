
// script.js
const questions = [
    {
        question: "What is the definition of physics?",
        options: ["The study of living organisms", "The study of non-living matter", "The study of the natural world around us"],
        answer: 2
    },
    {
        question: "What is the unit of measurement for force?",
        options: ["Newton", "Joule", "Watt"],
        answer: 0
    },
    {
        question: "What is the first law of motion?",
        options: ["An object in motion decelerates to rest","An object remains in its state of motion unless acted upon by external force", "An object's velocity changes over time"],
        answer: 1
    },
    {
        question: "What is circular motion?",
        options: ["Motion in a straight line", "Motion in a random", "Motion in a curved path"],
        answer: 2
    },
    {
        question: "What is the unit of measurement for electric charge?",
        options: ["Coulomb", "Ampere", "Volt"],
        answer: 0
    },
    {
        question: "What is the concept of vectors in physics?",
        options: ["Scalars with magnitude and direction", "Scalars with only magnitude", "Vectors with only direction"],
        answer: 0
    },
    {
        question: "What is the second law of motion?",
        options: ["F = mv", "F = ma", "F = m/v"],
        answer: 1
    },
    {
        question: "What is the concept of electricity?",
        options: ["The flow of electrons", "The flow of protons", "The flow of neutrons"],
        answer: 0
    },
    {
        question: "What is the unit of measurement for electric potential?",
        options: ["Coulomb", "Ampere", "Volt"],
        answer: 2
    },
    {
        question: "What is the concept of torque in circular motion?",
        options: ["A force that causes an object to rotate", "A force that causes an object to translate", "A force that causes an object to remain stationary"],
        answer: 0
    },
    {
        question: "What is the concept of angular velocity in circular motion?",
        options: ["The rate of change of an object's displacement", "The rate of change of an object's angular displacement", "The rate of change of an object's velocity"],
        answer: 1
    },
    {
        question: "What is the concept of centripetal force in circular motion?",
        options: ["A force that acts towards the center of the circle", "A force that acts away from the center of the circle", "A force that acts perpendicular to the circle"],
        answer: 0
    },
    {
        question: "What is the concept of electric field?",
        options: ["A region around a charged particle where the force of the charge can be detected", "A region around a charged particle where the force of the charge cannot be detected", "A region around a charged particle where the force of the charge is zero"],
        answer: 0
    },
    {
        question: "What is the concept of electric potential difference?",
        options: ["The difference in electric field between two points", "The difference in electric charge between two points", "The difference in electric potential between two points"],
        answer: 2
    }
];

const questionsElement = document.getElementById("questions");
const submitButton = document.getElementById("submit");
const resultsElement = document.getElementById("results");

// Display all questions
questions.forEach((question, index) => {
    const questionElement = document.createElement("div");
    questionElement.innerHTML = `
        <h2>Question ${index + 1}: ${question.question}</h2>
        <ul>
            ${question.options.map((option, optionIndex) => `
                <li>
                    <input type="radio" id="question-${index}-option-${optionIndex}" name="question-${index}" value="${optionIndex}">
                    <label for="question-${index}-option-${optionIndex}">${option}</label>
                </li>
            `).join("")}
        </ul>
    `;
    questionsElement.appendChild(questionElement);
});

// Submit button event listener
submitButton.addEventListener("click", () => {
    let score = 0;
    const userName = document.getElementById("name").value;
    const registrationNumber = document.getElementById("registration-number").value;

    // Check answers
    questions.forEach((question, index) => {
        const userAnswer = document.querySelector(`input[name="question-${index}"]:checked`);
        if (userAnswer) {
            const correctAnswer = question.options[question.answer];
            if (userAnswer.labels[0].textContent === correctAnswer) {
                score++;
            }
        }
    });

    // Display results
    questionsElement.style.display = "none";
    submitButton.style.display = "none";
    resultsElement.style.display = "block";
    resultsElement.innerHTML = `
        <h2>Results</h2>
        <p>Name: ${userName}</p>
        <p>Registration Number: ${registrationNumber}</p>
        <p>Score: ${score} out of ${questions.length}</p>
    `;
});

