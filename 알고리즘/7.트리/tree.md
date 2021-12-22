## TREE
- 계층적인 자료를 표현하는데 이용되는 자료 구조
- 트리는 부모-자식(parent, child) 관계의 노드들로 이루어진다.

- 응용분야:
    + 계층적인 조직 표현
    + 파일 시스템 
    + 인공지능에서의 결정 트리
## 트리의 용어
<img src=https://user-images.githubusercontent.com/90595291/147114440-881b35d0-d8fe-4251-993a-2c95cd2239e8.png width="50%" hight="50%"> <br>

- 노드(node): 트리의 구성요소 
- 루트(root): 계층적인 구조에서 가장 높은 곳에 있는 노드(위 그림에서는 A)
- 서브 트리(subtree): A를 제외한 나머지 노드들은 {B,E,F,G},{C,H},{D,I,J}로 3개의 집합으로 나누어지고 서브 트리라고 한다. 

>다시 서브 트리인 {B,E,F,G}의 루트는 B가 되고 나머지 노드들은 3개의 서브 트리로 나누어 진다.

- 간선(edge): 트리에서 루트와 서브 트리를 연결하는 연결선

+ 위 그림에서 A는 B의 부모 노드(parent node), B는 A의 자식노드(children node), B와 C,D는 형제 관계(sibling), 조상 노드(ancestor node)는 루트 노드에서 임의의 노드까지의 경로를 이루고 있는 노드들을 말한다. 자손 노드(descendent node)는 임의의 노드 하위에 연결된 모든 노드들을 의미한다. 또한 자식 노드가 없는 노드를 단말 노드(terminal node, leaf node)라고 하고 그 반대가 비단말 노드(nonterminal node)이다.