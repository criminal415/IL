class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// let node = new Node(3);
// let first_node = new Node(4);
// node.next = first_node;

// console.log(node);
// console.log(first_node);

class LinkedList {
  constructor(data) {
    this.head = new Node(data);
  }
  append(data) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    let cur = this.head;

    while (cur.next) {
      cur = cur.next;
    }
    cur.next = new Node(data);
  }
  print_all() {
    console.log('hihihi');
    let cur = this.head;
    while (cur) {
      console.log(cur.data);
      cur = cur.next;
    }
  }
}

let linked_list = new LinkedList(3);
linked_list.append(4);
linked_list.append(5);
linked_list.print_all();
