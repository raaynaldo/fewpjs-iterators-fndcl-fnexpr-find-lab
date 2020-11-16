const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(records){
  const win = records.find( function(record){
    return record["result"] == "W"
  });

  return win && win["year"]
}