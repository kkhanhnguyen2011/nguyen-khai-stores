// app.js demo localStorage product list
const STORAGE_KEY = 'nk_products_v1';
function getProducts(){ try{ return JSON.parse(localStorage.getItem(STORAGE_KEY))||[] }catch(e){ return []} }
function saveProducts(list){ localStorage.setItem(STORAGE_KEY, JSON.stringify(list)); }
function renderShop(){ const el=document.getElementById('products-grid'); if(!el) return;
  const list=getProducts(); el.innerHTML=list.map(p=>`
    <a class="card" href="product.html?id=${p.id}">
      <img src="${p.images && p.images[0] ? p.images[0] : 'assets/placeholder.png'}"/>
      <h3>${p.name}</h3><p>${p.price} VNĐ</p>
    </a>`).join('')||'<p>Chưa có sản phẩm</p>'; }
document.addEventListener('DOMContentLoaded', renderShop);