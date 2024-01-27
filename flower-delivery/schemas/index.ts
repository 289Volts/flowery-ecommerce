export const schemaTypes = [
  {
    name: 'home',
    type: 'document',
    title: 'Home page',
    fields: [
      {
        name: 'heroSection',
        title: 'hero section',
        type: 'object',
        fields: [
          {
            name: 'heroHeading',
            type: 'string',
            title: 'hero heading',
          },
          {
            name: 'heroSubHeading',
            type: 'string',
            title: 'hero sub-heading',
          },
          {
            name: 'heroExtraText',
            type: 'string',
            title: 'hero extra Text',
          },
          {
            name: 'heroImage',
            type: 'image',
            title: 'hero image',
          },
          {
            title: 'Categories',
            name: 'categories',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'category'}]}],
          },
        ],
      },
    ],
  },
  {
    name: 'category',
    type: 'document',
    title: 'Category',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
        },
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
      },
    ],
  },
]
