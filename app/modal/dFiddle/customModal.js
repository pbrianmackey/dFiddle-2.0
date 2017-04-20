define(['plugins/dialog', 'knockout'], function (dialog, ko, validate) {
    
    var CustomModal = function() {
        this.input = ko.observable('');
    };

    CustomModal.prototype.ok = function() {
        dialog.close(this, this.input());
    };

    CustomModal.prototype.canDeactivate = function () {
        return dialog.showMessage('Are you sure that\'s your favorite color?', 'Just Checking...', ['Yes', 'No']);
    };

    CustomModal.show = function(){
        return dialog.show(new CustomModal());
    };

    self.bindingComplete = function() {
        console.log('bindingComplete');
        if ($("#test").length) {
            console.log('bind code fired');
            $("#test").parents("form").validate();
            $("#test").rules("add", { mvr_regex: true });
    }

    self.message = function() {
        return "some error"
    }

    $.validator.addMethod(
        "mvr_regex",
        function(value, element) {
            console.log('regex check fired');
            var pass = false;
            return pass;
        }, 
        function () {
            console.log('message function invoked');
            return "Invalid thingy: " + self.message();
        });
    }

    return CustomModal;
});