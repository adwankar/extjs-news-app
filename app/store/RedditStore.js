Ext.define('NewsApp.store.RedditStore', {	
    extend: 'Ext.data.Store',				
    requires: [
        'NewsApp.model.RedditModel',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'RedditStore',
            autoLoad: true,
            model: 'NewsApp.model.RedditModel',
            proxy: {
                type: 'jsonp',
                url: 'http://www.reddit.com/.json',
                callbackKey: 'jsonp',
                reader: {
                    type: 'json',
                    rootProperty: 'data.children'
                }
            }
        }, cfg)]);
    }
});