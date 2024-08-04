var express=require('express')
var app=express()
app.set('port',process.env.PORT||3000)
app.use(express.json())

// app.use((req, res, next) => { 
//     res.header("Access-Control-Allow-Origin",  
//                "http://localhost:4200"); 
//     res.header("Access-Control-Allow-Headers",  
//                "Origin, X-Requested-With, Content-Type, Accept"); 
//     next(); 
// }); 

app.get('/api/message',(req,res)=>{
    const data={
        "Name":"Michael",
        "Role":"Developer",
        "age":20
    }
    res.json(data)
})

app.listen(app.get('port'),function(){
    console.log('Application running on http://localhost:'+app.get('port')+' Press Ctrl+C to stop')
})


// works
// works




