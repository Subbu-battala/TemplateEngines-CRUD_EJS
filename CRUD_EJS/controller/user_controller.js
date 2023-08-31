// controller

// view the index.ejs
let index = (req,res) => {
    return res.render('index.ejs')

}

// create.ejs
let create = (req,res) => {
    return res.render('create.ejs')

}

// update.ejs
let edit = (req,res) => {
    return res.render('update.ejs')
}

// pnf.ejs
let pnf = (req,res) => {
    return res.render('pnf.ejs')
}

module.exports = { index, create , edit, pnf }


/*
    let index = (req,res) => {
        return res.render('index.ejs)
    }

    let create = (req,res) => {
        return res.render('create.ejs)
    }
*/