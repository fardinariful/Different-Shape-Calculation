function calculatedEllipse(){
    const ellipsebase=document.getElementById('ellipse-a');
    const ellipsetext=ellipsebase.value;
    const a=parseFloat(ellipsetext);
    console.log(a);

    const ellipseheight= document.getElementById('ellipse-b');
    const ellipsetext2=ellipseheight.value;
    const b= parseFloat(ellipsetext2);
    console.log(b);

    const area=3.1416*b*a;
    console.log(area);

    const ellipseareaspan=document.getElementById('ellipse_area');
    ellipseareaspan.innerText = area;

}