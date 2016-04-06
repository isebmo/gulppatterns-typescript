var app;
(function (app) {
    var interview;
    (function (interview) {
        'use strict';
        var InterviewController = (function () {
            function InterviewController() {
                this.questions = [];
                var choice = [
                    { text: 'Je Sais pas', code: '' }, { text: 'Jean Simplet' }, { text: 'JavaScript', code: '' }, {
                        text: 'Jean Star',
                        code: ''
                    }];
                var questionMock = { intro: 'que veut dire JS ?', choice: choice };
                this.questions.push(questionMock);
            }
            return InterviewController;
        }());
        interview.InterviewController = InterviewController;
        angular
            .module('app.interview')
            .controller('InterviewController', InterviewController);
    })(interview = app.interview || (app.interview = {}));
})(app || (app = {}));

//# sourceMappingURL=interview.controller.js.map
