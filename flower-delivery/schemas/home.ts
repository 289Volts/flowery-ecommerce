export default {
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
}
