function calculatedPentagon(){
    const Rhombusbase=document.getElementById('Rhombus-d1');
    const Rhombustext=Rhombusbase.value;
    const d1=parseFloat(Rhombustext);
    console.log(d1);

    const Rhombusheight= document.getElementById('Rhombus-d2');
    const Rhombustext2=Rhombusheight.value;
    const d2= parseFloat(Rhombustext2);
    console.log(d2);

    const area=0.5*d1*d2;
    console.log(area);

    const Rhombusareaspan=document.getElementById('Rhombus_area');
    Rhombusareaspan.innerText = area;

}