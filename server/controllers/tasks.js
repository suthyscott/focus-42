const db = require('../database')

module.exports = {
    addTask: (req, res) => {
        const {name, date, description} = req.body
        console.log(req.body)
        db.query(`
            INSERT INTO tasks (name, date, description, complete)
            VALUES (
                '${name}',
                '${date}',
                '${description}',
                false
            )
            RETURNING *;
        `)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
    },
    getTasks: (req, res) => {
        db.query(`
            SELECT * FROM tasks
            ORDER BY date ASC;
        `)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
    },
    deleteTask: (req, res) => {
        let {id} = req.params
        db.query(`
            DELETE FROM tasks WHERE id = ${id};
            SELECT * FROM tasks;
        `)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
    }
}