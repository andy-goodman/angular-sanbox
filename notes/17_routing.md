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
