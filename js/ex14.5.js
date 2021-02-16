function countOccurrences (str, char){
    let counter = 0 ;
    for ( let i = 0 ; i < str.length; i++ ){
        if ( str.charAt( i ) === char ){
            counter += 1 ;
        }
    }
    return counter ;
}
console.log(countOccurrences ( "ini mini miny moe" , "n" ));

//5
//opend the debugger and used breackpoint
// there wasn't an assign of the counter in the loop