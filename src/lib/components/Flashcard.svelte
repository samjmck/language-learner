<script lang="ts">
    import type { FlashcardData } from "$lib";

    export let flashcard: FlashcardData;
    export let hidden: boolean;
    export let toggleHide: () => void;
</script>

<div class="flashcard" on:click={toggleHide}>
    <div class="flashcard-half">
        {flashcard.nativeLanguage}
    </div>
    <div class="flashcard-half">
        {hidden ? "..." : flashcard.learningLanguage}
    </div>
</div>

<style>
    div.flashcard {
        display: flex;
        flex-direction: row;
        gap: 1em;
        margin: 1em 0;
    }
    div.flashcard-half {
        flex: 1;
        cursor: pointer;
        text-align: center;
        background: #fbfbfb;
        padding: 1em;
        border-radius: 0.3em;
        box-shadow: 0 0 2px 0 rgba(0,0,0,0.5);
        border: 1px solid #ededed;
        user-select: none;
    }
</style>