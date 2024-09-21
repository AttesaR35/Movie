let movieName = '';
let movieRating = '';


function rateMovie(){
  if($('#movieName').val().length <= 1)
  {
    alert("Movie name must be atleast 2 chars")
  }
  else getResults()
}


function getResults(){
  movieName = $('#movieName').val();
  movieRating = $('#movieRating').val();
  let newRating = document.createElement('li')
  let removeBtn = document.createElement('button');
  removeBtn.innerHTML = "X"
  removeBtn.setAttribute('id', 'removeRating');
  newRating.innerHTML = movieName + ": " + movieRating + "/10 ";
  newRating.append(removeBtn);
  $('#rating').append(newRating);
  $('#movieName').val('');
  $('#movieRating').val('');
}


$('#rating').on('click', function(e){
  $(e.target).parent().remove();
});