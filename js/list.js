(function(Lowes,$){
    window.Lowes = Lowes || {}

    window.Lowes.list = {
        createProductDiv:function(product){
            console.log(product);
        },
        getProducts:function(){
            $.ajax({
                type:'GET',
                url:'https://m.lowes.com/IntegrationServices/resources/productList/json/v3_0/4294857975?langId=-1&storeId=10702&catalogId=10051&nValue=4294857975&storeNumber=0595&pageSize=20&firstRecord=0',
            }).done(function(data){
               window.Lowes.list.productList = data.ProductsList
               window.Lowes.list.populatePLDivs()
            })
        },
        init:function(){
            this.getProducts()
        },
        productList:[],
        productListDivs:[],
        populatePLDivs:function(){
            var pl = this.productList

            for(product in pl){
                $('body').append('<div class="col-md-4 col-lg-4 col-sm-12 col-xs-12"><img src="'+pl[product].imageURLs.lg+'"></div>')            }
            }
    }
})(window.Lowes,jQuery)