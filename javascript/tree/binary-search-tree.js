class Node {
    constructor(val){
      this.value = val;
      this.left = null;
      this.right = null;
    }
  }
  class BinarySearchTree {
    constructor(){
      this.root = null;
    }
  
    findNode(node, val){
      while(true){
        if(val < node.value){
          if(node.left === null){
            return node;
          }
          node = node.left;
        } else {
          if(node.right === null){
            return node;
          }
          node = node.right;
        }
      }
    }
  
    bft(node){
      const queue = [];
      const list = [];
      queue.push(node);
      while(queue.length){
        const currentNode = queue.shift()
        list.push(currentNode.value);
        if(currentNode.left){
          queue.push(currentNode.left)
        }
        if(currentNode.right){
          queue.push(currentNode.right)
        }
      }
      return list;
    }
  
    dft(node, arr){
      if(node === null){
        return;
      }
      arr.push(node.value)
      this.dft(node.left, arr)
      this.dft(node.right, arr)
      
      return arr;
    }
  
    insert(val){
      const newNode = new Node(val)
      if(this.root === null){
        this.root = newNode;
        return this;
      }
      const node = this.findNode(this.root, val);
      if(val < node.value){
        node.left = newNode;
      } else {
        node.right = newNode;
      }
      return this;
    }
  }
  
  const tree = new BinarySearchTree();
  tree.insert(9)
  tree.insert(4)
  tree.insert(6)
  tree.insert(20)
  tree.insert(170)
  tree.insert(15)
  tree.insert(1)
  tree.bft(tree.root, [])