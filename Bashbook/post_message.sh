#!/bin/bash

if [ $# -ne 3 ]; then
	echo "nok: missing parameters"
	ecit 1
fi

user="$1"
friend="$2"
message="$3"

if [! -d "$user" ] then
	echo "nok:user does not exist"
elif ! grep -q "$friend" "$user/friends.txt"; then 
	echo "nok: $friend is not a friend"
else 
	echo "$friend: $message" >> "$user/wall.txt"
	echo "ok: message posted!"
fi
