

function getRepo(handle){
    const url = 'https://api.github.com/users/' + handle + '/repos';
      console.log(url);
      fetch(url)
      .then(response=> response.json())
      .then(responseJson => displayResults(responseJson))
    };
    function displayResults(responseJson){
      $('.results').empty();
      
      for(i=0; i< responseJson.length; i++){
    $('.results').append(
          `<li><h3>${responseJson[i].full_name}</h3>
          <a href="${responseJson[i].html_url}" target="_blank"><p>${responseJson[i].html_url}</p></a>
          </li>`
        )};
      $('.resultsContainer').removeClass('hidden');
    };
    
    function watchForm(){
     $('form').submit(event => {
       event.preventDefault();
       let handle = $('.handle').val();
       console.log(handle);
       getRepo(handle);
     }
    );
    }
    
    watchForm();