let clbtList = document.querySelectorAll('.cl');

clbtList.forEach(clbt => {
    clbt.addEventListener('click', function() {
        if (this.classList.contains('bg-slate-200')) {
            this.classList.remove('bg-slate-200'); 
            this.classList.add('bg-pink-300'); 
            this.innerHTML = '<i class="fa-solid fa-heart" style="color: #f5003d;"></i>'
        } else {
            this.classList.remove('bg-pink-300');
            this.classList.add('bg-slate-200'); 
            this.innerHTML = '<i class=" fa-solid fa-heart " style=" color: #000000;"></i>' 
        }
    });
});

let deltList = document.querySelectorAll('.del'); 
deltList.forEach(delt => {
    delt.addEventListener('click', function() {
        let itemContainer = this.closest('.A'); 
        itemContainer.style.display = 'none'; 
        
    });
});

let pbtn1 = document.querySelector('.plus1')
let mbtn1 = document.querySelector('.minus1')
pbtn1.addEventListener('click',()=>{
    let tp1 = document.querySelector('.tprice')
    let p1 = document.querySelector('.price1')
    pp1=p1.innerHTML
    pp01=pp1.substring(0,pp1.indexOf('$'))
    p1.innerHTML=String(Number(pp01)+549)+"$"
    tpp1=tp1.innerHTML
    tpp01=tpp1.substring(0,tpp1.indexOf('$'))
    tp1.innerHTML=String(Number(tpp01)+549)+"$"
    let n1 = document.querySelector('.num1')
    nn1=n1.innerHTML
    console.log(nn1)
    n1.innerHTML=String(Number(nn1)+1)

})
mbtn1.addEventListener('click',()=>{
    let p1 = document.querySelector('.price1')
    let tp1 = document.querySelector('.tprice')
    pp1=p1.innerHTML
    pp01=pp1.substring(0,pp1.indexOf('$'))
    tpp1=tp1.innerHTML
    tpp01=tpp1.substring(0,tpp1.indexOf('$'))
    if (Number(pp01)>0){
        p1.innerHTML=String(Number(pp01)-549)+"$"
        tp1.innerHTML=String(Number(tpp01)-549)+"$"
        let n1 = document.querySelector('.num1')
        nn1=n1.innerHTML
        console.log(nn1)
        n1.innerHTML=String(Number(nn1)-1)

    }
})





