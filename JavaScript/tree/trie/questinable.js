class Node {
    constructor(char) {
        this.char = char;
        this.children = new Map();
        this.isWordEnd = false;
        this.wordCount = 0;
    }
}

class Trie {
    constructor() {
        this.root = new Node(null);
    }

    insert(word) {
        let curr = this.root;
        for (const char of word) {
            let child = curr.children.get(char);
            if (!child) {
                child = new Node(char);
                
                curr.children.set(char, child);
                console.log(curr.children);
            }
            curr = child;
        }
        curr.isWordEnd = true;
        curr.wordCount += 1;
    }

    contain(word) {
        let curr = this.root;
        for (const char of word) {
            let child = curr.children.get(char);
            if (!child) {
                return false;
            }
            curr = child;
        }
        return curr.isWordEnd;
    }

    startsWith(prefix) {
        let curr = this.root;
        for (const char of prefix) {
            let child = curr.children.get(char);
            if (!child) {
                return false;
            }
            curr = child;
        }
        return true;
    }
}

const trie = new Trie();
trie.insert("word");
trie.insert("words");
console.log(trie.contain("word"));   // returns true
console.log(trie.contain("anotherword"));  // returns false
console.log(trie.startsWith("wor"));  // returns true
console.log(trie.startsWith("prefix"));  // returns false
