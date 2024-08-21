"use client";
import Game from "./components/game";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <h1 className="font-bold text-2xl">Who's that Anime Character?</h1>
      <Game />
    </main>
  );
}
