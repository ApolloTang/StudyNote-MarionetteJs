j1 = new TreeNode({nodeName:'j1'});
t1 = new TreeNode({nodeName:'t1'});
c1 = new TreeNodeCollection([j1])
t1.nodes = c1

t1 ~~ tree.models

tree.add(t1)
tree.models[0].nodes.add(t1)

tree.models[0].nodes.set(t1)


-------------------------------




-------------------------------

t1 = new TreeNode({nodeName:'t1'});
t2 = new TreeNode({nodeName:'t2'});
tree.add(t1);
tree.add(t2);
--
j1 = new TreeNode({nodeName:'j1'});
j2 = new TreeNode({nodeName:'j2'});
c1 = new TreeNodeCollection([j1,j2]);
t2.nodes = c1;
treeView.render();
--
delete t2.nodes;
--
t1.nodes = c1;
treeView.render();




--------------------------------

t1 = new TreeNode({nodeName:'t1'});
t2 = new TreeNode({nodeName:'t2'});
tree.add(t1);
tree.add(t2);

t1.nodes = new TreeNodeCollection();
treeView.render();

j1 = new TreeNode({nodeName:'j1'});
t1.nodes.add(j1)


-----------------------------

*THIS ONE*
no need to call render() if nodes is 
graft to instance of TreeNode class
before calling tree.add()



debugger;
t1 = new TreeNode({nodeName:'t1'});
t1.nodes = new TreeNodeCollection();
t2 = new TreeNode({nodeName:'t2'});
t2.nodes = new TreeNodeCollection();

debugger;
tree.add(t1);
tree.add(t2);

debugger;
j1 = new TreeNode({nodeName:'j1'});
t1.nodes.add(j1);

debugger;
j2 = new TreeNode({nodeName:'j2'});
t1.nodes.add(j2);
debugger;
t1.nodes.reset();
debugger;
t2.nodes.reset([j1, j2]);




-----------------------------


debugger;
t1 = new TreeNode({nodeName:'t1'});
t1.nodes = new TreeNodeCollection();
t2 = new TreeNode({nodeName:'t2'});
t2.nodes = new TreeNodeCollection();
debugger;
tree.reset([t1,t2]);
debugger;
j1 = new TreeNode({nodeName:'j1'});
j2 = new TreeNode({nodeName:'j2'});
t1.nodes.reset([j1, j2]);
t2.nodes.reset([j1, j2]);


