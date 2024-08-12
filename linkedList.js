// Linked List
// 10->5->60

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 60,
//         next: null,
//       },
//     },
//   },
// };

class LinkedList{
    constructor(value){
     this.head = {
        value: value,
        next: null,
     }
     this.tail = this.head,
     this.length = 1;
    }
    // Append a new node to the end of the list
    append(value){
    const newNode = {
        value: value,
        next: null
    }
    this.tail.next = newNode;
    this.tail = newNode;
     this.length++;
     return this;
    }

 // Prepend a new node to the beginning of the list
  prepend(value){
    const newNode = {
        value,
        next: this.head
    };
    this.head = newNode;
    this.length++;
    return this;
  }
// Insert a new node at a specific index
insert(index, value) {
    if (index < 0 || index > this.length) {
        throw new Error('Index out of bounds');
    }

    if (index === 0) {
        return this.prepend(value);
    }

    const newNode = {
        value: value,
        next: null
    }
    
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
        current = current.next;
    }
    
    newNode.next = current.next;
    current.next = newNode;
    if (index === this.length) {
        this.tail = newNode;
    }
    this.length++;
    return this;
}

// Look up the value at a specific index
lookup(index) {
    if (index < 0 || index >= this.length) {
        throw new Error('Index out of bounds');
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
        current = current.next;
    }
    
    return current.value;
}

// Delete a node at a specific index
delete(index) {
    if (index < 0 || index >= this.length) {
        throw new Error('Index out of bounds');
    }

    if (index === 0) {
        this.head = this.head.next;
        if (this.length === 1) {
            this.tail = null;
        }
        this.length--;
        return this;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
        current = current.next;
    }
    
    current.next = current.next.next;
    if (index === this.length - 1) {
        this.tail = current;
    }
    this.length--;
    return this;
}

};


const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(60);
myLinkedList.prepend(7);
console.log(myLinkedList);