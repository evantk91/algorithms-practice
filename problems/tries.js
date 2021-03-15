class TrieNode {
   constructor() {
      this.isWord = false;
      this.children = {};    
   }    
}

class Trie {
   constructor() {
      this.root = new TrieNode();
   }

   add(word) {
      let currentNode = this.root;

      //adds each character of the word to trie structure
      for(let i = 0; i < word.length; i++) {
         let char = word[i];
         //if character already exists at current level, 
         //update current node and move a level deeper
         if(!currentNode.children[char]) {
            currentNode.children[char] = new TrieNode();    
         }
         currentNode = currentNode.children[char];
      }
      //mark word as true at appropriate depth
      currentNode.isWord = true;
   }

   exists(word) {
      let currentNode = this.root;

      //for each character in the word
      for(let i = 0; i < word.length; i++) {
         let char = word[i];
         //if current character is not found at the current level,
         //return false
         if(!currentNode.children[char]) {
            return false;
         }
         //move a level deeper if character is found
         currentNode = currentNode.children[char]    
      }

      //return if word is stored
      return currentNode.isWord;    
   }
}

let wordlist = ['apple', 'bear', 'good', 'goodbye'];
let wordTrie = new Trie();

for(let i = 0; i < wordlist.length; i++) {
   let word = wordlist[i]; 
   wordTrie.add(word);
}

console.log(wordTrie.exists('goods'));