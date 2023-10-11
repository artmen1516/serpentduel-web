Pyjsdl - Python-to-JavaScript Multimedia Framework

Pyjsdl module is modelled on Pygame/SDL commands that wraps JavaScript functionality including HTML5 canvas. The module permits scripts coded in Python/Pygame to compile to JavaScript using the Pyjs compiler (http://pyjs.org), allowing deployment of JavaScript applications without extensive editing of the script. The current version of the module supports a subset of Pygame functionality.

To use Pyjsdl module, place pyjsdl folder in the script folder or on the module path. Import pyjsdl into the Python script, or use the statement 'import pyjsdl as pygame' to maintain the Pygame commands. During pyjsdl initiation, use the statement pyjsdl.display.setup(run, images) to provide the canvas the main function to execute at a timed interval and program images to preload, where the 'run' function contains statements to be repeated each frame and 'images' is a list of image paths in the form ['./images/img.png']. To compile, install Pyjs and check pyjs_changes.zip in module folder for required changes. Some additional changes to the Python script may be necessary for Pyjs compilation. A web application can be deployed following compilation to JavaScript. See guide.txt for further information to run Serpent Duel demo.

Pyjsdl is released under the MIT License.

Pyjsdl page: https://gatc.ca/projects/pyjsdl/
Pyjsdl docs: https://gatc.ca/projects/pyjsdl/doc/

