"use client";
import { CardList } from "@/components/card-list.componet";
import { useEffect, useState } from "react";

export default function Home() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  return (
    <>
      <CardList>
        {monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </CardList>
    </>
  );
}
