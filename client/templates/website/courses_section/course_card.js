Template.courseCard.helpers({
    courseCardHeight: () => Session.get("courseCardWidth"),
    courseMainCardHeight: () => Session.get("courseCardWidth") - 20
});
