// let axios = require('axios').default

// // axios.get(process.env.COMMITS)
// // .then(data=>{console.log(data.data[data.data.length-1]);})
// // .catch(err=>{console.log(err);})


function tests(commitMessage){
    let array = commitMessage.split('(')

    let tests = array[1].split(')')[0]

    return tests
}
let tests1 = tests('[Update] message error ccb (ms_test)')

console.log(tests1);