let axios = require('axios').default
let heaaders ={ "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
                "Accept-Encoding":	"gzip, deflate, br",
                "Accept-Language" :	"es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
                "Connection":	"keep-alive",
                "Host"	:"api.github.com",
                "Upgrade-Insecure-Requests":	1}
console.log(process.env.COMMITS);
axios.get(process.env.COMMITS,{headers:heaaders})
.then(data=>{console.log(data.data);})
.catch(err=>{console.log(err);})