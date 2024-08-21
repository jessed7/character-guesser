export type Character = {
    name: string;
    fullImage: string;
    silhouette: string;
}

export const allCharacters: Character[] = [
    {
        name: "Ari",
        fullImage: "/characters/ari.png",
        silhouette: "/characters/ariSilhouette.png"
    },
    {
        name: "Smol Ari",
        fullImage: "/characters/smolAri.png",
        silhouette: "/characters/smolAriSilhouette.png"
    }, 
    {
        name: "Naruto",
        fullImage: "/characters/naruto.png",
        silhouette: "/characters/narutoSilhouette.png"
    },
    {
        name: "Sailor Moon",
        fullImage: "/characters/sailorMoon.png",
        silhouette: "/characters/sailorMoonSilhouette.png"
    }
]