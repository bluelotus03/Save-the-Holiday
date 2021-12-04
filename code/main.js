import kaboom from "kaboom";

// initialize context
kaboom();

// load assets
loadSprite("santa", "sprites/santa.png");
loadSprite("mystery-box", "sprites/mystery-box.png");
loadSprite("mystery-box2", "sprites/mystery-box2.png");
loadSprite("background-tile", "sprites/background-tile.png");
loadSprite("block-4", "sprites/block-4.png");
loadSprite("block-2", "sprites/block-2.png");
loadSprite("block-5", "sprites/block-5.png");
loadSprite("block-3", "sprites/block-3.png");
loadSprite("present2", "sprites/present2.png");
loadSprite("present", "sprites/present.png");
loadSprite("lighting_yellow", "sprites/lighting_yellow.png");
loadSprite("explosion", "sprites/explosion.png");
loadSprite("candy-cane2", "sprites/candy-cane2.png");
loadSprite("candy-cane", "sprites/candy-cane.png");
loadSprite("bunny-enemy", "sprites/bunny-enemy.png");
loadSprite("brown-block", "sprites/brown-block.png");
loadSprite("wingMan1", "sprites/wingMan1.png");
loadSprite("unboxed", "sprites/unboxed.png");
loadSprite("tree", "sprites/tree.png");
loadSprite("sharp-spike1", "sprites/sharp-spike1.png");
loadSprite("lamp-post", "sprites/lamp-post.png");

// map creation
const map = [
'                                   ',
'                                   ',
'                                   ',
'                                   ',
'                                   ',
'                                   ',
'                                   ',
'                                   ',
'    %      =*=%=                   ',
'                                   ',
'                                   ',
'                                   ',
't                            |   tt',
'                   ^    ^          ',
'                                   ',
'===============================  ==',
]

const levelCfg = {
  width: 20,
  height: 20,
  '=': () => [sprite('block-4'), 'ground', scale(0.35), area()],
  '$': () => [sprite('present')],
  '%': () => [sprite('mystery-box2'), 'present-surprise', scale(0.35), area()],
  '*': () => [sprite('mystery-box2'), 'candy-cane-surprise', scale(0.35), area()],
  '}': () => [sprite('unboxed')],
  '|': () => [sprite('lamp-post'),'post', area()],
  '^': () => [sprite('bunny-enemy'), 'enemy', scale(0.2), area()],
  '#': () => [sprite('block-4'), 'ground', scale(0.35), area()],
  '-': () => [sprite('block-2'), 'ground', scale(0.35), area()],
  '_': () => [sprite('block-3'), 'ground', scale(0.35), area()],
  'x': () => [sprite('block-5'), 'ground', scale(0.35), area()],
  't': () => [sprite('tree'), 'ground', scale(0.35), area()],
}

addLevel(map, levelCfg)