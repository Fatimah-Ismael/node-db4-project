const sharedConfig = {
    client: 'sqlite3',
    migrations: {directory: './data/migrations'},
    //sqlite3 things below
    useNullAsDefault: true,
    pool: {afterCreate: (conn, done)=> conn.run('PRAGMA foreign_keys = ON', done)}
}

module.exports ={
    development:{
        ...sharedConfig,
        connection: { filename: './data/cook_book.db3'},
        seed: {directory: './data/seeds' },
    },
    testing:{
        ...sharedConfig,
        connection: { filename: './data/cook_book.test.db3' },
    },
    production:{
        
    }
}