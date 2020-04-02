var container = document.getElementById('container');
var count=0;
container.addEventListener('mouseenter',function(){
    var coordinates = container.getBoundingClientRect();
    var x=coordinates.top;
    var y=coordinates.left;
    var z=coordinates.right;
    var w=coordinates.bottom;
    if(count%2==0){
        container.style.top=Math.random()*x + 'px';
        container.style.left=Math.random()*y+ 'px';
    }
    else if(count%3==0){
        container.style.left=Math.random()*y + 'px';
        container.style.bottom=Math.random()*w + 'px';
    }
    else if(count%5==0){
        container.style.bottom=Math.random()*w + 'px';
        container.style.right=Math.random()*z + 'px';
    }
    else{
        container.style.right=Math.random()*w/3 + 'px';
        container.style.top=Math.random()*z/3 + 'px';
    }
    count++;
    console.log(container.style.top,container.style.left,container.style.left,container.style.left);
})
