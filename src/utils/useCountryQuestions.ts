import { useEffect, useState, useCallback } from "react";
import { getCountries, Country } from "./countriesApi";

export enum QuestionType {
  Capital = "capital",
  Flag = "flag",
}

type Question = {
  type: QuestionType;
  flag: { img: string; alt: string } | null;
  title: string;
  options: { value: string; label: string }[];
  correctAnswer: string;
};

const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

const genQuestion = (countries: Country[]): Question => {
  const selectedCountries = shuffleArray(countries).slice(0, 4);
  const correctIndex = Math.floor(Math.random() * 4);

  const type = Math.random() < 0.5 ? QuestionType.Capital : QuestionType.Flag;
  if (type === QuestionType.Capital) {
    return {
      type: QuestionType.Capital,
      flag: null,
      title: `${selectedCountries[correctIndex].capital} is the capital of`,
      options: selectedCountries.map(({ name, id }) => ({
        value: id,
        label: name,
      })),
      correctAnswer: selectedCountries[correctIndex].id,
    };
  } else {
    return {
      type: QuestionType.Flag,
      flag: selectedCountries[correctIndex].flag,
      title: `Which country does this flag belong to?`,
      options: selectedCountries.map(({ name, id }) => ({
        value: id,
        label: name,
      })),
      correctAnswer: selectedCountries[correctIndex].id,
    };
  }
};

function useCountryQuestions() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [question, setQuestion] = useState<Question | null>(null);

  useEffect(() => {
    if (countries.length === 0) {
      getCountries()
        .then(setCountries)
        .catch((error) => {
          // Handle error
          console.error("Failed to fetch countries:", error);
        });
    } else {
      setQuestion(genQuestion(countries));
    }
  }, [countries]);

  const generateQuestion = useCallback(() => {
    setQuestion(genQuestion(countries));
  }, [countries]);

  return {
    question,
    generateQuestion,
  };
}

export default useCountryQuestions;
