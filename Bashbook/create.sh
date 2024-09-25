#!/bin/bash
id="$1"
if [ -z "$id"  ]; then
	echo "nok: no identifer provided"
	exit 1
fi

if [ -d "$id" ]; then
	echo "nok; user already exists"
else
	mkdir "$id"
	touch "$id/wall.txt"
	touch "$id/friends.txt"
	echo "ok: user created!"
fi

