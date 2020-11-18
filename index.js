let axios = require('axios').default

axios.get(process.env.COMMITS)
.then(data=>{
        let dataJson =  JSON.parse(data.data);
        console.log(dataJson);
    })
.catch(err=>{console.log(err);})