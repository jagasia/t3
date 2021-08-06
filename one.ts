function fn1()
{
	console.log("Hello world");
}

let x:number=20;
let y:string="10";
x=<number><any>y;
console.log(x);
fn1();