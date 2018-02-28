var secondBtn=document.getElementById('secondBtn');
var modal = document.getElementById('simpleModal');
var modalOne=document.getElementById('simpleModalOne');
var modalBtn=document.getElementById('modalBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];
var closeBtnOne=document.getElementsByClassName('closeBtn')[1];
var cancelBtn=document.getElementById('cancelBtn');
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
closeBtnOne.addEventListener('click',closeModalOne);
secondBtn.addEventListener('click',openModalOne);
cancelBtn.addEventListener('click',closeModalOne);
function openModal() {
modal.style.display = 'block';
}
function closeModal() {
modal.style.display = 'none';
}
function openModalOne(){
  modalOne.style.display='block';
}
function closeModalOne(){
modalOne.style.display='none';
}

