// Queue: FIFO
class Node {
    constructor(val){
      this.value = val;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
  
    traverse(node){
      const arr = [];
      while(node.next){
        arr.push(node.value)
        node = node.next;
      }
      arr.push(node.value);
      return arr.join('-->')
    }
  
    enqueue(val){
      const newNode = new Node(val);
      if(this.first === null) {
        this.first = newNode;
        this.last = newNode;
        this.length++;
        return this;
      }
      this.last.next = newNode;
      this.last = newNode;
      this.length++;
      return this;
    }
  
    dequeue(){
      const nextNode = this.first.next;
      this.first = nextNode;
      this.length--;
      return this;
    }
  }
  
  const queue = new Queue();
  queue.enqueue(1);
  console.log('Enqueue: ', queue.traverse(queue.first));
  queue.enqueue(2);
  console.log('Enqueue: ', queue.traverse(queue.first));
  queue.enqueue(3);
  console.log('Enqueue: ', queue.traverse(queue.first));
  queue.enqueue(4);
  console.log('Enqueue: ', queue.traverse(queue.first));
  queue.dequeue();
  console.log('Dequeue: ', queue.traverse(queue.first));