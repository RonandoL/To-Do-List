describe('toDo', function(){
  it("is going to create an object to store varies items in a list", function(){
    var testToDo = new ToDo("wash dishes");
    expect(testToDo.task).to.equal("wash dishes");
  });
});
