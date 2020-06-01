<script type="text/javascript">
$(document).ready(function(){
  $('a').on('click', function(e){
    e.preventDefault();
  });
    
  $('#ddmenu li').hover(function () {
     clearTimeout($.data(this,'timer'));
     $('ul',this).stop(true,true).slideDown(200);
  }, function () {
    $.data(this,'timer', setTimeout($.proxy(function() {
      $('ul',this).stop(true,true).slideUp(200);
    }, this), 100));
  });

});
</script>