function greetings(arr,obj){
  let fullName = arr.join(' ');
  let message = `Hello, ${fullName}! Nice to have a ${obj.title} ${obj.occupation} around.`;

  return message;
}


console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.