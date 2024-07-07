export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'availableQty',
      type: 'number',
      title: 'Available Quantity',
    },
    {
      name: 'desc',
      type: 'string',
      title: 'Description',
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
      name: 'disImage',
      type: 'image',
      title: 'Display Image',
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Main Image',
    },
    {
      name: 'combination',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
            },
            {
              name: 'price',
              type: 'number',
              title: 'Price',
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
  ],
}
