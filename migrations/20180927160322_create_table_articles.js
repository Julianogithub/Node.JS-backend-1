
exports.up = function(knex, Promise) {
    return knex.schema.createTable('articles', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('description', 1000).notNull()
        // Imagem ('imageUrl', 1000)
        table.string('imageUrl', 1000)
        table.binary('content').notNull()
        // Jucao das tabelas abaixo
        table.integer('userId').references('id')
            .inTable('users').notNull()
        table.integer('categoryId').references('id')
            .inTable('categories').notNull()
            console.log(articles);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('articles')
};
