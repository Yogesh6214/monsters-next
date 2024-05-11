"use client";
import { useState } from "react";

export default function Home() {
  const [monsters, setMonsters] = useState([
    {
      name: "Pichani",
      id: "mons1",
    },
    {
      name: "Chudail",
      id: "mons2",
    },
    {
      name: "Dakani",
      id: "mons3",
    },
    {
      name: "Bharmrakshash",
      id: "mons4",
    },
    {
      name: "Jin",
      id: "mons5",
    },
    {
      name: "Bhoot",
      id: "mons6",
    },
  ]);
  console.log(monsters);
  return (
    <>
      <h1>Hi, Yogesh</h1>
      {monsters.map((monster) => (
        <h1 key={monster.id}>{monster.name}</h1>
      ))}
    </>
  );
}
