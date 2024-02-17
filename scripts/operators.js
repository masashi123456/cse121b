function isHit(){
    return 0.5<Math.random()
    
}

function reloadShip(){
    shipHealth -= 1
    shipAmo += 3
}

function isDestroyed(){
    return health<0
}

function shipCanFire(){
    return shipHealth>0 && shipAmo>0
    
  
}

