import useData from "./useData";
import { Platform } from "./useGames";
import platforms from "../data/platforms";


const usePlatforms = () => ({data : platforms, error : null})

export default usePlatforms;