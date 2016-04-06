module app.interview {
    'use strict';

    export interface IQuestion {
        intro: string,
        choice: Array<IChoice>
    }

    export class Question implements IQuestion {
        constructor(public intro: string,
                    public choice: Array<IChoice>) {

        }

    }

    export interface IChoice {
        text: string,
        code?: string
    }
}
