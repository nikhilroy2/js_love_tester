function testNowFunc() {
  let your_name = document.querySelector('[name="your_name"]').value;
  let partner_name = document.querySelector('[name="partner_name"]').value;
  let get_result = document.querySelector(".get_result");
  // empty name not allow
  if (your_name != "" || partner_name != "") {
    let testing_count = 0;
    let random_number = Number(Math.random() * 100).toFixed(0);

    let update_number = setInterval(updateInterval, 50);

    function updateInterval() {
      testing_count++;
      //console.log(random_number, testing_count)
      if (random_number == testing_count) {
        //alert('end')
        clearInterval(update_number);
      } else {
        get_result.innerHTML = testing_count + "%";
      }
    }
  }
}
