
// define list item variable


//function for adding new items

function newItem() {

  let inputValue = $('#input').val();
  let li = $('<li></li>');
  li.append(document.createTextNode(inputValue));

  if (inputValue === ''){
    alert("Please write something in the field.");
  } else {
    $('#list').append(li);
  };

  function crossOut() {
    li.toggleClass("strike");
  };
  li.on("click", crossOut);

  let deleteButton = $('<button>X</button>');
  deleteButton.addClass("crossOutButton");
  li.append(deleteButton);

  function deleteListItem() {
      li.addClass("delete");
  };
  deleteButton.on("click", deleteListItem);

  $('#list').sortable();

};
