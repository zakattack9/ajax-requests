/*var category = document.getElementById('subreddit');
category.addEventListener('click', function(event){
  console.log("clicked");
});

function getData(){
  var data = JSON.parse(this.responseText);
  variables(data);
}

function variables(data){
  var content = document.getElementById('content');
  var tempFrag = document.createDocumentFragment();

  for(var i = 0; i < data.data.children.length; i++){

  }
}*/

$("button").click(function() {  
    $.ajax({
        url:"https://dog.ceo/api/breed/husky/images",
        type: "GET",
        complete: function(response) {
          console.log(response);
          $('#response').html(response.responseText);
        },
        error: function() {
          $('#reponse').html('Bummer: there was an error!');
        },
    });
});

//https://stackoverflow.com/questions/33327022/how-to-display-ajax-returned-data-to-html
//http://api.jquery.com/jQuery.ajax/