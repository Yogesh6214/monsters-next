"use client";
import "./page.style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { CardList } from "@/components/Card-list/card-list.componet";
import { SearchBox } from "@/components/search-box/search-box.component";

export default function Home() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const filteredMonsters = monsters.filter((monsters) =>
    monsters.name.toLowerCase().includes(searchField.toLowerCase())
  );
  const handlechange = (e) => {
    setSearchField(e.target.value);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.data.length === 0) {
          console.warn("Warning: No data received from the API");
        } else {
          setMonsters(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <>
      <h1 className="h1">Monsters Rolodex</h1>
      <SearchBox placeholder="Search Box" handlechange={handlechange} />
      <CardList monsters={filteredMonsters} />
    </>
  );
}
