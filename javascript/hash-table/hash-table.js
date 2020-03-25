class HashTable {
    constructor(size){
      this.data = new Array(size)
    }
  
    hash(key){
      let hash = 0
      for(let i = 0; i < key.length; i++){
        hash = (hash + key[i].charCodeAt() * i) % this.data.length
      }
      return hash
    }
  
    set(item){
      const { key, value } = item
      const hashKey = this.hash(key)
      if(this.data[hashKey] === undefined) {
        this.data[hashKey] = []
      }
      this.data[hashKey].push(item)
    }
  
    get(key) {
      const hashKey = this.hash(key)
      if(this.data[hashKey] === undefined) {
        return 'key not found'
      }
      const bucket = this.data[hashKey]
      for(let item in bucket) {
        const { key: itemKey, value } = bucket[item]
        if(itemKey === key){
          return value
        }
      }
    }
  }
  
  const ht = new HashTable(50)
  ht.set({ key: 'grapes', value: 'south' })
  ht.set({ key: 'trapes', value: 'maze' })
  ht.set({ key: 'asdff', value: 'something' })
  ht.get('asdff')