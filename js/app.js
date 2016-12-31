;
((Lowes) => {
    Lowes ? window.Lowes = Lowes : Lowes = {}
    this.Lowes.app = {
        init: function() {
            window.Lowes.list.init()
        }
    }
    window.Lowes = Lowes
})(window.Lowes)

window.Lowes.app.init()