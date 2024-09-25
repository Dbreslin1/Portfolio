#!/bin/bash

if [ $# -ne 1 ]; then
	echo "nok: missing parameter"
	exit 1
fi

user="$1"

if [! -d "$user" ]; then
	echo "nok: user does not exist"
else
	cat "$user<wall.txt"
fi
