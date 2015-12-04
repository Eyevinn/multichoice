var ChannelsCollection = Backbone.Collection.extend({
    url:'/channels'
});
var channelsCollection = new ChannelsCollection();

var ChannelsView = Backbone.View.extend({
    el: '#multiselector',
    collection: channelsCollection,
    tpl: _.template($('#multiselector-template').html()),

    events: {
        "click .submit-button": "submit"
    },

    initialize: function() {
        this.listenTo(this.collection, 'sync change', this.render);
        this.collection.fetch();
    },

    render: function() {
        console.log("I render", this.collection.toJSON());
        var data = {channels : this.collection.toJSON()};
        this.$el.html(this.tpl(data));
        return this;
    },

    submit: function() {
        var checked = _(this.$('input:checked')).toArray().map(function(e) { return e.value });
        console.log(checked);
        // TODO: sync checked status
        // sync doesn't send anything new now
        Backbone.sync('update',this.collection);
    },
});

var channelsView = new ChannelsView();
