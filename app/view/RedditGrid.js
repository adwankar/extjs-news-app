Ext.define('NewsApp.view.RedditGrid', {
    extend: 'Ext.Container',
    alias: 'widget.redditgrid',
    requires: [
        'Ext.grid.Grid',
        'Ext.grid.column.Column',
        'NewsApp.store.RedditStore'
    ],
    items: [
        {
            xtype: 'grid',
            height: '100%',
            width: '100%',
            store: 'RedditStore',
            columns: [
                {
                    xtype: 'gridcolumn',
                    renderer: function (value, record, dataIndex, cell, column) {
                        return '<a target="_blank" href="' + record.get('url') + '">' + value + '</a>';
                    },
                    width: 300,
                    cell: {
                        encodeHtml: false
                    },
                    dataIndex: 'title',
                    text: 'Title'
                },
                {
                    xtype: 'gridcolumn',
                    renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                        return '<a href="http://reddit.com/u/' + value + '">' + value + '</a>';
                    },
                    cell: {
                        encodeHtml: false
                    },
                    width: 'auto',
                    dataIndex: 'author',
                    text: 'Author'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'points',
                    text: 'Points'
                },
                {
                    xtype: 'gridcolumn',
                    renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                        return '<a target="_blank" href="http://reddit.com/r/' + value + '">' + value + '</a>';
                    },
                    cell: {
                        encodeHtml: false
                    },
                    dataIndex: 'subreddit',
                    text: 'Subreddit'
                }
            ],
            itemConfig: {
                ui: "grid-reddit-ui",
                header: {
                    ui: "grid-reddit-ui"
                },
                headerContainer: {
                    ui: "grid-reddit-ui"
                }
            }
        }
    ]
});