let axios = require('axios').default

axios.get(process.env.COMMITS)
.then(data=>{console.log(data.data);})
.catch(err=>{console.log(err);})