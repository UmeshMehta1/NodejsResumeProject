const homeController = (req,res)=>{
    res.render('home', {'title':'home'})
}

export {homeController}