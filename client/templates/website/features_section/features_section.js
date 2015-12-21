let cardsContent = {
    firstCard: {
        featureIndex: "feature-one",
        color: "red",
        featureTitle: "Feature One",
        featureDescription: "Lorem ipsum dolor sit amet, mutat graeco, Lorem ipsum dolor sit amet, mutat graeco"
    },
    secondCard: {
        featureIndex: "feature-two",
        color: "yellow",
        featureTitle: "Feature Two",
        featureDescription: "Lorem ipsum dolor sit amet, mutat graeco, Lorem ipsum dolor sit amet, mutat graeco"
    },
    thirdCard: {
        featureIndex: "feature-three",
        color: "blue",
        featureTitle: "Feature Three",
        featureDescription: "Lorem ipsum dolor sit amet, mutat graeco, Lorem ipsum dolor sit amet, mutat graeco"
    },
    fourthCard: {
        featureIndex: "feature-four",
        color: "pink",
        featureTitle: "Feature Four",
        featureDescription: "Lorem ipsum dolor sit amet, mutat graeco, Lorem ipsum dolor sit amet, mutat graeco"
    },
    fifthCard: {
        featureIndex: "feature-five",
        color: "indigo",
        featureTitle: "Feature Five",
        featureDescription: "Lorem ipsum dolor sit amet, mutat graeco, Lorem ipsum dolor sit amet, mutat graeco"
    },
    sixthCard: {
        featureIndex: "feature-six",
        color: "teal",
        featureTitle: "Feature Six",
        featureDescription: "Lorem ipsum dolor sit amet, mutat graeco, Lorem ipsum dolor sit amet, mutat graeco"
    }
};

let getTranslateHeight = (name) => {
    if (name === "feature-one") {
        return 550;
    } else if (name === "feature-two") {
        return 275;
    } else if (name === "feature-three") {
        return 275;
    } else if (name === "feature-four") {
        return 275;
    } else if (name === "feature-five") {
        return 350;
    } else if (name === "feature-six") {
        return 200;
    } else {
        return 600;
    }
};

Template.featuresSection.events({
    "mouseenter .card": function(e, t) {
        let $target = $(e.target);
        $target
            .find(".card-back")
            .css("transform", "translateY(0)");
    },
    "mouseleave .card": function(e, t) {
        let $target = $(e.target),
            targetName = $target.attr("name"),
            translateHeight = getTranslateHeight(targetName) - 70;

            console.log(getTranslateHeight(targetName));
        $target
            .find(".card-back")
            .css("transform", `translateY(${translateHeight}px)`);
    }
});

Template.featuresSection.helpers({
    cardsContent: () => cardsContent
});
