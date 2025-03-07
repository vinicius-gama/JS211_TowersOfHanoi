'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// An object that represents the three stacks of Towers of Hanoi; 
  // * each key is an array of Numbers: 
    // * A is the far-left, 
    // * B is the middle, 
    // * C is the far-right stack
      // * Each number represents the largest to smallest tokens: 
        // * 4 is the largest, 
        // * 1 is the smallest

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

// Start here. What is this function doing?
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Next, what do you think this function should do?
const movePiece = (start, end) => {

  // Your code here

// insert parameters into function to select what stack we move from to what stack we move to.

// create a variable that stores the last item from the start stack.
let moveFrom = stacks[start].pop() // could  be dot notation. preference 

// push that variable to the array where we want to move the variable.
stacks[end].push(moveFrom)

}

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = (start, end) => {
  // Your code here
  console.log(stacks[start])
  let startPiece = stacks[start].slice(-1)
  console.log("startPiece: ", startPiece)
  let endPiece = stacks[end].slice(-1)
  console.log('endPiece: ', endPiece)

  // need to move to a different location.
  // the stack piece need to be less than the end piece.
  // if the stack stack stack piece is grater than zero return false.else return  true
  if  ((startPiece > endPiece && endPiece.length > 0 ) || start === end) {
return false
  }
  else 
  return true 
  
}

// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  // Your code here
  // 
  if (stacks.b.length === 4 || stacks.c.length === 4) {
  return true
  }
  else 
  return false


}


// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  // Your code here
  let start = startStack
  let end = endStack
  
  if (isLegal(start, end)== true) {
  movePiece(start, end)
  checkForWin()
  }
  else console.log ("invalid move")

}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
