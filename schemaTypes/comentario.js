import {defineField, defineType} from 'sanity'
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
