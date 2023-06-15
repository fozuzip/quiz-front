import { useEffect, useState, useCallback } from "react";
import { getCountries, Country } from "./countriesApi";

const suffleArray = (array: any[]) => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

type Question = {
  type: "capital" | "flag";
  flag: { img: string; alt: string } | null;
  title: string;
  options: {
    value: string;
    label: string;
  }[];
  correctAnswer: string;
};

function useCountryQuestions() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [question, setQuestion] = useState<Question | null>(null);

  useEffect(() => {
    if (countries.length === 0) {
      getCountries().then(setCountries);
    } else {
      generateQuestion();
    }
  }, [countries]);

  const generateQuestion = useCallback(() => {
    const selectedCountries = suffleArray(countries).slice(0, 4);
    const correctIndex = Math.floor(Math.random() * 4);

    const type = Math.random() < 0.5 ? "capital" : "flag";
    if (type === "capital") {
      setQuestion({
        type: "capital",
        flag: null,
        title: `${selectedCountries[correctIndex].capital} is the capital of`,
        options: selectedCountries.map(({ name, id }) => ({
          value: id,
          label: name,
        })),
        correctAnswer: selectedCountries[correctIndex].id,
      });
    } else {
      setQuestion({
        type: "flag",
        flag: selectedCountries[correctIndex].flag,
        title: `Which country does this flag belong to?`,
        options: selectedCountries.map(({ name, id }) => ({
          value: id,
          label: name,
        })),
        correctAnswer: selectedCountries[correctIndex].id,
      });
    }
  }, [countries]);

  return {
    question,
    generateQuestion,
  };
}

export default useCountryQuestions;
