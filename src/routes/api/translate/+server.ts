import type { RequestHandler } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";

export const POST: RequestHandler = async (event) => {
    const data: { text: string } = await event.request.json();
    const response = await fetch("https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=en&to=nl", {
        method: "POST",
        headers: {
            "Ocp-Apim-Subscription-Key": env.AZURE_SUBSCRIPTION_KEY,
            "Ocp-Apim-Subscription-Region": "westeurope",
            "Content-Type": "application/json",
        },
        body: JSON.stringify([{
            Text: data.text,
        }]),
    });
    const json = await response.json();
    return new Response(json[0].translations[0].text);
};