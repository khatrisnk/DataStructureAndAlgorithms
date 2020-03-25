class MyArray {
    constructor(){
      this.data = {}
      this.length = 0
    }
  
    push(value) {
      this.data[this.length] = value;
      this.length++;
    }
  
    pop() {
      if(this.length === 0){
        return undefined;
      }
      const elementToBeDeleted = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return elementToBeDeleted;
    }
  
    shift() {
      for(let key in this.data){
        this.data[key] = this.data[Number(key)+1];
      }
      delete this.data[this.length - 1];
      this.length--;
    }
  
    unshift(value) {
      // for(let i = this.length; i >= 0; i--) {
      //   this.data[i] = this.data[i - 1];
      // }
      let next, prev = this.data[0]
      for(let key in this.data) {
        next = this.data[Number(key)+1];
        this.data[Number(key)+1] = prev;
        prev = next; 
      }
      this.data[0] = value;
      this.length++;
    }
  
    map(cbFn) {
      const data = []
      for(let key in this.data) {
        const val = cbFn(this.data[key], key)
        data[key] = val
      }
      return data
    }
  }
  
  const arr = new MyArray()
  arr.push(3)
  arr.push(5)
  arr.push(1)
  console.log('Push: ', arr)
  arr.pop()
  console.log('Pop: ', arr)
  arr.push(1)
  console.log('Push: ', arr)
  arr.shift()
  console.log('Shift: ', arr)
  arr.unshift(3)
  console.log('Unshift: ', arr)
  
  const mappedData = arr.map((item, index) => {
    return item + 1
  })
  console.log('MappedData: ', mappedData)