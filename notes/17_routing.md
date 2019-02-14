# Routing

In import section of file app.module.ts

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

More specific routes goes first, because, if 'posts' is be before 'posts/:postname', than it will be always routed, instead of more specific 'posts/:postname'  
