class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  class SinglyLinkList {
    constructor(val){
      this.head = new Node(val);
      this.tail = this.head;
      this.length = 1;
    }
  
    append(val) {
      const newNode = new Node(val);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
  
    prepend(val) {
      const newNode = new Node(val);
      newNode.next = this.head
      this.head = newNode
      this.length++;
      return this;
    }
  
    traverse(node){
      const arr = []
      while(node.next){
        arr.push(node.value);
        node = node.next;
      }
      arr.push(node.value);
      return arr.join('-->');
    }
  
    insert(val, index) {
      if(index === 0) {
        return this.prepend(val)
      }
      if(index === this.length - 1) {
        return this.append(val)
      }
      let count = 0;
      let currenNode = this.head, nextNodeRef;
      const newNode = new Node(val)
      while(count < index) {
        if(count === index - 1) {
          nextNodeRef = currenNode.next;
          currenNode.next = newNode;
          newNode.next = nextNodeRef;
        }
        count = count + 1;
        currenNode = currenNode.next
      }
      this.length++;
      return this;
    }
  
    reverse(){
      let currentNode = this.head;
      let prevNode, temp;
      while(currentNode.next) {
        temp = { ...currentNode }
        if(currentNode.value === this.head.value){
          currentNode.next = null;
          this.tail = currentNode;
        } else {
          currentNode.next = prevNode;
        }
        prevNode = currentNode;
        currentNode = temp.next;
        temp = null
      }
      currentNode.next = prevNode;
      this.head = currentNode;
      return this;
    }
  
    remove(index){
      let count = 0;
      let currentNode = this.head, prevNode;
      while(count <= index) {
        if(count == index) {
          prevNode.next = currentNode.next;
        }
        count++;
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      prevNode = null;
      this.length--;
      return this;
    }
  }
  
  const sll = new SinglyLinkList(3);
  console.log('Append:  ', sll.traverse(sll.head));
  sll.append(1);
  console.log('Append:  ', sll.traverse(sll.head));
  sll.append(5);
  console.log('Append:  ', sll.traverse(sll.head));
  sll.append(6);
  console.log('Append:  ', sll.traverse(sll.head));
  sll.reverse();
  console.log('Reverse: ', sll.traverse(sll.head));
  sll.append(0)
  console.log('Append:  ', sll.traverse(sll.head));
  sll.prepend(9)
  console.log('Prepend: ', sll.traverse(sll.head));
  sll.insert(10, 2);
  console.log('Insert:  ', sll.traverse(sll.head));
  sll.remove(2);
  console.log('Remove:  ', sll.traverse(sll.head));