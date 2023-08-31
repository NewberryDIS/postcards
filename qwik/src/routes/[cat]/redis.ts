import Redis from "ioredis";
const redis = new Redis({
  host: "127.0.0.1",
  port: 6379,
});

export async function getApiData(url: string) {
  // await redis.flushall();
  let data = await redis.get(url);
  if (!data) {
    const response = await fetch(url);
    data = await response.json(); // parse response as JSON
    redis.set(url, JSON.stringify(data), "EX", 60 * 60);
  } else {
    data = JSON.parse(data);
  }
  return data;
}
