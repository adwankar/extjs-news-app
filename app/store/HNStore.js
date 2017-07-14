/*
 * File: app/store/HNStore.js
 *
 * This file was generated by Sencha Architect version 4.1.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.2.x Modern library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.2.x Modern. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('NewsApp.store.HNStore', {
    extend: 'Ext.data.Store',

    requires: [
        'NewsApp.model.HNModel',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'HNStore',
            autoLoad: true,
            model: 'NewsApp.model.HNModel',
            proxy: {
                type: 'jsonp',
                limitParam: '',
                noCache: false,
                pageParam: '',
                startParam: '',
                url: 'https://hn.algolia.com/api/v1/search?tags=front_page',
                reader: {
                    type: 'json',
                    rootProperty: 'hits'
                }
            }
        }, cfg)]);
    }
});