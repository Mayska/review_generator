import { title } from "../data/fakeMovieData/titleList"
import { setItem } from "./common";

export class FakeMovie {
    titleMovie: string
    realisateurOrigine: string

    constructor() {
        this.titleMovie = setItem(title.start) + setItem(title.middle) + setItem(title.end)
        this.realisateurOrigine = setItem(title.origineList)
    }

}