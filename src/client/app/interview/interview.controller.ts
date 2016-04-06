module app.interview {
    import Inject = app.core.Inject;
    'use strict';

    interface IInterviewVm {
        questions: Array<IQuestion>
    }

    export class InterviewController implements IInterviewVm {

        constructor() {
            var choice:Array<IChoice> = [
                {text: 'Je Sais pas', code: ''}, {text: 'Jean Simplet'}, {text: 'JavaScript', code: ''}, {
                    text: 'Jean Star',
                    code: ''
                }];
            var questionMock:Question = {intro: 'que veut dire JS ?', choice: choice};
            this.questions.push(questionMock);
        }

        questions:Array<IQuestion> = [];

    }

    angular
        .module('app.interview')
        .controller('InterviewController', InterviewController);
}
