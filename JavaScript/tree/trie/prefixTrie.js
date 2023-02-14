class Node {
    constructor() {
        this.children = new Map()
        this.isEnd = false;
    }
}
class prefixTrie{
    constructor(){
        this.root= new Node()
    }
    insert(word){
        let curr=this.root;
        for(let char of word){
            let child=curr.children.get(char)
            if(!child){
                child=new Node()
                curr.children.set(char,child)
            }
            curr=child
        }
        curr.isEnd=true
    }
    contain(word){
        let curr=this.root
        for(const char of word){
            let child=curr.children.get(char)
            if(!child) return false
            
            curr= child
        }
        return curr.isEnd;
    }
    startsWith(prefix){
        let curr=this.root
        for(let char of prefix){
            let child=curr.children.get(char)
            if(!child){
               return false
            }
            curr=child
        }
        return true

    }
}
const trie = new prefixTrie();
trie.insert("word");
trie.insert("words");
console.log(trie.contain("word"));   // returns true
console.log(trie.contain("anotherword"));  // returns false
console.log(trie.startsWith("wor"));  // returns true
console.log(trie.startsWith("prefix")); 