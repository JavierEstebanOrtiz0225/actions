let axios = require('axios').default

axios.get(process.env.COMMITS)
.then(data=>{console.log(JSON.stringify(data.data));})
.catch(err=>{console.log(err);})