# Routing

In import section of file app.module.ts
```
RouterModule.forRoot([
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'posts/:postname',
    component: PostCardComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
])
```
More specific routes goes first, because, if 'posts' is be before 'posts/:postname', than it will be always routed, instead of more specific 'posts/:postname'  

Place _router-outlet_ tag in template in place you need to change content
```html
<router-outlet></router-outlet>
```

To avoid "flicker" effect user _routerLink_ instead of _href_ attribute
```html
<a routerLink="/posts">Posts</a>
```

Applying in template
```html
<a [routerLink]="['/profile', follower.id]">{{ follower.login }}</a>
```

_routerLinkActive_ attribute value contains a list of classes, that will be applied, if link is active
```
routerLinkActive="active current" 
```

Getting route parameters (required on path)
```
ngOnInit() {
// for optional, which goes after '?' it will be queryParamMap
this.route.paramMap // observable
  .subscribe(params => {
    const id = +params.get('id');
    console.log('id', id);
  })
}
```
paramMap is Observable, because previous component is destroyed (onDestroy called), and new one created (onInit called). If previous and next components are the same, is does not destroys, there is one instance of it.
We need to subscribe on the event of appearance new param.

There is a simpler way to access
```$xslt
this.route.snapshot.paramMap.get('id')
``` 
Use it, if you absolutely sure, that application will not be routed from the component to itself

## How to subscribe to all parameters

```
Observable.combineLatest([
  this.route.paramMap,
  this.route.queryParamMap
]).subscribe(combined => {
  const id = combined[0].get('id');     // 0 - paramMap, url parameters
  const page = combined[1].get('page'); // 1 - queryParamMap, optional query parameters
  // ...
}
```
