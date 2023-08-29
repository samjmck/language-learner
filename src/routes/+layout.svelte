<script lang="ts">
    let translatedText = "";
    async function translate(text: string) {
        const response = await fetch("/api/translate", {
            method: "POST",
            body: JSON.stringify({ text }),
        });
        translatedText = await response.text();
    }
</script>

<main>
    <slot></slot>

    <div class="quick-translate">
        <input class="quick-translate-input" placeholder="Quick translate..." on:input={e => translate(e.target.value)}>
        <div class="quick-translate-result">
            {translatedText}
        </div>
    </div>
</main>

<style>
    main {
        position: relative;
        max-width: 550px;
        margin: 0 auto 6em auto;
    }
    div.quick-translate {
        padding: 0.1em;
        position: fixed;
        bottom: 1em;
        display: flex;
        flex-direction: row;
        border-radius: 0.3em;
        border: 1px solid #ededed;
        box-shadow: 0 0 2px 0 rgba(0,0,0,0.5);
        max-width: 550px;
        width: 100%;
        background: #fbfbfb;
    }
    .quick-translate-input {
        flex: 1;
        text-decoration: none;
        color: inherit;
        padding: 1em;
        display: block;
        border: none;
        border-radius: 0.3em 0 0 0.3em;
        cursor: pointer;
        outline: none;
    }
    .quick-translate-result {
        flex: 1;
        text-decoration: none;
        color: inherit;
        padding: 1em;
        display: block;
        border-left: 2px solid #ededed;
        border-radius: 0 0.3em 0.3em 0;
        outline: none;
        cursor: pointer;
    }
</style>