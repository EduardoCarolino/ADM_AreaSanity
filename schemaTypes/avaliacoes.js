import {defineField, defineType} from 'sanity'

export const avaliacoesType = defineType({
  name: 'avaliacoes',
  title: 'CriarAvaliacoes',
  type: 'document',
  fields: [
    defineField({
        name: 'Nome',
        type: 'string',
    }),
    defineField({
        name: 'Comentario',
        type: 'string',
    }),
    defineField({
        name: 'FotoUsuario',
        type: 'image',
    }),
  ],
})