interface IAction {
    type: string;
}

export interface IClickAction extends IAction {
    squareNum: number;
}

export function clickAction(squareNum: number): IClickAction {
    return {
        type: 'CLICK',
        // tslint:disable-next-line:object-literal-sort-keys
        squareNum,
    }
}

// export class ClickAction implements IAction {

//     public readonly type = 'CLICK';

//     constructor(public squareNum: number) {}
// }
