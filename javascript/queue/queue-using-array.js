// Queue: FIFO
class Queue {
    constructor(){
      this.data = [];
      this.length = 0;
    }
    push(val){
      this.data.push(val);
      this.length++;
      return this;
    }
  
    pop(){
      this.data.shift();
      this.length--;
      return this;
    }
  }
  
  const queue = new Queue();
  queue.push(1);
  queue.push(2);
  queue.push(3);
  queue.push(4);
  console.log(queue)
  queue.pop();