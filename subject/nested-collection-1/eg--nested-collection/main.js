            AllegroWidget = new Backbone.Marionette.Application();

            AllegroWidget.addInitializer(function (options) {

                // load templates and append them as scripts
                inject_template([
                        { id: "template-menuitem", path: "/js/templates/ordering-widget-menuitem.html" },
                        { id: "template-category", path: "/js/templates/ordering-widget-category.html" },
                        { id: "template-menu-core", path: "/js/templates/ordering-widget-menu-core.html" },
                        { id: "template-skeleton", path: "/js/templates/ordering-widget-skeleton.html" }
                    ]);

                // create app layout using the skeleton
                var AppLayout = Backbone.Marionette.Layout.extend({
                    template: "#template-skeleton",

                    regions: {
                        order_summary: "#order-summary",
                        categories: "#categories-content"
                    }
                });

                AllegroWidget.layout = new AppLayout();
                var layoutRender = AllegroWidget.layout.render();
                jQuery("#allegro-ordering-widget").html(AllegroWidget.layout.el);

                // Initialize the collection and views
                var _category_collection = new CategoryCollection();

                var _cateogories_view = new CategoryCollectionView({ api_key: window.XApiKey, collection: _category_collection });


                _category_collection.fetch({
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader("X-ApiKey", window.XApiKey);
                    },
                    async: false
                });


                //AllegroWidget.addRegions({
                 ///   mainRegion: "#allegro-ordering-widget"
                //});
                AllegroWidget.layout.categories.show(_cateogories_view);

            });



            AllegroWidget.start({api_key: window.XApiKey});