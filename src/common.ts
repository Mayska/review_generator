

export function random(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
}

export function setItem(list:string[]):string{
    return list[random(list.length)]
}
