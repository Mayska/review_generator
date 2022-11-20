import { adberbList } from "../data/adberbList";
import { conteList } from "../data/conteList";
import { endList } from "../data/endList";
import { fableList } from "../data/fableList";
import { fourthParagraphList } from "../data/fourthParagraphList";
import { itemList } from "../data/itemList";
import { livreList } from "../data/livreList";
import { maleList } from "../data/maleList";
import { musiqueListe } from "../data/musiqueListe";
import { styleMusiqueList } from "../data/styleMusiqueList";
import { tableauList } from "../data/tableauList";
import { thirdParagraphPart1 } from "../data/thirdParagraphPart1";
import { thirdParagraphPart2 } from "../data/thirdParagraphPart2";

export class Builder {
    firstParagraph: string
    secondParagraph: string
    thirdParagraph: string
    fifthParagraph: string
    fourthParagraph:string

    constructor() {
        this.firstParagraph = this.getFirstParagraph();
        this.secondParagraph = this.getSecondParagraph();
        this.thirdParagraph = this.getThirdParagraph()
        this.fifthParagraph = this.getFifthParagraph()
        this.fourthParagraph = this.getFourthParagraph()
    }
    getFourthParagraph(): string {
        return "Comme le réalisateur le souligne: '" + fourthParagraphList[this.random(fourthParagraphList.length)] + "'"
    }
    getFifthParagraph(): string {
        return "La musique est une approche plus " + styleMusiqueList[this.random(styleMusiqueList.length)] + " de "
            + musiqueListe[this.random(musiqueListe.length)] + "."
    }

    private getThirdParagraph(): string {
        return thirdParagraphPart1[this.random(thirdParagraphPart1.length)] + " " + thirdParagraphPart2[this.random(thirdParagraphPart2.length)] + "."
    }

    private random(max: number): number {
        return Math.floor(Math.random() * Math.floor(max));
    }

    private getFirstParagraph(): string {
        return 'Un film' + " " + maleList[this.random(maleList.length)] + " " + endList[this.random(endList.length)] + "."
    }

    private getSecondParagraph(): string {
        const item = itemList[this.random(itemList.length)];
        let secondParagraph = "C'est " + adberbList[this.random(adberbList.length)] + " " + item + ": " + this.getItem(item);
        return secondParagraph
    }

    private getItem(item: string): string {
        switch (item) {
            case "du Tableau":
                return tableauList[this.random(tableauList.length)] + "."
            case "de la Fable":
                return fableList[this.random(fableList.length)] + " De Jean de La Fontaine."
            case "du Livre":
                return livreList[this.random(livreList.length)] + "."
            case "du Conte":
                return conteList[this.random(conteList.length)] + "."
            default:
                throw 'Error getItem()'
        }
    }
}


