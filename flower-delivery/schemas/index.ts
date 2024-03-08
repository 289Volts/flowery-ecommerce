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
      {
        name: 'about',
        type: 'object',
        title: 'About',
        fields: [
          {
            name: 'heading',
            type: 'string',
            title: 'Heading',
          },
          {
            name: 'paragraph',
            type: 'text',
            title: 'Paragraph',
          },
        ],
      },
      {
        name: 'whyUs',
        type: 'array',
        title: 'Why choose us',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'heading',
                type: 'string',
                title: 'Heading',
              },
              {
                name: 'paragraph',
                type: 'text',
                title: 'Paragraph',
              },
            ],
          },
        ],
      },
      {
        name: 'services',
        type: 'array',
        title: 'Services',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'heading',
                type: 'string',
                title: 'Heading',
              },
              {
                name: 'paragraph',
                type: 'text',
                title: 'Paragraph',
              },
              {
                name: 'image',
                type: 'image',
                title: 'Image',
              },
            ],
          },
        ],
      },
      {
        name: 'testimonials',
        type: 'array',
        title: 'Testimonials',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'author',
                type: 'string',
                title: 'Author',
              },
              {
                name: 'paragraph',
                type: 'text',
                title: 'Paragraph',
              },
            ],
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
  {
    name: 'categories',
    type: 'document',
    title: 'Categories',
    fields: [
      {
        name: 'freshFlowers',
        type: 'array',
        title: 'Fresh Flowers',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'flowerType',
                type: 'string',
                title: 'Flower Type',
              },
              {
                name: 'image',
                type: 'image',
                title: 'Image',
              },
              {
                name: 'price',
                type: 'number',
                title: 'Price',
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
      // {
      //   name: 'driedFlowers',
      //   type: 'array',
      //   title: 'Dried Flowers',
      //   of: [
      //     {
      //       type: 'object',
      //       fields: [
      //         {
      //           name: 'flowerType',
      //           type: 'string',
      //           title: 'Flower Type',
      //         },
      //         {
      //           name: 'image',
      //           type: 'image',
      //           title: 'Image',
      //         },
      //         {
      //           name: 'price',
      //           type: 'number',
      //           title: 'Price',
      //         },
      //         {
      //           title: 'Categories',
      //           name: 'categories',
      //           type: 'array',
      //           of: [{type: 'reference', to: [{type: 'category'}]}],
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   name: 'livePlants',
      //   type: 'array',
      //   title: 'Live Plants',
      //   of: [
      //     {
      //       type: 'object',
      //       fields: [
      //         {
      //           name: 'flowerType',
      //           type: 'string',
      //           title: 'Flower Type',
      //         },
      //         {
      //           name: 'image',
      //           type: 'image',
      //           title: 'Image',
      //         },
      //         {
      //           name: 'price',
      //           type: 'number',
      //           title: 'Price',
      //         },
      //         {
      //           title: 'Categories',
      //           name: 'categories',
      //           type: 'array',
      //           of: [{type: 'reference', to: [{type: 'category'}]}],
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   name: 'aroma',
      //   type: 'array',
      //   title: 'Aroma',
      //   of: [
      //     {
      //       type: 'object',
      //       fields: [
      //         {
      //           name: 'flowerType',
      //           type: 'string',
      //           title: 'Flower Type',
      //         },
      //         {
      //           name: 'image',
      //           type: 'image',
      //           title: 'Image',
      //         },
      //         {
      //           name: 'price',
      //           type: 'number',
      //           title: 'Price',
      //         },
      //         {
      //           title: 'Slug',
      //           name: 'slug',
      //           type: 'array',
      //           of: [{type: 'reference', to: [{type: 'category'}]}],
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   name: 'freshners',
      //   type: 'array',
      //   title: 'Freshners',
      //   of: [
      //     {
      //       type: 'object',
      //       fields: [
      //         {
      //           name: 'flowerType',
      //           type: 'string',
      //           title: 'Flower Type',
      //         },
      //         {
      //           name: 'image',
      //           type: 'image',
      //           title: 'Image',
      //         },
      //         {
      //           name: 'price',
      //           type: 'number',
      //           title: 'Price',
      //         },
      //         {
      //           title: 'Categories',
      //           name: 'categories',
      //           type: 'array',
      //           of: [{type: 'reference', to: [{type: 'category'}]}],
      //         },
      //       ],
      //     },
      //   ],
      // },
    ],
  },
]
