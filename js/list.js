(function(Lowes, $) {
    window.Lowes = Lowes || {}
    window.Lowes.list = {
        createProductDiv: function() {
            console.log();
        },
        getProducts: function() {
            $.ajax({
                type: 'GET',
                url: 'https://m.lowes.com/IntegrationServices/resources/productList/json/v3_0/4294857975?langId=-1&storeId=10702&catalogId=10051&nValue=4294857975&storeNumber=0595&pageSize=20&firstRecord=0',
            }).done(function(data) {
                window.Lowes.list.productList = data.ProductsList
                window.Lowes.list.populatePLDivs()
            })
        },
        init: function() {
            this.getProducts()
            this.populatePLDivs()
        },
        productList: [], //list of products
        productListDiv: [], //product divs
        populatePLDivs: function() {
            var pl = this.productList;
            var count = 0;
            

            //for loop to retrieve each product
            for (product in pl) {
                $('body').append('<div class="theItem" id = ' + count + '><div><div class="col-md-4 col-lg-4 col-sm-12 col-xs-12"><img src="'+ pl[product].imageURLs.sm + '"> '+  pl[product].ProductInfo.Brand + " " + pl[product].ProductInfo.p_product_description + "$" + pl[product].ProductInfo.p_product_price + ' </div>')
                
                //$('body').append(pl[product].ProductInfo.Brand)
                //$('body').append(pl[product].ProductInfo.p_product_description)
                //$('body').append("$" +pl[product].ProductInfo.p_product_price)
                
                count++ 

              
            }

            //hover over function to render in header
            $('.theItem').hover(function() {
            var theImage = ('<img src="' + pl[$(this).attr('id')].imageURLs.lg + '">'); 
            var thePrice = ("$" +pl[$(this).attr('id')].ProductInfo.p_product_price);
            var theDescr = (pl[$(this).attr('id')].ProductInfo.p_product_description);
                //$(this).append($('#header'));
                if ( $('#header').children().lenghth > 0) {
                $('#header').empty();

                }
                $('#header').prepend(theImage + thePrice + theDescr);
                var btn = $('<input/>').attr({ type: 'button', name:'btn1', value:'add to cart' , click: function() { alert("hi");}});
                 $('#header').append(btn);
                //console.log($(this).attr('id'));
                
            });
                //var btn = $('<input/>').attr({ type: 'button', name:'btn1', value:'add to cart'});
                 //$('#header').append(btn);


        }
    }
})(window.Lowes, jQuery)
