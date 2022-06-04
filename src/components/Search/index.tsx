import React, { useEffect, useState } from "react";
import Link from "next/link";

const cities = require("city.list.json");

interface Coord {
  lat: number;
  lon: number;
}

interface SearchType {
  coord: Coord;
  country: string;
  id: number;
  name: string;
  state: string;
}

export default function index() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchType[]>();

  const handleQuery = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    const { value } = e.target;
    setQuery(value);

    let matchingCities = [];

    if (value.length > 3) {
      for (let city of cities) {
        if (matchingCities.length >= 5) {
          break;
        }

        const match = city.name.toLowerCase().startsWith(value);

        if (match) {
          const cityData = {
            ...city,
            id: `${city.toString().toLowerCase().replace(/ /g, "-")}-${
              city.id
            }`,
          };
          matchingCities.push(cityData);
        }
      }
    }

    return setResults(matchingCities);
  };

  return (
    <div className="search">
      <input type="text" value={query} onChange={handleQuery} />

      {query.length > 3 && (
        <ul>
          {results?.map((city, index) => (
            <li key={index}>
              <Link href={`/location/${city.id}`}>
                <a>
                  {city.name}
                  {city.state ? ` ${city.state}` : ""}
                  <span>{city.country}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
