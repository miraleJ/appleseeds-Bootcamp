class Node {
    constructor (_element) {
        this.element = _element;
        this.next = null;
        this.flag = false;
    }

    toString() {
        return `${this.element}`;
    }

    set setFlag(tOrF) {
        this.flag = tOrF;
    }

    get getFlag() {
        return this.flag;
    }

    // dangerous
    set setNext(someNode) {
        this.next = someNode;
    }
}

class LinkedList {
    constructor () {
        this.head = null;
        this.size = 0;
    }

    addLast (newElement) {
        // create new element
        let newNode = new Node(newElement);
        let current = this.head;
        if (!current) {
            this.head = newNode;
        } else {
            // add to the tail of the list
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }

        // resize
        this.size++;
    }

    get getFirst() {
        return this.head;
    }

    get getLast() {
        let current = this.head;
        if (current) {
            while (current.next) {
                current = current.next;
            }
        }
        return current;
    }

    toString() {
        let current = this.head;
        let s = "";
        if (current) {
            while (current.next) {
                s += current.toString() + " -> ";
                current = current.next;
            }
            s += current.toString(); " -|||";
        }
        return s +  " -|||";
    }

    draw() {
        console.log(this.toString());
    }

    reverse() {
        let current = this.head;
        let previous = null;

        if (current) {
            while (current.next) {
                let temp = current.next;
                current.next = previous;
                previous = current;
                current = temp;
            }
            this.head = current;
            current.next = previous;
        }
    }

    removeKNode(k) {
        let current = this.head;
        if (current) {
            if (k != 0) {
                // go to the element before i
                let i;
                for (i = 0; i < k - 1 && current.next; i++) {
                    current = current.next;
                }
                // check if the k was inside the list
                if (i === k - 1 && current.next != null) {
                    current.next = current.next.next;
                }
                else {
                    console.log (`${k} is out of the list`)
                }
            } else { // k === 0
                this.head = this.head.next;
            }
        } else {
            console.log (`${k} is out of the list`)
        }
    }

    static circularLinkedList(l) {
        let current = l.head;
        let listFlag = false;

        if (current) {
            while (current.next && !listFlag) {
                // TODO suppose to be getFlag
                if (current.flag) {
                    listFlag = true;
                }
                // turn on the node flag
                // TODO suppose to be setFlag
                current.flag = true;
                current = current.next;
            }
        }

        return listFlag;
    }
    
    //dangerous
    setKNodeNext (k, someNode) {
        let current = this.head;
        if (current) {
            if (k != 0) {
                // go to the element before i
                let i;
                for (i = 0; i < k - 1 && current.next; i++) {
                    current = current.next;
                }
                // check if the k was inside the list
                if (i === k - 1 && current.next != null) {
                    current.next = someNode;
                }
                else {
                    console.log (`${k} is out of the list`)
                }
            } else { // k === 0
                this.head = someNode;
            }
        } else {
            console.log (`${k} is out of the list`)
        }
    }

    // dangerous
    getKNode(k) {
        let current = this.head;
        if (current) {
            if (k != 0) {
                // go to the element before i
                let i;
                for (i = 0; i < k - 1 && current.next; i++) {
                    current = current.next;
                }
                // check if the k was inside the list
                if (i === k - 1 && current.next != null) {
                    return current;
                }
                else {
                    console.log (`${k} is out of the list`);
                    return null;
                }
            } else { // k === 0
                return this.head;
            }
        } else {
            console.log (`${k} is out of the list`);
            return null;
        }
    }
}

let l = new LinkedList();
l.draw();
l.addLast(1);
l.draw();
l.addLast(2);
l.draw();
l.addLast(3);
l.draw();
l.addLast(4);
l.draw();
l.addLast(5);
l.draw();
console.log(LinkedList.circularLinkedList(l) + " before changing");

// make a circular list
l.setKNodeNext(4, l.getKNode(2));
console.log(LinkedList.circularLinkedList(l) + " after changing");

// l.draw();

// l.reverse();
// l.draw();
// l.removeKNode(1);
// l.draw();
// l.removeKNode(3);
// l.draw();
// l.removeKNode(3);
// l.draw();
// l.removeKNode(0);
// l.draw();