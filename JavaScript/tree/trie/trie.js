class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}
class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    insert(word) {
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            let char = word.charAt(i);
            console.log(char);
            let node = current.children.get(char);
            if (!node) {
                node = new TrieNode();
                current.children.set(char, node);
            }
            current = node;
        }

        // mark the end of word
        current.isEnd = true;
    }

    search(word) {
        let current = this.root;

        for (let i = 0; i < word.length; i++) {
            let char = word.charAt(i);
            let node = current.children.get(char);
            if (!node) {
                return false;
            }
            current = node;
        }

        return current.isEnd;
    }

    startsWith(prefix) {
        let current = this.root;

        for (let i = 0; i < prefix.length; i++) {
            let char = prefix.charAt(i);
            let node = current.children.get(char);
            if (!node) {
                return false;
            }
            current = node;
        }

        return true;
    }
}


let trie = new Trie();

trie.insert("hello");
trie.insert("hell");
trie.insert("hey");
trie.insert("dog");
trie.insert("dogs");

console.log(trie.search("hello")); // outputs: true
console.log(trie.search("hey")); // outputs: true
console.log(trie.search("dog")); // outputs: true
console.log(trie.search("dogs")); // outputs: true
console.log(trie.startsWith("dog")); // outputs: true
