// eslint-disable-next-line consistent-return
async function getGIPHYData() {
  try {
    const GIPHYResponse = await fetch(
      "https://api.giphy.com/v1/gifs/translate?api_key=jTqTuwCeo5smFY9bZw2BuQCw1O6Sy89g&s=loading",
      { mode: "cors" }
    );

    if (!GIPHYResponse.ok) {
      throw new Error("FAILED STATUS");
    }

    if (GIPHYResponse.status === 200) {
      const json = await GIPHYResponse.json();
      return json;
    }
  } catch (error) {
    return console.error(`ERROR HAS BEEN DETECTED: ${error}`);
  }
}

export default getGIPHYData;
