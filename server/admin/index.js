module.exports = app => {
    const express = require('express');
    const router = express.Router();

    let pool = require('../db/db');


    let addSortSql = 'insert into sort(name) value (?)';    /*新增分类*/

    router.post('/addSort', (req, res) => {
        let addSortParams = req.body.name;
        // console.log(req.body.name);
        pool.getConnection((err, connection) => {
            if (err) {
                console.error(err)
            } else {
                // console.log('成功');
                connection.query(addSortSql, addSortParams, (err, rows) => {
                    if (err) {
                        console.error(err)
                    } else {
                        res.send(rows)
                    }
                    connection.release();
                })
            }
        })
    })

    let queryListSql = 'select * from sort'     /*查询*/
    router.get('/queryList', (req, res) => {
        let addSortParams = req.body.name;
        // console.log(req.body.name);
        pool.getConnection((err, connection) => {
            if (err) {
                console.error(err)
            } else {
                // console.log('成功');
                connection.query(queryListSql, (err, rows) => {
                    if (err) {
                        console.error(err)
                    } else {
                        res.send(rows)
                    }
                    connection.release();
                })
            }
        })
    })

    let queryById = 'select name from sort where id = ?'  /*根据id查询名字*/

    router.get('/queryById/:id', (req, res) => {
        let sortId = req.params.id;
        // console.log(req.params.id);
        pool.getConnection((err, connection) => {
            if (err) {
                console.error(err)
            } else {
                // console.log('成功');
                connection.query(queryById, sortId, (err, rows) => {
                    if (err) {
                        console.error(err)
                    } else {
                        res.send(rows)
                    }
                    connection.release();
                })
            }
        })
    })

    let editNameById = 'update sort set name=? where id = ?'    /*根据id修改名字*/

    router.post('/editNameById/:id', (req, res) => {
        let sortId = req.params.id;
        let sortName = req.body.name;

        let arr = [sortName,sortId]
        // console.logeditNameById(req.params.id);
        pool.getConnection((err, connection) => {
            if (err) {
                console.error(err)
            } else {
                // console.log('成功');
                connection.query(editNameById, arr, (err, rows) => {
                    if (err) {
                        console.error(err)
                    } else {
                        res.send(rows)
                    }
                    connection.release();
                })
            }
        })
    })


    let delSortById = 'delete from sort where id=?'     /*根据id删除数据*/
    router.get('/delSortById/:id', (req, res) => {

        let sortId = req.params.id;
        // console.logeditNameById(req.params.id);
        pool.getConnection((err, connection) => {
            if (err) {
                console.error(err)
            } else {
                // console.log('成功');
                connection.query(delSortById, sortId, (err, rows) => {
                    if (err) {
                        console.error(err)
                    } else {
                        res.send(rows)
                    }
                    connection.release();
                })
            }
        })
    })

    app.use('/admin/api', router);
}
