const cardTitleHeight = "50";
const [largeHeight, mediumHeight, smallHeight] = [
    [550, 275, 275, 275, 350, 200],
    [550, 275, 275, 275, 250, 250],
    200
];

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

let _heightValidation = (name, heightArr) => {
    if (name === "feature-one") {
        return heightArr[0];
    } else if (name === "feature-two") {
        return heightArr[1];
    } else if (name === "feature-three") {
        return heightArr[2];
    } else if (name === "feature-four") {
        return heightArr[3];
    } else if (name === "feature-five") {
        return heightArr[4];
    } else if (name === "feature-six") {
        return heightArr[5];
    }
};

let getTranslateHeight = (name) => {
    let windowWidth = Session.get("windowWidth");
    if (windowWidth >= 993) {
        return _heightValidation(name, largeHeight);
    } else if (windowWidth < 993 && windowWidth > 600) {
        return _heightValidation(name, mediumHeight);
    } else if (windowWidth <= 600) {
        return smallHeight;
    }
};

// Template.featuresSection.events({
//     "mouseenter .card": function(e, t) {
//         let $target = $(e.target),
//             targetHeight = $target.height();

//         $target
//             .find(".card-back")
//             .css("height", targetHeight);
//     },
//     "mouseleave .card": function(e, t) {
//         let $target = $(e.target)
//         $target
//             .find(".card-back")
//             .css("height", cardTitleHeight);
//     }
// });

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

        $target
            .find(".card-back")
            .removeAttr("style");
    }
});


Template.featuresSection.helpers({
    cardsContent: () => cardsContent
});
