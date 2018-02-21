console.log('1');
const $top = $( '.top' ),
    $left =  $( '.left' ),
    $bottom = $( '.bottom' ),
    $right =  $( '.right' ),
    $robot = $( '.robot' );



$right.on('click', function() {
    $robot.css( 'animation-name', 'slideRight');
});
$left.on('click', function() {
    $robot.css( 'animation-name', 'slideLeft');
});
$top.on('click', function() {
    $robot.css( 'animation-name', 'slideTop');
});
$bottom.on('click', function() {
    $robot.css( 'animation-name', 'slideBottom');
});
