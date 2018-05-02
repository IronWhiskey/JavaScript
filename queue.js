

class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }

}


class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(val){
        var node = new Node(val);
        if(this.head == null){
            this.head = node;
            this.tail = node;
            this.size += 1;
            return
        }
        var runner = this.head;
        while(runner.next){
            runner = runner.next;
        }
        runner.next = node;
        this.tail = runner.next;
        this.size += 1;
    }

    dequeue(){
        if(this.head){
            this.size -= 1;
            return this.head;
        }
        var value = this.head.value;
        this.head = this.head.next;
        this.size -= 1;        
        return value;
    }

    display(){
        var runner = this.head;
        while(runner){
            console.log(runner.value);
            runner = runner.next;
        }
    }

    get_size(){
        return this.size;
    }
    
    // END OF CLASS DEFINITION
}

var q = new Queue();

for(var i=0; i<10; i++){
    q.enqueue(i);
}

q.display();
console.log( q.get_size() );