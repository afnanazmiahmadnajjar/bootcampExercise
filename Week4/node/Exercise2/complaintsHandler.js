const consts = require("./consts")


module.exports.fun = function(complaint){
       if(complaint.type === consts.FINANCE)
          console.log("Money doesn’t grow on trees, you know.")
        if(complaint.type === consts.WEATHER)
           console.log("It is the way of nature. Not much to be done.")
        if(complaint.type === consts.EMOTIONS)
          console.log("It’ll pass, as all things do, with time.")
}
