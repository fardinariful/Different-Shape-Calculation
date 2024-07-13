function calculatedParallelogram(){
    const Parallelogramebase=document.getElementById('Parallelogram-base');
    const Parallelogrametext=Parallelogramebase.value;
    const base=parseFloat(Parallelogrametext);
    console.log(base);

    const Parallelogrameheight= document.getElementById('Parallelogram-height');
    const Parallelogrametext2=Parallelogrameheight.value;
    const height= parseFloat(Parallelogrametext2);
    console.log(height);

    const area=base*height;
    console.log(area);

    const Parallelogrameareaspan=document.getElementById('Parallelogram_area');
    Parallelogrameareaspan.innerText = area;

}