## BinaryTree 二叉树

<notes-js-binary-tree />

### 创建一棵排序二叉树
``` js
function BinaryTree() {
    // 节点对象
    let Node = function(key) {
        this.key = key
        this.right = null
        this.left = null
    }

    // 初始化根节点
    let root = null

    let insertnode = (node, newnode) => {
    // 判断插到左子树中还是右子树中
        if (newnode.key < node.key) {
            if (node.left === null) {
                node.left = newnode
            } else {
                insertnode(node.left, newnode)
            }
        } else {
            if (node.right === null) {
                node.right = newnode
            } else {
                insertnode(node.right, newnode)
            }
        }
    }
    this.insert = key => {
        let newNode = new Node(key)
        // 判断插入的是否是根节点
        if (root === null) {
            root = newNode
        } else {
            insertnode(root, newNode)
        }
    }

    //中序遍历
    let inOrderTraverseNode = (node, callback) => {
        if (node !== null) {
            inOrderTraverseNode(node.left, callback)
            callback(node.key)
            inOrderTraverseNode(node.right, callback)
        }
    }

    this.inOrderTraverse = callback => {
        inOrderTraverseNode(root, callback)
    }

    // 前序遍历
    let preOrderTraverseNode = (node, callback) => {
        if (node !== null) {
            callback(node.key)
            inOrderTraverseNode(node.left, callback)
            inOrderTraverseNode(node.right, callback)
        }
    }

    this.preOrderTraverse = callback => {
        preOrderTraverseNode(root, callback)
    }

    // 后序遍历
    let postOrderTraverseNode = (node, callback) => {
        if (node !== null) {
            callback(node.key)
            inOrderTraverseNode(node.left, callback)
            inOrderTraverseNode(node.right, callback)
        }
    }

    this.postOrderTraverse = callback => {
        postOrderTraverseNode(root, callback)
    }
}
```

### 测试
```js {9}
let nodes = [8, 2, 4, 5, 7, 13, 11, 9, 14]
let BinaryTree = new BinaryTree()
nodes.forEach(key => BinaryTree.insert(key))

let callback = key => {
    console.log(key)
}
BinaryTree.inOrderTraverse(callback)
// 最终输出 2 4 5 7 8 9 11 13 14
```