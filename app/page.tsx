// import Game from "./components/game";
import dynamic from "next/dynamic";

export default function Home() {
  const Game = dynamic(() => import("./components/game"), {ssr: false});
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <h1 className="font-bold text-2xl">Who's that Anime Character?</h1>
      <Game />
    </main>
  );
}
