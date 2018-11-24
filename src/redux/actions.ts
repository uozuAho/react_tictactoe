interface IAction {
    type: string;
}

export class ClickAction implements IAction {

    public readonly type = 'CLICK';

    constructor(public squareNum: number) {}
}
