var user = { // created null object
  name : 'John', // added name attribute with 'John' as value
  surname : 'Mike' // added surname attribute with 'Mike' as value
};
console.log(user.name);
user.name = 'Peter';
console.log(user.name);
delete user.name;
console.log(user.name);