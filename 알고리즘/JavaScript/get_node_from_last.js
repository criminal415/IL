class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

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
    let cur = this.head;
    while (cur) {
      console.log(cur.data);
      cur = cur.next;
    }
  }
  get_node_from_last(index) {
    let length = 1;
    let cur = this.head;
    while (cur.next) {
      cur = cur.next;
      length += 1;
    }
    cur = this.head;
    for (let i = 0; i < length - index; i++) {
      cur = cur.next;
    }
    return cur.data;
  }
}

let linked_list = new LinkedList(6);
linked_list.append(7);
linked_list.append(8);

console.log(linked_list.get_node_from_last(3));
