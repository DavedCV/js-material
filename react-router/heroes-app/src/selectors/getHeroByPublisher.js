import { heroes } from "../data/heroes";

const getHeroByPublisher = (publisher) => {
  if (publisher !== "Marvel Comics" && publisher !== "DC Comics")
    throw new Error("Publisher not found");

  return heroes.filter((hero) => hero.publisher === publisher);
};

export default getHeroByPublisher;
