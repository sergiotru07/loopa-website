const cardTitleHeight = "50";

let cardsContent = {
    firstCard: {
        featureIndex: "feature-one",
        color: "red lighten-1",
        featureTitle: "Feature One",
        featureDescription: "Lorem ipsum dolor sit amet, mutat graeco, Lorem ipsum dolor sit amet, mutat graeco"
    },
    secondCard: {
        featureIndex: "feature-two",
        color: "yellow lighten-1",
        featureTitle: "Feature Two",
        featureDescription: "Lorem ipsum dolor sit amet, mutat graeco, Lorem ipsum dolor sit amet, mutat graeco"
    },
    thirdCard: {
        featureIndex: "feature-three",
        color: "deep-purple lighten-2",
        featureTitle: "Feature Three",
        featureDescription: "Lorem ipsum dolor sit amet, mutat graeco, Lorem ipsum dolor sit amet, mutat graeco"
    },
    fourthCard: {
        featureIndex: "feature-four",
        color: "purple lighten-3",
        featureTitle: "Feature Four",
        featureDescription: "Lorem ipsum dolor sit amet, mutat graeco, Lorem ipsum dolor sit amet, mutat graeco"
    },
    fifthCard: {
        featureIndex: "feature-five",
        color: "light-blue lighten-3",
        featureTitle: "Feature Five",
        featureDescription: "Lorem ipsum dolor sit amet, mutat graeco, Lorem ipsum dolor sit amet, mutat graeco"
    }
};

Template.featuresSection.events({
    "mouseenter .card": function(e, t) {
        let $target = $(e.target),
            targetHeight = $target.height();

        $target
            .find(".card-back")
            .css("height", targetHeight);
    },
    "mouseleave .card": function(e, t) {
        let $target = $(e.target)
        $target
            .find(".card-back")
            .css("height", cardTitleHeight);
    }
});

Template.featuresSection.helpers({
    cardsContent: () => cardsContent
});
