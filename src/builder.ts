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

    private getFourthParagraph(): string {
        return "Comme le réalisateur le souligne: '" + this.setItem(fourthParagraphList) + "'"
    }

    private getFifthParagraph(): string {
        return "La musique est une approche plus " + this.setItem(styleMusiqueList) + " du titre "
            + this.setItem(musiqueListe) + "."
    }

    private getThirdParagraph(): string {
        return this.setItem(thirdParagraphPart1) + " " + this.setItem(thirdParagraphPart2) + "."
    }

    private random(max: number): number {
        return Math.floor(Math.random() * Math.floor(max));
    }

    private getFirstParagraph(): string {
        return 'Un film' + " " + this.setItem(maleList) + " " + this.setItem(endList) + "."
    }

    private getSecondParagraph(): string {
        const item = this.setItem(itemList);
        let secondParagraph = "C'est " + this.setItem(adberbList) + " " + item + ": " + this.getItem(item);
        return secondParagraph
    }

    private getItem(item: string): string {
        switch (item) {
            case "du Tableau":
                return this.setItem(tableauList) + "."
            case "de la Fable":
                return this.setItem(fableList) + " De Jean de La Fontaine."
            case "du Livre":
                return this.setItem(livreList) + "."
            case "du Conte":
                return this.setItem(conteList) + "."
            default:
                throw 'Error getItem()'
        }
    }

    private setItem(list:string[]):string{
        return list[this.random(list.length)]
    }
}


