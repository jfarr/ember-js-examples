
App = Em.Application.create();

App.controller = Em.Object.create({
    inputText: '',
    savedText: '',
    
    onClickOpen: function() {
        $('#dialog').dialog('open');
    },
    
    onClickSave: function() {
        this.set('savedText', this.get('inputText'));
    }
});

App.View = Em.View.extend({
    controller: App.controller,
    templateName: 'view-template',
    
    onClickOpen: function() {
        App.controller.onClickOpen();
    }
});

App.Dialog = JQ.Dialog.extend({
    controller: App.controller,
    elementId: 'dialog',
    templateName: 'dialog-template',
    autoOpen: false,
    title: 'Example Dialog',
    resizable: false,
    modal: true,
    width: 600,
    buttons: {
        "Save": function() {
            App.controller.onClickSave();
            $('#dialog').dialog('close');
        },
        "Cancel": function() {
            $('#dialog').dialog('close');
        }
    }
});


App.View.create().append();
App.Dialog.create().append();
