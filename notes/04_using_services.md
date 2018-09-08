#using serivces

Create a class, which name ends with Service, example `ComponentService`, `component.service.ts`

Manual "injection" in constructor

`  constructor() {
     const service = new CoursesService();
     this.courses = service.getCourses();
   }`
