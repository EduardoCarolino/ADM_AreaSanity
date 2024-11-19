import {defineField, defineType} from 'sanity'

export const produtoType = defineType({
  name: 'produto',
  title: 'CriarProduto',
  type: 'document',
  fields: [
    defineField({
      name: 'nome',
      type: 'string',
    }),
    defineField({
        name: 'detalhesDoProduto',
        type: 'string',
    }),
    defineField({
        name: 'valor',
        type: 'number',
    }),
    defineField({
        name: 'image1',
        type: 'image',
    }),
    defineField({
        name: 'image2',
        type: 'image',
   }),
    defineField({
        name: 'image3',
        type: 'image',
    }),
    defineField({
       name: 'image4',
        type: 'image',
     }),
  ],
})