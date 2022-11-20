import { nameList } from "../data/fakeMovieData/nameList";
import { title } from "../data/fakeMovieData/titleList"
import { setItem } from "./common";

export class FakeMovie {
    paragraphFakeMovie: string

    constructor() {

        this.paragraphFakeMovie = this.getparagraphFakeMovie(
            this.getRealistorName(),
            this.getRealisateurOrigine(),
            this.getTitleMovie()
        )
    }


    private getparagraphFakeMovie(realistorName: string, realisateurOrigine: string, titleMovie: string): string {
        return "C'est clairement un homage de l'oeuvre : '" + titleMovie + "'"
            + ", du réalisateur " + realisateurOrigine + ", " + realistorName
    }

    private getTitleMovie(): string {
        return setItem(title.start);
    }

    private getRealisateurOrigine(): string {
        return setItem(title.origineList);
    }

    private getRealistorName(): string {
        return setItem(nameList.name) + " " + setItem(nameList.lettre) + "."
    }
}