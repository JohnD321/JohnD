let canvas
let ctx

function animate(){
    // some animations
    self.requestAnimationFrame(animate)
}

self.onmessage= function(ev){
    if(ev.data.msg === 'offscreen') {
        canvas= ev.data.canvas
        ctx= canvas.getContext('2d')
        animate()
    }
}
