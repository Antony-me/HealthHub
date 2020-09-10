const _prompt = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const diseases = {
  Syphilis: [
    "A rash on your reproductive organs",
    "Fatigue",
    "Fever",
    "Weight Loss",
    "Hair loss",
    "Joint pain",
  ],

  Chlymydia: [
    "pain or discomfort during sex or urination",
    "green or yellow discharge from the penis or vagina",
    "pain in the lower abdomen",
  ],

  Gonorrhea: [
    "a white, yellow, beige, or green-colored discharge from the penis or vagina",
    "pain or discomfort during sex or urination",
    "more frequent urination than usual",
    "itching around the genitals",
    "sore throat",
  ],
};