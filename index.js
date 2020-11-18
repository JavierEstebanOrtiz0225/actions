let axios = require('axios').default

axios.get(process.env.COMMITS)
.then(data=>{console.log(data.data.commit);})
.catch(err=>{console.log(err);})