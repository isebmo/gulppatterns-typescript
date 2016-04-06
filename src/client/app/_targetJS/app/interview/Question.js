var app;
(function (app) {
    var interview;
    (function (interview) {
        'use strict';
        var Question = (function () {
            function Question(intro, choice) {
                this.intro = intro;
                this.choice = choice;
            }
            return Question;
        }());
        interview.Question = Question;
    })(interview = app.interview || (app.interview = {}));
})(app || (app = {}));

//# sourceMappingURL=Question.js.map
