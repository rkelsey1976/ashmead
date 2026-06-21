import { config, collection, singleton, fields } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },

  collections: {
    testimonials: collection({
      label: 'Testimonials',
      slugField: 'name',
      path: 'src/content/testimonials/*',
      schema: {
        name: fields.slug({ name: { label: 'Customer Name' } }),
        role: fields.text({ label: 'Role / Title', defaultValue: 'Customer' }),
        location: fields.text({ label: 'Location', defaultValue: 'Bristol' }),
        quote: fields.text({ label: 'Review', multiline: true }),
        rating: fields.integer({ label: 'Star Rating (1–5)', defaultValue: 5 }),
      },
    }),

    products: collection({
      label: 'Products',
      slugField: 'name',
      path: 'src/content/products/*',
      schema: {
        name: fields.slug({ name: { label: 'Product Name' } }),
        h1: fields.text({ label: 'H1 Heading' }),
        shortDesc: fields.text({ label: 'Short Description', multiline: true }),
        longDesc: fields.text({ label: 'Full Description', multiline: true }),
        brands: fields.array(
          fields.text({ label: 'Brand' }),
          { label: 'Brands Stocked', itemLabel: props => props.value }
        ),
        features: fields.array(
          fields.text({ label: 'Feature', multiline: true }),
          { label: 'Key Features', itemLabel: props => props.value }
        ),
        metaTitle: fields.text({ label: 'Meta Title' }),
        metaDescription: fields.text({ label: 'Meta Description', multiline: true }),
      },
    }),
  },

  singletons: {
    siteSettings: singleton({
      label: 'Site Settings',
      path: 'src/content/site-settings',
      schema: {
        phone: fields.text({ label: 'Phone Number' }),
        email: fields.text({ label: 'Email Address' }),
        address: fields.text({ label: 'Street Address' }),
        postcode: fields.text({ label: 'Postcode' }),
        openingHours: fields.array(
          fields.object({
            day: fields.text({ label: 'Day' }),
            opens: fields.text({ label: 'Opens (HH:MM, leave blank if closed)' }),
            closes: fields.text({ label: 'Closes (HH:MM, leave blank if closed)' }),
          }),
          { label: 'Opening Hours', itemLabel: props => props.fields.day.value }
        ),
      },
    }),
  },
});
