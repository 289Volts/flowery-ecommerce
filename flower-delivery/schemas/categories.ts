export default {
  name: 'categories',
  type: 'document',
  title: 'Categories',
  fields: [
    {name: 'title', type: 'string', title: 'Title'},
    {
      name: 'homeImage',
      type: 'image',
      title: 'Home Image',
    },
    {
      name: 'posterImage',
      type: 'image',
      title: 'Poster Image',
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
      name: 'products',
      type: 'array',
      title: 'Products',
      of: [
        {
          type: 'reference',
          to: [{type: 'product'}],
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
}
