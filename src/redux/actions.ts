// want action type at top:
// tslint:disable:object-literal-sort-keys

export interface IAction {
    type: string;
}

export const CLICK = 'CLICK';

export interface IClickAction extends IAction {
    squareNum: number;
}

export function clickAction(squareNum: number): IClickAction {
    return {
        type: CLICK,
        squareNum,
    }
}
