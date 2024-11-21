import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {sanityClient} from '@sanity/client';

export default defineConfig({
  name: 'default',
  title: 'primeiroProjeto',

  projectId: '2mhzqf1u',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

export default {
    name: 'comment',
    title: 'Comentários',
    type: 'document',
    fields: [
        { name: 'name', title: 'Nome', type: 'string' },
        { name: 'comment', title: 'Comentário', type: 'text' },
        { name: 'photo', title: 'Foto', type: 'image' }
    ]
};

async function fetchComments() {
    const comments = await client.fetch(`*[_type == "comment"]{name, comment, "photoUrl": photo.asset->url}`);
    console.log(comments);
}

fetchComments();

import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'seuProjectId', // Substitua pelo ID do seu projeto Sanity
  dataset: 'production',    // Dataset que você está usando
  useCdn: true,             // Use CDN para melhorar a performance
  apiVersion: '2023-01-01', // Ajuste conforme necessário
});
