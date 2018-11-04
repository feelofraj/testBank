
app.service('loginAuthService',function () {
this.validateFunction = function ( a , b ){
    if( a=="test" && b=="test"){
        return true;
    }
    return false;
}
});
app.service('checkDataService',function () {
    this.checkDataFunction = function (data){
        if( data != null ){
            return true;
        }
        return false;
    }
    });

// app.service('soapCallService',function($soap){
// this.soapCallFunction = function(urlData,action,paraVal){
//     console.log("enterng soapcall service");
//     $soap.post(urlData,action,paraVal).then(function (responce){
//         console.log("enterng soapcall service"+ responce.data);
//         return responce.data;
//     })
// }

// })    