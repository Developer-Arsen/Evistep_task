$(document).ready(function () {
    var docTitle = document.title; // amen script@ ir ejum ashxatelu hamar popoxakani mej stanal eji anun@

    //////////   Price range   //////////

    if (docTitle === "Home | Core-Systems" || docTitle === "Products | Core-Systems"
        || docTitle === "Product details | Core-Systems") {
        // For price range
        $("#id_pricerange").slider({id: "id_pricerange", min: 0, max: 600, range: true, step: 5, value: [250, 450]});
    }

    //////////___Price range___//////////

    //////////   Bootstrap carousels   //////////

    if (docTitle === "Home | Core-Systems") {
        // Carousels
        $('#id_carousel1').bsTouchSlider();
    }


    if (docTitle === "Home | Core-Systems" || docTitle === "Product details | Core-Systems") {
        // Carousels
        $('#id_carousel2').bsTouchSlider();
    }

    //////////___Bootstrap carousels___//////////


    //////////   Button to top   //////////

    var oldScrollPosition = $(window).scrollTop(),
        savedScrollPosition;

    $("#id_to_top").on("click", "a", function (event) {
        event.preventDefault();
        savedScrollPosition = $(window).scrollTop();
        $('body,html').animate({scrollTop: 0}, 1500);
        $("#id_to_previous_scroll").addClass("custom_show");
    });

    $("#id_to_previous_scroll").on("click", "a", function (event) {
        $('body,html').animate({scrollTop: savedScrollPosition}, 1500);
        $("#id_to_previous_scroll").removeClass("custom_show");
    });

    $(document).on("scroll", "", function () {
        var newScrollPosition = $(window).scrollTop();
        if (newScrollPosition > oldScrollPosition) {
            $("#id_to_previous_scroll").removeClass("custom_show");
        }
        oldScrollPosition = newScrollPosition;
    });

    //////////___Button to top___//////////

    //////////   Navbar on scroll, Modal_viewpicture body height on resize   //////////

    // Navbari chisht scroll-i chap@ poxel 480-ic cacr width unecox deviceneri vra
    var w = window.innerWidth;
    if (w > 991) {
        $('#myNavbar').attr('data-offset-top', '121');
    } else if (w <= 991 && w > 480) {
        $('#myNavbar').attr('data-offset-top', '160');
    } else if (w <= 480 && w > 393) {
        $('#myNavbar').attr('data-offset-top', '193');
    } else {
        $('#myNavbar').attr('data-offset-top', '212');
    }

    // resize aneluc dynamic poxel
    $(window).resize(function () {
        var w = window.innerWidth;
        if (w > 991) {
            $('#myNavbar').attr('data-offset-top', '121');
        } else if (w <= 991 && w > 480) {
            $('#myNavbar').attr('data-offset-top', '160');
        } else if (w <= 480 && w > 393) {
            $('#myNavbar').attr('data-offset-top', '193');
        } else {
            $('#myNavbar').attr('data-offset-top', '212');
        }

        // modal viewpicture-i body-i height@ poxel resize aneluc (product_details.html)
        var modalBodyHeight = document.documentElement.clientHeight - $("#id_modal_viewpicture_header").outerHeight()
            - $("#id_modal_viewpicture_footer").outerHeight() - 40;
        $("#id_modal_viewpicture_body").height(modalBodyHeight);
    });

    //////////___Navbar on scroll, Modal_viewpicture body height on resize___//////////

    //////////   Login and Register modal   //////////

    // If clicked on login, open modal "login" tab opened, else
    // if clicked on register, open modal "register" tab opened
    $(".login_register").on("click", "", function (e) {
        e.preventDefault();
        $('#id_modalloginregister').modal({});
        if ($(this)[0].id === "id_login_button") {
            $("#id_login_header").addClass("active");
            $("#id_register_header").removeClass("active");

            $("#id_login_tab").addClass("active in");
            $("#id_register_tab").removeClass("active in");
        } else if ($(this)[0].id === "id_register_button") {
            $("#id_login_header").removeClass("active");
            $("#id_register_header").addClass("active");

            $("#id_login_tab").removeClass("active in");
            $("#id_register_tab").addClass("active in");
        }
    });

    // Change tabs (in modal)
    $('#id_login_register_menu').on("click", "a", function (e) {
        e.preventDefault();
        $(this).tab('show')
    });

    //////////___Login and Register modal___//////////

    //////////   Product details   //////////

    if (docTitle === "Product details | Core-Systems") {

        ////   On Quantity change   ////

        var productDetailQuantity = $('#id_product_details_quantity');

        // Input aneluc toxel miayn tver@
        $(productDetailQuantity).on("input", "", function () {
            if ($(this)[0].value !== "") {
                $(this)[0].value = +$(this)[0].value.replace(/[^\d]/g, "");
                if ($(this)[0].value === "0") {
                    $(this)[0].value = "";
                }
            }
        });

        // Inputic heracneluc ete datark e, sarqi 1
        $(productDetailQuantity).on("blur", "", function () {
            if ($(this)[0].value === "") {
                $(this)[0].value = 1;
            }
        });

        ////___On Quantity change___////

        ////   Zoom on picture hover   ////

        // disable on mobile devices
        var currentImage = $("#id_viewcurrentproduct img");
        if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )) {
            $(currentImage).ezPlus({
                zIndex: 2,
                cursor: 'pointer'
            });
        }

        ////___Zoom on picture hover___////

        ////   Owl carousel   ////

        var owlCarouselProductImages = $("#id_owl_carousel_product_images"),
            currentImageSrc = currentImage.attr('src'),
            allImagesInCarousel = $($(owlCarouselProductImages).html()).clone(),
            items_In_page_carousel = $("#id_owl_carousel_product_images .item"),
            items_In_modal_carousel = [];



        // Owlcarousel on page
        owlCarouselProductImages.owlCarousel({
            loop: false,
            dots: false,
            nav: true,
            mouseDrag: false,
            slideBy: 2,
            navContainer: '#id_owl_nav_controls',
            navElement: 'a',
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 3
                },
                320: {
                    items: 3
                },
                480: {
                    items: 4
                },
                560: {
                    items: 5
                },
                768: {
                    items: 3
                }
            }
        });

        // owl carouseli arajin elementin talis e sev border
        $(items_In_page_carousel)[0].className += " border_black";
        var selectedImage = $(".border_black");
        var selectedImageInmodal, currentImageSrcInModal;

        //  mouseover & select  //

        $(owlCarouselProductImages).on("mouseover", ".item", function () {
            currentImage.attr("src", $($(this)[0].firstChild).attr('src'));
            $($(this)[0].firstChild).attr('src');
        });

        $(owlCarouselProductImages).on("click", ".item", function () {
            $(selectedImage).removeClass("border_black");
            selectedImage = $(this);
            $(selectedImage).addClass("border_black");
            currentImageSrc = currentImage.attr('src');
            if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )) {
                $(currentImage).ezPlus({
                    zIndex: 2,
                    cursor: 'pointer'
                });
            }
        });

        $(owlCarouselProductImages).on("mouseout", ".item", function () {
            currentImage.attr("src", currentImageSrc);
        });

        //__mouseover & select__//

        ///  image view modal  ///

        var modalOneTimeOpened = false,
            owlCarouselInModal = $('#id_owl_carousel_in_modal'),
            modalViewpciture = $("#id_modalviewpicture");

        // Currentimage-i vra click aneluc
        $(currentImage).on("click", "", function () {
            $(modalViewpciture).modal({});
            $("#id_modaltitle").text($("#id_productname").text());
            $('#id_modalviewpicture_currentimage').attr("src", currentImageSrc);

            // ete voch mi angam chi bacvel, stexcel owlcarousel
            if (modalOneTimeOpened === false) {
                modalOneTimeOpened = true;
                owlCarouselInModal.html(allImagesInCarousel);
                owlCarouselInModal.owlCarousel({
                    loop: false,
                    dots: false,
                    nav: true,
                    mouseDrag: false,
                    slideBy: 2,
                    navContainer: '#id_owl_in_modal_nav_controls',
                    navElement: 'a',
                    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                    margin: 20,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 3
                        },
                        320: {
                            items: 3
                        },
                        480: {
                            items: 4
                        },
                        560: {
                            items: 5
                        },
                        768: {
                            items: 10
                        }
                    }
                });
            }

            items_In_modal_carousel = $("#id_owl_carousel_in_modal .item");

            // ayn owl-i element@, vor@ ejum sev borderov e, modali owl-i hamapatasxan elementi vra arhestakan
            // click anel, vorpeszi nuynpes darna sev borderov ev modali ej@ tertel ayd elementi vra
            var tempindex1 = getElementIndexByClassname(items_In_page_carousel, "border_black");
            $(items_In_modal_carousel[tempindex1]).trigger("click");
            $(owlCarouselInModal).trigger("to.owl.carousel", [tempindex1 - 1, 1, true]);

            // hide current image nav controls in modal
            if (items_In_modal_carousel.length === 1) {
                $(modalViewpictureNavLeft).addClass("hide");
                $(modalViewpictureNavRight).addClass("hide")
            } else {
                var tempIndex2 = getElementIndexByClassname(items_In_modal_carousel, "border_black");
                if (tempIndex2 <= 0) {
                    $(modalViewpictureNavLeft).addClass("off");
                    $(modalViewpictureNavRight).removeClass("off");
                } else if (tempIndex2 >= items_In_modal_carousel.length - 1) {
                    $(modalViewpictureNavRight).addClass("off");
                    $(modalViewpictureNavLeft).removeClass("off");
                } else {
                    $(modalViewpictureNavLeft).removeClass("off");
                    $(modalViewpictureNavRight).removeClass("off");
                }
            }
        });

        // owlcarousel@ refresh lineluc modali body-i height@ poxel
        $(owlCarouselInModal).on('refreshed.owl.carousel', function () {
            var modalBodyHeight = document.documentElement.clientHeight - $("#id_modal_viewpicture_header").outerHeight()
                - $("#id_modal_viewpicture_footer").outerHeight() - 40;
            $("#id_modal_viewpicture_body").height(modalBodyHeight);
        });

        //  mouseover & select in modal //

        var currentImageInModal = $("#id_modalviewpicture_currentimage");

        $(owlCarouselInModal).on("mouseover", ".item", function () {
            currentImageInModal.attr("src", $($(this)[0].firstChild).attr('src'));
            $($(this)[0].firstChild).attr('src');
        });

        $(owlCarouselInModal).on("click", ".item", function () {
            $(selectedImageInmodal).removeClass("border_black");
            selectedImageInmodal = $(this);
            $(selectedImageInmodal).addClass("border_black");
            currentImageSrcInModal = $($(this)[0].firstChild).attr("src");
            currentImageInModal.attr("src", currentImageSrcInModal);

            // poxel slaqneri vichak@, ete petq e
            var currentIndex = getElementIndexByClassname(items_In_modal_carousel, "border_black");
            if (currentIndex <= 0) {
                $(modalViewpictureNavLeft).addClass("off");
                $(modalViewpictureNavRight).removeClass("off");
            } else if (currentIndex >= items_In_modal_carousel.length - 1) {
                $(modalViewpictureNavRight).addClass("off");
                $(modalViewpictureNavLeft).removeClass("off");
            } else {
                $(modalViewpictureNavLeft).removeClass("off");
                $(modalViewpictureNavRight).removeClass("off");
            }
        });

        $(owlCarouselInModal).on("mouseout", ".item", function () {
            currentImageInModal.attr("src", currentImageSrcInModal);
        });

        //__mouseover & select in modal__//

        //  current image nav controls in modal  //

        var modalViewpictureNavLeft = $("#id_modal_viewpicture_nav_left"),
            modalViewpictureNavRight = $("#id_modal_viewpicture_nav_right");

        // dzax buttonin sexmeluc
        $(modalViewpictureNavLeft).on("click", "", function () {
            var currentIndex = getElementIndexByClassname(items_In_modal_carousel, "border_black");
            $(items_In_modal_carousel[currentIndex - 1]).trigger("click");
            $(owlCarouselInModal).trigger("to.owl.carousel", [currentIndex - 2, 700, true]);

            $(modalViewpictureNavRight).removeClass("off");
            if (currentIndex <= 1) {
                $(modalViewpictureNavLeft).addClass("off");
            } else {
                $(modalViewpictureNavLeft).removeClass("off");
            }
        });

        // aj buttonin sexmeluc
        $(modalViewpictureNavRight).on("click", "", function () {
            var currentIndex = getElementIndexByClassname(items_In_modal_carousel, "border_black");
            $(items_In_modal_carousel[currentIndex + 1]).trigger("click");
            $(owlCarouselInModal).trigger("to.owl.carousel", [currentIndex, 700, true]);

            $(modalViewpictureNavLeft).removeClass("off");
            if (currentIndex > items_In_modal_carousel.length - 3) {
                $(modalViewpictureNavRight).addClass("off");
            } else {
                $(modalViewpictureNavRight).removeClass("off");
            }
        });


        // keyboard-i aj u dzax arrowner@ sexmeluc
        $(document).on("keydown", "", function (e) {
            if ($(modalViewpciture[0]).hasClass("in") === true) {
                switch (e.originalEvent.key) {
                    case "ArrowLeft":
                        modalViewpictureNavLeft.trigger("click");
                        break;
                    case "ArrowRight":
                        modalViewpictureNavRight.trigger("click");
                        break;
                }
            }
        });

        // touch-i aj u dzax aneluc
        new Swipe(document.getElementById("id_modal_viewpicture_body"), function (event, direction) {
            event.preventDefault();
            switch (direction) {
                case "left":
                    modalViewpictureNavRight.trigger("click");
                    break;
                case "right":
                    modalViewpictureNavLeft.trigger("click");
                    break;
            }
        });

        //__current image nav controls in modal__//

        ///__image view modal__///
    }

    //////////___Product details___//////////

    //////////   Paginations   //////////

    if (docTitle === "Products | Core-Systems") {
        // Paginations in "products.html"
        // pagenumber_right elementi naxord "a"-i id-ic vercnenq verjin eji hamar@
        var maxPageNumber = +$("#id_pagenumber_right")[0].parentNode.previousElementSibling.firstChild.id.replace(/^\D+/g, ''),
            currentPageNumber = 1;
        $('#id_pagination').on("click", "a", function (e) {
            e.preventDefault();
            if ($(this)[0].id === "id_pagenumber_left") {
                if (currentPageNumber !== 1) {
                    currentPageNumber--;
                    $("#id_pagenumber_" + currentPageNumber).tab('show');
                }
            } else if ($(this)[0].id === "id_pagenumber_right") {
                if (currentPageNumber !== maxPageNumber) {
                    currentPageNumber++;
                    $("#id_pagenumber_" + currentPageNumber).tab('show');
                }
            } else {
                $(this).tab('show');
                currentPageNumber = +$(this)[0].id.replace(/^\D+/g, ''); // id-ic vercnenq eji hamar@
            }
        });
    }

    //////////___Paginations___//////////

    //////////   Cart   //////////

    if (docTitle === "Cart | Core-Systems") {

        ////   Cart Quantity and Total Price   ////

        //   Cart Total Price (on page load) //

        var cartUnitPrice = $('.cart_unit_price'),
            cartTotalPrice = $('.cart_total_price'),
            cartQuantityInput = $(".cart_quantity_input");

        for (var i = 0; i < cartTotalPrice.length; i++) {
            cartTotalPrice[i].innerText = "$" + (cartUnitPrice[i].innerText.replace(/^\D+/g, '') * cartQuantityInput[0].value);
        }
        //__Cart Total Price (on page load)__//

        //  On Quantity change  //

        var flagInputEmptyBlur = false;
        // Input aneluc toxel miayn tver@
        $(cartQuantityInput).on("input", "", function () {
            if ($(this)[0].value !== "") {
                $(this)[0].value = +$(this)[0].value.replace(/[^\d]/g, "");
                if ($(this)[0].value === "0") {
                    $(this)[0].value = "";
                }
            }
            $(this)[0].parentElement.nextElementSibling.children[0].innerText = "$" +
                +($(this)[0].parentElement.previousElementSibling.innerText.replace(/[^\d]/g, "")) *
                +($(this)[0].parentElement.children[1].value);
        });

        // Inputic heracneluc ete datark e, sarqi 1
        $(cartQuantityInput).on("blur", "", function () {
            if ($(this)[0].value === "") {
                $(this)[0].value = 1;
                flagInputEmptyBlur = true;
            }
            $(this)[0].parentElement.nextElementSibling.children[0].innerText = "$" +
                +($(this)[0].parentElement.previousElementSibling.innerText.replace(/[^\d]/g, "")) *
                +($(this)[0].parentElement.children[1].value);

        });

        // Plus aneluc avelacnel mek hatov
        $('.cart_quantity_plus').on("click", "", function () {
            if (flagInputEmptyBlur === true) {
                flagInputEmptyBlur = false;
            } else {
                $(this)[0].parentElement.children[1].value++;
            }
            $(this)[0].parentElement.nextElementSibling.children[0].innerText = "$" +
                +($(this)[0].parentElement.previousElementSibling.innerText.replace(/[^\d]/g, "")) *
                +($(this)[0].parentElement.children[1].value);
        });

        // Minus aneluc stugel, ete 1 che, apa 1-ov pakasacnel
        $('.cart_quantity_minus').on("click", "", function () {
            if ($(this)[0].parentElement.children[1].value > 1) {
                $(this)[0].parentElement.children[1].value--;
            }
            $(this)[0].parentElement.nextElementSibling.children[0].innerText = "$" +
                +($(this)[0].parentElement.previousElementSibling.innerText.replace(/[^\d]/g, "")) *
                +($(this)[0].parentElement.children[1].value);
        });

        //__On Quantity change__//

        ////___Cart Quantity and Total Price___////

        ////   Cart Remove   ////

        $('.cart_remove_button').on("click", "", function () {
            $(this)[0].parentElement.parentElement.remove();
        })

        ////___Cart Remove___////
    }

    //////////___Cart___//////////

    //////////   Contact us - phone   //////////

    if (docTitle === "Contact | Core-Systems") {
        $("#id_phone").mask("(999) 999-999");
    }

    //////////___Contact us - phone___//////////
});

// funkcian veradardznum e objecti arajin handipac ayn elementi index@, vor uni trvac klass@
function getElementIndexByClassname(objectname, classname) {
    for (var i = 0; i < objectname.length; i++) {
        if ($(objectname[i]).hasClass(classname)) {
            return i;
        }
    }
    return -1;
}