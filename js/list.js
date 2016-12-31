;
((Lowes, $) => {
    Lowes ? window.Lowes = Lowes : Lowes = {}

    Lowes.list = {
        createProductDiv: (product)=> {
            //compile template
        },
        getProducts: ()=> {
            $.ajax({
                type: 'GET',
                url: 'https://m.lowes.com/IntegrationServices/resources/productList/json/v3_0/4294857975?langId=-1&storeId=10702&catalogId=10051&nValue=4294857975&storeNumber=0595&pageSize=20&firstRecord=0',
            }).done((data)=>{
                this.Lowes.list.productList = data.ProductsList
                this.Lowes.list.populatePLDivs()
            })
        },
        init: ()=> {
            this.Lowes.list.getProducts()
        },
        populatePLDivs: ()=> {
            var pl = this.Lowes.list.productList
            for (let product of pl) {
                //insertProdustListDivs into body
            }
        },
        productList: [],
        productListDivs: [],
        productListTemp:
        `<div class="col-xs-12 col-sm-4 col-md-4">

        </div>`
    }

    window.Lowes = Lowes
})(window.Lowes, jQuery)