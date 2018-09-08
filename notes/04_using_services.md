#using serivces

##Create service instance  in constructor
Create a class, which name ends with Service, example `ComponentService`, `component.service.ts`

Manual "injection" in constructor

`  constructor() {
     const service = new CoursesService();
     this.courses = service.getCourses();
   }`

##Dependency injection
"25 dollar term for a 5 cent conception"

##Automatic service creation
`ng g s email`

CREATE src/app/email.service.spec.ts (328 bytes)
CREATE src/app/email.service.ts (134 bytes)

`@Injectable` decorator tells, that this class in an injectoble class, which means angular should be able to inject dependencies of this class in constructor
