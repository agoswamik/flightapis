export class generator{
    getUserId(counter: number):string{
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

       return (dd  + mm +  yyyy + today.getHours() + today.getMinutes() + today.getSeconds() + counter) ;
    }
}
// var counter = 0;
// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();

// console.log(dd  + mm +  yyyy + today.getHours() + today.getMinutes() + today.getSeconds()) ;