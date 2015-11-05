
# the order of these is important and should match the order of
# the <script> tags in test/bingo.html
SOURCES = example/js/seedrandom-min.js goal-list.js generator.js cli.js

SHEBANG = "\#!/usr/bin/env node"
EXECUTABLE = generator

.PHONY: all clean new test

all: $(EXECUTABLE)

# let us run the generator from the command line by slamming together
# all of the js files and adding a node shebang at the top
$(EXECUTABLE): $(SOURCES)
	echo $(SHEBANG) | cat - $(SOURCES) > $(EXECUTABLE)
	chmod +x $(EXECUTABLE)

clean:
	rm -f $(EXECUTABLE)

new: clean all

test: all
	./tester.sh

