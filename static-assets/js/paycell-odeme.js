$('.removeSelect').on('click',function() {
   
    $(".empid").val('default');
    $(".removeSelect").addClass(' hidden');
    $(".nav_btn").removeClass('selected');
    $(".visible").removeClass('show');
    $(".visible").addClass('hidden');
});

$('.empid').change(function (e) {
    
    console.log($(e.target).val());
    if($(e.target).val()!="default")
    {
        $(".visible").removeClass('hidden');
        $(".visible").addClass('show');
        $(".nav_btn").removeClass('selected');
        $("#"+$(e.target).val()).addClass('selected');
        $(".removeSelect").removeClass(' hidden');
    }
    else{
        $(".visible").removeClass('show');
        $(".visible").addClass('hidden');
        $(".nav_btn").removeClass('selected');
        $(".removeSelect").addClass(' hidden');
    }
});
