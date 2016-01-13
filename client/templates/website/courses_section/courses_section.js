let coursesInfo = [{
    courseIndex: "course-one",
    courseTitle: "Desarrollo Web",
    courseImage: "cursos/web.svg",
    totalCourses: "7",
    color: "red darken-1"
}, {
    courseIndex: "course-two",
    courseTitle: "Desarrollo Móvil",
    courseImage: "cursos/movil.svg",
    totalCourses: "7",
    color: "teal darken-1"
}, {
    courseIndex: "course-three",
    courseTitle: "Diseño",
    courseImage: "cursos/design.svg",
    totalCourses: "7",
    color: "purple lighten-2"
}, {
    courseIndex: "course-four",
    courseTitle: "Emprendimiento",
    courseImage: "cursos/emprendimiento2.svg",
    totalCourses: "7",
    color: "green lighten-2"
}, {
    courseIndex: "course-five",
    courseTitle: "Trading",
    courseImage: "cursos/trading.svg",
    totalCourses: "7",
    color: "cyan lighten-3"
}, {
    courseIndex: "course-six",
    courseTitle: "Fotografía",
    courseImage: "cursos/fotografia.svg",
    totalCourses: "7",
    color: "orange darken-3"
}];

Template.coursesSection.helpers({
    coursesInfo: () => coursesInfo
});
