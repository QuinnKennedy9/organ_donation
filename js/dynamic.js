(function() {
  var whyText = document.querySelector('#whydonate_text');
  var whyImage = document.querySelector('whydonate_pic');
  console.log('fucking fire jesus christ');

  function loadWhy(){
    console.log('fire1');
    const url = '../organ_donation_copy/admin/phpscripts/connect.php?why=true';
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => { processResultWhy(data); })
      .catch(function(error) {
        console.log(error);
      });
  }

  function processResultWhy(data){
    console.log('fire2');
    const {why_text, why_img} = data[0];
    whyText.innerHTML = why_text;
    whyImage.src = why_img; 
  }

  window.addEventListener('load', loadWhy, false);

})();
