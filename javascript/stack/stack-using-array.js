// Stack: FILO/ LIFO
class Stack {
    constructor(size){
      this.data = [];
      this.size = size;
      this.length = 0;
    }
    
    push(val) {
      if(this.size === this.length){
        return new Error('Stack is full!');
      }
      this.data[this.length] = val
      this.length++;
      return this;
    }
  
    pop() {
      this.data.length = --this.length;
      return this;
    }
  }
  
  const stack = new Stack(10);
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.pop();