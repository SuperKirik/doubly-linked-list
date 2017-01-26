const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._tail = null;
        this._head = null;
    }

    append(data) {
        var newNode = new Node(data);
        switch (this.length) {
            case 0:
                this._head = newNode;
                this._tail = this._head;
                break;
            case 1:
                this._head.next = newNode;
                newNode.prev = this._head;
                this._tail = newNode;
                break;
            default: {
                this._tail.next = newNode;
                newNode.prev = this._tail;
                this._tail = newNode;
                break;
            }
        }
        this.length++;
        return this;
    }

    head() {
        if (this._head !== null)
            return this._head.data;
        else
            return null;
    }
    
    tail() {
        if (this._tail !== null)
            return this._tail.data;
        else return null;
    }

    at(index) {

        var temp = this._head;
        var count = 0;

        if (0 <= index && index < this.length && this.length !== 0) {
            while (count !== index) {
                temp = temp.next;
                count++;
            }
            return temp.data;
        }
    }


    insertAt(index, data) {

        var temp = this._head;
        var count = 0;
        var newNode = new Node(data);

        if (0 <= index && index <= this.length && this.length !== 0) {

            if (index === this.length) {
                this.append(data);
                return this;
            }
            else {
                while (count !== index) {
                    temp = temp.next;
                    count++;
                }
                if (temp.prev === null)
                    this._head = newNode;
                else
                    temp.prev.next = newNode;
                newNode.prev = temp.prev;
                temp.prev = newNode;
                newNode.next = temp;


            }
            this.length++;
        }
        return this;
    }

    isEmpty() {
        if (this.length === 0)
            return true;
        else
            return false;
    }

    clear() {
        this.length = 0;
        this._tail = null;
        this._head = null;
        return this;
    }

    deleteAt(index) {

        var prevToDel;
        var nextToDel;
        var deletedNode = this._head;
        var count = 0;
        if (0 <= index && index < this.length && this.length !== 0) {

            if (this.length === 0) return this;
            else {
                while (count !== index) {
                    deletedNode = deletedNode.next;
                    count++;
                }
                nextToDel = deletedNode.next;
                prevToDel = deletedNode.prev;

                if (nextToDel === null) {
                    this._tail = prevToDel;
                } else {
                    nextToDel.prev = prevToDel;
                }

                if (prevToDel === null) {
                    this._head = nextToDel;
                } else {
                    prevToDel.next = nextToDel;
                }
            }
            this.length--;
        }
        return this;
    }

    reverse() {
        if (this.length > 1) {
            var medium = Math.floor(this.length * 0.5);
            var left = this._head;
            var right = this._tail;
            var tmp;

            for (var i = 0; i < medium; i++) {
                tmp = left.data;
                left.data = right.data;
                right.data = tmp;

                left = left.next;
                right = right.prev;
            }
        }
        return this;
    }

    
    indexOf(data) {

        var temp = this._head;
        var count = 0;

        while (temp != null) {
            if (temp.data === data) return count;
            temp = temp.next;
            count++;
        }
        return -1;
    }

}

module.exports = LinkedList;
