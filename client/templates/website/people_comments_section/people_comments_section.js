let commntsInfo = [{
    comment: "Giant Swarm looks set to be our solution for devops and infrastructure, allowing us to concentrate on building a great product",
    commentAuthor: "Sam Lown",
    imgPath:"people-comments/c1.jpg",
    sourceAuthor: "CTO, Cabify"
}, {
    comment: "Giant Swarm looks set to be our solution for devops and infrastructure, allowing us to concentrate on building a great product",
    commentAuthor: "Sharon Spencer",
    imgPath:"people-comments/c2.jpg",
    sourceAuthor: "CEO, Uber"
}];

Template.peopleCommentsSection.helpers({
    commntsInfo: () => commntsInfo
});