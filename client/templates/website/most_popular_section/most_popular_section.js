let mostPopularInfo = [{
    courseTitle: "Javascript Avanzado",
    cardContent: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
    enrolled: "27 estudiantes",
    imagePath: "most-popular/javascript.png",
    index:"1"
}, {
    courseTitle: "Posicionamiento con Flexbox",
    cardContent: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
    enrolled: "27 estudiantes",
    imagePath: "most-popular/css3.jpg",
    index:"2"
}, {
    courseTitle: "Meteor de Cero a Profesional",
    cardContent: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
    enrolled: "27 estudiantes",
    imagePath: "most-popular/meteor.png",
    index:"3"
}, {
    courseTitle: "Tooling",
    cardContent: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
    enrolled: "27 estudiantes",
    imagePath: "most-popular/gulp.jpg",
    index:"4"
}, {
    courseTitle: "Node JS",
    cardContent: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
    enrolled: "27 estudiantes",
    imagePath: "most-popular/node.png",
    index:"5"
}, {
    courseTitle: "Preprocesadores CSS",
    cardContent: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
    enrolled: "27 estudiantes",
    imagePath: "most-popular/sass.jpg",
    index:"6"
}, {
    courseTitle: "Web Scraping",
    cardContent: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
    enrolled: "27 estudiantes",
    imagePath: "most-popular/scraping.png",
    index:"7"
}, {
    courseTitle: "Phoenix",
    cardContent: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
    enrolled: "27 estudiantes",
    imagePath: "most-popular/phoenix.png",
    index:"8"
}];

Template.mostPopularSection.helpers({
    mostPopularInfo: () => mostPopularInfo,
    indexIs: (index, value) => index === value,
});
