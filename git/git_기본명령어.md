git config --list : git 모든 설정확인 가능! <br>
git config user.name, git config user.email : userId, email 확인 <br>
git config --global core.autocrlf ture : 운영체제 마다 editer에서 새로운 줄바꿈을 할 때, 들어가는 문자열이 달라진다. (window는 carriage-return과 line feed가 동시에 Mac에서는 line feed만) 따라서 window는 ture, Mac은 input 옵션을 주어야한다. *추가* 앞서 말한 옵션을 주면 window에서는 git에서 받아올 때는 (\r : carriage-return), (\n : line feed)를 모두 붙여서 받아오며 git에 push 할때 \r만 제외하고 올라간다. Mac 에서는 git에서 받아올때 별다른 수정이 일어나지 않지만 git에 올릴 때 \r을 제거하고 올려준다. <br>
![core autocrlf_옵션](https://user-images.githubusercontent.com/90595291/143268993-63ed5f6e-5a7d-49ea-9442-b6329ed215b8.PNG) <br>

git init : git 초기화 설정! <br>
git status : git 현재 상태를 보여준다. (git status -s : 간단하게 확인할 떄!!) <br>
git config --global alias.st status : git status 를 git st만 써도 가능하도록 설정! <br>
git config --h : 간단하게 터미널에서 명령어에서 사용 가능한 속성값들 확인가능! <br>

git add <파일명> : workig directory에서 staging area(commit할 준비가 된 파일로!!) <br>
git rm --cached <파일명> : staging area 에서 다시 untracked된 상태로 되돌아온다. <br>

echo <파일명> > .gitignore : tracking 하고 싶지 않은 파일들 gitignore에 넣을 때!! <br>

git diff : working directory 에 변경된 내용 표시 <br>
git diff --staged : staging area 의 내용 표시! <br>
git config --global -e : git merge tool 설정<br>
```
[merge]
            tool = vscode
[mergetool "vscode"]
            cmd = code --wait $MERGED
[diff]
            tool = vscode
[difftool "vscode"]
            cmd = code --wait --diff $LOCAL $REMOTE
```
다음과 같은 명령어로 vscode에서 변경사항 확인 가능 <br>
git difftool <br>
git difftool --staged : staging area 확인 가능! <br>

git commit -m "커밋내용" : commit 메세지와 함께 변경된 사항만 git repository에 옮겨준다. <br>
git log : 누가 언제 커밋했는지 볼 때! <br>

git push origin master : github에 커밋내용 올릴때 ! <br>
git pull origin master : github의 변경된사항을 local로 가져올 때! <br>

git commit --amend : 가장 마지막에 commit한 내용을 수정할 수 있다. <br>
