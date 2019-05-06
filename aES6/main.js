import {doAdd} from "./doAdd.js";
import {doMult} from "./doMult.js";
function exec(x,y){
	console.log(doAdd(x,y),doMult(x,y));
}
exec(1,2);
