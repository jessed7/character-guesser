"use client";
import Image from "next/image";
import { allCharacters } from "../characters";
import { useEffect, useState } from "react";
import arrayShuffle from "array-shuffle";

export default function Game() {
useEffect(() => {
    setCurrentCharacter(characters[Math.floor(Math.random() * allCharacters.length)]);
});

  const [characters, setCharacters] = useState(allCharacters);
  const [currentCharacter, setCurrentCharacter] = useState(
    characters[0]
  );
  const [notCurrent, setNotCurrent] = useState(
    arrayShuffle(
      allCharacters.filter((char) => char.name !== currentCharacter.name)
    )
  );
  const [options, setOptions] = useState(
    arrayShuffle([
      currentCharacter.name,
      notCurrent[0].name,
      notCurrent[1].name,
      notCurrent[2].name,
    ])
  );
  const [text, setText] = useState("???")
  return (
    <>
    <h2> {text} </h2>
      <Image
        src={currentCharacter.fullImage}
        alt="character"
        width={500}
        height={500}
      />
      <div className="flex flex-row justify-center items-center gap-6">
        {options.map((option) => (<button className="w-36 bg-sky-700 text-white py-1 rounded" onClick={() => checkAnswer(option)} key={option}> {option} </button>))}
      </div>
    </>
  );

  function checkAnswer(name: string) {
    console.log(name);
    if (name === currentCharacter.name) {
        setText("Correct!");
    }
    else {
        setText("Try Again!")
    }
  }
}
