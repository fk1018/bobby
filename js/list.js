(function(Lowes,$){
    window.Lowes = Lowes || {}

    window.Lowes.list = {
<<<<<<< HEAD
            createProductDiv:function(){
                console.log();

            },
=======
        createProductDiv:function(product){
            console.log(product);
        },
>>>>>>> 441d59e0083673d1a2d6ec78eccf02358b9bec77
        getProducts:function(){
            $.ajax({
                type:'GET',
                url:'https://m.lowes.com/IntegrationServices/resources/productList/json/v3_0/4294857975?langId=-1&storeId=10702&catalogId=10051&nValue=4294857975&storeNumber=0595&pageSize=20&firstRecord=0',
            }).done(function(data){
               window.Lowes.list.productList = data.ProductsList
               window.Lowes.list.populatePLDivs()
<<<<<<< HEAD
               window.Lowes.list.populateTopDiv()
=======
>>>>>>> 441d59e0083673d1a2d6ec78eccf02358b9bec77
            })
        },
        init:function(){
            this.getProducts()
<<<<<<< HEAD
            this.populatePLDivs()
            this.populateTopDiv()
        },
        productList:[],
        productListDiv:[],
        populatePLDivs:function(){
               var pl = this.productList;
            
               for(product in pl){
                    $('body').append('<div class="col-md-4 col-lg-4 col-sm-12 col-xs-12"><img src="'+pl[product].imageURLs.sm+'"> '+ pl[product].ProductInfo.Brand + " " + pl[product].ProductInfo.p_product_description + "$" + pl[product].ProductInfo.p_product_price+' </div>')
                  
                    //$('body').append('<div class="col-md-4 col-lg-4 col-sm-12 col-xs-12"> '+pl[product].ProductInfo.Brand +'</div>')
                    //$('body').append(pl[product].ProductInfo.p_product_description)
                    //$('body').append("$" +pl[product].ProductInfo.p_product_price)

                    //var btn = document.createElement("BUTTON");        
                    //var t = document.createTextNode("View More");       
                    //btn.appendChild(t);                                 
                    //document.body.appendChild(btn);
 					//$('#header').append('<img src="'+pl[product].imageURLs.sm+'">')
  
               }
             
               $('#header').append('<img src="'+pl[product].imageURLs.lg+'">')
               $('#header').append(pl[product].ProductInfo.p_product_bullets_json.Value)
               //.css("list-style-type, "bullet");
               $('#header').append("$" +pl[product].ProductInfo.p_product_price)
               var btn = document.createElement("BUTTON");        
               var t = document.createTextNode("Add to Cart");       
               btn.appendChild(t);                                 
               document.body.appendChild(btn);

        }
    



=======
        },
        productList:[],
        productListDivs:[],
        populatePLDivs:function(){
            var pl = this.productList

            for(product in pl){
                $('body').append('<div class="col-md-4 col-lg-4 col-sm-12 col-xs-12"><img src="'+pl[product].imageURLs.lg+'"></div>')            }
            }
>>>>>>> 441d59e0083673d1a2d6ec78eccf02358b9bec77
    }
})(window.Lowes,jQuery)