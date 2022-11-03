
import express from'express'

const app = express()
app.use(express.json())
import sqlite3 from 'sqlite3'
const DBPATH = 'data.db'

app.listen(3000)



// inserir  funcionário
app.post('/funcionario', (req, res)=>{
    var sql = "INSERT INTO funcionario (nome, cpf) VALUES ('" + req.body.nome + "', '" + req.body.cpf + "')"
    var db = new sqlite3.Database(DBPATH)
    db.run(sql)
    db.close()
    res.json({
        "statusCode": 200
    })
})


//select  funcionário
app.get('/funcionario', (req, res) => {
    res.statusCode = 200
    var db = new sqlite3.Database(DBPATH)
    var sql = 'SELECT * FROM funcionario'
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err
        }
        res.json(rows)
    })
    db.close() 
})


//inserir  especialidade
app.post('/especialidade', (req, res)=> {
    res.statusCode = 200
    var sql = "INSERT INTO especialidade (nome) VALUES ('" + req.body.especialidade + "')"
    var db = new sqlite3.Database(DBPATH)
  
    db.run(sql)
    db.close
    res.json({
        "statusCode" : 200
    })
})


//select especialidade
app.get('/especialidade', (req, res) => {
    res.statusCode = 200
    var db = new sqlite3.Database(DBPATH)
    var sql = 'SELECT * FROM especialidade'
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err
        }
        res.json(rows)
    })
    db.close() 
})


//inserir  empreiteira
app.post('/empreiteira', (req,res)=>{
    res.statusCode = 200
    var db = new sqlite3.Database(DBPATH)
    var sql = "INSERT INTO empreiteira (nome, cnpj, rating, status_doc, email, telefone , numero_funcionarios) VALUES ('" + req.body.nome + "', '" + req.body.cpf + "' , '" + req.body.rating + "', '" + req.body.status_doc + "', '" + req.body.email + "', '" + req.body.telefone + "', '" + req.body.numero_funcionarios + "')"
    db.run(sql)
    db.close
    res.json({
        "statusCode" : 200
    })
})


//select empreiteira
app.get('/empreiteira', (req, res) => {
    res.statusCode = 200
    var db = new sqlite3.Database(DBPATH)
    var sql = 'SELECT * FROM empreiteira'
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err
        }
        res.json(rows)
    })
    db.close() 
})


//inserir contrato
app.post('/contrato', (req,res)=>{
    res.statusCode = 200
    var db = new sqlite3.Database(DBPATH)
    var sql = "INSERT INTO contrato (contrato) VALUES ('" + req.body.contrato + "')"
    db.run(sql)
    db.close
    res.json({
        "statusCode" : 200
    })
})


//select contrato
app.get('/contrato', (req,res)=>{
    res.statusCode = 200
    var db = new sqlite3.Database(DBPATH)
    var sql = 'SELECT * FROM contrato'
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err
        }
        res.json(rows)
    })
    db.close() 
})


//inserir oportunidade
app.post('/oportunidade', (req,res)=>{
    res.statusCode = 200
    var db = new sqlite3.Database(DBPATH)
    var sql = "INSERT INTO oportunidade (titulo, resumo, data_inicio, data_fim) VALUES ('" + req.body.titulo + "', '" + req.body.resumo + "' , '" + req.body.data_inicio + "', '" + req.body.data_fim + "')"
    db.run(sql)
    db.close
    res.json({
        "statusCode" : 200
    })
})


//select oportunidade
app.get('/oportunidade', (req,res)=>{
    res.statusCode = 200
    var db = new sqlite3.Database(DBPATH)
    var sql = 'SELECT * FROM oportunidade'
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err
        }
        res.json(rows)
    })
    db.close() 
})


//inserir obra
app.post('/obra', (req, res)=>{
    var sql = "INSERT INTO obra (nome, foto) VALUES ('" + req.body.nome + "', '" + req.body.foto + "')"
    var db = new sqlite3.Database(DBPATH)
    db.run(sql)
    db.close()
    res.json({
        "statusCode": 200
    })
})


//select obra
app.get('/obra', (req,res)=>{
    res.statusCode = 200
    var db = new sqlite3.Database(DBPATH)
    var sql = 'SELECT * FROM obra'
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err
        }
        res.json(rows)
    })
    db.close() 
})


//inserir admin
app.post('/admin', (req, res)=>{
    var sql = "INSERT INTO admin (nome) VALUES ('" + req.body.nome + "')"
    var db = new sqlite3.Database(DBPATH)
    db.run(sql)
    db.close()
    res.json({
        "statusCode": 200
    })
})


//select admin
app.get('/admin', (req,res)=>{
    res.statusCode = 200
    var db = new sqlite3.Database(DBPATH)
    var sql = 'SELECT * FROM admin'
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err
        }
        res.json(rows)
    })
    db.close() 
})


//inserir feedback
app.post('/feedback', (req, res)=>{
    var sql = "INSERT INTO feedback (texto) VALUES ('" + req.body.texto + "')"
    var db = new sqlite3.Database(DBPATH)
    db.run(sql)
    db.close()
    res.json({
        "statusCode": 200
    })
})


//select feedback
app.get('/feedback', (req,res)=>{
    res.statusCode = 200
    var db = new sqlite3.Database(DBPATH)
    var sql = 'SELECT * FROM feedback'
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err
        }
        res.json(rows)
    })
    db.close() 
})


//inserir endereco
app.post('/endereco', (req,res)=>{
    res.statusCode = 200
    var db = new sqlite3.Database(DBPATH)
    var sql = "INSERT INTO endereco (cep, numero, rua, bairro, cidade, estado) VALUES ('" + req.body.cep + "', '" + req.body.numero + "' , '" + req.body.rua + "', '" + req.body.bairro + "', '" + req.body.cidade + "','" + req.body.estado + "')"
    db.run(sql)
    db.close
    res.json({
        "statusCode" : 200
    })
})


//select endereco
app.get('/endereco', (req,res)=>{
    res.statusCode = 200
    var db = new sqlite3.Database(DBPATH)
    var sql = 'SELECT * FROM endereco'
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err
        }
        res.json(rows)
    })
    db.close() 
})