import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

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

async function fetchComments() {
    const comments = await client.fetch(`*[_type == "comment"]{name, comment, "photoUrl": photo.asset->url}`);
    console.log(comments);
}

fetchComments();

