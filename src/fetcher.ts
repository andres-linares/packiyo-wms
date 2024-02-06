const CONTENT_TYPE = "application/vnd.api+json";
const AUTHORIZATION = `Bearer ${process.env.PACKIYO_API_KEY}`;

const BASE_HEADERS = Object.freeze({
  "Content-Type": CONTENT_TYPE,
  Authorization: AUTHORIZATION,
});

const query = async (endpoint: string) => {
  const url = `${process.env.PACKIYO_API_URL}/${endpoint}`;

  const response = await fetch(url, { headers: BASE_HEADERS });
  return response.json();
};

export { query };
