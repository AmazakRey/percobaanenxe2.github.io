
// CATATAN = Kalau id maka pakai ( # ) dan kalau class maka pakai ( . )



// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector ('.navbar-nav');
// ketike menu diklik
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};




// Toggle class active untuk search form
const searchForm = document.querySelector ('.search-form') ;
const searchBox = document.querySelector ('#search-box') ;

document.querySelector ('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active') ;
    searchBox.focus () ;
    e.preventDefault () ;
  };


  
  // Klik di luar side bar untuk menghilangkan nav // elemen
  const menu = document.querySelector ('#menu');
  const sb = document.querySelector ('#search-button');
  const sc = document.querySelector ('#shopping-cart-button');


  document.addEventListener('click', function(e) {
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)){
      navbarNav.classList.remove('active');
    }

    if (!sb.contains(e.target) && !searchForm.contains(e.target)){
   searchForm.classList.remove('active');
  }
    if (!sc.contains(e.target) && !shop.contains(e.target)){
   shop.classList.remove('active');
  }

});


// Toggle class active untuk shopping cart 

const shop = document.querySelector ('.shopping-cart');

// Ketika Shopping Cart Diklik 

document.querySelector ('#shopping-cart-button').onclick = (e) => {
shop.classList.toggle ('active');
e.preventDefault
};



// Modal Box / Tombol Mata Untuk Detail
const detailproductmodal = document.querySelector ('#item-detail') ;
const detailproducts = document.querySelectorAll ('.product-detail-button') ;



// Ketika Tanda Mata Diklik
detailproducts.forEach((btn) => {
  btn.onclick = (e) => {
    detailproductmodal.style.display = 'flex';
    e.preventDefault();
    };
    });
    




// Klik Tombol close

document.querySelector ('.modal .close-icon').onclick = (e) => {
  detailproductmodal.style.display = 'none';
  e.preventDefault ();  
}

// Klik diluar Modal keluar box dengan klik di luar box 

window.onclick = (e)  => {
  if (e.target === detailproductmodal) {
    detailproductmodal.style.display = 'none';
    e.preventDefault
  }
}
