#Pipes
Pipes are used to format data

There are built-in pipes, and custom pipes can be made

```
<h2>Course info (built-in pipes used)</h2>
<p>{{ course.title | uppercase | lowercase}}</p>
<p>{{ course.students | number }}</p>
<p>{{ course.rating | number:'2.1-1'}}</p>
<p>{{ course.price | currency:'AUD':true:'3.2-2' }}</p>
<p>{{ course.releaseDate | date:'dd.mm.yyyy' }}</p>
```
```
<p>{{ course.rating | number:'2.1-1'}}</p>
```
The value will be rounded 

##Custom pipe example
```
@Pipe({
  name: 'summary'
})
export class SummatyPipe implements PipeTransform {
  transform(value: string, limit?: number) {
    if (!value) {
      return null;
    }
    const actualLimit = (limit) ? limit : 50;
    return value.substring(0, actualLimit) + '...';
  }
}
```
