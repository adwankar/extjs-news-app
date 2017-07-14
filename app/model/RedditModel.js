Ext.define('NewsApp.model.RedditModel', {
extend: 'Ext.data.Model',
requires: [
    'Ext.data.field.Field'
],
fields: [
    {
        mapping: 'data.title',
        name: 'title'
    },
    {
        mapping: 'data.url',
        name: 'url'
    },
    {
        mapping: 'data.subreddit',
        name: 'subreddit'
    },
    {
        mapping: 'data.selftext_html',
        name: 'selftext_html'
    },
    {
        mapping: 'data.ups',
        name: 'points'
    },
    {
        mapping: 'data.downs',
        name: 'downs'
    },
    {
        mapping: 'data.is_self',
        name: 'is_self'
    },
    {
        mapping: 'data.permalink',
        name: 'permalink'
    },
    {
        mapping: 'data.author',
        name: 'author'
    }
]
});