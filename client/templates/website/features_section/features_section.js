let cardsContent = {
    firstCard: {
        featureIndex: "feature-one",
        color: "red lighten-1",
        featureTitle: "Feature One",
        colorText:"white-text",
        featureDescription: "Lorem ipsum dolor sit amet, mutat graeco, Lorem ipsum dolor sit amet, mutat graeco"
    },
    secondCard: {
        featureIndex: "feature-two",
        color: "yellow lighten-1",
        featureTitle: "Feature Two",
        colorText:"grey-text text-darken-1",
        featureDescription: "Lorem ipsum dolor sit amet, mutat graeco, Lorem ipsum dolor sit amet, mutat graeco"
    },
    thirdCard: {
        featureIndex: "feature-three",
        color: "deep-purple lighten-2",
        featureTitle: "Feature Three",
        colorText:"white-text",
        featureDescription: "Lorem ipsum dolor sit amet, mutat graeco, Lorem ipsum dolor sit amet, mutat graeco"
    },
    fourthCard: {
        featureIndex: "feature-four",
        color: "purple lighten-3",
        featureTitle: "Feature Four",
        colorText:"white-text",
        featureDescription: "Lorem ipsum dolor sit amet, mutat graeco, Lorem ipsum dolor sit amet, mutat graeco"
    },
    fifthCard: {
        featureIndex: "feature-five",
        color: "light-blue lighten-3",
        featureTitle: "Feature Five",
        colorText:"white-text",
        featureDescription: "Lorem ipsum dolor sit amet, mutat graeco, Lorem ipsum dolor sit amet, mutat graeco"
    }
};

Template.featuresSection.events({
    "mouseenter .card": function(e, t) {
        $(e.target)
            .find(".card-back")
            .css("transform", "translateY(0)");
    },
    "mouseleave .card": function(e, t) {
         $(e.target)
            .find(".card-back")
            .removeAttr("style");
    }
});


Template.featuresSection.helpers({
    cardsContent: () => cardsContent
});
