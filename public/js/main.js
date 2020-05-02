$(document).ready(function(){
    $('.delete-client').on('click', function(e){
        $target = $(e.target);

        const id = $target.attr('data-id')

        $.ajax({
            type:'DELETE',
            url:'/clientprofile/'+ id,
            success: function(){
                alert('Deleting Client...')
                window.location.href='/clientlist'
            },
            error: function(err){
                console.log(err)
            }
        })
    })
});