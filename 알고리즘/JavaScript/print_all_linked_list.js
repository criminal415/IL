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
  get_node(index) {
    let node = this.head;
    let count = 0;
    while (count < index) {
      node = node.next;
      count += 1;
    }
    return node;
  }

  add_node(index, value) {
    let new_node = new Node(value);
    if (index == 0) {
      new_node.next = this.head;
      this.head = new_node;
      return;
    }
    let node = this.get_node(index - 1);
    let next_node = node.next;
    node.next = new_node;
    new_node.next = next_node;
  }
}

let linked_list = new LinkedList(3);
linked_list.append(4);
linked_list.append(5);
linked_list.print_all();
linked_list.add_node(1, 7);
linked_list.print_all();
console.log(linked_list.get_node(0));
