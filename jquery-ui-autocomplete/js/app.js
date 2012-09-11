window.App = Em.Application.create({
    ready: function() {
        App.View.create().append();
    }
});

App.controller = Em.Object.create({
  inputText: "",
  autocomplete: function(request, response) {
      response([request.term]);
  }
});

App.AutoComplete = JQ.AutoComplete.extend({
    source: App.controller.autocomplete
});

App.View = Em.View.extend({
    controller: App.controller,
    templateName: 'view-template'
});
