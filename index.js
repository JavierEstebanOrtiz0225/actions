let axios = require('axios').default

axios.get(process.env.COMMITS)
.then(data=>{console.log(data.data[0]);})
.catch(err=>{console.log(err);})