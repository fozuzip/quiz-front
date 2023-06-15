import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1", // Replace with your API's base URL
  headers: {
    "Content-Type": "application/json",
    // Add any other headers you need
  },
});

// TODO HANDLE ERRORS
// SAVE RESULTS ON CACHE

export interface Country {
  id: string;
  name: string;
  capital: string;
  flag: {
    img: string;
    alt: string;
  };
}

export async function getCountries(): Promise<Country[]> {
  const countryData = await api.get("/all").then((res) => res.data);

  return countryData
    .map(({ fifa, name, flags, capital }: any) => ({
      id: fifa,
      name: name.common,
      capital: Array.isArray(capital) ? capital[0] : null,
      flag: {
        img: flags.png,
        alt: flags.alt,
      },
    }))
    .filter(({ capital, id }: Country) => !!capital && !!id);
}
