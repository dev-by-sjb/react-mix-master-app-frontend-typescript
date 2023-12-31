import { type Drink } from "../../types/index";
import axios from "axios";

const cocktailSearchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const searchCocktailQuery = (searchTerm: string) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async (): Promise<Array<Drink>> => {
      const resp = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return resp.data?.drinks;
    },
  };
};
