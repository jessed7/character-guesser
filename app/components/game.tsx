"use client";
import Image from "next/image";
import { allCharacters } from "../characters";
import { useState } from "react";
import arrayShuffle from "array-shuffle";

export default function Game() {
  const [characters, setCharacters] = useState(allCharacters);
  const [currentCharacter, setCurrentCharacter] = useState(
    characters[Math.floor(Math.random() * characters.length)]
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
  const [text, setText] = useState("???");
  const [isCorrect, setIsCorrect] = useState(false);
  console.log(currentCharacter.fullImage);

  return (
    <>
      <h2> {text} </h2>
      <div></div>
      <div>
        {!isCorrect && (
          <Image
            src={currentCharacter.silhouette}
            alt="character"
            width={500}
            height={600}
            className="object-contain h-[600px] w-[500px]"
          />
        )}

        {isCorrect && (
          <Image
            src={currentCharacter.fullImage}
            alt="character"
            width={500}
            height={600}
            className="object-contain h-[600px] w-[500px]"
            //   fill={true}
            // sizes="80vh"
          />
        )}
      </div>

      <div className="flex flex-row justify-center items-center gap-6">
        {!isCorrect &&
          options.map((option) => (
            <button
              className="w-36 bg-sky-700 text-white py-1 rounded"
              onClick={() => checkAnswer(option)}
              key={option}
            >
              {" "}
              {option}{" "}
            </button>
          ))}
        {isCorrect && (
          <button
            className="w-36 bg-sky-700 text-white py-1 rounded"
            onClick={() => cont()}
          >
            Continue
          </button>
        )}
      </div>
    </>
  );

  function cont(): any {
    console.log("continue");
    setIsCorrect(false);
    setText("???");
    setCurrentCharacter(
      characters[Math.floor(Math.random() * characters.length)]
    );
    setNotCurrent(
      arrayShuffle(
        allCharacters.filter((char) => char.name !== currentCharacter.name)
      )
    );
    arrayShuffle([
      currentCharacter.name,
      notCurrent[0].name,
      notCurrent[1].name,
      notCurrent[2].name,
    ]);
  }
  function checkAnswer(name: string) {
    console.log(name);
    if (name === currentCharacter.name) {
      setText("Correct!");
      setIsCorrect(true);
    } else {
      setText("Try Again!");
    }
  }
}
