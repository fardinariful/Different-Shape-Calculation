function calculatedPentagon(){
    const Pentagonbase=document.getElementById('Pentagon-P');
    const Pentagontext=Pentagonbase.value;
    const p=parseFloat(Pentagontext);
    console.log(p);

    const Pentagonheight= document.getElementById('Pentagon-B');
    const Pentagontext2=Pentagonheight.value;
    const b= parseFloat(Pentagontext2);
    console.log(b);

    const area=0.5*p*b;
    console.log(area);

    const Pentagonareaspan=document.getElementById('Pentagon_area');
    Pentagonareaspan.innerText = area;

}