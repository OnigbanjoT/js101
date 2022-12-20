[1, 2, 3].filter(num => 'hi');

// [1, 2, 3] b/c filter performs selection based on the truthiness of the callback's return value. In this case, the return value is always 'hi', which is truthy. Therefore filter will return a new array containing all of the elements in the original array.