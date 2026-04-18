// Beginner-friendly JS: mobile menu toggle and simple form validation
document.addEventListener('DOMContentLoaded', function(){
  // Mobile menu (shows/hides .nav-menu when .menu-toggle clicked)
  const btn = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-menu');
  if(btn && menu){
    btn.addEventListener('click', ()=>{
      menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
    });
  }
});

// global submitReport used by the contact page button
function submitReport(){
  const name = (document.getElementById('fname')||{}).value || '';
  const phone = (document.getElementById('phone')||{}).value || '';
  const itemType = (document.getElementById('item-type')||{}).value || '';
  const desc = (document.getElementById('desc')||{}).value || '';
  const secret = (document.getElementById('secret')||{}).value || '';

  // simple beginner-friendly validation
  if(!name.trim() || !phone.trim() || !itemType.trim() || !desc.trim() || !secret.trim()){
    alert('Please fill all required fields before submitting.');
    return false;
  }

  // show a friendly success message (could be replaced by server submission later)
  alert('Thank you '+name+'!\n\nYour report was submitted. We will contact you on '+phone+' if we find a match.');
  // clear form (optional)
  try{
    document.getElementById('fname').value='';
    document.getElementById('phone').value='';
    document.getElementById('email').value='';
    document.getElementById('item-type').value='';
    document.getElementById('date-lost').value='';
    document.getElementById('location').value='';
    document.getElementById('desc').value='';
    document.getElementById('secret').value='';
  }catch(e){}
  return true;
}