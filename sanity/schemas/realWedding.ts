import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'realWedding',
  title: 'Real Wedding',
  type: 'document',
  fields: [
    defineField({
      name: 'coupleNames',
      title: 'Couple Names',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'coupleNames',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'season',
      title: 'Season',
      type: 'string',
      options: {
        list: [
          {title: 'Spring', value: 'spring'},
          {title: 'Summer', value: 'summer'},
          {title: 'Fall', value: 'fall'},
          {title: 'Winter', value: 'winter'},
        ],
      },
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: 'guestCount',
      title: 'Guest Count',
      type: 'number',
    }),
    defineField({
      name: 'weddingStyle',
      title: 'Wedding Style',
      type: 'string',
    }),
    defineField({
      name: 'ceremonySite',
      title: 'Ceremony Site',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'gallery',
      title: 'Wedding Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'gallerySize',
      title: 'Gallery Item Size',
      type: 'string',
      options: {
        list: [
          {title: 'Large Feature', value: 'large-feature'},
          {title: 'Vertical', value: 'vertical'},
          {title: 'Medium', value: 'medium'},
          {title: 'Horizontal', value: 'horizontal'},
          {title: 'Square', value: 'square'},
          {title: 'Wide', value: 'wide'},
          {title: 'Small', value: 'small'},
          {title: 'Medium Vertical', value: 'medium-vertical'},
          {title: 'Extra Wide', value: 'extra-wide'},
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
  ],
})