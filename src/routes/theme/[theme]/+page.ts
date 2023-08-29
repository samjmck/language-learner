import type { PageLoad } from "../../../../.svelte-kit/types/src/routes/theme/[theme]/$types";
import type { FlashcardData } from "$lib";
import { travelFlashcards } from "$lib/flashcards-data/travel";
import { emotionsFlashcards } from "$lib/flashcards-data/emotions";
import { foodDrinksFlashcards } from "$lib/flashcards-data/food-drinks";
import { natureFlashcards } from "$lib/flashcards-data/nature";
import { healthFlashcards } from "$lib/flashcards-data/health";
import { sportsFlashcards } from "$lib/flashcards-data/sports";

export const load: PageLoad = (event) => {
    let flashcards: FlashcardData[] = [];
    if (event.params.theme === "travel") {
        flashcards = travelFlashcards;
    } else if (event.params.theme === "emotions") {
        flashcards = emotionsFlashcards;
    } else if (event.params.theme === "food-drinks") {
        flashcards = foodDrinksFlashcards;
    } else if (event.params.theme === "nature") {
        flashcards = natureFlashcards;
    } else if (event.params.theme === "health") {
        flashcards = healthFlashcards;
    } else if (event.params.theme === "sports") {
        flashcards = sportsFlashcards;
    }
    return { flashcards };
};