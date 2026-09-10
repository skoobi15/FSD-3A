 function f1(){
            return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("HIIIIIII")
            },4000
                )})
        }
        function f2() {
            return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve();
            },2000
                )})

        }
       async function test() {
        await f1();
        await f2();
       }
       test();
    