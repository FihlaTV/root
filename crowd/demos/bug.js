function demo() {

    cam ({azim:0, polar:90, distance:200});

    //set( { fps:60, iteration:10, precision:[ 10, 15, 10, 10 ] } )
    

    populate();

    setTimeout( function(){ clear(); }, 4000 );

    setTimeout( function(){ populate(); }, 8000 );

};

function populate () {

    for(var i=0; i<100; i++){ 

        agent({ 
            pos:[ Math.rand(-300,300), 0, Math.rand(-100,100)],
            radius: 2,
            speed: 1,
            useRoad:false,
            goal:[0,0],

        })

    }

    up();

    set({ 
        fps:60, 
        forceStep:0.3, 
        iteration:1, 
        precision:[ 10, 15, 10, 10 ],
        patchVelocity:false, 
    });

}

function clear () {

    crowd.send( 'clear' );
    view.reset();

}