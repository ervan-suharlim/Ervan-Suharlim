/* BERITA diambil dari Google Sheets. Kalau sheet gagal dimuat atau kosong, daftar cadangan di bawah yang dipakai.
   Kolom sheet (baris 1 = judul kolom): tanggal | judul | ringkas | link | gambar | embed */
var SHEET_URL="https://docs.google.com/spreadsheets/d/e/2PACX-1vR21NBBmPUd1XOuOM97khd60VrsaCE1jSoIjEOIyTo28UnDXwGgo-q12ZzkpjccTynhtevxugMzADsW/pub?gid=0&single=true&output=csv";
window.BERITA=[
{tanggal:"2026-08",judul:"Selesai magang di Percetakan Warna Print",ringkas:"Empat bulan membuat video promosi, mengedit desain, dan memproduksi ID card, nota, dan surat jalan. Terima kasih kepada pimpinan dan seluruh karyawan atas apresiasi dan ilmunya."}
];
(function(){
function csv(s){var r=[],w=[],c='',q=0,i,h;for(i=0;i<s.length;i++){h=s[i];if(q){if(h=='"'){if(s[i+1]=='"'){c+='"';i++}else q=0}else c+=h}else if(h=='"')q=1;else if(h==','){w.push(c);c=''}else if(h=='\n'||h=='\r'){if(h=='\r'&&s[i+1]=='\n')i++;w.push(c);r.push(w);w=[];c=''}else c+=h}
if(c||w.length){w.push(c);r.push(w)}return r}
function nd(v){v=(v||'').trim();var m;
if(/^\d{4}-\d{2}(-\d{2})?$/.test(v))return v;
if(m=v.match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{4})$/)){var a=+m[1],b=+m[2],d=a,o=b;if(b>12){d=b;o=a}return m[3]+'-'+('0'+o).slice(-2)+'-'+('0'+d).slice(-2)}
return ''}
function u(v){v=(v||'').trim();return /^https?:\/\//i.test(v)?v:''}
var K={tanggal:'tanggal',date:'tanggal',judul:'judul',title:'judul',ringkas:'ringkas',ringkasan:'ringkas',isi:'ringkas',summary:'ringkas',link:'link',url:'link',gambar:'gambar',foto:'gambar',image:'gambar',embed:'embed'};
function parse(t){var r=csv(t),H=(r.shift()||[]).map(function(x){return K[x.trim().toLowerCase()]||''}),L=[];
r.forEach(function(w){var o={};H.forEach(function(k,i){if(k)o[k]=(w[i]||'').trim()});
if(!o.judul)return;L.push({tanggal:nd(o.tanggal),judul:o.judul,ringkas:o.ringkas,link:u(o.link),gambar:u(o.gambar),embed:u(o.embed)})});
return L}
function load(){return new Promise(function(ok){
var c=window.AbortController?new AbortController():null,t=setTimeout(function(){c&&c.abort();ok()},5000);
fetch(SHEET_URL,{signal:c&&c.signal}).then(function(x){return x.text()}).then(function(x){var L=parse(x);if(L.length)window.BERITA=L}).catch(function(){}).then(function(){clearTimeout(t);ok()})})}
function draw(el,n,full){
var L=(window.BERITA||[]).slice().sort(function(a,b){return a.tanggal<b.tanggal?1:-1}).slice(0,n||999);
if(!L.length){el.textContent='Belum ada berita.';return}
L.forEach(function(b){
var m=b.tanggal.length==7,a=document.createElement('div');a.className='ni';
var t=document.createElement('time');
if(b.tanggal)t.textContent=new Date(m?b.tanggal+'-01':b.tanggal).toLocaleDateString('id-ID',m?{month:'long',year:'numeric',timeZone:'UTC'}:{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'});
var w=document.createElement('div'),h=document.createElement('h3'),p=document.createElement('p');
h.textContent=b.judul;p.textContent=b.ringkas||'';w.appendChild(h);w.appendChild(p);
if(b.link){var k=document.createElement('a');k.className='lk';k.href=b.link;k.target='_blank';k.rel='noopener';k.textContent='Lihat di LinkedIn';w.appendChild(k)}
if(full&&b.gambar){var i=document.createElement('img');i.src=b.gambar;i.alt='';i.loading='lazy';w.appendChild(i)}
if(full&&b.embed){var f=document.createElement('iframe');f.src=b.embed;f.loading='lazy';f.title='Postingan LinkedIn';w.appendChild(f)}
a.appendChild(t);a.appendChild(w);el.appendChild(a)})}
window.renderBerita=function(el,n,full){el.textContent='Memuat berita...';load().then(function(){el.textContent='';draw(el,n,full)})};
})();
