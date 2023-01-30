const stackCreate = () => ({
    arr: []
  });

function stackEmpty(stack) {
    return (!stack.arr[0]);
}

function stackPush(stack, data) {
    let i = 0;
    for (i; stack.arr[i]; i++)
        ;
    stack.arr[i] = data;
}

function stackPeek(stack) {
    if (!stackEmpty(stack)) {
        let i = 0;
        for (i; stack.arr[i]; i++)
            ;
        return (stack.arr[i-1]);
    }
}

function stackPop(stack) {
    if (!stackEmpty(stack)) {
        let i = 0;
        for (i; stack.arr[i]; i++)
            ;
        stack.arr[i-1] = null;
    }
}


const stack = stackCreate();
stackPop(stack);
console.log(stack);
stackPush(stack, 1);
stackPush(stack, 4);
stackPush(stack, 3);
stackPush(stack, 5);
console.log(stackPeek(stack))
stackPop(stack);
console.log(stackEmpty(stack))
console.log(stack);