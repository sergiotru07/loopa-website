let coursesInfo = [{
    courseIndex: "course-one",
    courseTitle: "Desarrollo Web",
    totalCourses: "7"
}, {
    courseIndex: "course-two",
    courseTitle: "Desarrollo Móvil",
    totalCourses: "7"
}, {
    courseIndex: "course-three",
    courseTitle: "Diseño",
    totalCourses: "7"
}, {
    courseIndex: "course-four",
    courseTitle: "Emprendimiento",
    totalCourses: "7"
}, {
    courseIndex: "course-five",
    courseTitle: "Trading",
    totalCourses: "7"
}, {
    courseIndex: "course-six",
    courseTitle: "Fotografía",
    totalCourses: "7"
}];

Template.coursesSection.helpers({
    coursesInfo: () => coursesInfo
});