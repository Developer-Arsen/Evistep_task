$('.switch').on('change',function(){
    
    if($('.slider').css( "background-color" ) =='rgb(204, 204, 204)'){
    $('body').css('background','black');
    $('main*').css('color','white');
    $('.footer_navigation h4 ').css('color','white');
    }
    else{
        $('body').css('background','white');
        $('main*').css('color','black');
        $('.footer_navigation h4 ').css('color','black');
    }
});

$("#Search").keyup(function(){

    /*//////////////////////////////////////////
    Himnakan mitqner, erb vor input i mej inchvor ban grum enq redirect ani full i 
    ej, dni search i inputi vra click ani, arden full i ajaxy kashxati ev kberi takic klcni
    heto et diveri spaneri vra cikl frainq vercnelov span eri text ery jquery i mijocov u lcnelov array mej
    veradarnanq mer sayt u karuceinq mer suggestion-y;
    chstacvec console anel redirect exac saytum; 

    ///////////////////////////////////////*/
    let answer = prompt('go ahead? write y/n');
    if(answer == 'y'){
    let value = $(this).val();
    let evi = 'http://evistep.loc/';
    let url= "https://full.am/am"; 
    //return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    window.location =url+'/posting/search?keyword='+value ;
if(  window.location == url+'/posting/search?keyword='+value ){
    window.alert('a');
    alert(value);
}
 
    }
    else{
       
    }
  
    // <div class="autocomplete-suggestion" data-index="1"><strong>asaa</strong>a</div>
//     if(  window.location == url){
//     window.alert('11111');
//   console.log('2222');
//     }
    //window.location = url; 
    //window.location.console = console.log( "Logged!");
    // // if(   window.location == "https://full.am/am" ){
    //     if (window.console ) {
    //       
    //     }
            //   alert(  $("#keyword").val('a'));
//   alert(  $("#keyword").val());

   // <input id="keyword" name="keyword" type="text" autocomplete="off" placeholder="">
    let suggestion = [];


    //document.location.replace(document.referrer);
});