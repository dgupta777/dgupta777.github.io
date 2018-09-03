(function() {

                var welcomeSection = $('.welcome-section'),
                    enterButton = welcomeSection.find('.enter-button');

                setTimeout(function() {
                    welcomeSection.removeClass('content-hidden');
                }, 500);
                setTimeout(function() {
                    here.removeClass('content-hidden');
                }, 500);

                enterButton.on('click', function(e) {
                    e.preventDefault();
                    welcomeSection.addClass('content-hidden').fadeOut();
                });

                setTimeout(function() {
                    $('.fly-in-text2').removeClass('hidden');
                }, 1500);

                setTimeout(function() {
                    $('.here').removeClass('hidden');
                }, 3000);

                setTimeout(function() {
                    $('.about').removeClass('hidden');
                }, 4000);


            })();
