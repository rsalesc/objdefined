/**
 * Created by root on 25/08/14.
 */


// If given only a obj, the function returns true if object obj is defined and not null and false otherwise
//     something like pseudo: return = obj is defined
// If given an opt value, the function returns obj itself if object is defined and not null and returns opt otherwise
//     something like pseudo: return = obj, if its defined, or opt (obj | opt, but avoiding javascript default behavior)

module.exports = function(obj, opt){
    if(arguments.length > 1)
        return obj != null ? obj : opt;
    return obj != null;
};