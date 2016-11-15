(function(Lowes,$){
    window.Lowes = Lowes || {}

    window.Lowes.detail = {
        getProducts:function(){
            $.ajax({
                type:'GET',
                url:'https://m.lowes.com/IntegrationServices/resources/productList/json/v3_0/4294857975?langId=-1&storeId=10702&catalogId=10051&nValue=4294857975&storeNumber=0595&pageSize=20&firstRecord=0',

            }).done(function(data){
               window.Lowes.detail.productList = data.ProductsList
            })
        },
        init:function(){

        },
        productList:[]
    }
})(window.Lowes,jQuery)