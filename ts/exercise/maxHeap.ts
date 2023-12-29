// 大顶堆和小顶堆主要用优先对立使用，可以快速的访问到‘最重要’的元素
// 生成大顶堆
// 1. 从第一个叶子节点开始
// 2. 找到第一个叶子节点的父节点跟左子节点比较，如果小于左节点值就交换，然后比较右节点，如果交换了子节点重复2过程
// 3. 2执行完成后，通过2中的父节点，找父节点进行2操作
// 4. 一直执行到顶点
const generateMaxHeap = (heap: number[]): number[] => {
    if (heap.length < 2) return heap;
    heap.unshift(Infinity);
    // 查看节点和子节点是否需要交换
    const sortNode = (parentIndex: number) => {
        if (heap[parentIndex] < heap[parentIndex * 2 || 1]) {
            [heap[parentIndex], heap[parentIndex * 2 || 1]] = [heap[parentIndex * 2 || 1], heap[parentIndex]];
            sortNode(parentIndex * 2);
        }
        if (heap[parentIndex] < heap[(parentIndex * 2 || 1) + 1]) {
            [heap[parentIndex], heap[(parentIndex * 2 || 1) + 1]] = [heap[(parentIndex * 2 || 1) + 1], heap[parentIndex]];
            sortNode(parentIndex * 2 + 1);
        }
        if (parentIndex > 1) {
            sortNode(parentIndex >>> 1);
        }
    }
    let nodeIndex = heap.length - 1;
    while (nodeIndex !== 0 && nodeIndex * 2 > heap.length) {
        sortNode(nodeIndex >>> 1);
        nodeIndex -= 2;
    }
    heap.shift();
    console.log(heap);
    return heap;
}

generateMaxHeap([3, 7, 16, 10, 21, 23]);



