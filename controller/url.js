const shortid = require('shortid');
const URL = require('../models/url');
async function handleGenerateRandomShortURL(req,res){
    const shortId = shortid();
    const body = req.body;
    console.log(body);
    if(!body.url){
        return res.status(400).json({message: 'URL is required'});
    }
    await URL.create({
        shortId:shortId,
        redirectUrl:body.url,
        visitHistory:[]
    })
    return res.render("home",{
        id:shortId
    });
}

async function handleRedirectRandomShortURL(req,res){
    const shortid = req.params.id;
    console.log(shortid);
    if(!shortid) return res.status(404).json({message: 'redirect URL not found'});
    const entry = await URL.findOneAndUpdate({
        shortId:shortid
    },{
        $push:{
            visitHistory:{
                timeStamp:Date.now()
            }
        }
    })
    return res.redirect(entry.redirectUrl); 
}

async function handleAnalyticsCount(req,res){
    const shortid = req.params.id;
    if(!shortid) return res.status(404).json({message: 'redirect URL not found'});
    const entry = await URL.findOne({
        shortId:shortid
    });
    return res.send({'No of Time Click':entry.visitHistory.length,resultHistory:entry.visitHistory});
}

module.exports = {handleGenerateRandomShortURL,handleRedirectRandomShortURL,handleAnalyticsCount}