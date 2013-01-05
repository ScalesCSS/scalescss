function AddWebsite() {
    
}

AddWebsite.prototype.post = function(data) {
    $.ajax({
        url: 'process.php',
        dataType: 'json',
        type: 'post',
        data: data,
        success: function(response) {
            $('.message').hide().append('<p class="success">Success! Your site will be added shortly.</p>').fadeIn('slow', function() {
                $(this).delay(5000).fadeOut('slow', function() {
                    $('.message p').remove();
                    $('form').each (function() {
                        this.reset();
                    });
                });
            });
        },
        error: function(response) {
            $('.message').hide().append('<p class="fail">Something went terribly wrong! Try again.</p>').fadeIn('slow', function() {
                $(this).delay(5000).fadeOut('slow', function() {
                    $('.message p').remove();
                });
            });
        }
    })
}

AddWebsite.prototype.bindPost = function() {
    if($('.message').is('visible')) {
        $('.message').hide();
    }
    $('form input[type="submit"]').bind('click', this.submitForm());
}

AddWebsite.prototype.submitForm = function() {
    var that = this;
    
    return function(e) {
        e.preventDefault();
        var data = $(this).closest('form').serialize();
        that.post(data);
    }
}

var submitForm = new AddWebsite();

submitForm.bindPost();