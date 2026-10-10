(function(){
  var b=document.querySelector('.menu-toggle'), u=document.getElementById('mainnav');
  if(b&&u){b.addEventListener('click',function(){var o=u.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');});}
  if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.querySelectorAll('video[autoplay]').forEach(function(v){v.removeAttribute('autoplay');try{v.pause();}catch(e){}});
    document.querySelectorAll('.roll-up').forEach(function(el){el.classList.add('in');});
  }
})();
