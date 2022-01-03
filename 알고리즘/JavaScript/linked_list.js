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
  delete_node(index) {
    if (index == 0) {
      this.head = this.head.next;
      return;
    }
    let node = this.get_node(index - 1);
    node.next = node.next.next;
  }
}

function get_linked_list_sum(linked_list1, linked_list2) {
  sum1 = linked_list_sum(linked_list1);
  sum2 = linked_list_sum(linked_list2);

  return sum1 + sum2;
}

function linked_list_sum(linked_list) {
  let list_sum = 0;
  head = linked_list.head;
  while (head) {
    list_sum = list_sum * 10 + head.data;
    head = head.next;
  }
  return list_sum;
}

let linked_list = new LinkedList(3);
linked_list.append(4);
linked_list.append(5);
linked_list.print_all();
linked_list.add_node(1, 7);
linked_list.print_all();
linked_list.delete_node(2);
linked_list.print_all();
console.log(linked_list.get_node(0));

let linked_list1 = new LinkedList(6);
linked_list1.append(7);
linked_list1.append(8);

let linked_list2 = new LinkedList(3);
linked_list2.append(5);
linked_list2.append(4);

console.log(get_linked_list_sum(linked_list1, linked_list2));
