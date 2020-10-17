scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
    . . . . c c c c c c . . . . . . 
    . . . c 6 7 7 7 7 6 c . . . . . 
    . . c 7 7 7 7 7 7 7 7 c . . . . 
    . c 6 7 7 7 7 7 7 7 7 6 c . . . 
    . c 7 c 6 6 6 6 c 7 7 7 c . . . 
    . f 7 6 f 6 6 f 6 7 7 7 f . . . 
    . f 7 7 7 7 7 7 7 7 7 7 f . . . 
    . . f 7 7 7 7 6 c 7 7 6 f c . . 
    . . . f c c c c 7 7 6 f 7 7 c . 
    . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
    . c 7 7 2 7 7 c f c 6 7 7 6 c c 
    c 1 1 1 1 7 6 f c c 6 6 6 c . . 
    f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
    f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
    . f 6 1 1 1 1 1 1 6 6 6 f . . . 
    . . c c c c c c c c c f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(hex`1400140004030303030303030303030303030303030303050b0a01010101010101010101010101010a010106090a0a0a010a0a0a0a0a0a0a0a0a0a0a0a0a010609010a0a010a0a0a0a010101010a0a01010a010609010a0a010a0a0a0a010a0a0a0a0a010a0a010609010a0a010a0a0101010a010a0a0a01010a010609010a0a010a0a010a0a0a01010a0a01010a010609010a0a010a0a010a0a0a0a010a0a010a0a0a0609010a0a010a0a010a0a0a0a010a0a01010a010609010a0a010a0a010a010101010a0a0a0a0a010609010a0a010a0a010a010a0a0a0a0a0a0a0a010609010a0a0a0a0a010a010a0a0a0101010a0a010609010101010101010a0101010a010a010a0a010609010a0a0a0a0a0a0a0a0a010a010a010a0a0a0609010a0a0a0a0a0a0a0a0a010a010a010a0a010609010a0a01010101010101010a010a0a0a0a010609010a0a0a0a0a0a0a0a0a0a0a010a0a0a0a0a06090a0a0a0a0a0a0a0a0a0a0a0a010a0a0a0a0a0c090a01010101010a010101010101010101010a060208080808080808080808080808080808080807`, img`
    ....................
    ..22222222222222.22.
    ....2.............2.
    .2..2....2222..22.2.
    .2..2....2.....2..2.
    .2..2..222.2...22.2.
    .2..2..2...22..22.2.
    .2..2..2....2..2....
    .2..2..2....2..22.2.
    .2..2..2.2222.....2.
    .2..2..2.2........2.
    .2.....2.2...222..2.
    .2222222.222.2.2..2.
    .2.........2.2.2....
    .2.........2.2.2..2.
    .2..22222222.2....2.
    .2...........2......
    .............2......
    ..22222.2222222222..
    ....................
    `, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.castle.tilePath7,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tilePath4,sprites.castle.tilePath5,sprites.dungeon.chestClosed,sprites.builtin.forestTiles29], TileScale.Sixteen))
tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles29)
scene.cameraFollowSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.startCountdown(30)
