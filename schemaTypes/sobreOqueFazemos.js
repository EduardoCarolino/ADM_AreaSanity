import {defineField, defineType} from 'sanity'

export const sobreOqueFazemosType = defineType({
  name: 'sobreOqueFazemos',
  title: 'CriarsobreOqueFazemos',
  type: 'document',
  fields: [
    defineField({
        name: 'tituloSobre',
        type: 'string',
    }),
    defineField({
        name: 'textoSobre',
        type: 'string',
    }),
    defineField({
        name: 'tituloFazemos',
        type: 'string',
    }),
    defineField({
        name: 'textoFazemos',
        type: 'string',
    }),
  ],
})