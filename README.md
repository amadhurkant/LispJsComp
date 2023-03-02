# LispJsComp
A lisp to js compiler with basic mathematical operation <br> It doesn't require any dependency of nodeJs <br> [Tutorial](https://citw.dev/tutorial/create-your-own-compiler)
# Usage
1. Install node.js
2. Go into directory of repo
3. In terminal type <code>node main.js</code>
## Giving functions
Since this compiler uses no dependency we can't take user input. So in order to use it you have to edit <code>const input = '(div 6 (add 3 3))';</code> this line in <code>main.js</code>
# Functions and others
1. Available functions: <code>add</code>,<code>sub</code>,<code>mult</code>,<code>div</code>
2. This light compiler also prints out tree structure of processes involved in compiling and hence gives you an in depth understanding of process.
