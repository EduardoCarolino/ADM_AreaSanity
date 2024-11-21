js do schematype 
import { defineField, defineType } from 'sanity'

export const inicioType = defineType({
    name: 'inicio',
    title: 'O INICIO',
    type: 'document',
    fields: [
        defineField({
            name: 'titulo',
            type: 'string',
        }),
        defineField({
            name: 'texto',
            type: 'string',
        }),
        defineField({
            name: 'marketing',
            type: 'string',
        }),
        defineField({
            name: 'texto2',
            type: 'string',
        }),
    ],
})
