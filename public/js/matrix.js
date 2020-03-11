function mapdata() {

  let n=3;
  let nodes = [];
  let edges = [];

  // Write your logic here...
  for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
      let data={};
      let id={};
      id["id"]="N"+i+"-"+j;
      data["data"]=id;
      nodes.push(data);
    }
  }

  for(let i=0;i<nodes.length;i++){
    let temp=nodes[i].data.id;
    checkAdjecentNode(temp);
  }
//----------------------------------------------------It will create Edges if exists-----------------------------------------------
  function checkAdjecentNode(currNode){
    let check = currNode.split('-');
    let row = check[0][1];
    let col = check[1];

    if(nodeHas(+row+1,+col)){
        let data={};
        let reddata={};
        reddata["id"]=row+"-"+col+"S";
        reddata["source"]="N"+row+"-"+col;
        reddata["target"]="N"+(+row+1)+"-"+col;
        data["data"]=reddata;
        edges.push(data);
    }
    if(nodeHas(+row-1,+col)){
      let data={};
        let reddata={};
        reddata["id"]=row+"-"+col+"N";
        reddata["source"]="N"+row+"-"+col;
        reddata["target"]="N"+(+row-1)+"-"+col;
        data["data"]=reddata;
        edges.push(data);
    }
    if(nodeHas(+row,+col+1)){
      let data={};
        let reddata={};
        reddata["id"]=row+"-"+col+"E";
        reddata["source"]="N"+row+"-"+col;
        reddata["target"]="N"+row+"-"+(+col+1);
        data["data"]=reddata;
        edges.push(data);
    }
    if(nodeHas(+row,+col-1)){
      let data={};
        let reddata={};
        reddata["id"]=row+"-"+col+"W";
        reddata["source"]="N"+row+"-"+col;
        reddata["target"]="N"+row+"-"+(+col-1);
        data["data"]=reddata;
        edges.push(data);
    }
    if(nodeHas(+row+1,+col-1)){
      let data={};
        let reddata={};
        reddata["id"]=row+"-"+col+"A";
        reddata["source"]="N"+row+"-"+col;
        reddata["target"]="N"+(+row+1)+"-"+(+col-1);
        data["data"]=reddata;
        edges.push(data);
    }
    if(nodeHas(+row-1,+col+1)){
      let data={};
        let reddata={};
        reddata["id"]=row+"-"+col+"B";
        reddata["source"]="N"+row+"-"+col;
        reddata["target"]="N"+(+row-1)+"-"+(+col+1);
        data["data"]=reddata;
        edges.push(data);
    }
    if(nodeHas(+row+1,+col+1)){
      let data={};
        let reddata={};
        reddata["id"]=row+"-"+col+"C";
        reddata["source"]="N"+row+"-"+col;
        reddata["target"]="N"+(+row+1)+"-"+(+col+1);
        data["data"]=reddata;
        edges.push(data);
    }
    if(nodeHas(+row-1,+col-1)){
      let data={};
        let reddata={};
        reddata["id"]=row+"-"+col+"D";
        reddata["source"]="N"+row+"-"+col;
        reddata["target"]="N"+(+row-1)+"-"+(+col-1);
        data["data"]=reddata;
        edges.push(data);
    }
  }

//----------------------------------------------------It will check that node exists or not-----------------
function nodeHas(row,col){
  let str = "N"+row+"-"+col;
  for(let i=0;i<nodes.length;i++){
    if(str == nodes[i].data.id)
    {
      return true;
    }
    else{
      continue;
    }
  }
  return false;
}

  elements = {
    nodes,
    edges
  };

  return elements;

}
module.exports.mapdata = mapdata;


