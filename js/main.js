$(document).ready(function () {


    // máscaras
    $('input[name="cep"]').mask("99999-999");
    $('input[name="cpf"]').mask("999.999.999-99");
    $('input[name="cnpj"]').mask('00.000.000/0000-00', { reverse: true });
    var SPMaskBehavior = function (val) {

        var mask = "";

        if (val.replace(/\D/g, '').substring(0,4) == "0800")
        {
            mask = '0000 000 0000';
        }
        else
        {
            if (val.replace(/\D/g, '').length === 11)
            {
                mask = '(00) 00000-0000';
            }
            else
            {
                mask = '(00) 0000-00009';
            }
        }

        return mask;
    },
    spOptions = {
        onKeyPress: function (val, e, field, options) {
            field.mask(SPMaskBehavior.apply({}, arguments), options);
        }
    };
    $('input[name="telefone"], input[name="telefone2"]').mask(SPMaskBehavior, spOptions);

    //  controle menu mobile
    $('#mobile-toggle').click(function () {
        $('#main-menu').css('right', '0px');
        $('main').css('filter', 'blur(5px)');
        $('#fechar-menu').addClass("active");
        $('html').css('overflow', 'hidden');
        $('body').css('overflow', 'hidden');
    });

    $('#fechar-menu').click(function () {
        $('#main-menu').css('right', '-100%');
        $('main').css('filter', 'blur(0px)');
        $('#fechar-menu').removeClass("active");
        $('html').css('overflow', 'auto');
        $('body').css('overflow', 'auto');
    });
    // fim controle menu mobile


    //  controle menu "ativo"
    var prevScrollpos = window.pageYOffset;
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $('header').addClass('active');
        }
        if ($(window).scrollTop() < 50) {
            $('header').removeClass('active');
        }

        var currentScrollPos = window.pageYOffset;
        if ((prevScrollpos > currentScrollPos) || ($(window).scrollTop() < 50)) {
            $('header').removeClass('headerHidden');
        } else {
            $('header').addClass('headerHidden');
        }
        prevScrollpos = currentScrollPos;
    });
    // fim controle menu "ativo"


     // controle foco do input
     $('.form-item__field').on('focus', function(){
        $(this).parent().addClass('active');
    })

    $('.form-item__field').on('focusout', function(){
        if ($(this).val() == '')
            $(this).parent().removeClass('active');
    })
    // fim controle foco do input

    // select2
    $('select').select2();
    // fim select2

});

// scroll suave para elemento na página
function scrollMenu(menu) {
    $('body, html').animate({ scrollTop: $('#'+menu).offset().top - 50}, 1500);
}

// abre/fecha a busca
var focused;
var searchOpen = false;
function toggleSearch(){
    $('#search').toggleClass('active');
    $(document).keyup(function(e){
        if(e.key === "Escape" && searchOpen) {
            toggleSearch();
        }
    });

    if ( $('#search').hasClass('active') ) {
        $('html').css('overflow', 'hidden');
        $('body').css('overflow', 'hidden');
        focused =$(':focus');
        $('.searchForm__field').focus();
        searchOpen = true;


    } else {
        $('html').css('overflow', 'auto');
        $('body').css('overflow', 'auto');
        searchOpen = false;


    }
}
