import {defineField, defineType} from 'sanity'

export const fraseType = defineType({
  name: 'frase',
  title: 'CriarFrase',
  type: 'document',
  fields: [
    defineField({
        name: 'titulo',
        type: 'string',
    }),
    defineField({
        name: 'frase',
        type: 'string',
    }),
  ],
})