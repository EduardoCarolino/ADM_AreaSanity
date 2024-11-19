import {defineField, defineType} from 'sanity'

export const maisVendidosType = defineType({
  name: 'maisVendidos',
  title: 'CriarMaisVendidos',
  type: 'document',
  fields: [
    defineField({
      name: 'Nome',
      type: 'string',
    }),
    defineField({
      name: 'Foto',
      type: 'string',
    }),
    defineField({
      name: 'NivelEstrela',
      type: 'string',
  }),
  ],
})

