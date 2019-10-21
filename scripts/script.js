function sleep(ms) {
  return false;
}

function show() {
  var height = screen.height - 100;
  document.getElementById('menuid').style.width = '20%';

  //document.getElementById("menuid").style.height=height + "px";
  document.getElementById('menu-items').style.display = 'block';

  //var elm = ocument.getElementById("newid").id;
  //alert(elm);

}

function hide() {
  document.getElementById('menuid').style.width = '0';
  document.getElementById('menu-items').style.display = 'none';
}

function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

function loginConsole() {
  console.log('Test');
}
