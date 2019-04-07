const express = require('express');
const app = express();




const swig =require('swig');

swig.setDefaults({
  cache: false
});

app.engine('html', swig.renderFile);

app.set('views', './views');

app.set('view engine', 'html');

/*
app.get('/',(req,res)=>{
    //4.渲染模板
    //第一个参数是相对于模板目录的文件
    //第二个参数是传递给模板的数据
    res.render('index',{
        title:'跨猪网',
        content:'我是内容'
    });
});
*/


/*
app.get('/',(req,res)=>{
    res.render('index',{
        title:'跨猪网',
        content:'我是内容',
        name:'tom',
        age:16,
        obj:{
        	name:'leo',
        	age:16
        }
    });
});
*/


app.get('/',(req,res)=>{
    res.render('list',{
        title:'跨猪网',
        content:'我是内容',
        name:'tom',
        age:20,
        color:['red','blue','pink','orange','skyblue']
    })
});





app.listen(3000, () => console.log('Example app listening on port 3000!'));