import { adberbList } from "../data/builderData/adberbList";
import { conteList } from "../data/builderData/conteList";
import { endList } from "../data/builderData/endList";
import { fableList } from "../data/builderData/fableList";
import { fourthParagraphList } from "../data/builderData/fourthParagraphList";
import { itemList } from "../data/builderData/itemList";
import { livreList } from "../data/builderData/livreList";
import { maleList } from "../data/builderData/maleList";
import { musiqueListe } from "../data/builderData/musiqueListe";
import { styleMusiqueList } from "../data/builderData/styleMusiqueList";
import { tableauList } from "../data/builderData/tableauList";
import { thirdParagraphPart1 } from "../data/builderData/thirdParagraphPart1";
import { thirdParagraphPart2 } from "../data/builderData/thirdParagraphPart2";
import { random, setItem } from "./common";
import { FakeMovie } from "./fakeMovie";

export class Builder {
    firstParagraph: string
    secondParagraph: string
    thirdParagraph: string
    fifthParagraph: string
    fourthParagraph:string
    sixParagraph:FakeMovie

    constructor() {
        this.firstParagraph = this.getFirstParagraph();
        this.secondParagraph = this.getSecondParagraph();
        this.thirdParagraph = this.getThirdParagraph()
        this.fifthParagraph = this.getFifthParagraph()
        this.fourthParagraph = this.getFourthParagraph()
        this.sixParagraph = new FakeMovie()
    }

    private getFourthParagraph(): string {
        return "Comme le réalisateur le souligne: '" + setItem(fourthParagraphList) + "'"
    }

    private getFifthParagraph(): string {
        return "La musique est une approche plus " + setItem(styleMusiqueList) + " du titre "
            + setItem(musiqueListe) + "."
    }

    private getThirdParagraph(): string {
        return setItem(thirdParagraphPart1) + " " + setItem(thirdParagraphPart2) + "."
    }

    

    private getFirstParagraph(): string {
        return 'Un film' + " " + setItem(maleList) + " " + setItem(endList) + "."
    }

    private getSecondParagraph(): string {
        const item = setItem(itemList);
        let secondParagraph = "C'est " + setItem(adberbList) + " " + item + ": " + this.getItem(item);
        return secondParagraph
    }

    private getItem(item: string): string {
        switch (item) {
            case "du Tableau":
                return setItem(tableauList) + "."
            case "de la Fable":
                return setItem(fableList) + " De Jean de La Fontaine."
            case "du Livre":
                return setItem(livreList) + "."
            case "du Conte":
                return setItem(conteList) + "."
            default:
                throw 'Error getItem()'
        }
    }

    
}


