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

  const [numCorrect, setNumCorrect] = useState(0);
  const [attempts, setAttempts] = useState(0);

  const [isRunning, setIsRunning] = useState(true);

  function cont(): any {
    console.log("continue");
    setIsCorrect(false);
    setText("???");

    const newCharList = characters.filter(
      (char) => char.name !== currentCharacter.name
    );

    if (newCharList.length === 0) {
      setIsRunning(false);
    } else {
      const newChar =
        newCharList[Math.floor(Math.random() * newCharList.length)];
      const newNC = arrayShuffle(
        allCharacters.filter((char) => char.name !== newChar.name)
      );
      const newOptions = arrayShuffle([
        newChar.name,
        newNC[0].name,
        newNC[1].name,
        newNC[2].name,
      ]);

      setCurrentCharacter(newChar);
      setNotCurrent(newNC);
      setOptions(newOptions);
      setCharacters(newCharList);
    }
  }

  function checkAnswer(name: string) {
    setAttempts(attempts + 1);
    console.log(name);
    console.log(currentCharacter);
    if (name === currentCharacter.name) {
      setText("Correct!");
      setIsCorrect(true);
      setNumCorrect(numCorrect + 1);
    } else {
      setText("Try Again!");
    }
  }

  function restart() {
    const newChars = allCharacters;
    const newChar = newChars[Math.floor(Math.random() * newChars.length)];
    const newNC = arrayShuffle(
      allCharacters.filter((char) => char.name !== newChar.name)
    );
    const newOptions = arrayShuffle([
      newChar.name,
      newNC[0].name,
      newNC[1].name,
      newNC[2].name,
    ]);
    const newText = "???";
    const newIsCorrect = false;
    const newNumCorrect = 0;
    const newAttempts = 0;
    const newIsRunning = true;

    setCharacters(newChars);
    setCurrentCharacter(newChar);
    setNotCurrent(newNC);
    setOptions(newOptions);
    setText(newText);
    setIsCorrect(newIsCorrect);
    setNumCorrect(newNumCorrect);
    setAttempts(newAttempts);
    setIsRunning(newIsRunning);
  }

  return (
    <>
      {isRunning && (
        <>
          <h2> {text} </h2>
          <h2>
            {" "}
            <span className="font-bold"> Current Score: </span> {numCorrect} /{" "}
            {attempts}{" "}
          </h2>
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
                  className="w-44 bg-sky-700 text-white py-1 rounded"
                  onClick={() => checkAnswer(option)}
                  key={option}
                >
                  {" "}
                  {option}{" "}
                </button>
              ))}
            {isCorrect && (
              <button
                className="w-44 bg-sky-700 text-white py-1 rounded"
                onClick={() => cont()}
              >
                Continue
              </button>
            )}
          </div>
        </>
      )}

      {!isRunning && (
        <>
          <h2> Thanks for Playing! </h2>
          <h2>
            {" "}
            <span className="font-bold"> Final Score: </span> {numCorrect} /{" "}
            {attempts}{" "}
          </h2>

          <button className="w-44 bg-sky-700 text-white py-1 rounded" onClick={() => (restart())}> Start Over </button>
        </>
      )}
    </>
  );
}
