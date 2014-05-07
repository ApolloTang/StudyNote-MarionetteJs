// http://stackoverflow.com/questions/16235414/backbone-marionette-nested-composite-view

// http://stackoverflow.com/questions/12163118/nested-collections-with-backbone-marionette


var ItemModel = Backbone.Model.extend({
    defaults: {
        name: '',
        price: 0,
        quantity: 0
    }
});


var ItemCollection = Backbone.Collection.extend({
    model: ItemModel
});



var CategoryModel = Backbone.Model.extend({
    defaults: {
        name: ''
    }
});




var CategoryCollection = Backbone.Collection.extend({
    url: '/api/categories',
    model: CategoryModel
});







var ItemView = Backbone.Marionette.ItemView.extend({
    template: '#template-menuitem',
    modelEvents: {
        "change": "update_quantity"
    },
    ui: {
        "quantity" : "input" 
    },
    events: {
        "click .add": "addtoBasket"
    },
    addtoBasket: function (e) {
        this.model.set({"quantity": this.ui.quantity.val() });
    },
    update_quantity: function () {
        //@todo should we do a re-render here instead or is it too costy
        this.ui.quantity.val(this.model.get("quantity"));
    }
});

var CategoryView = Backbone.Marionette.CompositeView.extend({

    template: '#template-category',

    itemViewContainer: ".menu-items",
    itemView: ItemView,

    className: "tab-pane",
    id: function(){
        return "category-" + this.model.get("id");
    },

    initialize: function () {

        this.collection = new ItemCollection();
        var that = this;
        _(this.model.get("menu_items")).each(function (menu_item) {
            that.collection.add(new ItemModel({
                id: menu_item.id,
                name: menu_item.name,
                price: menu_item.price,
                desc: menu_item.desc
            }));
        });


    }
});

var CategoryCollectionView = Backbone.Marionette.CompositeView.extend({

    el_tabs: '#categories-tabs',

    template: '#template-menu-core',
    itemViewContainer: ".tab-content", // This is where I'm getting the error
    itemView: CategoryView,

    onItemAdded: function (itemView) {
        alert("halalouya");
        //this.$el.append("<li><a href=\"#cateogry-" + tab.get("id") + "\">" + tab.get("name") + "</a></li>");

        //$(this.el_tabs).append("<li><a href='#category-" + itemView.model.get("id") + "'>"
            //+ itemView.model.get("name") + "</a></li>")
    }
});