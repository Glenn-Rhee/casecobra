interface Reviews {
  reviewOne: string;
  highlight: string;
  reviewTwo: string;
  name: string;
  imgSrc: string;
}

export const reviews: Reviews[] = [
  {
    reviewOne:
      "The case feels durable and I even got a compliment on the design. Had the case for two and a half months now and",
    highlight: "the image is super clear",
    reviewTwo:
      ", on the case I had before, the image started fading into yellow-ish color after a couple weeks. Love it.",
    name: "Jonathan",
    imgSrc: "user-1.png",
  },
  {
    reviewOne:
      "I usually keep my phone together with my keys in my pocket and that led to some pretty heavy scratchmarks on all of my last phone cases. This one, besides a barely noticeable scratch on the corner,",
    highlight: "looks brand new after about half a year",
    reviewTwo: ". I dig it.",
    name: "Josh",
    imgSrc: "user-4.jpg",
  },
];

export const PHONES = [
  "/testi/1.jpg",
  "/testi/2.jpg",
  "/testi/3.jpg",
  "/testi/4.jpg",
  "/testi/5.jpg",
  "/testi/6.jpg",
];

export function splitArray<T>(array: Array<T>, numParts: number) {
  const result: Array<Array<T>> = [];

  for (let i = 0; i < array.length; i++) {
    const index = i % numParts;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }

  return result;
}
