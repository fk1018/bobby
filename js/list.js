(function(Lowes, $) {
    window.Lowes = Lowes || {}
    window.Lowes.list = {
        createProductDiv: function() {
            console.log();
<<<<<<< HEAD
=======

>>>>>>> e46db9e526ecef2e184ab1416f02f3b1dbf755d1
        },
        getProducts: function() {
            $.ajax({
                type: 'GET',
                url: 'https://m.lowes.com/IntegrationServices/resources/productList/json/v3_0/4294857975?langId=-1&storeId=10702&catalogId=10051&nValue=4294857975&storeNumber=0595&pageSize=20&firstRecord=0',
<<<<<<< HEAD
            }).done(function(data) {
                window.Lowes.list.productList = data.ProductsList
                window.Lowes.list.populatePLDivs()
=======

            }).done(function(data) {
                window.Lowes.list.productList = data.ProductsList
                window.Lowes.list.populatePLDivs()

>>>>>>> e46db9e526ecef2e184ab1416f02f3b1dbf755d1
            })
        },
        init: function() {
            this.getProducts()
            this.populatePLDivs()
<<<<<<< HEAD
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
=======

        },
        productList: [],
        productListDiv: [],
        populatePLDivs: function() {
            var pl = this.productList;
            var count = 1;

            for (var product in pl) {
                $('body').append('<div id = ' + count + '><div class="col-md-4 col-lg-4 col-sm-12 col-xs-12"><img src="' + pl[product].imageURLs.sm + '"> ' + pl[product].ProductInfo.Brand + " " + pl[product].ProductInfo.p_product_description + "$" + pl[product].ProductInfo.p_product_price + ' </div>')

                //$('body').append('<div class="col-md-4 col-lg-4 col-sm-12 col-xs-12"> '+pl[product].ProductInfo.Brand +'</div>')
                //$('body').append(pl[product].ProductInfo.p_product_description)
                //$('body').append("$" +pl[product].ProductInfo.p_product_price)

                //var btn = document.createElement("BUTTON");        
                //var t = document.createTextNode("View More");       
                //btn.appendChild(t);                                 
                //document.body.appendChild(btn);
                //$('#header').append('<img src="'+pl[product].imageURLs.sm+'">')
                $('#' + count).hover(function() {
                    //$(this).css("background-color", "yellow");
                    alert("working");
                }, function() {
                    //$(this).css("background-color", "pink");
                    alert("not working");
                });
                count++;
            }


            /*$('#header').append('<img src="' + pl[product].imageURLs.lg + '">')
            $('#header').append(pl[product].ProductInfo.p_product_bullets_json.Value)
                //.css("list-style-type, "bullet");
            $('#header').append("$" + pl[product].ProductInfo.p_product_price)
            var btn = document.createElement("BUTTON");
            var t = document.createTextNode("Add to Cart");
            btn.appendChild(t);
            document.body.appendChild(btn);*/

        }




    }
})(window.Lowes, jQuery)
>>>>>>> e46db9e526ecef2e184ab1416f02f3b1dbf755d1
