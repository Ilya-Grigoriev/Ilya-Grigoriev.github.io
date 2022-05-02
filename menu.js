document.getElementById('hamburger').onclick = function()
{
if (document.getElementById('menu').hidden == true){
document.getElementById('menu').hidden = false;
} else {
document.getElementById('menu').hidden = true;
};
};
document.getElementById('menu').onclick = function()
{
document.getElementById('menu').hidden = true;
};