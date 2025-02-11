export const textSlicer = (val:string)=>{
    if(val.length > 120)
    return val.substring(0, 80)+"...";
}