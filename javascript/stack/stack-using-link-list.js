class Node {
    constructor(val){
      this.value = val;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(size){
      this.top = null;
      this.size = size;
      this.length = 0;
    }
  
    traverse(node) {
      const arr = [];
      while(node.next){
        arr.push(node.value);
        node = node.next;
      }
      arr.push(node.value);
      return arr.join('-->');
    }
  
    push(val){
      if(this.length === this.size) {
        return new Error('Stack is full!!!');
      }
      const newNode = new Node(val);
      if(this.top === null){
        this.top = newNode;
        this.length++;
        return this;
      }
      newNode.next = this.top;
      this.top = newNode;
      return this;
    }
  
    pop(){
      if(this.length === 0) {
        return new Error('Stack is empty!!!');
      }
      let currentNode = this.top;
      const nextNode = this.top.next;
      this.top = nextNode;
      currentNode = null;
      this.length--;
    }
  }
  
  const stack = new Stack(10);
  stack.push(1);
  console.log('Push: ', stack.traverse(stack.top));
  stack.push(2);
  console.log('Push: ', stack.traverse(stack.top));
  stack.push(3);
  console.log('Push: ', stack.traverse(stack.top));
  stack.push(4);
  console.log('Push: ', stack.traverse(stack.top));
  stack.pop();
  console.log('Pop : ', stack.traverse(stack.top));
  