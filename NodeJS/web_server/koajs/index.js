const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
// response
router.get('/',ctx => {
    ctx.status = 200;
    ctx.body = 'Index Page';
});

router.get('/hakkimda', ctx=>{
    ctx.status = 200;
    ctx.body = 'About Page';
});

router.get('/iletisim', ctx=>{
    ctx.status = 200;
    ctx.body = 'Contact Page';
});


app.use(router.routes())
const port = 3000;

app.listen(port, () => {
    console.log(`Sunucu ${port} da basariyla calistirildi!`);
});