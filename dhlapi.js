let trackingNo = "00340434292135100179";
let REPLACE_KEY_VALUE = "bgx5UPP53HAcK9PczaeDAgYxAaPYzJFX";

const options = {
  method: "GET",
  headers: { "DHL-API-Key": REPLACE_KEY_VALUE },
};

fetch(
  "https://api-eu.dhl.com/track/shipments?trackingNumber=00340434292135100179&language=en&offset=0&limit=5",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
