import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

// const id = process.env.PROJECT_ID;
// const token = process.env.PROJECT_TOKEN;

export const client = createClient({
  projectId: 'yenkcl40',
  dataset: 'production',
  useCdn: false, // Use the Content Delivery Network (CDN) for faster data retrieval
  apiVersion: '2023-08-22',
  token: 'skqoanhzCtOui8JOweKxfQMseDrr7wCOP5NjdLm7qKSarzsnLdAJipc936wd0AcoHNloqzhwipyMUao7HmKcgTbrlJcmGgOuJVwDDQijaWJCNaXLE1yp0EQFJQsXQynGDZcw6ZIaHplDtRRqPffFAgyp7Tt8v5huX5VyoOWLDTZZWDvXnJ2w',
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);
export const urlFor = (src) => builder.image(src); 