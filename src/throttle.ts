export function throttleFunction(callBack: Function, delay: number):Function{
    let shouldWait:boolean=false;
    let waitingArgs:any[] | null= null;

    return(...args:any[])=>{
        if (shouldWait){
            waitingArgs=args;
            return;
        }

        callBack(...args);
        shouldWait=true;

        setTimeout(()=>{
            shouldWait=false;
            if(waitingArgs){
                callBack(...waitingArgs);
                waitingArgs=null;
                shouldWait=true;
                setTimeout(()=>{
                    shouldWait=false;
                }, delay);
            }
        },delay);
    };
};