<script lang="ts">
    import type { PageData } from "./$types";
    import Flashcard from "$lib/components/Flashcard.svelte";
    import type { FlashcardData } from "$lib";

    export let data: PageData;

    let hiddenFlashcards = new Set<FlashcardData>();

    function toggleHideFlashcard(flashcard: FlashcardData) {
        if (hiddenFlashcards.has(flashcard)) {
            hiddenFlashcards.delete(flashcard);
        } else {
            hiddenFlashcards.add(flashcard);
        }
        hiddenFlashcards = hiddenFlashcards;
    }

    function showAll() {
        hiddenFlashcards = new Set();
    }

    function hideAll() {
        hiddenFlashcards = new Set(data.flashcards);
    }
</script>

<div class="header">
    <a href="/">Go back</a>
    <button on:click={hideAll}>Hide all</button>
    <button on:click={showAll}>Show all</button>
</div>

{#each data.flashcards as flashcard}
    <Flashcard flashcard={flashcard} hidden={hiddenFlashcards.has(flashcard)} toggleHide={() => toggleHideFlashcard(flashcard)} />
{/each}

<style>
    div.header {
        display: flex;
        flex-direction: row;
        gap: 1em;
        border-bottom: 2px solid #d7d7d7;
        margin: 1em 0;
        padding: 1em 0;
        font-size: 0.7em;
    }
</style>