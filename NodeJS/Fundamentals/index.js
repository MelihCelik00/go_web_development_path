console.log('LOG IS WRITTEN');

global.console.log(__dirname);

global.setTimeout(()=>{
    console.log('wait for 3 sec...');
}, 3000);

// console.log(window);